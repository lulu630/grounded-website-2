import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function Cta() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const media = gsap.matchMedia();

    media.add("(prefers-reduced-motion: no-preference)", () => {
      const blocks = gsap.utils.toArray(
        ".cta__content, .cta__animation",
        sectionRef.current
      );

      blocks.forEach((block) => {
        const reveal = gsap.timeline({
          scrollTrigger: {
            trigger: block,
            start: "top 85%",
            once: true,
          },
        });

        reveal.from(block, {
          y: 30,
          duration: 0.7,
          ease: "power1.inOut",
        }, 0);

        reveal.from(block, {
          opacity: 0,
          duration: 0.9,
          ease: "power1.inOut",
        }, 0);
      });
    });

    return () => media.revert();
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
  )
}

export default Cta
