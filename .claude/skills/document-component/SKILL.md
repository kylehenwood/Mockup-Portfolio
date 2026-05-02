---
name: document-component
description: Use after creating a new file in src/components/ or after changing a component's props. Ensures every component exports a `meta` object so it appears on the /design-system page. The page itself auto-discovers components via `import.meta.glob` — you only need to keep `meta` exports in sync.
---

# document-component

This skill keeps `src/components/*.jsx` files documented for the design system page at `src/pages/DesignSystem.jsx`.

The design system page uses `import.meta.glob('../components/*.jsx', { eager: true })` to auto-discover every component file. Each component module may export a `meta` object that describes how it should appear on the page. **You never have to edit `DesignSystem.jsx` itself** — only the per-component `meta` exports.

## When to run

- A new component file was just added to `src/components/`
- A component's props (the destructured parameters in its function signature) changed
- The user said "document this component", "regenerate the design system", or similar
- The `/design-system` page is showing one or more components in the "Undocumented" section

## What to do

1. **Decide the scope**:
   - If the user named a specific component, work on just that one
   - If a single file was just edited (you can tell from recent context), work on that one
   - Otherwise, list all `src/components/*.jsx` and process every file

2. **For each target file**:

   a. Read the file.

   b. Check whether it already has `export const meta = ...` at the bottom.

   c. **If `meta` is missing**:
      - Add a `meta` export at the bottom of the file in the format below
      - Derive the `props` array from the function's destructured parameters (e.g. `function Foo({ a, b })` → two props `a` and `b`)
      - Use placeholder text for `description` and `type` fields, marked clearly so the human knows to fill them in (e.g. `'TODO: describe the component'`)
      - Pick `category` based on the component's role:
        - `'Chrome'` for site-shell pieces (Header, Footer, MobileNav, Layout)
        - `'UI'` for reusable UI components (cards, banners, buttons, tiles)
        - Omit / `'Uncategorized'` if unsure
      - Add a `previews` array with at least one entry that renders the component with sensible defaults — but **only for `UI` category** components. Chrome components usually conflict with the page chrome when previewed inline; skip `previews` for them.
      - Tell the user a stub was added and which fields need their attention.

   d. **If `meta` is present but stale**:
      - Compare the props in `meta.props` against the actual destructured parameters
      - If a prop was added in code, append a `TODO`-marked entry to `meta.props`
      - If a prop was removed in code, delete the entry from `meta.props`
      - If a prop was renamed, update the name (preserve the existing `description`)
      - **Do not** rewrite descriptions, examples, or previews the human already wrote — they're authored content, not generated

   e. **If `meta` is present and current**: leave it alone.

3. **Verify**: run `npm run build` (or rely on the running dev server) to make sure nothing broke. Common breakage sources:
   - A preview uses JSX that isn't valid in this scope (forgot an import, etc.)
   - A preview renders something that needs Router context — note: the entire app is wrapped in `BrowserRouter` so any `Link`/`NavLink` usage is fine
   - A preview component takes required props you didn't supply

4. **Report**: tell the user
   - Which files you added stubs to (these need fleshing out)
   - Which files you updated (and what changed)
   - Which files were already up to date

## Meta format

```jsx
export const meta = {
  name: 'ComponentName',                // required — display name shown on the page
  category: 'UI',                        // optional — 'Chrome' | 'UI' | 'Layout' | omit
  description: 'One short sentence.',    // required — describe what the component does
  props: [                               // optional but recommended
    {
      name: 'foo',
      type: 'string',                    // type as plain text, e.g. 'string', '() => void', '{ slug, title }'
      description: 'What this prop is for.',
    },
  ],
  previews: [                            // optional — live preview blocks rendered on the page
    {
      label: 'Default',
      render: () => <ComponentName foo="hello" />,
    },
    {
      label: 'Some other state',
      render: () => <ComponentName foo="world" />,
    },
  ],
};
```

## Conventions

- The `meta` export goes at the bottom of the file, after the default-exported component
- Components that take complex object props (e.g. `ProjectCard` takes a `project` object) should describe the shape inline, e.g. `type: '{ slug, title, summary?, cover?, color? }'`
- Previews wrap full-width components in a fixed-width container when needed: `<div style={{ width: 280 }}>...</div>`
- Don't add CSS-only or markup-only utilities to this list. Only document files that export a React component as default.

## Common cases

- **New file `src/components/Button.jsx`** → add `meta` with category `'UI'`, props derived from the signature, one or two previews, and TODOs in description/type fields.
- **`Banner` got a new `align` prop** → append a `{ name: 'align', type: 'TODO', description: 'TODO' }` entry to `meta.props`. Don't touch `meta.previews`.
- **Header was renamed `header` → `siteHeader`** → only relevant if the file path changes. The page picks up the new file automatically; just make sure the `meta.name` matches.

## What this skill does NOT do

- It does not modify `src/pages/DesignSystem.jsx`. That file is auto-discovery and shouldn't need changes.
- It does not document non-component files (data, hooks, utilities).
- It does not run automatically on file save. If you want that, add a `PostToolUse` hook in `.claude/settings.json` that fires this skill when `src/components/*.jsx` is edited (the `update-config` skill can help wire that up).
