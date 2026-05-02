const SOCIALS = [
  { label: 'Dribbble', href: '#' },
  { label: 'Codepen', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Figma @KiwiKyle', href: '#' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__cols">
          <div className="footer__col">
            <h3 className="footer__heading">Get in touch</h3>
            <p className="footer__lede">Contact me with any questions!</p>
            <a className="footer__chip" href="mailto:contact@kylehenwood.me">
              contact@kylehenwood.me
            </a>
          </div>

          <div className="footer__col">
            <h3 className="footer__heading">Find me online</h3>
            <ul className="footer__list">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a className="footer__chip" href={s.href} rel="noopener">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__base">
          <p>Please don’t steal my work.</p>
          <p>&copy; {year} Kyle Henwood</p>
        </div>
      </div>
    </footer>
  );
}

export const meta = {
  name: 'Footer',
  category: 'Chrome',
  description: 'Site footer with a Get-in-touch column, a Find-me-online column, and a base row for copyright. Rendered once by Layout.',
  props: [],
};
