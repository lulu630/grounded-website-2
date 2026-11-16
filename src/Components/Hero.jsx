import heroVideo from "../assets/videos/hero.mp4"

function Hero() {

    return(
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
                <a className="hero__button" href="#book-samtale">
                    Book samtale
                </a>
            </div>

        </section>
    )
}

export default Hero

