import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!e.target.closest(".menu") && !e.target.closest(".hamburger")) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <header className="App-header">
            <div
                className={`hamburger ${isMenuOpen ? "open" : ""}`}
                onClick={toggleMenu}
            >
                <span></span>
                <span></span>
                <span></span>
                {isMenuOpen && (
                    <nav className="menu">
                        <ul>
                            <Link to="/" style={{ "--menu-index": 0 }}>
                                <li>Intro</li>
                            </Link>
                            <Link to="/services" style={{ "--menu-index": 1 }}>
                                <li>Services</li>
                            </Link>
                            <Link to="/references" style={{ "--menu-index": 2 }}>
                                <li>References</li>
                            </Link>
                            <Link to="/contact" style={{ "--menu-index": 3 }}>
                                <li>Contact</li>
                            </Link>
                        </ul>
                    </nav>
                )}
            </div>
            <Link to="/" className="logo">
                <img
                    src="../favicon-32x32.png"
                    alt="Valentina Love Pilot"
                    className="logo-image"
                />
            </Link>
        </header>
    );
}

export default Header;