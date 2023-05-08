import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {

  useEffect(()=> {
    AOS.init();
  }, [])

  return (
    <div id='#hero' className='h-[650px] w-full flex items-center justify-center px-5 py-8 bg-gradient-to-t from-blue-950 to-indigo-300'>
        <div data-aos="zoom-in" className='mx-auto px-5 py-8'>
            <h3 className='text-[45px] text-white text-start text-shadow'>Hola,</h3>
            <h1 className='text-[55px] text-start text-shadow-white'>Welcome to WebMagic</h1>
            <h1 className='text-[45px] text-start text-white text-shadow'> Design. Development. Experience. </h1>
        </div>
    </div>
  )
}

export default Hero;