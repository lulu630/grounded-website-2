import { useLayoutEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import coachingImage from "../assets/images/1-1-coaching.webp"
import groundedImage from "../assets/images/grounded-reset.webp"
import executiveImage from "../assets/images/executive-reset.webp"

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
      let activeIndex = 0;
      gsap.set(images, { autoAlpha: (index) => index === 0 ? 1 : 0 });

      // Crossfade the photos without changing their size or position.
      function showImage(index) {
        if (index === activeIndex) return;
        activeIndex = index;
        gsap.to(images, {
          autoAlpha: (imageIndex) => imageIndex === index ? 1 : 0,
          duration: reducedMotion.matches ? 0 : 0.6,
          ease: "power1.inOut",
          overwrite: true,
        });
      }

      let cardPositions = [];
      function updateImage(self) {
        if (!cardPositions.length) return;

        const closest = gsap.utils.snap(cardPositions, self.progress);
        showImage(cardPositions.indexOf(closest));
      }

      ScrollTrigger.create({
        trigger: cards[0],
        start: "center center",
        endTrigger: cards[cards.length - 1],
        end: "center center",

        // Recalculate card centers when the layout changes.
        onRefresh: (self) => {
          const centers = Array.from(cards, (card) =>
            card.offsetTop + card.offsetHeight / 2
          );

          const distance = centers[centers.length - 1] - centers[0];

          cardPositions = centers.map(
            (center) => (center - centers[0]) / distance
          );

          updateImage(self);
        },

        onUpdate: updateImage,
        onLeaveBack: () => showImage(0),
        onLeave: () => showImage(cards.length - 1),
      });

      return () => {
        gsap.killTweensOf(images);
        images.forEach((image) => {
          image.style.removeProperty("visibility");
          image.style.removeProperty("opacity");
        });
      };
    }, sectionRef);

    // Reveal each text block as its card scrolls into view.
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const cards = sectionRef.current.querySelectorAll(".services__card");

      cards.forEach((card) => {
        const content = card.querySelector(".services__card-content");

        const reveal = gsap.timeline({
          scrollTrigger: {
            trigger: content,
            start: "top 85%",
            once: true,
          },
        });

        reveal.from(content, {
          y: 30,
          duration: 0.7,
          ease: "power1.inOut",
        }, 0);

        reveal.from(content, {
          opacity: 0,
          duration: 0.9,
          ease: "power1.inOut",
        }, 0);
      });
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
              <a
                className="services__link"
                href="#"
                onClick={(event) => event.preventDefault()}
                aria-label={`Finn ut mer om ${service.title}`}
              >
                Finn ut mer {" "}
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
