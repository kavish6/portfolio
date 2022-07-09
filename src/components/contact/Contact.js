import './contact.css';
import {MdOutlineMailOutline} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineMailOutline className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>kavishdadhich@gmail.com</h5>
            <a href='mailto::kavishdadhich@gmail.com' target={'_blank'}>Send a message </a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'  />
            <h4>Whatsapp</h4>
            <h5>8839174101</h5>
            <a href='https://wa.me/15551234567' target={'_blank'}>Send a message </a>
          </article>
        </div>
          <form> 
            <input type={'text'} name='name' placeholder='Your Full Name' required/>
            <input type={'email'} name='email' placeholder='Your Email' required/>
            <textarea name='message' rows={'7'} placeholder='Your Message' required/>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
      </div>
    </section>
  )
}

export default Contact