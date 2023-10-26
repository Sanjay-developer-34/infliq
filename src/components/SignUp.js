import React, { useState, useEffect} from "react";
import image5 from "../images/image 5.png";
import layer1 from "../images/Layer 1.png";
import { Link , useNavigate} from "react-router-dom";
import axios from 'axios';
import  {useFormik} from 'formik'
import { SignupSchema } from "./schemas";


// const validate = values => {
//   const errors = {};
//   if (!values.first_name) {
//     errors.first_name = 'Required';
//   } else if (values.first_name.length > 15) {
//     errors.first_name = 'Must be 15 characters or less';
//   }

//   if (!values.last_name) {
//     errors.last_name = 'Required';
//   } else if (values.last_name.length > 15) {
//     errors.last_name = 'Must be 15 characters or less';
//   }

//   if (!values.email) {
//     errors.email = 'Required';
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = 'Invalid email address';
//   }
//   return errors;
// };

export const SignUp = () => {

   const [message, setMessage ]= useState(' ');

    const navigate=useNavigate();
   const {values, errors, touched, handleBlur, handleChange, handleSubmit }= useFormik({
      initialValues:{

         first_name: '',
         last_name: '',
         phone_number : '',
         email: '',
         username: '',
         password: ''
      },

      validationSchema: SignupSchema,

      onSubmit: (values) => {
        // alert(JSON.stringify(values, null, 3));
        // setMessage("you have succefully registered");

        // const axios = require('axios');
        console.log(values);
        axios.post('http://3.88.144.157:8000/auth/register/', values)
        .then((response)=>{
              console.log(response); 
              // navigate(/login);
       }).catch((error)=>{
         console.log(error)
       })
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
        <form  method="post" onSubmit={handleSubmit}>
         <div className="form-group main">
            <input
              type="text"
              id=""
              name='first_name'
              placeholder="Enter First Name"
              value={values.first_name}
              onChange={handleChange}
              onBlur={handleBlur}
              className="  input"
            ></input>
            { errors.first_name && touched.first_name ? (<p className="form-error">{errors.first_name}</p>) : null }
          </div>
          <div className="form-group main">
            <input
              type="text"
              id=""
              name='last_name'
              placeholder="Enter Last Name"
              value={values.last_name}
              onChange={handleChange}
              onBlur={handleBlur}
              className="  input"
            ></input>
             { errors.last_name && touched.last_name ? (<p className="form-error">{errors.last_name}</p>) : null }
          </div>
          <div className="form-group main  ">
            <input
              type=" text"
              id="name"
              name='phone_number'
              placeholder="Enter Phone Number"
              value={values.phone_number}
              className="  input"
              onChange={handleChange}
              onBlur={handleBlur}
            ></input>
             { errors.phone_number && touched.phone_number ? (<p className="form-error">{errors.phone_number}</p>) : null }
          </div>
          <div className="form-group main">
            <input
              type=" email"
              id="eid"
              name='email'
              placeholder="Enter Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="  input"
            ></input>
             { errors.email && touched.email ? (<p className="form-error">{errors.email}</p>) : null }
          </div>
          <div className="form-group main">
            <input
              type="text"
              id=""
              name='username'
              placeholder="Enter Username"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              className="  input"
            ></input>
             { errors.username && touched.username ? (<p className="form-error">{errors.username}</p>) : null }
          </div>
          <div className="form-group main">
            <input
              type=" password"
              id="pwd"
              name='password'
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className="  input"
            ></input>
             { errors.password && touched.password ?(<p className="form-error">{errors.password}</p>) : null }
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
