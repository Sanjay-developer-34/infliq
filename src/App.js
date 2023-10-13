import React from 'react';
import './App.css';
import './Responsive.css'
import { SignUp } from './components/SignUp';
import { LogIn } from './components/LogIn'
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import PostSomething from './components/postsomething/PostSomething';
import EditProfile from './components/editProfile/EditProfile';
import Message from './components/message_sec/Message';
import Profile from './components/profile/Profile';
import Explore from './components/explore/Explore';
import Reels from './components/reels/Reels';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/Explore_page' element={<Explore/>} />
        <Route path='/Shorts' element={<Reels/>} />
        <Route path='/reels' element={<Reels/>} />
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/edit_profile' element={<EditProfile/>}/>
        <Route path='/message' element={<Message/>}/>
        <Route path='/post' element={<PostSomething/>}/>
        <Route path='login' element={<LogIn />} />
        <Route path='register' element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default App