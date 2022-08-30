import React from 'react'
import {
  FaGithubSquare,
  FaLinkedin,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <div className='w-full flex flex-col items-center justify-center p-6 md:p-12 bg-slate-900 border-t-2 border-sky-900'>
        <h2 className='text-md text-sky-600'>E-mail: otmax.vft@gmail.com </h2>
        <div className='flex items-center py-4 md:py-8'>
          <a href='https://github.com/OthDr'> <FaGithubSquare className='text-slate-500 hover:text-sky-400 hover:scale-105 ' size={30} /> </a>
          <a href='https://www.linkedin.com/in/othmane-derrar-531739225'> <FaLinkedin className='text-slate-500 hover:text-sky-400 hover:scale-105 ' size={30} /> </a>
          <a href='https://twitter.com/derroth76'> <FaTwitterSquare className='text-slate-500 hover:text-sky-400 hover:scale-105 ' size={30} /> </a>
        </div>
        <h2 className='text-sm text-slate-600 '>Othmane Derrar Portfolio &copy; 2022</h2>
      </div>
    </>
  )
}

export default Footer