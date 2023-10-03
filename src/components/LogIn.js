import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import layer1 from "../images/Layer 1.png";
export const LogIn = () => {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [message,setMessage]=useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData={
        'userEmail':email,
        'password':password
    }
    setMessage("You have logged in successfully")
    console.log(userData);
  };

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
              placeholder="Enter Phone or Email"
              className="form-control input"
              onChange={handleEmailChange}
              value={email}
            ></input>
          </div>
          <div className="form-group main">
            <input
              type=" password"
              id="password"
              placeholder="Enter password"
              className="form-control input"
              onChange={handlePasswordChange}
              value={password}
            ></input>
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
