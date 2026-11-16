import { useState } from "react"
import heroVideo from "../assets/videos/hero.mov"
import secondHeroVideo from "../assets/videos/hero-2.mov"
import thirdHeroVideo from "../assets/videos/hero-3.mov"


const videos = [heroVideo, secondHeroVideo, thirdHeroVideo];


function Hero() {
    const [videoIndex, setVideoIndex] = useState(0);

    return(
        <section className="hero" id="home" aria-label="hero">
            <video
            className="hero-video"
            src={videos[videoIndex]}
            autoPlay
            muted
            playsInline
            onEnded={() => {
                setVideoIndex((index) => (index + 1) % videos.length);
            }}
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

