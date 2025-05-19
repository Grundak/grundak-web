import React from "react";
import { Link } from "react-router-dom";
import Form from "../components/Form";

function References() {
    return (
        <section id="references" className="section">
            <h2>References</h2>
            <p>Check out what my clients have to say about my work. If you'd like to collaborate, feel free to contact me via the form below.</p>
            <Form />
            <Link to="/contact" className="btn">
                Go to Contact
            </Link>
        </section>
    );
}

export default References;