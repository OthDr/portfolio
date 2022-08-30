import React ,{useEffect} from 'react'

import AOS from "aos";
import "aos/dist/aos.css";

import reactjs from '../assets/reactjs.png'
import frontend from '../assets/front.png'
import mongo from '../assets/mongo.png'
import sql from '../assets/sql.png'
import git from '../assets/git.png'
import docker from '../assets/docker.png'
import nodejs from '../assets/node.png'
import expressjs from '../assets/expressjs.png'
import tailwind from '../assets/tailwind.svg'



const Experience = () => {

  useEffect(() => {
    AOS.init({
      duration: 1400
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <div name='Experience' className='w-full h-screen bg-slate-50 px-2 py-6 md:py-12'>
        <h1 data-aos="zoom-out-down"  className='text-3xl md:text-5xl font-bold text-sky-400 text-center p-2'>Experience</h1>

        <div data-aos="zoom-out-up" className='p-2 grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-3 md:px-6'>

          <div data-aos="zoom-out-up" className='flex flex-col items-center  mx-auto shadow-sky-900 '>
            <img className='w-24 md:w-36 mt-[15%] hover:scale-110 duration-300' src={frontend} alt="front-end dev" />
          </div>

          <div data-aos="zoom-out-up" className='flex flex-col items-center  mx-auto shadow-sky-900 '>
            <img className='w-24 md:w-36 mt-[22%] hover:scale-110 duration-300' src={tailwind} alt="TailwindCss" />
          </div>

          <div data-aos="zoom-out-up" className='flex flex-col items-center  mx-auto shadow-sky-900 '>
            <img className='w-24 md:w-36 hover:scale-110 duration-300' src={reactjs} alt="ReactJS" />
          </div>

          <div data-aos="zoom-out-up" className='flex flex-col items-center  mx-auto shadow-sky-900 '>
            <img className='w-24 md:w-36 hover:scale-110 duration-300' src={nodejs} alt="NodeJS framework" />
          </div>


          <div data-aos="zoom-out-up" className='flex flex-col items-center  mx-auto shadow-sky-900 '>
            <img className='w-24 md:w-36 hover:scale-110 duration-300' src={expressjs} alt="ExpressJS framework" />
          </div>

          <div data-aos="zoom-out-up" className='flex flex-col items-center  mx-auto shadow-sky-900 '>
            <img className='w-24 md:w-36 hover:scale-110 duration-300' src={mongo} alt="MongoDB" />
          </div>

          <div data-aos="zoom-out-up" className='flex flex-col items-center  mx-auto shadow-sky-900 hover:scale-110 duration-300 mb-4'>
            <img className='w-24 md:w-36' src={sql} alt="SQL databases" />
            <h3 className='font-extrabold text-gray-700 text-md md:text-xl -mt-4' >SQL</h3>
          </div>

          <div data-aos="zoom-out-up" className='flex flex-col items-center  mx-auto shadow-sky-900 '>
            <img className='w-24 md:w-36 mt-4 hover:scale-110 duration-300' src={docker} alt="Docker" />
          </div>

          <div data-aos="zoom-out-up" className='flex flex-col items-center  mx-auto shadow-sky-900 '>
            <img className='w-24 md:w-36 hover:scale-110 duration-300' src={git} alt="Git" />
          </div>

        </div>
      </div>
    </>
  )
}

export default Experience