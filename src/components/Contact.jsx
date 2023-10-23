import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 lg:pt-24'>
        <form method='POST' action="https://getform.io/f/e2ce95c0-4077-489b-b259-19925fb31a06" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-blue-700 text-gray-300'>Contact Me</p>
                <p className='text-gray-300 py-4'>Submit the form below to start collaborating</p>
            </div>
            <input className='bg-[white] p-2' type="text" placeholder='Your Name' name='name' />
            <input className='my-4 p-2 bg-[white]' type="email" placeholder='Your Email' name='email' />
            <textarea className='bg-[white] p-3' name="message" rows="10" placeholder='Your Message'></textarea>
            <button className='text-white border-2 hover:bg-white hover:text-[darkblue] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact