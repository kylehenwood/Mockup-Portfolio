import { useParams } from 'react-router-dom';
import AnimatedLink from '../components/AnimatedLink.jsx';
import { postsBySlug, posts } from '../data/gallery.js';
import GalleryTile from '../components/GalleryTile.jsx';
import NotFound from './NotFound.jsx';

export default function Post() {
  const { slug } = useParams();
  const post = postsBySlug[slug];

  if (!post) return <NotFound />;

  const related = posts
    .filter((p) => p.slug !== slug && p.tags?.some((t) => post.tags?.includes(t)))
    .slice(0, 4);

  return (
    <article className="post">
      <AnimatedLink to="/blog" className="post__back">&larr; Back to Blog</AnimatedLink>

      <header className="post__header">
        <h1 className="post__title">{post.title}</h1>
        {post.subtitle && <p className="post__subtitle">{post.subtitle}</p>}
      </header>

      <div className="post__media">
        {post.image ? (
          <img className="gallery-tile__media" src={post.image} alt="" />
        ) : (
          <div
            className={`gallery-tile__placeholder gallery-tile__placeholder--${post.color || 'pink'}`}
            aria-hidden="true"
          />
        )}
      </div>

      {post.description && (
        <div className="prose">
          <p>{post.description}</p>
        </div>
      )}

      {related.length > 0 && (
        <section className="post__related">
          <h2 className="post__related-title">Similar things</h2>
          <div className="gallery__grid">
            {related.map((p) => (
              <GalleryTile key={p.slug} post={p} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
