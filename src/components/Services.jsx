import React from 'react'
import CareFeatures from './ServicesComponents/CareFeatures'
import WellnessToolkit from './ServicesComponents/WellnessToolkit'
import Main from './ServicesComponents/Main'
import AppAccess from './aboutComponents/AppAccess'

function Services() {
  return (
    <div className='bg-gray-100'>
      <Main/>
      <CareFeatures/>
      <WellnessToolkit/>
      <AppAccess/>

    </div>
  )
}

export default Services