import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai'
import { FaGithub } from 'react-icons/fa'
import { FiDribbble } from 'react-icons/fi'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target='_blank'><AiFillLinkedin /> </a>
        <a href="https://github.com" target='_blank'><FaGithub /></a>
        <a href="https://dribble.com" target='_blank'><FiDribbble /> </a>
    </div>
  )
}

export default HeaderSocials