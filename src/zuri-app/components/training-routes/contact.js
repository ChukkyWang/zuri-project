import React from 'react'
import './style/style.css'
function Contact() {
        return (
                <div className="contact_tab">
                        <h2>Get in touch for more enquiries</h2>
                        <p>Leave us a message we'll get back to you quickly</p>   
                        <form action="">
                                <div className="input_component">
                                        <label htmlFor="firstName">First Name <span>*</span></label>
                                        <input type="text" name="firstName" id="firstName" />
                                </div>
                                <div className="input_component">
                                        <label htmlFor="lastName">Email Address <span>*</span></label>
                                        <input type="email" name="lastName" id="lastName" />
                                </div>
                                <div className="input_component">
                                        <label htmlFor="message">Message <span>*</span></label>
                                        <input type="textbox" name="message" id="message" />
                                </div>
                        </form>          
                </div>
        )
}

export default Contact
