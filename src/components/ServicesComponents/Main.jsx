import React from 'react'
import services from "../../assets/services.png"
function Main() {
  return (
    <div className='pt-10 px-4'>
        <h1 className='text-center md:text-3xl font-semibold text-2xl mb-4'>From <a className='text-blue-400'>Consultation</a> to <a className='text-blue-400'>Diagnosis</a> & <a className='text-blue-400'>Treatment</a>,<br/>
        All under one cloud line!</h1>
        <div className=' flex justify-center items-center'>
            <img src={services} alt='services' className='w-4/5'/>
        </div>
    </div>
  )
}

export default Main