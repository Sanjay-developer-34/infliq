import React, { useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import layer1 from "../images/Layer 1.png";
import axios from 'axios';
import { useFormik } from "formik";
import { loginSchema } from "./schemas";

// const validate = values => {
//   const errors = {};
//   if (!values.password) {
//     errors.password = 'Required';
//   } else if (values.password.length < 8) {
//     errors.password = 'Minimum 8 character required';
//   }

//   if (!values.email) {
//     errors.email = 'Required';
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = 'Invalid email address';
//   }
//   return errors;
// };

export const LogIn = () => {
 
  const [message, setMessage ]= useState(' ');
  const navigate=useNavigate('')
  const {values, errors, touched, handleBlur,  handleChange, handleSubmit}= useFormik({
     initialValues:{
        email: '',
        password: ''
     },

     validationSchema: loginSchema,

     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
       setMessage("you have succefully logged in ");

       // const axios = require('axios');

       axios.post('http://3.88.144.157:8000/auth/email_login/', values)
       .then((res)=>{
         if(res.data.status){
    
         navigate('/')
    
         } else{
    
             setMessage("login failed")
          
         }
      }).catch((errors)=>{
        console.log(errors)
      })
     }, 

     });
 
  return (
    <div className="App Signup_sec">
      <div className="Main_logo">
        <img src={layer1} alt=""></img>
      </div>
      <div className="LogIn_content">
      <p>{message}</p>
        <form method="post" onSubmit={handleSubmit}>
          <div className="form-group main">
            <input
              type=" text"
              id="email"
              name="email"
              placeholder="Enter Phone or Email"
              className=" input"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            ></input>
             {errors.email && touched.email ? (<p className="form-error">{errors.email}</p>) : ('')}
          </div>
          <div className="form-group main">
            <input
              type=" password"
              id="password"
              name="password"
              placeholder="Enter password"
              className=" input"
              value={values.password}
              onBlur={handleBlur}
              onChange={handleChange}
            ></input>
            { errors.password && touched.password ? 
            (<p className="form-error">{errors.password}</p>) : null}
          </div>
          <div>
            <p className="LogIn_p">forgot password?</p>
          </div>
          <div className="from-group main button">
            <input
              type="submit"
              value="Login"
              className=" form-control  Login_btn"
            ></input>
          </div>
          <div className="Signup_foot">
            <p>Don't have an account?</p>
            <Link to='/register'><p className='foot_p'>SignUp</p></Link>
          </div>
        </form>
      </div>
    </div>
  );
};
