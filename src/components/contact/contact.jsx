import React from 'react'
import './contact.css'
import { MdOutlineMailOutline } from 'react-icons/md'
import { RiMessengerFill } from 'react-icons/ri'
import { FaWhatsapp } from 'react-icons/fa'

const contact = () => {
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className='container contact__container'>
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineMailOutline className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>umairasif384@gmail.com</h5>
                        <a href="mailto:umairasif384@gmail.com">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <RiMessengerFill className='contact__option-icon' />
                        <h4>Messenger</h4>
                        <h5>rana.umair.923</h5>
                        <a href="https://m.me/rana.umair.923" target="_blank" rel="noopener noreferrer">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <FaWhatsapp className='contact__option-icon' />
                        <h4>Whatsapp</h4>
                        <h5>+971568022132</h5>
                        <a href="https://api.whatsapp.com/send?phone=971568022132" target="_blank">Send a message</a>
                    </article>
                </div>
                {/*End of contact option*/}
                <form action="">
                    <input type="text" name='Name' placeholder='Your Full Name' />
                    <input type="email" name='Email' placeholder='Your Email' />
                    <textarea name="message" rows="7" placeholder='Your Message'></textarea>
                    <button type='submit' className='btn btn-primary '>Send Email</button>
                </form>
            </div>
        </section>
    )
}

export default contact