import React from "react";
import Map from "../UI/Map";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import './Contact.css';

const Contact = () => {
    
  return (
    <div className="contact container-2">
            <form>
                <div className="form">
                    <div className="form-txt">
                        <h1>Contact Us</h1>
                        <h4>Nutan Nagar, Gaya</h4>
                        <p>Bihar, PIN - 823001</p>
                        <p><FaPhoneAlt/> 8809552269</p>
                        <p><IoMdMail/> enquiry.manaseducation@gmail.com</p>
                    </div>
                    <div className="form-details">
                        <input type="text" name="name" id="name" placeholder="Name" required />
                        <input type="email" name="email" id="email" placeholder="Email" required />
                        <textarea name="message" id="message" cols="52" rows="7" placeholder="Message" required></textarea>
                        <button>SEND MESSAGE</button>
                    </div>
                </div>
            </form>
            <Map />
        </div>
  );
};

export default Contact;
