import React from 'react';
import '../styles/Contacts.css';

const Contacts = () => {
  return (
    <section id="contact" className="contact">
      <h2>Send me a message</h2>
      <form>
        <label>Name:</label>
        <input type="text" placeholder="Your Name" />
        <label>Email:</label>
        <input type="email" placeholder="Your Email" />
        <label>Message:</label>
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contacts;
