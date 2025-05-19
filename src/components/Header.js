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
                            <Link to="/gallery" style={{ "--menu-index": 1 }}>
                                <li>Gallery</li>
                            </Link>
                            <Link to="/exclusivity" style={{ "--menu-index": 2 }}>
                                <li>Exclusivity</li>
                            </Link>
                            <Link to="/follow" style={{ "--menu-index": 3 }}>
                                <li>Follow</li>
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