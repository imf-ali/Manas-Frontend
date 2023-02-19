import React from "react";
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact container-2">
            <form>
                <div className="form">
                    <div className="form-txt">
                        <h1>Contact Us</h1>
                        <h3>India</h3>
                        <p>alifahad2210@gmail.com</p>
                        <p>Gaya, Bihar<br />823001</p>
                    </div>
                    <div className="form-details">
                        <input type="text" name="name" id="name" placeholder="Name" required />
                        <input type="email" name="email" id="email" placeholder="Email" required />
                        <textarea name="message" id="message" cols="52" rows="7" placeholder="Message" required></textarea>
                        <button>SEND MESSAGE</button>
                    </div>
                </div>
            </form>
        </div>
  );
};

export default Contact;
