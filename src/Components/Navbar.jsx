import { useEffect, useRef, useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  function handleLinkClick(event) {
    event.preventDefault();
    setIsOpen(false);
  }

  return (
    <header className="site-header">
      <button
        className="site-header__toggle"
        type="button"
        ref={buttonRef}
        aria-label={isOpen ? "Lukk menyen" : "Åpne menyen"}
        aria-expanded={isOpen}
        aria-controls="main-navigation"
        onClick={() => setIsOpen((open) => !open)}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d={isOpen
              ? "M6 6L18 18M18 6L6 18"
              : "M4 7H20M4 12H20M4 17H20"}
          />
        </svg>
      </button>

      <nav
        id="main-navigation"
        className={`site-header__nav${isOpen ? " is-open" : ""}`}
        aria-label="Hovedmeny"
      >
        <a className="site-header__link" href="#tjenester" onClick={handleLinkClick}>Tjenester</a>
        <a className="site-header__link" href="#bedrifter" onClick={handleLinkClick}>For bedrifter</a>
        <a className="site-header__link" href="#om-grounded" onClick={handleLinkClick}>Om Grounded</a>
        <a className="site-header__link" href="#kontakt" onClick={handleLinkClick}>Kontakt</a>
      </nav>
    </header>
  );
}

export default Navbar;

