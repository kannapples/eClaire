import React, { useState } from "react";
import addToMailchimp from 'gatsby-plugin-mailchimp';

import "../stylesheets/navigation.scss"

export default function MailingListForm() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [messageClass, setMessageClass] = useState('message-success');
    
    const handleInputChange = (event) => {
        const email = event.target.value;
        setEmail(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await addToMailchimp(email);

        parseResult(result);
    };

    const parseResult = (result) => {
        let output = result.msg;

        if (output.includes('is already subscribed to list')) {
            output = "This email is already subscribed to the mailing list. ";
            
        }
        setMessageClass('message-' + result.result);
        setMessage(output)
    };
    
    
    return (
        <form name="subscribeForm" method="POST" id="subscribe-form" className="subscribe-form" onSubmit={handleSubmit}>
            <div className={`${messageClass} response-message`}>{message}</div>
            <div className="form-row">
                <input
                    className="subscribe-email-input"
                    type="email"
                    name="email"
                    placeholder="Enter Email Address..."
                    value={email}
                    onChange={handleInputChange}
                />
                <button className="subscribe-form-submit-button" type="submit">
                    Subscribe
                </button>
            </div>
        </form>
    );
}