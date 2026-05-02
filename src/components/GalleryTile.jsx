import AnimatedLink from './AnimatedLink.jsx';

export default function GalleryTile({ post }) {
  return (
    <AnimatedLink to={`/posts/${post.slug}`} className="gallery-tile">
      {post.image ? (
        <img className="gallery-tile__media" src={post.image} alt="" />
      ) : (
        <div
          className={`gallery-tile__placeholder gallery-tile__placeholder--${post.color || 'pink'}`}
          aria-hidden="true"
        />
      )}

      {post.tags && post.tags.length > 0 && (
        <ul className="gallery-tile__tags">
          {post.tags.slice(0, 2).map((tag) => (
            <li key={tag} className="gallery-tile__tag">{tag}</li>
          ))}
        </ul>
      )}

      <div className="gallery-tile__overlay">
        <span className="gallery-tile__title">{post.title}</span>
      </div>
    </AnimatedLink>
  );
}

export const meta = {
  name: 'GalleryTile',
  category: 'UI',
  description: 'Square-ish thumbnail used on the gallery grid. Links to the post page; falls back to a gradient when no image is provided.',
  props: [
    {
      name: 'post',
      type: '{ slug, title, image?, color?, tags? }',
      description: 'Post data. `color` (pink|blue|teal|green|orange|purple) controls the placeholder gradient when no image.',
    },
  ],
  previews: [
    {
      label: 'Placeholder (no image)',
      render: () => (
        <div style={{ width: 240 }}>
          <GalleryTile
            post={{
              slug: 'demo-post',
              title: 'Demo post',
              color: 'pink',
              tags: ['UI', 'UX'],
            }}
          />
        </div>
      ),
    },
    {
      label: 'Without tags',
      render: () => (
        <div style={{ width: 240 }}>
          <GalleryTile
            post={{
              slug: 'demo-post-2',
              title: 'No tags here',
              color: 'teal',
            }}
          />
        </div>
      ),
    },
  ],
};
