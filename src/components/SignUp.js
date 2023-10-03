import React, { useState, useEffect} from "react";
import image5 from "../images/image 5.png";
import layer1 from "../images/Layer 1.png";
import { Link } from "react-router-dom";
export const SignUp = () => {

   const [email, setEmail]=useState(' ');
   const[name, setName]=useState(' ')
   const [username, setUsername]=useState(' ');
   const [password, setPassword]=useState(' ');
   const [message, setMessage ]= useState(' ');

   const handleEmailChange=(e)=>{
      setEmail(e.target.value);
   };

   const handleNameChange=(e)=>{
      setName(e.target.value);
   };

   const handleUsernameChange=(e)=>{
      setUsername(e.target.value);
   };

   const handlePasswordChange=(e)=>{
      setPassword(e.target.value);
   };
   
   const handleSubmit=(e)=>{
      e.preventDefault();
      const userData={
         'userEmail': email,
         'name': name,
         'username': username,
         'password': password
      }
      setMessage("you have succefully registered")
      console.log(userData);
   };



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
          <div className="form-group main  ">
            <input
              type=" text"
              id="name"
              placeholder="Enter Phone or Email"
              value={email}
              className="form-control input"
              onChange={handleEmailChange}
            ></input>
          </div>
          <div className="form-group main">
            <input
              type=" text"
              id="eid"
              placeholder="Enter Full name"
              value={name}
              onChange={handleNameChange}
              className="form-control input"
            ></input>
          </div>
          <div className="form-group main">
            <input
              type="text"
              id="eid"
              placeholder="Enter Username"
              value={username}
              onChange={handleUsernameChange}
              className="form-control input"
            ></input>
          </div>
          <div className="form-group main">
            <input
              type=" password"
              id="pwd"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
              className="form-control input"
            ></input>
          </div>
          <div>
            <p className=" Signup_p1">By pressing "Signup" you agree to our</p>
            <p className="Signup_p2">Terms & Condition</p>
          </div>
          <div className="from-group main button">
            <input
              type="submit"
              value="Signup"
              className=" form-control  Signup_btn"
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
