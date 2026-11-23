import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function Intro() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const media = gsap.matchMedia();

    media.add("(prefers-reduced-motion: no-preference)", () => {
      const blocks = gsap.utils.toArray(".intro__block", sectionRef.current);

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
      className="intro"
      ref={sectionRef}
      aria-label="Fra arbeidsdag til pause"
    >
      <p className="intro__block">
        Arbeidsdagen kan være over, men hodet fortsetter. Beslutninger og ansvar
        blir ofte med videre inn i kvelden. Det kan være vanskelig å finne en
        tydelig overgang mellom prestasjon og pause.
      </p>

      <div className="intro__block intro__message">
        <p>
          GROUNDED skaper rom for å stoppe opp. Legg merke til egne mønstre, finn tilbake til øyeblikket og vær mer til
          stede i det som faktisk skjer.
        </p>

        <p className="intro__programs">Sjekk våre programmer ↓</p>
      </div>
    </section>
  );
}

export default Intro;
