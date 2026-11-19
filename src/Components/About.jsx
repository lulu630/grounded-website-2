import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

import couch from "../assets/images/couch.webp"

function About() {

  const sectionRef = useRef(null);

  useGSAP(() => {
    const media = gsap.matchMedia();

    media.add(
      "(min-width: 771px) and (prefers-reduced-motion: no-preference)",
      () => {
        const content = sectionRef.current.querySelector(".about__content");

        ScrollTrigger.create({
          trigger: content,
          start: "center 65%",
          end: "center 35%",
          snap: {
            snapTo: (progress) =>
              content.offsetHeight > window.innerHeight ? progress : 0.5,
            directional: false,
            inertia: false,
            delay: 0.15,
            duration: 0.4,
            ease: "power1.inOut",
          },
        });
      }
    );

    return () => media.revert();
  }, { scope: sectionRef });

  return (
    <section
      className="about"
      ref={sectionRef}>

      <div className="about__content">
        <div className="about__window">
          <img
            className="about__img"
            src={couch}
            alt="red-haired woman in a feminine suit" />
        </div>

        <div className="about__text">
          <h2 className="about__title">Om Grounded</h2>
          <p>
            Grounded vokste frem fra et ønske om å gjøre mindfulness relevant og tilgjengelig for mennesker med en travel hverdag.
          </p>
          <p>
            Jeg heter Maria Kowalska og har bakgrunn innen organisasjonspsykologi, lederutvikling og mindfulness. I arbeidet mitt hjelper jeg mennesker med høyt tempo og stort ansvar til å finne mer ro, fokus og balanse.
          </p>

          <a
            className="about__link"
            href="#"
            onClick={(event) => event.preventDefault()}
          >
            Finn ut mer {" "}
            <svg
              className="about__arrow"
              viewBox="0 0 42 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              focusable="false"
            >
              <path className="about__arrow-line" d="M0 8H24" />
              <path className="about__arrow-head" d="M18 3L24 8L18 13" />
            </svg>
          </a>

        </div>
      </div>

    </section>
  )
}

export default About
