import React from 'react';
import TextInput from '../../components/textInput';
import TextArea from '../../components/textarea';
import Button from '../button';

const ContactForm = () => {
  return (
    <div className="mt-12 px-24">
      <h3 className="text-3xl mt-12 mb-8 font-bold text-center">Get in touch today!</h3>
      <div className="bg-white border-2 border-silver rounded-lg p-12">
        <TextInput 
          label="Full Name *"
          placeholder="john david"
        />
        <TextInput 
          label="Your Email *"
          placeholder="example@yourmail.com"
        />
        <TextInput 
          label="Company *"
          placeholder="yourcompany name here"
        />
        <TextInput 
          label="Subject *"
          placeholder="how can we help"
        />
        <TextArea 
          label="Message *"
          placeholder="hello there, I would like to talk about how to.."
        />
        <Button onClick={()=>{}}>Send</Button>
      </div>
    </div>
  )
}

export default ContactForm;