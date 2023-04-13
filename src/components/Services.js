import React from 'react'

// import { motion } from 'framer-motion';

// import {staggerContainer} from '../utils/motion'

import { exploreWorlds } from '../constants';

const Services = () => {
  return (
    <div className='grid'>
        <h1 className='pt-[4rem] bg-indigo-300 text-black text-[30px] text-shadow-white'>Services</h1>
        <section id='#services' className='bg-gradient-to-t from-blue-950 to-indigo-300 w-full min-h-[50vh] pt-[50px] flex items-center justify-center pl-[2rem] pb-[4rem] custom_responsive' >
            {/* Services card design */}
            {exploreWorlds.map((service, index) => (
                <div key={service.id} className='flex w-[200px] h-[280px] flex-col mx-4 p-10 rounded shadow-md bg-white gap-5 bg-blue'>
                    <h2 className='text-[19px] text-left'>{service.title}</h2>
                    <p className='w-[120px] text-left text-[15px] font-sans'> {service.description} </p>
                </div>    
            ))}
        </section>
    </div>
  )
}

export default Services;