import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-blue-800">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hello, nice to meet you!
            </p>
          </div>
          <div>
            <p>
              I am tech professional with experiences in programming, tech support and data. 
            </p>
            <p className='py-4'>
            Reading is one of the ways I constantly grow and expand. I set aside time to dive into different topics, learning new things and gaining fresh perspectives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
