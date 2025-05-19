import React from "react";
import { Link } from "react-router-dom"; // Import Link z react-router-dom

function Footer() {
    return (
        <footer className="App-footer">
            <div className="footer-lists">
                <ul>
                    <li><a href="https://onlyfans.com/valentina_love_pilot">OnlyFans</a></li>
                    <li><a href="https://www.instagram.com/valentina_love_pilot/">Instagram</a></li>
                    <li><a href="https://x.com/valelovepilot">Twitter X</a></li>
                    <li><a href="https://www.twitch.tv/valentina_love_pilot">Twitch</a></li>
                </ul>
                <ul>
                    <li><Link to="/privacy">Privacy</Link></li> {/* Odkaz na stránku Privacy */}
                    <li><Link to="/terms">Terms</Link></li> {/* Odkaz na stránku Terms */}
                    <li><Link to="/exclusivity#form">Contact</Link></li> {/* Odkaz na formulář v Exclusivity */}
                </ul>
            </div>
            <span></span>
            <p><a href="https://github.com/Grundak">Dev & Des by Grundak</a></p>
            <p>&copy; 2025 Valentina Love Pilot. All rights reserved.</p>
        </footer>
    );
}

export default Footer;