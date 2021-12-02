import React from 'react';
import "./contact.scss"

export default function Contact () {
    return (
        <div className='contact' id='contact'>
            <div className="left">
                <img src="assets/phone.png" alt="phone icon"/>
            </div>

            <div className="right">
                <h2>Contact.</h2>
                <form>
                    <input type="text" placeholder="Email"></input>
                    <textarea placeholder="Enter your message."></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}