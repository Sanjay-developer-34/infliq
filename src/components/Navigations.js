import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from './home/Home';
import Explore from './Explore/Explore';
import Message from './Messages/Message';
import { LogIn } from './Auth/Login';
import { SignUp } from './Auth/SignUp';
import Profile from './UserProfile/Profile';
import EditProfile from './UserProfile/EditProfile';
import Reels from './Reels/Reels'
import AnotherUserProfile from './AnotherUser/AnotherUserProfile';


function Navigations() {
  return (
    <Routes>
        <Route path='/' element={<SignUp/>} />
        <Route path='/home' element={<Home/>} /> 
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/edit_profile' element={<EditProfile />}/>
         <Route path='/Explore_page' element={<Explore/>} />
        <Route path='/Shorts' element={<Reels/>} />
        <Route path='/reels' element={<Reels/>} />
        <Route path='/message' element={<Message/>}/> 
        <Route path='login' element={<LogIn />} />
        <Route path='register' element={<SignUp />} />
        <Route path='/anotherUser/:userID' element={<AnotherUserProfile />} />
      </Routes>
  )
}

export default Navigations