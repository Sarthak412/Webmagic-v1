import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-scroll';

const Navbar = (props) => {

//   const logo = "WebMagic";

    const [toggle, setToggle] = useState(false);

  return (
    <nav>
        <div className='sticky top-0 z-50 bg-black w-full items-center px-2 py-4 shadow-md'>
            <div className='flex text-white cursor-pointer'> 
                    <h1 className='font-semibold mx-auto text-[22px] flex items-center uppercase custom-margin text-shadow'> 
                    <Link to='#hero'>
                        {props.logo}
                    </Link>
                    </h1>
                    <ul className='flex mx-auto space-x-5 cursor-pointer text-[15px] lg:flex-row custom_toggle'>
                        
                        <Link to='#about'> 
                            <li className='hover:bg-gradient-to-t from-blue-950 to-indigo-300 p-3'> {props.link_1} </li>
                        </Link>           
                        
                        <Link to='#services'>
                            <li className='hover:bg-gradient-to-t from-blue-950 to-indigo-300 p-3'> {props.link_2} </li>
                        </Link>
                        
                        <li className='hover:bg-gradient-to-t from-blue-950 to-indigo-300 p-3'> {props.link_3} </li>
                        <li className='hover:bg-gradient-to-t from-blue-950 to-indigo-300 p-3'> {props.link_4} </li>
                    </ul>
                <GiHamburgerMenu onClick={() => setToggle(!toggle)} size={25} className='burger-icon cursor-pointer hover:bg-blue-700'/>
                    {toggle && ( 
                    <ul className='flex-column bg-black w-full absolute mt-[49px] mx-[-1px] text-[14px] p-4 space-y-4 shadow-lg cursor-pointer custom_drop'>
                        <Link to='#about'>
                            <li className='hover:bg-gradient-to-t from-blue-900 to-indigo-300 p-3'> {props.link_1} </li>
                        </Link>
                        
                        <li className='hover:bg-gradient-to-t from-blue-900 to-indigo-300 p-3'> {props.link_2} </li>
                        <li className='hover:bg-gradient-to-t from-blue-900 to-indigo-300 p-3'> {props.link_3} </li>
                        <li className='hover:bg-gradient-to-t from-blue-900 to-indigo-300 p-3'> {props.link_4} </li>
                    </ul>
                )}    
            </div>
        </div>
    </nav>
  )
}

export default Navbar;