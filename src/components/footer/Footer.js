import './footer.css';
import {AiFillLinkedin,AiFillGithub,AiFillInstagram} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>KAVISH</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experiences</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
      </ul>
      <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/kavish-dadhich-93245b194/' target={'_blank'}><AiFillLinkedin/></a>
        <a href='https://github.com/kavish6' target={'_blank'}><AiFillGithub/></a>
        <a href='https://www.instagram.com/kavish_dadhich/' target={'_blank'}><AiFillInstagram/></a>
      </div>
    </footer>
  )
}

export default Footer