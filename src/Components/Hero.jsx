// import { useRef, useState } from "react"
import heroImage from "../assets/images/hero.webp"

function Hero() {

    return (
        <section 
        className="hero" 
        id="home" 
        aria-label="hero"
        >

            <img
            className="hero__image"
            src={heroImage}
            alt=""
            fetchPriority="high"
            />
        

            <div className="hero__content">
                <h1 className="hero__title">
                Mer ro. <br />Klarere fokus.
                </h1>
                <p className="hero__text">
                Mindfulnesscoaching og praktiske workshops for deg og din bedrift. Rom for å stoppe opp, finne balanse og være mer til stede i hverdagen.
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
