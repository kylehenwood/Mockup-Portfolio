import { DsTabs } from './ProjectStyleguide.jsx';

// Auto-discover every component in src/components/. Each file may export a
// `meta` object that describes how it should appear on this page. Components
// without a `meta` export are listed as undocumented so the omission is
// visible — run the `document-component` skill to add stubs.
const componentModules = import.meta.glob('../components/*.jsx', { eager: true });

const componentEntries = Object.entries(componentModules)
  .map(([path, mod]) => ({
    file: path.replace('../components/', ''),
    Component: mod.default,
    meta: mod.meta,
  }))
  .sort((a, b) => {
    const an = a.meta?.name ?? a.file;
    const bn = b.meta?.name ?? b.file;
    return an.localeCompare(bn);
  });

const documented = componentEntries.filter((e) => e.meta);
const undocumented = componentEntries.filter((e) => !e.meta);

const groups = documented.reduce((acc, entry) => {
  const cat = entry.meta.category || 'Uncategorized';
  (acc[cat] ||= []).push(entry);
  return acc;
}, {});

const categoryOrder = ['Chrome', 'Layout', 'UI', 'Uncategorized'];

export default function DesignSystem() {
  const orderedCategories = Object.keys(groups).sort(
    (a, b) => categoryOrder.indexOf(a) - categoryOrder.indexOf(b)
  );

  return (
    <>
      <header className="ds-hero">
        <div className="ds-hero__inner">
          <span className="ds-hero__eyebrow">Design system</span>
          <h1 className="ds-hero__title">Components</h1>
          <p className="ds-hero__lede">
            Every reusable piece of UI in the app, with props and live previews.
            Auto-generated from each component’s <code>meta</code> export.
          </p>
          <DsTabs active="components" />
        </div>
      </header>

      <div className="ds">
        <aside className="ds__sidebar" aria-label="Component index">
          <h2 className="ds__sidebar-title">Index</h2>
          {orderedCategories.map((cat) => (
            <div key={cat} className="ds__sidebar-group">
              <div className="ds__sidebar-heading">{cat}</div>
              <ul className="ds__sidebar-list">
                {groups[cat].map((entry) => (
                  <li key={entry.meta.name}>
                    <a href={`#${slugify(entry.meta.name)}`}>{entry.meta.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {undocumented.length > 0 && (
            <div className="ds__sidebar-group">
              <div className="ds__sidebar-heading">Undocumented</div>
              <ul className="ds__sidebar-list">
                {undocumented.map((entry) => (
                  <li key={entry.file}>
                    <span className="ds__undocumented">{entry.file}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>

        <main className="ds__main">
          {orderedCategories.map((cat) => (
            <section key={cat} className="ds__category">
              <h2 className="ds__category-title">{cat}</h2>
              {groups[cat].map((entry) => (
                <ComponentSection key={entry.meta.name} entry={entry} />
              ))}
            </section>
          ))}

          {undocumented.length > 0 && (
            <section className="ds__category">
              <h2 className="ds__category-title">Undocumented</h2>
              <p className="ds__hint">
                These components don't export a <code>meta</code> object yet.
                Run the <code>document-component</code> skill to add stubs.
              </p>
              <ul className="ds__undoc-list">
                {undocumented.map((entry) => (
                  <li key={entry.file}><code>{entry.file}</code></li>
                ))}
              </ul>
            </section>
          )}
        </main>
      </div>
    </>
  );
}

function ComponentSection({ entry }) {
  const { meta, file } = entry;
  const id = slugify(meta.name);

  return (
    <article id={id} className="ds-component">
      <header className="ds-component__header">
        <h3 className="ds-component__name">{meta.name}</h3>
        <code className="ds-component__file">src/components/{file}</code>
      </header>

      {meta.description && (
        <p className="ds-component__description">{meta.description}</p>
      )}

      {meta.props && meta.props.length > 0 && (
        <div className="ds-component__props">
          <h4 className="ds-component__subhead">Props</h4>
          <table className="ds-props">
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {meta.props.map((p) => (
                <tr key={p.name}>
                  <td><code>{p.name}</code></td>
                  <td><code>{p.type}</code></td>
                  <td>{p.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {meta.previews && meta.previews.length > 0 && (
        <div className="ds-component__previews">
          <h4 className="ds-component__subhead">Previews</h4>
          {meta.previews.map((preview, i) => (
            <div key={i} className="ds-preview">
              {preview.label && (
                <div className="ds-preview__label">{preview.label}</div>
              )}
              <div className="ds-preview__frame">{preview.render()}</div>
            </div>
          ))}
        </div>
      )}
    </article>
  );
}

function slugify(name) {
  return name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}
