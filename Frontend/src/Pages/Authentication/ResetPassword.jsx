import React,  {useState} from 'react';
import { Link } from "react-router-dom";
import TextInput from '../../components/utility/textInput';
import Button from '../../components/utility/button';
import Image from '../../assets/images/Frame 422.png';
import { useFormik } from 'formik';
import * as Yup from 'yup';


const ResetPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
})

const ResetPassword = () => {
  
  const {values, handleChange, handleSubmit, errors} = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema:ResetPasswordSchema,
    onSubmit: values => {
      // alert(JSON.stringify(values));
      console.log(values);
    },
  });

  return (
    <div className="bg-lightOrange md:pt-24 pt-40 md:pb-60 pb-80">
      
      <div className="rounded-md bg-gradient-to-r from-purplePink to-deepOrange p-px md:mx-auto mx-12 md:w-6/12">
        
        <div className=" h-full w-full bg-white pt-8 rounded-md">
        
          <div className="md:px-16 px-8">

            <div className="flex justify-center">
              <h3 className="text-3xl font-bold mx-auto md:pt-12  bg-gradient-to-r from-textBlue via-fushiaPink to-lightPink inline-block text-transparent bg-clip-text">Reset Password</h3>
            </div>
          
            <form className="md:pt-6 pt-3" onSubmit={handleSubmit}>
              <TextInput 
                label="Email"
                onChange={handleChange('email')}
                error={errors.email}
                value={values.email}
              />
              
              <Button>
                <Link to='/resetPasswordTwo'>Reset Password</Link>
              </Button>
            </form>

            <div className="flex justify-center h-32 mb-15">
              <div className="mb-15">
              <img src={Image} alt="oh no!" />
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};


export default  ResetPassword;