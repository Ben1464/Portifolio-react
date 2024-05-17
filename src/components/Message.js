import React from 'react';
import '../styles/Message.css';

const Message = () => {
    return(
        <>
        <section id="message" className="message">
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
        </section>
        </>
    );
}
export default Message