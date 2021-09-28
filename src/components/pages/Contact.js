import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';
import { MdEmail } from 'react-icons/md';

function Contact() {
  const [errorMessage, setErrorMessage] = useState('');
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <section id="contact">
      <div className="card-container">
        <div className="card contact-container">
          <h2>Contact Me</h2>
          <form id="contact-form" onSubmit={handleSubmit}>
            <div>
              <input type="text" placeholder="Name" defaultValue={name} onBlur={handleChange} name="name" />
            </div>
            <div>
              <input type="email" placeholder="youremail@test.com" name="email" defaultValue={email} onBlur={handleChange} />
            </div>
            <div>
              <textarea name="message" placeholder="Message" defaultValue={message} onBlur={handleChange} rows="5"/>
              {errorMessage && (
                <div>
                  <p className="error-text">{errorMessage}</p>
                </div>
              )}
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div> 
          <MdEmail className='icon'></MdEmail>
        </div>
      </div>
    </section>
  )
};

export default Contact;