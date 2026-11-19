import heroVideo from "../assets/videos/hero.mp4"

function Hero() {

  return (
    <section className="hero" id="home" aria-label="hero">
      <video
        className="hero-video"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="hero__content">
        <h1 className="hero__logo">
          Grounded
        </h1>
        <p className="hero__text">
          Mindfulnesscoaching<br />
          for forretningsfolk
        </p>

        <a
          className="hero__button"
          href="#"
          onClick={(event) => event.preventDefault()}
        >
          Book samtale {" "}
          <svg
            className="hero__arrow"
            viewBox="0 0 42 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            focusable="false"
          >
            <path className="hero__arrow-line" d="M0 8H24" />
            <path className="hero__arrow-head" d="M18 3L24 8L18 13" />
          </svg>
        </a>

      </div>

    </section>
  )
}

export default Hero
