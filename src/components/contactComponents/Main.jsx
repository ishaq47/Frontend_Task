import React from 'react'
import blue from "../../assets/blue.png"
function Main() {
  return (
    <div className='pt-16 px-4'>
        <h1 className='text-center md:text-3xl font-semibold text-2xl mb-6'>Expert advice, <a className='text-blue-400'>anytime, anywhere.</a><br/>
        Consult Now!  </h1>
        <div className=' flex justify-center items-center'>
            <img src={blue} alt='services' className='md:w-[35%]'/>
        </div>
    </div>
  )
}

export default Main