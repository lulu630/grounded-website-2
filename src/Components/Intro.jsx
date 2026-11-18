import introImage from "../assets/images/intro.webp";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

function Intro() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const media = gsap.matchMedia();

    media.add("(prefers-reduced-motion: no-preference)", () => {
      const scene = sectionRef.current.querySelector(".intro__scene");

      // Photo parallax effect
      gsap.to(scene.querySelector(".intro__image"), {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: scene,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });


      gsap.to(scene.querySelector(".intro__scene-ending"), {
        y: -100,
        ease: "none",
        scrollTrigger: {
          trigger: scene,
          start: "top bottom",
          end:"bottom top",
          scrub: 1,
        }

      });


      const introTimeline = gsap.timeline({
        scrollTrigger: {
        trigger: scene.querySelector(".intro__scene-ending"),
        start: "top 85%",
        end: "top top",
        scrub: 1,
      },
    });

      // Draw the line.
      introTimeline.fromTo(
        scene.querySelector(".intro__continuation-line"),
        { scaleX: 0 },
        { scaleX: 1, duration: 1, ease: "none" }
      );

      // Reveal the description immediately after the line.
      introTimeline.fromTo(
        sectionRef.current.querySelector(".intro__description"),
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 1, ease: "none" }
      );

      // Move PRESTASJON and PAUSE apart.
      const stage = sectionRef.current.querySelector(".intro__pause-stage");
      const words = stage.querySelector(".intro__words");
      const leftWord = stage.querySelector(".intro__word--left");
      const rightWord = stage.querySelector(".intro__word--right");
      const message = stage.querySelector(".intro__message");

      // const pauseTimeline = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: stage,
      //     start: "top top",
      //     end: () => `+=${window.innerHeight * 2.5}`,
      //     pin: true,
      //     scrub: true,
      //     invalidateOnRefresh: true,
      //   },
      // });

      const pausePin = 
      ScrollTrigger.create({
        trigger: stage,
        start: "top top",
        end: () => `+=${window.innerHeight * 2.5}`,
        pin: true,
      });

      const pauseTimeline = 
      gsap.timeline({
        scrollTrigger: {
          trigger: stage,
          start: () => pausePin.start,
          end: () => pausePin.end,
          scrub: true,
          once: true,
          invalidateОnRefresh: true,
        },
      });


      // Keep the words joined briefly.
      pauseTimeline.to(words, { duration: 0.2 });


      // Move PRESTASJON beyond the left edge of the section.
      pauseTimeline.to(leftWord, {
        x: () => -(stage.clientWidth + words.offsetWidth) / 2,
        duration: 1,
        ease: "none",
      });
      // Move PAUSE to the right at the same time ("<" starts both movements together).
      pauseTimeline.to(rightWord, {
        x: () => (stage.clientWidth + words.offsetWidth) / 2,
        duration: 1,
        ease: "none",
      }, "<");
      // 3. Reveal the GROUNDED message and link after the words separate
      pauseTimeline.fromTo(message,
        { autoAlpha: 0, y: 30 },
        { autoAlpha: 1, y: 0, duration: 0.45, ease: "none" }
      );
      // Hold the final message before the pinned section ends.
      pauseTimeline.to(message, { duration: 0.35 });


      pauseTimeline.set(words, { autoAlpha: 0 });

    }, sectionRef);

    return () => media.revert();
  }, []);

  return (
    <section className="intro" ref={sectionRef} aria-label="Fra arbeidsdag til pause">
        <svg width="0" height="0" aria-hidden="true">
          <defs>
            <clipPath id="intro-oval" clipPathUnits="objectBoundingBox">
              <ellipse
                cx="415.568"
                cy="554.034"
                rx="309.17"
                ry="498.5145"
                transform="scale(0.001204687 0.000803223) rotate(43.993 415.568 554.034)"
                />
            </clipPath>
          </defs>
        </svg>
      
      
      <div className="intro__scene">

        <h2 className="intro__scene-opening">Arbeidsdagen <br /> kan være <span className="accent-italic">over</span>,</h2>

      <div className="intro__window">
        <div className="intro__photo">
          <img 
          className="intro__image"
          src={introImage}
          alt="En person sitter med hodet hvilende i armene"
          />
        </div>
      </div>

      <h2 className="intro__scene-ending">
        Men hodet <br />
        <span className="intro__continuation">
          fortsetter
        <span
          className="intro__continuation-line"
          aria-hidden="true"
        />
        </span>
      </h2>
      </div>

      <div className="intro__block intro__block--description">
        <p className="intro__text intro__description">
          Beslutninger og ansvar blir ofte med videre inn i kvelden.
          <br />
          Det kan være vanskelig å finne en tydelig overgang mellom prestasjon og pause.
        </p>
      </div>
      <div className="intro__pause-stage">
        <h2 className="intro__words" aria-label="Prestasjon og pause">
          <span className="intro__word intro__word--left">PRESTASJON</span>
          <span className="intro__word intro__word--right">PAUSE</span>
        </h2>
        <div className="intro__message">
          <h2 className="intro__message-heading"> <span className="accent-italic">GROUNDED</span> skaper rom for å stoppe opp.</h2>
          <p className="intro__message-text">
            Legg merke til egne mønstre, finn tilbake til øyeblikket
            <br />
            og vær mer til stede i det som faktisk skjer.
          </p>
          
          {/* <p className="intro__programs-arrow">Utforsk programmene ↓</p> */}

          <p className="intro__programs-arrow">
          <span>Sjekk våre programmer</span>

  <svg
    width="16"
    height="52"
    viewBox="0 0 16 52"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M8 1V40M2 34L8 40L14 34" />
  </svg>
</p>
        
        
        </div>
      
      </div>
    </section>
  );
}

export default Intro;
