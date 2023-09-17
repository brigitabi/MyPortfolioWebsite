import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-blue-800'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hello, nice to meet you! My name is Brigita and I am happy to see you visiting my website.</p>
            </div>
            <div>
              <p>I'm deeply immersed in mastering JavaScript, React, CSS, and HTML, honing my skills through a multitude of projects. My passion lies in crafting exceptional software that enhances the experiences of those it touches. My expertise extends from serving individuals and small businesses to partnering with large enterprise corporations. Imagine having a software virtuoso at your disposal—what possibilities would you explore?</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;