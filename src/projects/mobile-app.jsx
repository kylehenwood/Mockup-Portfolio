export default function MobileApp() {
  return (
    <>
      <h2>Overview</h2>
      <p>
        A focused companion app that gave existing customers fast access to
        the parts of the product they used most often on mobile — without
        trying to recreate the full web experience.
      </p>

      <h2>Constraints</h2>
      <ul>
        <li>One designer, two engineers, eight weeks.</li>
        <li>Couldn’t change the backend; everything was layered on top.</li>
        <li>Had to ship to both iOS and Android from one codebase.</li>
      </ul>

      <h2>Process</h2>
      <p>
        We picked three jobs the web app was bad at on a phone, designed
        only for those, and shipped the rest as deep links into the web.
        Onboarding was kept to a single screen.
      </p>

      <h2>Outcome</h2>
      <p>
        D7 retention beat the projection by a comfortable margin and the
        feature requests that came in were almost all about expanding the
        existing flows rather than adding new ones — a good sign.
      </p>
    </>
  );
}
