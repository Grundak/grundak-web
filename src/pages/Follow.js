import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import linktreeLogo from "../linktree-logo-icon.svg"; // Import the Linktree logo

function Follow() {
    return (
        <section id="follow" className="section">
            <h2>Follow</h2>
            <p>Would you like to explore more about me and my work? Click the green icon to get started!</p>
            <a href="https://linktr.ee/valentinalovepilot" target="_blank" rel="noopener noreferrer">
                <img src={linktreeLogo} alt="linktree" className="linktree" />
            </a>
            <p>Or check the platforms below. I am everywhere! See you, hon!</p>
            <Link to="/" className="btn">
                Back to Intro
            </Link>
        </section>
    );
}

export default Follow;