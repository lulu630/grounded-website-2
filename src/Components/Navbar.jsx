function Navbar() {
    return (
        <header className="site-header">
          
                {/* <a className="site-header__logo" href="#home">
                Grounded
                </a> */}

                <nav className="site-header__nav" aria-label="Hovedmeny">
                    <a 
                    className="site-header__link" 
                    href="#tjenester"
                    onClick={(event) => event.preventDefault()}
                    >
                        Tjenester
                    </a>
                    <a 
                    className="site-header__link" 
                    href="#bedrifter"
                    onClick={(event) => event.preventDefault()}
                    >
                        For bedrifter
                    </a>
                    <a 
                    className="site-header__link" 
                    href="#om-grounded"
                    onClick={(event) => event.preventDefault()}
                    >
                        Om Grounded
                    </a>
                    <a 
                    className="site-header__link" 
                    href="#kontakt"
                    onClick={(event) => event.preventDefault()}
                    >
                        Kontakt
                    </a>

                      <a 
                    className="site-header__link site-header__btn" 
                    href="#book-samtale"
                    onClick={(event) => event.preventDefault()}
                    >
                        Book samtale
                    </a>
                </nav>
        </header>
    )
}

export default Navbar