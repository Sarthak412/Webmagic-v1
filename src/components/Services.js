import React from 'react'

// import { motion } from 'framer-motion';

// import {staggerContainer} from '../utils/motion'

import { exploreServices} from '../constants';

const Services = () => {
  return (
    <div className='grid' id='services'>
        <h1 className='pt-[4rem] bg-indigo-300 text-black text-[30px] lg:pb-[3rem] md:pb-[3rem] sm:pb-[3rem] xs:pb-[3rem] text-shadow-white'>Services</h1>
        <section id='#services' className='bg-gradient-to-t from-blue-900 to-indigo-300 w-full min-h-[60vh] pt-[-50px] flex items-center justify-center pl-[2rem] pb-[5rem] md:pl-[-1.2rem] custom_responsive' >
            {/* Services card design */}
            {exploreServices.map((service, index) => (
                <div key={service.id} className='flex w-[200px] h-[280px] flex-col mx-2 p-10 rounded-md bg-white gap-5 hover_effect'>
                    <h2 className='text-[19px] text-left'>{service.title}</h2>
                    <p className='w-[120px] text-left text-[15px] font-sans'> {service.description} </p>
                </div>    
            ))}
        </section>
    </div>
  )
}

export default Services;