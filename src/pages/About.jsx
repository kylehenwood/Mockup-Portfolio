export default function About() {
  return (
    <section className="home-section" id="about">
      <div className="home-section__inner">
        <header className="home-section__head">
          <h1 className="home-section__title">Who am I?</h1>
        </header>

        <div className="home-about">
          <div className="home-about__body">
            <p>
              I’m Kyle — a Product / UI / UX Designer based in Wellington, New Zealand.
              I’ve spent the last decade designing and building products across web,
              mobile, and the messy stuff in between.
            </p>
            <p>
              I like working close to engineering, sweating the details, and shipping
              things that actually go out the door.
            </p>
            <p>
              Small teams. Tight loops. Prototypes over prose. I sketch in Figma,
              build in code, and lean on whoever knows the user best.
            </p>
          </div>
          <aside className="home-about__sidebar">
            <dl>
              <dt>Based in</dt>
              <dd>Wellington, New Zealand</dd>
              <dt>Focus</dt>
              <dd>Product design, UI, UX</dd>
              <dt>Tools</dt>
              <dd>Figma, React, Sass</dd>
              <dt>Available</dt>
              <dd>Selectively</dd>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
