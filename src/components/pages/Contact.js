import React, { useState } from "react";
import { MdEmail } from 'react-icons/md';
import { FcPhoneAndroid } from "react-icons/fc";

function Contact() {
  return (
    <section id="contact">
      <h1>Contact Me</h1>
      <div className="contact-container">
        <div className="col-1">
          <MdEmail className='icon'></MdEmail>
          <address>
            <a href="mailto:johnlanni619@gmail.com">JohnLanni619@gmail.com</a>
          </address>
        </div>
        <div className="col-2">
          <FcPhoneAndroid className="icon"></FcPhoneAndroid>
          <a href="tel:9086920878">(908)-692-0878</a>
        </div>
      </div>
    </section>
  )
};

export default Contact;