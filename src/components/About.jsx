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
              Hello, nice to meet you! My name is Brigita and I am happy to see
              you visiting my website.👋
            </p>
          </div>
          <div>
            <p>
              Deep in JavaScript, React, I hone, <br></br>
              Crafting software, skills I
              own. <br />
              Enhancing experiences far and wide, <br />
              To bring your visions to <br />
              life, with pride.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
