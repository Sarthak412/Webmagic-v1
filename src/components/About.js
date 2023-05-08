import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

  useEffect(()=> {
    AOS.init();
  }, [])

  return (
    <div className='flex flex-row px-5 py-8 custom_bg' id='#about'>
        <div className='flex items-center justify-center mx-auto'>
            <div data-aos="fade-right" data-aos-duration="1000" className='p-5 px-8 py-8'>
                <h1 className='text-white text-[30px] text-left mb-5 underline underline-offset-[5px] custom_align_2'> About </h1>
                <p className='text-white font-sans text-[18px] w-[550px] text-left custom_align'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div data-aos="fade-left" data-aos-duration="1000" className='p-5 px-8 py-8'>
                <img className='img_1' src='https://www.pngall.com/wp-content/uploads/12/Illustration-PNG.png' alt='about_illustration' width={400}/>
            </div>  
        </div>
    </div>
  )
}

export default About;