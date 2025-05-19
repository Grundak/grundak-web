import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import linktreeLogo from "../linktree-logo-icon.svg"; // Import the Linktree logo

function Contact() {
    return (
        <section id="contact" className="section">
            <h2>Contact</h2>
            <p>Would you like to get in touch with me? Click the green icon to explore more ways to connect!</p>
            <a href="https://linktr.ee/valentinalovepilot" target="_blank" rel="noopener noreferrer">
                <img src={linktreeLogo} alt="linktree" className="linktree" />
            </a>
            <p>You can also reach me through the platforms below. Looking forward to hearing from you!</p>
            <Link to="/" className="btn">
                Back to Intro
            </Link>
        </section>
    );
}

export default Contact;