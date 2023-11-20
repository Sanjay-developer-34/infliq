import React, { useState, useEffect, useContext } from "react";
import image5 from "../../images/image 5.png";
import layer1 from "../../images/Layer 1.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import { SignupSchema } from "../schemas";
import { AuthContext } from "../Contexts/AuthContext";





export const SignUp = () => {
  const [message, setMessage] = useState(" ");

  const {Authdispatch}=useContext(AuthContext);

  const navigate = useNavigate();
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      phone_number: "",
      email: "",
      username: "",
      password: "",
      foreign_user: false,
      country: "1",
    },

    validationSchema: SignupSchema,

    onSubmit: (values) => {
      const userDetails = {
        'username': values.username,
        'phone_number': values.phone_number,
        'password': values.password,
        'first_name': values.first_name,
        'email': values.email,
        'last_name': values.last_name,
        'foreign_user': false,
        'country': "1",
      };


      console.log(userDetails)

      axios.post("http://3.88.144.157:8000/auth/register/", userDetails)
  .then((response) => {
    console.log('Response:', response); // Log the response for debugging
    if (response.status === 200) {
      // Successful registration
      console.log('Registration successful'); // Log success for debugging
      const userData =response.data;
      Authdispatch({ type: 'REGISTER', payload: userData });
      navigate('/login');
    } else {
      // Handle different status codes if needed
      console.log('Unexpected status code:', response.status); // Log unexpected status code
    }
  })
  .catch((error) => {
    console.log('Error:', error); // Log the error for debugging
  });

    },
  });

  console.log(errors);

  return (
    <div className="App Signup_sec">
      <div className="Main_logo">
        <img src={layer1} alt=""></img>
      </div>
      <div className="Logo_img">
        <img src={image5} alt=""></img>
      </div>
      <div className="Signup_content">
        <p>{message}</p>
        <form method="post" onSubmit={handleSubmit}>
          <div className="form-group main">
            <input
              type="text"
              id=""
              name="first_name"
              placeholder="Enter First Name"
              value={values.first_name}
              onChange={handleChange}
              onBlur={handleBlur}
              className="  input"
            ></input>
            {errors.first_name && touched.first_name ? (
              <p className="form-error">{errors.first_name}</p>
            ) : null}
          </div>
          <div className="form-group main">
            <input
              type="text"
              id=""
              name="last_name"
              placeholder="Enter Last Name"
              value={values.last_name}
              onChange={handleChange}
              onBlur={handleBlur}
              className="  input"
            ></input>
            {errors.last_name && touched.last_name ? (
              <p className="form-error">{errors.last_name}</p>
            ) : null}
          </div>
          <div className="form-group main  ">
            <input
              type=" text"
              id="name"
              name="phone_number"
              placeholder="Enter Phone Number"
              value={values.phone_number}
              className="  input"
              onChange={handleChange}
              onBlur={handleBlur}
            ></input>
            {errors.phone_number && touched.phone_number ? (
              <p className="form-error">{errors.phone_number}</p>
            ) : null}
          </div>
          <div className="form-group main">
            <input
              type=" email"
              id="eid"
              name="email"
              placeholder="Enter Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="  input"
            ></input>
            {errors.email && touched.email ? (
              <p className="form-error">{errors.email}</p>
            ) : null}
          </div>
          <div className="form-group main">
            <input
              type="text"
              id=""
              name="username"
              placeholder="Enter Username"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              className="  input"
            ></input>
            {errors.username && touched.username ? (
              <p className="form-error">{errors.username}</p>
            ) : null}
          </div>
          <div className="form-group main">
            <input
              type=" password"
              id="pwd"
              name="password"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className="  input"
            ></input>
            {errors.password && touched.password ? (
              <p className="form-error">{errors.password}</p>
            ) : null}
          </div>
          <div>
            <p className=" Signup_p1">By pressing "Signup" you agree to our</p>
            <p className="Signup_p2">Terms & Condition</p>
          </div>
          <div className="from-group main button">
            <input
              type="submit"
              value="Signup"
              className="form-control Signup_btn"
            ></input>
          </div>
          <div className="Signup_foot">
            <p>Have an account?</p>
            <Link to="/login">
              <p className="foot_p">Log in</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
