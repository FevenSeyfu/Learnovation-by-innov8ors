import React from 'react'
import ContactForm from '../../components/ContactUs/ContactForm.jsx'
import CallToAction from '../../components/ContactUs/CallToAction.jsx'
import Faq from '../../components/ContactUs/Faq.jsx'
const ContactUs = () => {
  return (
    <>

      <div className="bg-lightOrange">
        <ContactForm />
        <CallToAction />
        <Faq />
      </div>

    </>
  )

}

export default ContactUs