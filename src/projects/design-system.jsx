export default function DesignSystem() {
  return (
    <>
      <h2>Overview</h2>
      <p>
        Three product teams had each been growing their own component
        library. Naming had drifted, tokens had drifted, and shared
        primitives like buttons had three different focus rings.
      </p>

      <h2>Approach</h2>
      <p>
        Rather than design everything from scratch, we cataloged what each
        team had built and picked the strongest version of each component
        as the canonical one. Tokens came next — a small, opinionated set
        that mapped cleanly to existing CSS variables.
      </p>

      <h2>What stuck</h2>
      <ul>
        <li>A token pipeline that generated CSS, JS, and Figma styles from one source.</li>
        <li>Component docs that lived alongside the source, not in a separate site.</li>
        <li>A small contribution model that made it easy to propose new components.</li>
      </ul>

      <h2>Lessons</h2>
      <p>
        Adoption is the only metric that matters. Fancy tokens nobody uses
        are worse than a duplicated button.
      </p>
    </>
  );
}
