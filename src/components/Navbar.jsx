import React, { useState, useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaTimes,
  FaBars,
  FaGithubSquare,
  FaLinkedin,
  FaTwitterSquare,
} from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {

  const [nav, toggleNav] = useState(false);
  const menuClick = () => toggleNav(!nav);

  useEffect(() => {
    AOS.init({
      duration: 1200
    });
    AOS.refresh();
  }, []);



  return (
    <div className='fixed w-full flex justify-between items-center p-2 md:px-4 md:py-2 bg-sky-400/5 z-10'>
      <Link data-aos="fade-right" data-aos-duration="1600" to='Header' smooth={true} duration={2000} className='text-3xl md:text-5xl font-bold text-sky-500 cursor-pointer'>D<span className='text-sky-500/30 '>R</span></Link>
      <ul className='hidden md:flex'>
        <li data-aos="fade-down" data-aos-duration="1200" className='text-sm md:text-lg font-semibold text-md text-sky-500 py-2 px-4 '><Link className='hover:text-sky-400 cursor-pointer' to='Main' smooth={true} duration={1000}> About me </Link></li>
        <li data-aos="fade-down" data-aos-duration="1600" className='text-sm md:text-lg font-semibold text-md text-sky-500 py-2 px-4 '><Link className='hover:text-sky-400 cursor-pointer' to='Experience' smooth={true} duration={1000}> Experience </Link> </li>
        <li data-aos="fade-down" data-aos-duration="2000" className='text-sm md:text-lg font-semibold text-md text-sky-500 py-2 px-4 '><Link className='hover:text-sky-400 cursor-pointer' to='Contact' smooth={true} duration={1000}> Contact me </Link> </li>

      </ul>
      <div className='hidden md:flex md:items-center'>
        <a data-aos="fade-left" data-aos-duration="1200" href='https://github.com/OthDr'> <FaGithubSquare className='text-sky-500 hover:text-sky-400 hover:scale-105 duration-300' size={30} /> </a>
        <a data-aos="fade-left" data-aos-duration="1600" href='https://www.linkedin.com/in/othmane-derrar-531739225'> <FaLinkedin className='text-sky-500 hover:text-sky-400 hover:scale-105 duration-300' size={30} /> </a>
        <a data-aos="fade-left" data-aos-duration="2000" href='https://twitter.com/derroth76'> <FaTwitterSquare className='text-sky-500 hover:text-sky-400 hover:scale-105 duration-300' size={30} /> </a>
      </div>

      <div onClick={menuClick} className='md:hidden p-2 z-10 cursor-pointer'>
        {!nav ? <FaBars size={20} className='text-sky-500' /> : <FaTimes size={20} className='text-sky-500' />}
      </div>

      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-slate-900 flex flex-col justify-center items-center'
        }
      >
        <li className='mb-8'>
          <Link onClick={menuClick} to='Header' smooth={true} duration={1000} className='text-5xl font-bold text-sky-500 cursor-pointer'>D<span className='text-sky-500/30 '>R</span></Link>

        </li>
        <li className='my-4 py-2 text-2xl text-sky-500 border-b-2 border-sky-900 hover:border-sky-400 cursor-pointer'>
          <Link onClick={menuClick} to='Main' smooth={true} duration={1000}>
            About Me
          </Link>
        </li>
        <li className='my-4 py-2 text-2xl text-sky-500 border-b-2 border-sky-900 hover:border-sky-400 cursor-pointer'>
          <Link onClick={menuClick} to='Experience' smooth={true} duration={1000}>
            Experience
          </Link>
        </li>
        <li className='my-4 py-2 text-2xl text-sky-500 border-b-2 border-sky-900 hover:border-sky-400 cursor-pointer'>
          <Link onClick={menuClick} to='Contact' smooth={true} duration={1000}>
            Contact
          </Link>
        </li>
        <li className='mt-8 py-2'>
          <div className='flex items-center'>
            <a href='https://github.com/OthDr'> <FaGithubSquare className='text-sky-500 hover:text-sky-400 hover:scale-105 mx-1' size={30} /> </a>
            <a href='https://www.linkedin.com/in/othmane-derrar-531739225'> <FaLinkedin className='text-sky-500 hover:text-sky-400 hover:scale-105 mx-1' size={30} /> </a>
            <a href='https://twitter.com/derroth76'> <FaTwitterSquare className='text-sky-500 hover:text-sky-400 hover:scale-105 mx-1' size={30} /> </a>
          </div>
        </li>
      </ul>

    </div>
  )
}

export default Navbar