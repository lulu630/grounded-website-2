import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);


function Cta() { 
    const sectionRef = useRef(null);


    useGSAP(() => {
        if (
            window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ) return;
        
        const timeline = gsap.timeline({
            scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=140%",
            scrub: 1,
            pin: true,
        },
    });


    // Reveal the words one after another
    timeline.from(".cta__word", {
        autoAlpha: 0,
        y: 50,
        duration: 0.4,
        stagger: 0.5,
        ease: "none",
    });


  // Reveal the description and link after the last word
    timeline.from(".cta__content", {
        autoAlpha: 0,
        y: 80,
        duration: 0.6,
        ease: "none",
    });
    }, { scope: sectionRef });


    return (
        <section 
        className="cta"
        ref={sectionRef}
        >
            <div className="cta__content">
                <p>Start med en uforpliktende samtale, så finner vi ut hva som passer for deg eller din bedrift.</p>

                <a className="cta__link" href="#book-samtale">
                    Book en samtale {" "}
                    <svg
                      className="cta__arrow"
                      viewBox="0 0 42 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path className="cta__arrow-line" d="M0 8H24" />
                      <path className="cta__arrow-head" d="M18 3L24 8L18 13" />
                    </svg>
                
                </a>
            </div>

            <h2 
            className="cta__animation"
            aria-label="Skap mer rom">

                <span className="cta__word">
                    Skap
                </span>

                <span className="cta__word">
                    mer
                </span>

                <span className="cta__word">
                    rom
                </span>
            </h2>

        </section>
        )}

export default Cta