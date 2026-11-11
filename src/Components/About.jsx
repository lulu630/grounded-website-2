import couch from "../assets/images/couch.jpg"

function About() {
    return (
        <section 
        className="about">
            <div className="about__content">
                <img 
                className="about__img"
                src={couch} 
                alt="red-haired woman in a feminine suit" />
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
                Les mer
                </a>
                </div>
            </div>
            
        </section>
    )
}

export default About