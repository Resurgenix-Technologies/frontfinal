import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar({ visible }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const scrollLink = (id, label) => (
        <a href={`/#${id}`} onClick={() => setMenuOpen(false)}>
            {label}
        </a>
    );

    return (
        <nav className={`navbar ${visible ? "show" : ""}`}>
            <Link
                to="/"
                className="nav-logo"
                onClick={() => setMenuOpen(false)}
            >
                <img className="logo-png" src="logo.png" />
                {/* Text */}
                <div className="logo-text">
                    <span className="resur">RESUR</span>
                    <span className="genix">GENIX</span>
                </div>
            </Link>

            <ul
                className={`nav-links ${menuOpen ? "open" : ""}`}
                id="nav-links"
            >
                <li>{scrollLink("hero", "Home")}</li>
                <li>{scrollLink("what-we-do", "What We Do")}</li>
                <li>{scrollLink("services", "Services")}</li>
                <li>
                    <Link
                        to="/reviews"
                        className={
                            location.pathname === "/reviews" ? "active" : ""
                        }
                        onClick={() => setMenuOpen(false)}
                    >
                        Reviews
                    </Link>
                </li>
                <li>
                    <Link
                        to="/careers"
                        className={
                            location.pathname === "/careers" ? "active" : ""
                        }
                        onClick={() => setMenuOpen(false)}
                    >
                        Careers
                    </Link>
                </li>
                <li>{scrollLink("contact", "Contact")}</li>
                <li>
                    <a
                        href="/#consultation"
                        className="nav-cta"
                        onClick={() => setMenuOpen(false)}
                    >
                        Request Consultation
                    </a>
                </li>
            </ul>

            <button
                className="nav-hamburger"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
    );
}
