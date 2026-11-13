import bedrifter from "../assets/images/bedrifter.jpg"
import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP} from "@gsap/react"

gsap.registerPlugin(ScrollTrigger, useGSAP)


function Bedrifter () {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);

    useGSAP(() => {

        const timeline = gsap.timeline({

            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "+=310%",
                scrub: 1,
                pin: true,
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


        timeline.fromTo(".bedrifter__content", {
            autoAlpha: 0,
            y: 80,
        }, {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
            ease: "none",
        }, 0.5);


        timeline.to(".bedrifter__overlay", {
            opacity: 0.5,
            duration: 0.5,
            ease: "none",
        }, 0.5);


        // Hold the completed scene before releasing the pinned section.
        timeline.to({}, {
            duration: 0.4,
        });


        // // Keep Bedrifter pinned while About slides over it.
        // timeline.to({}, {
        // duration: 0.67,

        // });

        // Move the content upward while About slides over Bedrifter.
        timeline.to(".bedrifter__content", {
            y: () => -window.innerHeight,
            duration: 0.67,
            ease: "power1.in",
        });


    }, { scope: sectionRef});


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
                alt="People sitting in a conference room"/>

                <div
                className="bedrifter__overlay"
                aria-hidden="true">
                </div>
            </div>


            <div className="bedrifter__content">
                <p>
                    Grounded tilbyr praktiske workshops som hjelper team med å håndtere stress, styrke fokus og skape en mer bærekraftig hverdag.
                </p>

                {/* <a
                    className="bedrifter__link" 
                    href="#"
                    onClick={(event) => event.preventDefault()}
                    >
                    Les mer om bedriftsløsninger
                </a> */}

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