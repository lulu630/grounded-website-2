import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Intro() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const media = gsap.matchMedia();

    media.add("(prefers-reduced-motion: no-preference)", () => {
      // === 1. Reveal and gradually fade the introductory text blocks ===
      const blocks = sectionRef.current.querySelectorAll(".intro__block");

      blocks.forEach((block, index) => {
        const text = block.querySelector(".intro__text");
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: block,
            start: "top 85%",
            end: "top -30%",
            scrub: true,
            invalidateOnRefresh: true,
          },
        });

        // Reveal the text: fade from 0 to 1 and move slightly upward.
        timeline.fromTo(text,
          { opacity: 0, y: 32 },
          { opacity: 1, y: 0, duration: 0.35, ease: "none" }
        );
        // Keep the text fully opaque for part of the scroll distance.
        timeline.to(text, { opacity: 1, duration: 1 });

        // Fade the first two blocks to 20% opacity; keep the last one visible.
        if (index < blocks.length - 1) {
          timeline.to(text, { opacity: 0.2, duration: 0.4, ease: "none" });
        }
      });


      // === 2. Move PRESTASJON and PAUSE apart as the user scrolls ===
      const stage = sectionRef.current.querySelector(".intro__pause-stage");
      const words = stage.querySelector(".intro__words");
      const leftWord = stage.querySelector(".intro__word--left");
      const rightWord = stage.querySelector(".intro__word--right");
      const message = stage.querySelector(".intro__message");

      // Pin the section and link animation progress to scrolling.
      const pauseTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: stage,
          start: "top top",
          end: () => `+=${window.innerHeight * 2.5}`,
          pin: true,
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      // Keep the words joined for a short part of the scroll distance.
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
      // === 3. Reveal the GROUNDED message and link after the words separate ===
      pauseTimeline.fromTo(message,
        { autoAlpha: 0, y: 30 },
        { autoAlpha: 1, y: 0, duration: 0.45, ease: "none" }
      );
      // Hold the final message before the pinned section ends.
      pauseTimeline.to(message, { duration: 0.35 });
    }, sectionRef);

    return () => media.revert();
  }, []);

  return (
    <section className="intro" ref={sectionRef} aria-label="Fra arbeidsdag til pause">
      <div className="intro__block">
        <p className="intro__text intro__opening">Arbeidsdagen kan være over.</p>
      </div>
      <div className="intro__block">
        <h2 className="intro__text intro__heading">Men hodet fortsetter.</h2>
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
          <h2 className="intro__message-heading">GROUNDED skaper rom for å stoppe opp.</h2>
          <p className="intro__message-text">
            Legg merke til egne mønstre, finn tilbake til øyeblikket
            <br />
            og vær mer til stede i det som faktisk skjer.
          </p>
          <a className="intro__programs-link" href="#tjenester">Utforsk programmene ↓</a>
        </div>
      </div>
    </section>
  );
}

export default Intro;
