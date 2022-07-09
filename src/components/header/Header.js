import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Kavish Dadhich</h1>
        <h5 className='text-light'>Full Stack, Blockchain and Flutter Developer </h5>
        <CTA/>
        <HeaderSocials/>
        <div className='me' style={{height:'34rem',width:'26rem',marginLeft:'auto',marginRight:'auto'}}>
        <img src={ME}  style={{height:'25rem',width:'20rem',marginLeft:'auto',marginRight:'auto', borderRadius: '14rem 14rem 0 0'}} alt='me'/>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
        </div>
      </div></header>
  )
}

export default Header