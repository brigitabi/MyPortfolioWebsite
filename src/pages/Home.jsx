import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import profile from '../assets/profile.jpeg';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-white">
      <div className="max-w-[1000px] mx-auto px-10 flex flex-col justify-center h-full">
      
        <h1 className="text-4xl sa:text-4xl font-bold text-[black] inline border-blue-800 w-1/2 py-8">
        Hello there! I'm Brigita, a self-taught developer...
        </h1>
        <h2 className="text-xl sa:text-4xl font-thin text-black">
         ...fueled by curiosity and a passion for learning. Join me as I navigate the ever-changing world of technology, always eager to tackle new challenges and create innovative solutions.
        </h2>
        <p className="text-[black] py-3 max-w-[800px]">
          <div className="">
            <Link to="portfolio" smooth={true} duration={500}>
              <button className="text-[black] border-2 px-6 font-bold py-3 my-2 flex items-center hover:bg-[#101221] hover:border-black hover:text-white">
                View my projects
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-3 " />
                </span>
              </button>
            </Link>
          </div>
          <div className="flex justify-center mt-8">
            <img
              src={profile}
              alt="profile"
              style={{ width: '200px' }}
              className={`rounded-full float-right px-5 animate-pulse`}
            />
          </div>
        </p>
      </div>
    </div>
  );
};

export default Home;
