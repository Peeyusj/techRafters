import React from 'react'

const ConForm = () => {
  return (
    <div name='contact' className=' w-full  py-12 mx-auto flex items-center justify-center bg-white'>

        <div className='w-full'>
            <form action="https://getform.io/f/755207af-25bb-4a26-a310-a37478cf33ea" method='POST' className='flex items-center justify-center flex-col w-full'>
                <input type="text" name='name' placeholder='Enter your name' className='p-2 capitalize mb-4 w-full md:w-3/4  bg-transparent border-2 rounded-md text-black focus:outline-none ' />
                <input type="email" name='email' placeholder='Enter your Email' className='p-2 mb-4 w-full md:w-3/4    bg-transparent border-2 rounded-md text-black focus:outline-none ' />
                <input type="text" name='phone' placeholder='Enter your Mobile no.' className='p-2 mb-4 w-full md:w-3/4  bg-transparent border-2 rounded-md text-black focus:outline-none ' />
                <textarea name="message" placeholder='Enter your message...'  rows="5" className=' resize-none p-2 mb-4 bg-transparent border-2 rounded-md w-full md:w-3/4  text-black focus:outline-none'></textarea>
                <button className='text-white bg-dark-green w-full md:w-1/4    px-6 py-2 mx-auto flex items-center justify-center rounded-md hover:scale-110 duration-300'>Let's talk</button>
            </form>
        </div>
    </div>
  )
}

export default ConForm