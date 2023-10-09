import React from 'react';
import './App.css';
import { SignUp } from './components/SignUp';
import { LogIn } from './components/LogIn'
import { Route, Routes } from 'react-router-dom';
// import Home from './components/home/Home';
// import EditProfile from './components/profile/EditProfile';
// import Home from './components/home/Home';
// import Post from './components/home/post/Post';
import Header from './components/home/header/Header';
import Home from './components/home/Home';
import PostSomething from './components/postsomething/PostSomething';
import EditProfile from './components/profile/EditProfile';
import Reels from './components/reels/Reels';
import Message from './components/message_sec/Message';
import Explore from './components/explore/Explore';
import ProfileData from './components/profile/ProfileData';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<ProfileData/>} />
        <Route path='/post' element={<PostSomething/>}/>
        <Route path='login' element={<LogIn />} />
        <Route path='register' element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default App