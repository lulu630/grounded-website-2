import bedrifter from "../assets/images/bedrifter.jpg"



function Bedrifter() {
    return (

        <section className="bedrifter">
            <h2>
                For bedrifter
            </h2>
            
                
            <div className="bedrifter__window">
             <img
             className="bedrifter__img"
             src={bedrifter} 
             alt="People sitting in a conference room"/>
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
                    Les mer om bedriftsløsninger
                </a>
            </div>

        </section>

      

        
    )
}


export default Bedrifter
