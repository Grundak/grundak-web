import React from "react";

function Form() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Posílám...");
        const formData = new FormData(event.target);

        formData.append("access_key", "1f411b05-a784-400d-855b-622405c8e999");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Offer sent, hon.");
            event.target.reset();
        } else {
            console.log("Failed to send, try again later", data);
            setResult(data.message);
        }
    };

    return (
        <div className="form-container">
                <form className="contact-form" id="form" onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="john.doe@porn.com"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Your wish</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder={`1. Name your wish\n2. Offer the price\n3. Do not be cheap, hon`}
                            rows="5"
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Submit</button>
                </form>
            <span>{result}</span>

        </div>
    );
}

export default Form;