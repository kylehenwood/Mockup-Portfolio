import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="not-found__code">404</div>
      <p className="not-found__lede">This page wandered off.</p>
      <Link to="/" className="not-found__home">Take me home</Link>
    </section>
  );
}
