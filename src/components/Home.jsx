import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import profile from '../assets/profile.jpeg';
import { Link } from 'react-scroll';
// import natureVideo from '../assets/natureVideo.mp4';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-white' relative>
        <div className="max-w-[1000px] mx-auto px-10 flex flex-col justify-center h-full">
            {/* <div>
              <video src={natureVideo} autoPlay loop muted />
            </div> */}
            <p className='text-black'>Hi there, my name is</p>
            <h1 className='text-6xl sa:text-4xl font-bold text-[black] inline border-b-4 border-blue-800 w-1/2'>Brigita Bizjak</h1>
            <h2 className= 'text-3xl sa:text-4xl font-thin text-[white]'>I am a Frontend Developer in the making</h2>
            <p className='text-[black] py-3 max-w-[800px]'>I'm a passionate aspiring frontend developer with a strong foundation in JavaScript, CSS, HTML, and React.</p>
            <div>
              <Link to="portfolio" smooth={true} duration={500}>
            <button className='text-[black] border-2 px-6 font-bold py-3 my-2 flex items-center hover:bg-[#4955db] hover:border-black'>View my projects
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
            </button>
            </Link>
            <div>
            <img
                src={profile}
                alt="profile"
                style={{ width: '200px' }}
                className={`rounded-full float-right px-5 animate-pulse`}
            />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Home;

