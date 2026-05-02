import { useEffect, useState } from 'react';
import { showreel } from '../data/showreel.js';

export default function Showreel() {
  const [active, setActive] = useState(null);

  // Esc closes the modal.
  useEffect(() => {
    if (!active) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') setActive(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active]);

  // Lock body scroll while modal is open.
  useEffect(() => {
    if (!active) return undefined;
    document.body.classList.add('layout--lock');
    return () => document.body.classList.remove('layout--lock');
  }, [active]);

  return (
    <>
      <section className="showreel">
        <header className="showreel__head">
          <h1 className="showreel__title">Showreel</h1>
          <p className="showreel__sub">
            UI and illustration excerpts pulled from across the work — click
            any tile to view it at native size.
          </p>
        </header>

        <div className="showreel__grid">
          {showreel.map((item) => (
            <button
              key={item.id}
              type="button"
              className={[
                'showreel-tile',
                `showreel-tile--col-${item.span.col}`,
                `showreel-tile--row-${item.span.row}`,
              ].join(' ')}
              onClick={() => setActive(item)}
              aria-label={`View ${item.title} at native size`}
            >
              {item.image ? (
                <img className="showreel-tile__media" src={item.image} alt="" />
              ) : (
                <span
                  className={`showreel-tile__placeholder showreel-tile__placeholder--${item.color}`}
                  aria-hidden="true"
                />
              )}
              <span className="showreel-tile__label">{item.title}</span>
            </button>
          ))}
        </div>
      </section>

      {active && (
        <ImageModal item={active} onClose={() => setActive(null)} />
      )}
    </>
  );
}

// Modal viewer — renders the asset at its declared native dimensions.
// If the asset is larger than the viewport, the surrounding overflow
// scrolls so the user can pan around. Backdrop click + Esc + close
// button all dismiss.
function ImageModal({ item, onClose }) {
  return (
    <div
      className="image-modal"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      <button
        type="button"
        className="image-modal__backdrop"
        aria-label="Close"
        onClick={onClose}
      />

      <button
        type="button"
        className="image-modal__close"
        aria-label="Close"
        onClick={onClose}
      >
        <span className="project-close__icon" aria-hidden="true" />
      </button>

      <div
        className="image-modal__frame"
        style={{ width: item.native.w, height: item.native.h }}
      >
        {item.image ? (
          <img
            className="image-modal__image"
            src={item.image}
            alt={item.title}
            width={item.native.w}
            height={item.native.h}
          />
        ) : (
          <span
            className={`showreel-tile__placeholder showreel-tile__placeholder--${item.color}`}
            aria-hidden="true"
          />
        )}
      </div>

      <div className="image-modal__meta">
        <span className="image-modal__title">{item.title}</span>
        <span className="image-modal__dim">{item.native.w} × {item.native.h}</span>
      </div>
    </div>
  );
}
