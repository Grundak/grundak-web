import React from "react";
import { Link } from "react-router-dom";
import Form from "../components/Form";

function Exclusivity() {
    return (
        <section id="exclusivity" className="section">
            <h2>Exclusivity</h2>
            <p>If you want to own a piece I wore on a filming day, contact me via the form below, hon.</p>
            <Form />
            <Link to="/follow" className="btn">
                Go to Follow
            </Link>
        </section>
    );
}

export default Exclusivity;