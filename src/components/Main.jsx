import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const Main = () => {

  useEffect(() => {
    AOS.init({
      duration: 1100
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <div name='Main' className='w-full h-screen flex flex-row justify-center px-2 py-6 bg-slate-900'>
        <div data-aos="zoom-in" className='flex flex-col justify-center md:items-start'>
          <h2 className='font-bold text-3xl md:text-5xl text-sky-500 px-2 text-center md:text-left'>
            About me
          </h2>
          <p className='max-w-md md:max-w-3xl text-sm font-semibold md:text-lg mt-2 p-2 text-slate-500 text-center md:text-left'>I am a second
            year master student in the Information Systems Engineering, I code in many languages with diffrent purposes Web,
            Mobile,Desktop,DataScience ...,
            actually I'm focused in the web so I build full-stack projects starting from the Client to the API.If you want
            a responsive dynamic/static website don't hesitate contacting me, I will realize your idea in the web.
          </p>
        </div>
      </div>
    </>
  )
}

export default Main