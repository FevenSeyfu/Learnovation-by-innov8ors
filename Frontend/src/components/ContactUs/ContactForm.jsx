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
  message: Yup.string().min(25, 'Message must be at least 25 characters').required('Required'),
});

const ContactForm = () => {
  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      company: '',
      subject: '',
      message: '',
    },
    validationSchema: ContactUsSchema,
    onSubmit: (values, { resetForm }) => {
      resetForm();
    },
  });

  const textInputFields = [
    { name: 'fullname', label: 'Full Name *', placeholder: 'john david' },
    { name: 'email', label: 'Your Email *', placeholder: 'example@yourmail.com' },
    { name: 'company', label: 'Company *', placeholder: 'yourcompany name here' },
    { name: 'subject', label: 'Subject *', placeholder: 'how can we help' },
  ];

  return (
    <div className="px-12 md:px-0 md:mx-[10%] md:w-[80%]">
      <h3 className="text-3xl mb-8 font-bold text-center md:pt-10 pt-5">Get in touch today!</h3>
      <form className="bg-white border-2 border-silver rounded-lg md:p-12 p-6" onSubmit={handleSubmit}>
        {textInputFields.map(field => (
          <TextInput
            key={field.name}
            label={field.label}
            placeholder={field.placeholder}
            onChange={handleChange(field.name)}
            error={errors[field.name]}
            value={values[field.name]}
          />
        ))}
        <TextArea
          label="Message *"
          placeholder="hello there, I would like to talk about how to.."
          onChange={handleChange('message')}
          error={errors.message}
          value={values.message}
        />
        <Button type="submit">Send</Button>
      </form>
    </div>
  );
};

export default ContactForm;