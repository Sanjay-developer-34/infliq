import React from 'react';
import './App.css';
import { SignUp } from './components/SignUp';
import { LogIn } from './components/LogIn'
import { Route, Routes } from 'react-router-dom';
// import Home from './components/home/Home';
// import EditProfile from './components/profile/EditProfile';
// import Home from './components/home/Home';
// import Post from './components/home/post/Post';
import Header2 from './components/home/header/Header';
import Home from './components/home/Home';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<LogIn />} />
        <Route path='register' element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default App