import React from 'react'
import { exploreBlogs } from '../constants'

const Blog = () => {
  return (
    <section className='bg-black px-5 min-h-[60vh] pb-[4rem] pt-[4rem] overflow-hidden'>
        <div data-aos="fade-down" data-aos-duration="1000" className='text-white text-[30px] px-5 py-8 mb-8 mt-[-2rem] w-full text-shadow'>
            Blogs 
        </div>
        <div className='grid grid-cols-2 place-items-center gap-y-8 gap-x-[-50px] custom_grid'>
            {exploreBlogs.map((blogs, index) => (
            <div data-aos="fade-up" data-aos-duration="900" key={blogs.id}  className='px-5 py-8 bg-white w-[500px] custom_width'>
                <h2 className='text-black text-[18px] pb-2 text-left font-extrabold'>{blogs.id}) {blogs.blog_title}</h2>     
                <p className='text-black text-[15px] text-left font-sans'> {blogs.blog_description} </p>
            </div>
            ))}
            
        </div>
    </section>
  )
}

export default Blog