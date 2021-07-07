import React from 'react'
import './style/style.css'
function Contact() {
        return (
                <section className="contact_tab">
                        <h2>Get in touch for more enquiries</h2>
                        <p>Leave us a message we'll get back to you quickly</p>   
                        <form action="">
                                <div className="input_component">
                                        <label htmlFor="fullName">Full name <span>*</span></label>
                                        <input type="text" name="fullName" id="fullName" />
                                </div>
                                <div className="input_component">
                                        <label htmlFor="lastName">Email Address <span>*</span></label>
                                        <input type="email" name="lastName" id="lastName" />
                                </div>
                                <div className="input_component">
                                        <label htmlFor="message">Message <span>*</span></label>
                                        <textarea type="textbox" name="message" rows={10} cols={10}  id="message" />
                                </div>

                                <div className="input_component with_button">
                                        <button>
                                                Send
                                        </button>
                                </div>
                        </form>          
                </section>
        )
}

export default Contact
