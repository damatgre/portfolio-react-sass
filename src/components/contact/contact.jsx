import {React, useState} from 'react';
import "./contact.scss"

export default function Contact () {
    const [message, setMessage] = useState(false);
    
    const handleSubmit=(e)=> {
        
        e.preventDefault();
        setMessage(true);
    }
    
    return (
        <div className='contact' id='contact'>
            <div className="left">
                <img src="assets/talking.jpg" alt="phone icon"/>
            </div>

            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email"></input>
                    <textarea placeholder="Enter your message."></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thank you for your message! I will contact you shortly.</span>}
                </form>
            </div>
        </div>
    )
}