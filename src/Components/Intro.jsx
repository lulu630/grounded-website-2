import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Intro() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const media = gsap.matchMedia();

    media.add("(prefers-reduced-motion: no-preference)", () => {
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

        timeline.fromTo(text,
          { opacity: 0, y: 32 },
          { opacity: 1, y: 0, duration: 0.35, ease: "none" }
        );
        timeline.to(text, { opacity: 1, duration: 1 });

        if (index < blocks.length - 1) {
          timeline.to(text, { opacity: 0.2, duration: 0.4, ease: "none" });
        }
      });
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
    </section>
  );
}

export default Intro;
