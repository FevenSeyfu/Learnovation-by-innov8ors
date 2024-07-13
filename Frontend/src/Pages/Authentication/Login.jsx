import React from "react";
import { Link, useNavigate } from "react-router-dom";
import TextInput from "../../components/utility/textInput";
import Button from "../../components/utility/button";
import ThirdPartyButton from "../../components/utility/thirdPartyButton";
import Image from "../../assets/images/Frame 422.png";
import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

const LogInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("Required")
    .min(8, "Must be at least 8 characters")
    .max(12, "Must be at most 12 characters"),
});

const LogIn = () => {
  const navigate = useNavigate();
  const { values, handleChange, handleBlur, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LogInSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit();
    navigate("/dashboard");
  };

  const googleLogin = useGoogleLogin({
    onSuccess: (codeResponse) => {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo? 
            access_token=${codeResponse.access_token}`,
          {
            headers: {
              Authorization: `Bearer 
                ${codeResponse.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          navigate("/dashboard");
        })
        .catch((err) => console.log(err));
    },
    onError: (error) => console.log("Login Failed:", error),
  });
  return (
    <div className="bg-lightOrange md:pt-20 pt-20 md:pb-30 pb-20 dark:bg-gray-900 dark:text-white">
      <div className="md:mb-10 mb-5 rounded-md bg-gradient-to-r from-purplePink to-deepOrange p-px md:mx-auto mx-12 md:w-6/12 ">
        <div className=" h-full w-full bg-white pt-8 rounded-md dark:bg-gray-900 dark:text-white">
          <div className="md:px-16 px-8">
            <div className="flex justify-center">
              <h3 className="text-3xl font-bold mx-auto md:pt-12  bg-gradient-to-r from-textBlue via-fushiaPink to-lightPink inline-block text-transparent bg-clip-text">
                Login
              </h3>
            </div>

            <form className="md:pt-6 pt-3" onSubmit={handleFormSubmit}>
              <TextInput
                label="Email"
                onChange={handleChange("email")}
                onBlur={handleBlur("email")}
                error={touched.email && errors.email ? errors.email : ""}
                value={values.email}
                autocomplete="email"
              />
              <TextInput
                label="Password"
                type="password"
                onChange={handleChange("password")}
                onBlur={handleBlur("password")}
                error={
                  touched.password && errors.password ? errors.password : ""
                }
                value={values.password}
                autocomplete="current-password"
              />

              <div className="flex justify-end mb-3">
                <p className="text-sm font-medium underline">
                  <Link to="/resetPassword">Forgot Password?</Link>
                </p>
              </div>

              <Button type="submit">
                Join
              </Button>

              <div className="flex justify-end">
                <p className="text-sm font-semibold">
                  Don't have an account? <Link to="/signup">Signup</Link>
                </p>
              </div>

              <div className="flex items-center md:mt-5">
                <div className="h-px flex-1 bg-silver pr-5 dark:bg-neutral-700"></div>
                <span className="pr-3 pl-3 text-lg">or</span>
                <div className="h-px flex-1 bg-silver dark:bg-neutral-700"></div>
              </div>

              <div className="mt-2 text-textColor font-medium">
                <ThirdPartyButton onClick={(e) => {e.preventDefault(); googleLogin();}}>
                  <div className="px-3">
                    <FcGoogle className="h-5 w-5" />
                  </div>
                  Login with Google
                </ThirdPartyButton>
              </div>

              <div className="mt-2 text-textColor font-medium">
                <ThirdPartyButton>
                  <div className="px-3">
                    <ImGithub className="h-5 w-5" />
                  </div>
                  Login with GitHub
                </ThirdPartyButton>
              </div>
            </form>

            <div className="flex justify-center h-32 mb-15">
              <div className="mb-15">
                <img src={Image} alt="oh no!" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center md:text-base text-sm">
        <p>By Signing up, you acknowledge that you have read </p>
        <p>
          the <Link className="underline">terms and conditions</Link> and{" "}
          <Link className="underline">privacy policy.</Link>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
