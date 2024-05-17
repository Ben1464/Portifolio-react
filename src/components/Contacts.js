import React from 'react';
import '../styles/Contacts.css';

const Contacts = () => {
  return (
    <section id="contact" className="contact">

<h2><u>Contacts: </u></h2>
<div className='reach-me'>
        <div class="contact-info">
            <div class="contact-item">
                <h3><b>Email:</b></h3>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"></link>

                {/* <p><a href="mailto:youremail@example.com">salescoffee@greenlife.co.ke</a></p> */}
                <p className='blinking-link2'><a href="mailto:youremail@example.com"><i class="fas fa-envelope"></i><u> kimaniben14@gmail.com</u></a></p>
            </div>
            <div class="contact-item">
                <h3><b>Phone:</b></h3>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"></link>
                <a className='blinking-link2' href="tel:+254707811992"><i class="fas fa-phone"></i> <u>+254707811992</u></a>

               
            </div>

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
