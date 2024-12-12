import React from 'react'
import Main from './contactComponents/Main'
import ContactForm from './contactComponents/ContactForm'
import ContactSection from './contactComponents/ContactSection'

function Contact() {
  return (
    <div className='bg-gray-100'>
      <Main/>
      <ContactForm/>
      <ContactSection/>
    </div>
  )
}

export default Contact