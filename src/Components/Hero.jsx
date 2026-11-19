import { useRef, useState } from "react"
import heroVideo from "../assets/videos/hero.mp4"


function Hero() {
    
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);


    function toggleVideo() {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
        video.play().catch(() => setIsPlaying(!video.paused));
    } else {
        video.pause();
    }
    }


    return (
        <section 
        className="hero" 
        id="home" 
        aria-label="hero"

        >

        <video
            className="hero-video"
            src={heroVideo}
            autoPlay
            muted
            loop
            playsInline
            ref={videoRef}
            id="hero-background-video"
            onPlay={ () => setIsPlaying(true) }
            onPause={() => setIsPlaying(false)}
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

        <button
        className="hero__video-toggle"
        type="button"
        onClick={toggleVideo}
        aria-controls="hero-background-video"
        >
        <svg
            className="hero__video-icon"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            focusable="false"
        >
        {isPlaying ? (
        <>
            <rect x="6" y="4" width="4" height="16" rx="1" />
            <rect x="14" y="4" width="4" height="16" rx="1" />
        </>
        ) : (
        <path d="M8 5v14l11-7z" />
        )}
         </svg>

        <span>
            {isPlaying
            ? "Sett bakgrunnsvideoen på pause"
            : "Spill av bakgrunnsvideoen"}
        </span>
        </button>
        

        </section>
    )
    }

export default Hero
