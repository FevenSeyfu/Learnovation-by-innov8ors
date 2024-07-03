import React from 'react';
import TextInput from '../utility/textInput';
import TextArea from '../utility/textarea';
import Button from '../utility/button';
import { useFormik } from 'formik';
import * as Yup from 'yup';


const ContactUsSchema = Yup.object().shape({
  fullname: Yup.string().min(2, 'Name is too Short').max(50, 'Name is too Long!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  company: Yup.string().required('Required'),
  subject: Yup.string().required('Required'),
  message: Yup.string().required('Required'),
})

const ContactForm = () => {
  const {values, handleChange, handleSubmit, errors} = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      company: '',
      subject: '',
      message: '',
    },
    validationSchema:ContactUsSchema,
    onSubmit: values => {
      // alert(JSON.stringify(values));
      console.log(values);
    },
  });

  return (
    <div className="md:px-24 px-8">
      <h3 className="text-3xl mb-8 font-bold text-center md:pt-10 pt-5">Get in touch today!</h3>
      <form className="bg-white border-2 border-silver rounded-lg md:p-12 p-6" onSubmit={handleSubmit}>
        <TextInput 
          label="Full Name *"
          placeholder="john david"
          onChange={handleChange('fullname')}
          error={errors.fullname}
          value={values.fullname}
        />
        <TextInput 
          label="Your Email *"
          placeholder="example@yourmail.com"
          onChange={handleChange('email')}
          error={errors.email}
          value={values.email}
        />
        <TextInput 
          label="Company *"
          placeholder="yourcompany name here"
          onChange={handleChange('company')}
          error={errors.company}
          value={values.company}
        />
        <TextInput 
          label="Subject *"
          placeholder="how can we help"
          onChange={handleChange('subject')}
          error={errors.subject}
          value={values.subject}
        />
        <TextArea 
          label="Message *"
          placeholder="hello there, I would like to talk about how to.."
          onChange={handleChange('message')}
          error={errors.message}
          value={values.message}
        />
        <Button>Send</Button>
      </form>
    </div>
  )
}

export default ContactForm;