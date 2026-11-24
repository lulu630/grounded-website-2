import bedrifter from "../assets/images/bedrifter.webp"
import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger, useGSAP)

function Bedrifter() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const content = section.querySelector(".bedrifter__content");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let hasRevealed = false;

    // Match the timed text reveal used in Intro, Services and CTA.
    const contentReveal = gsap.timeline({ paused: true });

    contentReveal.fromTo(content, {
      y: 30,
    }, {
      y: 0,
      duration: 0.7,
      ease: "power1.inOut",
    }, 0);

    contentReveal.fromTo(content, {
      autoAlpha: 0,
    }, {
      autoAlpha: 1,
      duration: 0.9,
      ease: "power1.inOut",
    }, 0);

    function revealContent() {
      if (hasRevealed) return;
      hasRevealed = true;

      if (reducedMotion.matches) {
        contentReveal.progress(1).pause();
      } else {
        contentReveal.play();
      }
    }

    const bedrifterPin = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "+=150%",
      pin: true,

      onEnterBack: (self) => {
        const about = section.parentElement.nextElementSibling;
        const scroll = self.scroll();
        const beforeStart = scroll < self.start;
        const aboutTop = about.getBoundingClientRect().top;

        // Finish any remaining animation before changing the layout.
        gsap.killTweensOf(timeline);
        timeline.progress(1).pause();
        contentReveal.progress(1).pause();
        hasRevealed = true;

        self.kill();
        section.classList.add("bedrifter--complete");
        gsap.set(".bedrifter__title", { y: 0 });

        // Preserve the visible position of the following section.
        self.scroll(
          beforeStart
            ? scroll
            : scroll + about.getBoundingClientRect().top - aboutTop
        );

        ScrollTrigger.refresh();
      },
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: () => bedrifterPin.start,
        end: () => bedrifterPin.end,
        scrub: 1,
        once: true,
      },
    });

    timeline.to(imageRef.current, {
      width: "100%",
      height: "100%",
      borderRadius: 0,
      duration: 1,
      ease: "none",
    }, 0);

    timeline.to(".bedrifter__title", {
      y: () => -window.innerHeight,
      duration: 1,
      ease: "none",
    }, 0);

    // Start the text reveal when the photo reaches the same stage as before.
    timeline.call(revealContent, [], 0.5);

    timeline.to(".bedrifter__overlay", {
      opacity: 0.5,
      duration: 0.5,
      ease: "none",
    }, 0.5);

    return () => {
      section.classList.remove("bedrifter--complete");
    };

  }, { scope: sectionRef });

  return (
    <section
      className="bedrifter"
      ref={sectionRef}>

      <h2 className="bedrifter__title">For bedrifter</h2>

      <div className="img__window"
        ref={imageRef}>
        <img
          className="bedrifter__img"
          src={bedrifter}
          alt="Personer sitter rundt et møtebord" />

        <div
          className="bedrifter__overlay"
          aria-hidden="true">
        </div>
      </div>

      <div className="bedrifter__content">
        <p>
          Grounded tilbyr praktiske workshops som hjelper team med å håndtere stress, styrke fokus og skape en mer bærekraftig hverdag.
        </p>

        <a
          className="bedrifter__link"
          href="#"
          onClick={(event) => event.preventDefault()}
        >
          Les mer om bedriftsløsninger {" "}
          <svg
            className="bedrifter__arrow"
            viewBox="0 0 42 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            focusable="false"
          >
            <path className="bedrifter__arrow-line" d="M0 8H24" />
            <path className="bedrifter__arrow-head" d="M18 3L24 8L18 13" />
          </svg>
        </a>

      </div>

    </section>

  )
}

export default Bedrifter
