import React, { useState, useEffect } from "react";

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
                            <li style={{ "--menu-index": 0 }}><a href="#intro">Intro</a></li>
                            <li style={{ "--menu-index": 1 }}><a href="#services">Služby</a></li>
                            <li style={{ "--menu-index": 2 }}><a href="#portfolio">Portfolio</a></li>
                            <li style={{ "--menu-index": 3 }}><a href="#contact">Kontakt</a></li>
                        </ul>
                    </nav>
                )}
            </div>

        </header>
    );
}

export default Header;