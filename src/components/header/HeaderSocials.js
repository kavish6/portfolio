import React from 'react'
import {BsLinkedin,BsGithub,BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/kavish-dadhich-93245b194/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/kavish6' target="_blank"><BsGithub/></a>
        <a href='https://www.instagram.com/kavish_dadhich/' target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials