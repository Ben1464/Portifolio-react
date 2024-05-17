import React from 'react';
import '../styles/Contacts.css';

const Contacts = () => {
  return (
    <section id="contact" className="contact">

<h2><u>Contacts: </u></h2>
        <div class="contact-info">
            <div class="contact-item">
                <h3>Email:</h3>
                {/* <p><a href="mailto:youremail@example.com">salescoffee@greenlife.co.ke</a></p> */}
                <p className='blinking-link'><a href="mailto:youremail@example.com">kimaniben14@gmail.com</a></p>
            </div>
            <div class="contact-item">
                <h3>Phone:</h3>
                <a className='blinking-link' href="tel:+254707811992"><i class="fas fa-phone"></i> +254707811992</a>

               
            </div>

        </div>
      <h2>Send me a message:</h2>
      <form>
        <label>Name:</label>
        <input type="text" placeholder="Your Name..." />
        <label>Email:</label>
        <input type="email" placeholder="Your Email..." />
        <label>Message:</label>
        <textarea placeholder="Your Message..."></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contacts;
