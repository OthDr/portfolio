import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

import {
  BiRightArrowAlt,
} from 'react-icons/bi';
import { Link } from 'react-scroll';

const Header = () => {

  useEffect(() => {
    AOS.init({
      duration: 1500
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <div data-aos="zoom-out-up" name='Header' className='w-full h-screen flex flex-row items-center justify-center px-2 py-6 md:px-6 md:py-12 bg-gradient-to-br to-slate-900/90 from-sky-900/5'>
        <div  className='flex md:flex-row flex-col items-center '>
          <div className='flex flex-col items-center md:items-start text-center md:text-start py-8 md:px-4 md:ml-2 '>
            <p className='w-full text-sm md:text-lg font-bold text-sky-400'>Hi there. I am</p>
            <h3 className='w-full text-xl md:text-5xl font-bold text-sky-800  md:mb-4'>Othmane DERRAR<span className='text-sky-400'>,</span></h3>
            <h1 data-aos="fade-left" data-aos-duration="3000" className='w-full text-lg md:text-4xl font-bold text-sky-500 md:mb-6'>Master student & Full-stack Developer</h1>
            <Link data-aos="fade-left" data-aos-duration="3500" className='flex items-center group p-2 mt-2 px-4 text-md md:text-2xl font-semibold text-sky-900 hover:text-sky-400 hover:border-sky-400  cursor-pointer border-2 border-sky-900 rounded-md ' to='Contact' smooth={true} duration={1000}>Contact <BiRightArrowAlt className='group-hover:rotate-90 duration-200 ' size={25} /></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header