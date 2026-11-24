import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import couch from "../assets/images/couch.webp";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function About() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const media = gsap.matchMedia();

    media.add("(prefers-reduced-motion: no-preference)", () => {
      const reveal = gsap.timeline({
        scrollTrigger: {
          trigger: ".about__text",
          start: "top 85%",
          once: true,
        },
      });

      reveal.from(".about__text", {
        y: 30,
        duration: 0.7,
        ease: "power1.inOut",
      }, 0);

      reveal.from(".about__text", {
        opacity: 0,
        duration: 0.9,
        ease: "power1.inOut",
      }, 0);
    });

    return () => media.revert();
  }, { scope: sectionRef });

  return (
    <section className="about" ref={sectionRef}>

      <div className="about__content">
        <div className="about__window">
          <img
            className="about__img"
            src={couch}
            alt="En rødhåret kvinne i dress" />
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
            aria-label="Finn ut mer om Grounded"
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
