

function Footer() {
  return (
    <footer className="footer" id="kontakt">
      <div className="footer__info">
        <nav className="footer__nav" aria-label="Utforsk">
          <h2 className="footer__heading">Utforsk</h2>

          <ul className="footer__links">
            <li>
              <a href="#" onClick={(event) => event.preventDefault()}>Tjenester</a>
            </li>
            <li>
              <a href="#" onClick={(event) => event.preventDefault()}>For bedrifter</a>
            </li>
            <li>
              <a href="#" onClick={(event) => event.preventDefault()}>Om Grounded</a>
            </li>
            <li>
              <a href="#" onClick={(event) => event.preventDefault()}>Kontakt</a>
            </li>
          </ul>
        </nav>

        <div className="footer__contact">
          <h2 className="footer__heading">Kontakt</h2>

          <ul className="footer__links">
            <li>
              <a href="#" onClick={(event) => event.preventDefault()}>
                maria.k@grounded.no
              </a>
            </li>
            <li>Bergen, Norge</li>
            <li>
              <a href="#" onClick={(event) => event.preventDefault()}>LinkedIn</a>
            </li>
            <li>
              <a href="#" onClick={(event) => event.preventDefault()}>Instagram</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__logo">
        <span className="footer__logo-text">GROUNDED</span>
      </div>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Grounded</p>

        <nav
          className="footer__legal"
          aria-label="Juridisk informasjon"
        >
          <a href="#" onClick={(event) => event.preventDefault()}>Personvern</a>
          <a href="#" onClick={(event) => event.preventDefault()}>Cookies</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;