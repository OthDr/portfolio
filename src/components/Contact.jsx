import React, { useState, useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";


const Contact = () => {

  const normClass = 'rounded-sm bg-sky-900/5 text-sky-100 border-b-2 border-sky-900  p-2 m-2 w-[90vw] md:w-[500px] outline-none focus:border-sky-400  placeholder:text-slate-50/30 resize-none';
  const errClass = 'rounded-sm bg-red-900/5 text-sky-100 border-b-2 border-red-500  p-2 mt-2 w-[90vw] md:w-[500px] outline-none focus:border-red-500  placeholder:text-slate-50/30 resize-none';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [nameErr, setNameErr] = useState(false);
  const [emailErr, setemailErr] = useState(false);
  const [messageErr, setmessageErr] = useState(false);


  const handleSubmit = (e) => {

    setNameErr(false);
    setemailErr(false);
    setmessageErr(false);

    if (name.length == 0){
      setNameErr(true);
      e.preventDefault();
    }
    if (email.length == 0 || !/\S+@\S+\.\S+/.test(email)){
      setemailErr(true);
      e.preventDefault();
    }
    if (message.length == 0){
      setmessageErr(true);
      e.preventDefault();
    }

  }


  useEffect(() => {
    AOS.init({
      duration: 1500
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <div name='Contact' className='w-full h-screen flex flex-col justify-center items-center bg-slate-900 pt-2 md:pt-14'>
        <div className='mx-auto flex flex-col lg:flex-row items-center '>

          <div className='w-[90vw] md:max-w-[500px] flex flex-col justify-center '>
            <h1 data-aos="zoom-out-right" data-aos-duration="2000" className='font-bold text-3xl md:text-4xl text-left text-sky-500'>Let's Collaborate!</h1>
            <h2 data-aos="fade-right" className='font-semibold text-md md:text-xl md:text-left text-sky-100 my-2'>Feel free to send me a message, I will appreciate that</h2>
          </div>

          <form data-aos="fade-left" onSubmit={handleSubmit} action='https://getform.io/f/5dfc985b-4f12-45d0-a0ff-baf135a18d36' method="POST" className='flex flex-col my-2 md:my-0 items-center'>
            <input id='nameInput' onChange={e => setName(e.target.value)}  type="text" name='name' placeholder='name' className={nameErr? errClass : normClass} />
            {nameErr &&
            <p className='text-sm font-bold text-red-500 mb-2 p-1'>Please put your name</p>
            }
            <input id='emailInput' onChange={e => setEmail(e.target.value)}  type="text" name='email' placeholder='email' className={emailErr? errClass : normClass} />
            {emailErr &&
            <p className='text-sm font-bold text-red-500 mb-2 p-1'>Please enter a valid e-mail addresse</p>
            }
            <textarea id='messageInput' onChange={e => setMessage(e.target.value)}  placeholder='your message' rows={5} className={messageErr? errClass : normClass}></textarea>
            {messageErr &&
            <p className='text-sm font-bold text-red-500 mb-2 p-1'>Please write a message</p>
            }
            <button data-aos="zoom-in" type='submit' className='w-[45vw] md:w-[250px] mx-auto text-md md:text-lg font-bold text-sky-100 bg-gradient-to-r from-sky-700 to-sky-400 py-2 px-6 mt-2 md:mt-6  rounded shadow-2xl shadow-sky-900 hover:text-sky-700'>Send</button>
          </form>

        </div>
      </div>
    </>
  )
}

export default Contact