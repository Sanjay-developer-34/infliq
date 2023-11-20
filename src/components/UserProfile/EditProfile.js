import React, { useContext, useEffect, useState } from "react";
import story1 from '../../images/stroy1.png'
import Logout from '../../images/logout.png'
import InnerHeader from '../home/Include/InnerHeader'
import RightsideBar from '../home/RightSide/RightsideBar'
import Suggestions from '../home/leftsidebar/Suggestions'
import { AuthContext } from "../Contexts/AuthContext";
import axios from "axios";


function EditProfile() {
    

    const { state } = useContext(AuthContext);
    const accessToken = state.user.access;
//   const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAwMTQxODM5LCJqdGkiOiI0ZjRmNmMxMmE1ZWI0NTM1YWNkMmVhMTE2NmM4YWZlOSIsInVzZXJfaWQiOjEyNn0.YIJtIg63p3CmsQhTMQ5ydJ8Zwqu6XB0MneoV6I6TFOo";
  
  const [userInfo, setUserInfo] = useState({});

const getProfileData = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`
        },
      };
      
      const response = await axios.get("http://3.88.144.157:8000/api/myprofile", config);
  
      console.log('API Response:', response.data);
  
      setUserInfo(response.data);
    } catch (error) {
      console.log('API Error:', error);
    }
  };

  useEffect(() => {
    getProfileData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo(prevState => ({
      ...prevState,
      data: {
        ...prevState.data,
        [name]: value,
              profile: {
                ...prevState.data.profile,
                [name]: value
              }     
      }
    }));
  };


//   updated data will be post there.....................................

const updatedData=(prevState => ({
    data: {
      bio: '',
      avatar: '',
      location:'',
      banner:'',
      anonymous_avatar:'',
      sex:'',
      dob:'',
      name:'',
      username:'',
      phone_number:'',
      email:'',
    }
  }));

const handleSubmit = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`
        },
      };
      
      const  response =  await axios.put("http://3.88.144.157:8000/api/myprofile/", updatedData ,config);
      setUserInfo(response.data);
      console.log('Profile updated successfully');
    } catch (error) {
      console.error('API Error:', error);
    }
  };

 

  
 

  if  (!userInfo || !userInfo.data) { return <div>Loading...</div>;}else{
    return (
       
        <div className='edit_profile container'>
        
         <InnerHeader />
         <div className='row'>
            <div className='col-md-3'> <Suggestions /></div>
            <div className='col-md-6'> 
            <div className='container-fluid'>
                <div className=' row'>
                    <div className=''>
                    <div className='edit_profile_content'>
                        <div className=' center_header'>
                                <div className='RS_bar_img'>
                                    <img src={story1} alt='' className='Edit_profile_img'></img>
                                </div>
                                <div className='Username'>
                                    <p className='uname text_muted'>ashwadh_chowdary</p>
                                    <p className='change_profile'>Change profile photo</p>
                                </div>
                                
                            </div>
                            <div className='input_field '>
                                <div className='input_heading'>Name</div>
                                <div className='input_content'>
                                    <input type='text' className='form-control' value={userInfo.data.first_name} name='first_name' onChange={
                                        handleInputChange
                                    }  ></input>
                                    <p className='input_pera'>Help people discover your account by using the name you're
                                        known by: either your full name, nickname, or business name.
                                    </p>
                                </div>
                            </div>

                            <div className='input_field'>
                                <div className='input_heading'>Username</div>
                                <div className='input_content'>
                                    <input type='text' className='form-control ' name='username' onChange={
                                        handleInputChange
                                    }  value={userInfo.data.username}></input>
                                    <p className='input_pera'>In most cases, you'll be able to change your username back to up
                                        vox_ for another 14 days.</p>
                                </div>
                            </div>

                            <div className='input_field'>
                                <div className='input_heading'>Bio</div>
                                <div className='input_content'>
                                    <input type='text-area' className='form-control ' name='bio'  onChange={
                                        handleInputChange
                                    }  value={userInfo.data.profile.bio}></input>
                                    <p className='input_pera'>0 / 150</p>
                                </div>
                            </div>
                            
                            <div className='input_field'>
                            <div className='input_heading'></div>
                                <div className='input_content'>
                                    <p className='input_pera details_head'>Personal information</p>
                                    <p className='input_pera'>Provide your personal information, even if the account is used for a business,
                                    a pet or something else. This won't be a part of your public profile.</p>
                                </div>
                            </div>
                            <div className='input_field personal_detail'>
                                <div className='input_heading'>Email</div>
                                <div className='input_content '>
                                    <input type='text' className='form-control ' name='email'  onChange={
                                        handleInputChange
                                    }  value={userInfo.data.email}></input>
                                </div>
                            </div>

                            <div className='input_field personal_detail'>
                                <div className='input_heading'>Phone number </div>
                                <div className='input_content'>
                                    <input type='text' className='form-control ' name='phone_number'  onChange={
                                        handleInputChange
                                    }  value={userInfo.data.phone_number}></input>
                                </div>
                            </div>

                            <div className='input_field personal_detail'>
                                <div className='input_heading'>Gender</div>
                                <div className='input_content'>
                                    <input type='text' className='form-control ' name='sex'  onChange={
                                        handleInputChange
                                    }  value={userInfo.data.profile.sex}></input>
                                </div>
                            </div>

                            <div className='input_field personal_detail'>
                                <div className='input_heading'>Date of birth</div>
                                <div className='input_content'>
                                    <input type='text' className='form-control ' name='dob'  onChange={
                                        handleInputChange
                                    }  value={userInfo.data.profile.dob}></input>
                                </div>
                            </div>
                            <div className='edit_profile_footer'>
                                <div className='edit_footer_content'>
                                    <button onClick={handleSubmit} className='submit_btn'>Submit</button>
                                    <p className='change_account' >Private Account</p>
                                </div>
                                <div className='logout_btn'>
                                    <img src={Logout} alt=''></img>
                                    <p>Log Out</p>
                                </div>   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className='col-md-3'><RightsideBar /> </div>
         </div>
           
        </div>
        
    )
        }
}

export default EditProfile