import heroVideo from "../assets/videos/hero.mp4"

function Hero() {
    return(
        <section className="hero" id="home" aria-label="hero">
            <video
            className="hero-video"
            autoPlay muted loop playsInline>
                <source 
                src={heroVideo}
                type="video/mp4"
                />
            </video>

            <div className="hero__content">
                <h1 className="hero__logo">
                    Grounded
                </h1>
                <p className="hero__text">
                    Mindfulnesscoaching
                </p>
            </div>

        </section>
    )
}

export default Hero

