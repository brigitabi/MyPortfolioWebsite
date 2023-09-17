import React from 'react';
import {HiOutlineMail} from 'react-icons/hi';
import {FaGithub, FaLinkedin} from 'react-icons/fa'; 
import { Link } from 'react-scroll';



const Navbar = () => {
  return (
<div className='fixed w-full h-[70px] flex justify-between items-center px-4 bg-[#0a1527] text-white right-0'>
    
        <div className='flex justify-center items-center w-full'>
            <ul className='flex space-x-6'>
                <li>
                    <Link to="about" smooth={true} duration={500} className='py-5 text-1.3xl'>About</Link>
                </li>
                <li>
                <Link to="portfolio" smooth={true} duration={500} className='py-5 text-1.3xl'>Portolio</Link>
                </li>
                <li>
                <Link to="contact" smooth={true} duration={500} className='py-5 text-1.3xl'>Contact</Link>
                </li>
            </ul>
            </div>

        {/*Social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1f1515]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/brigitabi'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/brigita-bizjak-9472794b/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#a14a95]'>
            <Link to="contact"
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Email <HiOutlineMail size={30} />
            </Link>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar