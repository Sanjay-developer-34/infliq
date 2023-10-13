import React from 'react'
import NewLogo from '../../images/NewLogo 1.png'
import story1 from '../../images/stroy1.png'
import post1 from '../../images/Frame (8).png'
import post2 from '../../images/Frame (9).png'
import post3 from '../../images/Frame (10).png'
import blank_post2 from '../../images/Frame (11).png'
import { Link } from 'react-router-dom'



function ProfileData() {
  return (
    <div className='profile_data'>
      <div className='reels_header px-4'>
        <img src={NewLogo} alt=''></img>
      </div>
      <div className='profile_data_header'>
        <div className='profile_data_photo'> <img src={story1} alt=''></img></div>
       
        <div className='users_information'>
          <div className='user_name'>
            <p>aswadh_chowdary</p>
            <i className="fa-solid fa-gear"></i>
          </div>
          <div className='post_count_data'>
            <p><b>1234 </b>posts</p>
            <p><b>9999 </b>follwers</p>
            <p><b>111 </b>following</p>
          </div>
          <Link to='/edit_profile'><button className='btn  btn-secondary Edit_profile_btn'>Edit Profile</button></Link>
          <p className='profile_users_name'>Aswadh Chowdary</p>
          <p className='user_caption text-muted'>bio</p>
          <p className='user_caption'>bio lorem ipsum doler sit, http://damodarchowdary.com</p>
          <p className='user_caption'>ashwadhchowdary@gmail.com</p>
        </div>
      </div>
      <div className='profile_data_body'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <div className="collapse navbar-collapse profile_data_nav" id="navbarNav">
              <ul className="navbar-nav explore_list">
                <li className="nav-item profile_data_nav_list">
                  <i className="fa-regular fa-copy"></i>
                  <a className="nav-link" aria-current="page" href=" ">POSTS</a>
                </li>
                <li className="nav-item profile_data_nav_list">
                  <i className="fa-brands fa-youtube"></i>
                  <Link to='/reels'><a className="nav-link" href=" ">SHORTS</a></Link>
                </li>
                <li className="nav-item profile_data_nav_list">
                  <i className="fa-regular fa-bookmark"></i>
                  <a className="nav-link" href=" ">SAVED</a>
                </li>
                <li className="nav-item profile_data_nav_list">
                  <i className="fa-regular fa-id-badge"></i>
                  <a className="nav-link" href=" " tabIndex="-1" aria-disabled="true">TAGGED</a>
                </li>
              </ul>
            </div>

          </div>
        </nav>
         <div className='profile_post_sec'>
        <div className='row'>
          <div className='col-lg-4 p-1'>
            <div className='uploaded_post'>
               <img src={post1} alt=''></img>
            </div>
          </div>

          <div className='col-lg-4 p-1'>
            <div className='uploaded_post'>
               <img src={post2} alt=''></img>
            </div>
          </div>

          <div className='col-lg-4 p-1'>
            <div className='uploaded_post'>
               <img src={post3} alt=''></img>
            </div>
          </div>

          <div className='col-lg-4 p-1'>
            <div className='upcoming_post'>
            <img src={blank_post2} alt=''></img>
            </div>
          </div>

          <div className='col-lg-4 p-1'>
            <div className='upcoming_post'>
            <img src={blank_post2} alt=''></img>
            </div>
          </div>

          <div className='col-lg-4 p-1'>
            <div className='upcoming_post'>
            <img src={blank_post2} alt=''></img>
            </div>
          </div>

          <div className='col-lg-4 p-1'>
            <div className='upcoming_post'>
            <img src={blank_post2} alt=''></img>
            </div>
          </div>


          <div className='col-lg-4 p-1'>
            <div className='upcoming_post'>
            <img src={blank_post2} alt=''></img>
            </div>
          </div>

          <div className='col-lg-4 p-1'>
            <div className='upcoming_post'>
            <img src={blank_post2} alt=''></img>
            </div>
          </div>


          <div className='col-lg-4 p-1'>
            <div className='upcoming_post'>
            <img src={blank_post2} alt=''></img>
            </div>
          </div>

          </div>
          </div>
        </div>
      </div>

    
  )
}

export default ProfileData