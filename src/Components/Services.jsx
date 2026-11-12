import { useLayoutEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import coachingImage from "../assets/images/1-1-coaching.jpg"
import groundedImage from "../assets/images/grounded-reset.jpg"
import executiveImage from "../assets/images/executive-reset.jpg"

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    title: "1:1 Coaching",
    description: "Personlig mindfulnesscoaching for deg som ønsker mindre stress, bedre fokus og mer ro i hverdagen. Sammen finner vi verktøy som passer din livssituasjon, ditt tempo og det du trenger mest akkurat nå.",
    image: coachingImage,
    alt: "Et håndtrykk mellom to personer",
  },
  {
    title: "Grounded Reset",
    description: "Et seks ukers program som hjelper deg med å senke skuldrene, finne klarhet og bygge en mer bærekraftig hverdag. Gjennom enkle og praktiske øvelser får du støtte til å skape ro, fokus og bedre tilstedeværelse over tid.",
    image: groundedImage,
    alt: "En person skriver i en notatbok",
  },
  {
    title: "Executive Reset",
    description: "En individuell intensivøkt for ledere, gründere og profesjonelle som trenger rom til å stoppe opp og få oversikt. Denne tjenesten passer for deg som ønsker en målrettet pause for refleksjon, mental avlastning og ny klarhet.",
    image: executiveImage,
    alt: "En person ser ut over byen gjennom et stort vindu",
  },
];

function Services() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const media = gsap.matchMedia();

    // Keep the oval window in place while the service descriptions scroll past.
    media.add("(min-width: 771px)", () => {
      const cards = sectionRef.current.querySelectorAll(".services__card");
      const images = sectionRef.current.querySelectorAll(".services__window-image");

      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
      let activeIndex = -1;

      // Switch photos immediately, then gently settle the new photo into place.
      function showImage(index) {
        if (index === activeIndex) return;
        activeIndex = index;
        gsap.killTweensOf(images);
        gsap.set(images, { visibility: "hidden", scale: 1 });
        gsap.set(images[index], { visibility: "visible", scale: 1.03 });
        gsap.to(images[index], {
          scale: 1,
          duration: reducedMotion.matches ? 0 : 0.7,
          ease: "power2.out",
          overwrite: true,
        });
      }

      showImage(0);
      cards.forEach((card, index) => {
        if (index === 0) return;
        ScrollTrigger.create({
          trigger: card,
          start: "top 20%",
          onEnter: () => showImage(index),
          onLeaveBack: () => showImage(index - 1),
        });
      });

      return () => {
        gsap.killTweensOf(images);
        images.forEach((image) => {
          image.style.removeProperty("visibility");
          image.style.removeProperty("transform");
        });
      };
    }, sectionRef);

    const refresh = () => {
      if (sectionRef.current) ScrollTrigger.refresh();
    };
    document.fonts.ready.then(refresh);

    return () => media.revert();
  }, []);

  return (
    <section className="services" id="tjenester" ref={sectionRef} aria-label="Tjenester">
      <div className="services__copy">
        {services.map((service, index) => (
          <article className="services__card" key={service.title} aria-labelledby={`service-title-${index}`}>
            <div className="services__card-content">
              <h2 className="services__title" id={`service-title-${index}`}>{service.title}</h2>
              <p className="services__description">{service.description}</p>
              <a className="services__link" href="#kontakt">Finn ut mer {" "}
                <svg
                  className="services__arrow"
                  viewBox="0 0 42 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path className="services__arrow-line" d="M0 8H24" />
                  <path className="services__arrow-head" d="M18 3L24 8L18 13" />
                </svg>
              </a>
            </div>
            <img className="services__mobile-image" src={service.image} alt={service.alt} loading="lazy" />
          </article>
        ))}
      </div>
      <div className="services__visual" aria-hidden="true">
        <div className="services__window">
          {services.map((service) => (
            <img className="services__window-image" src={service.image} alt="" key={service.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
