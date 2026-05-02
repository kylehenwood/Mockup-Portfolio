import GalleryTile from '../components/GalleryTile.jsx';
import { posts } from '../data/gallery.js';

export default function Blog() {
  return (
    <section className="home-section" id="blog">
      <div className="home-section__inner">
        <header className="home-section__head">
          <h1 className="home-section__title">Blog</h1>
          <p className="home-section__sub">
            Notes, warmups, and bits and pieces from the workbench.
          </p>
        </header>

        <div className="gallery__grid">
          {posts.map((post) => (
            <GalleryTile key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
