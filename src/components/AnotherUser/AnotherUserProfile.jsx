import React, { useContext, useEffect, useState } from "react";
import NewLogo from "../../images/NewLogo 1.png";
import story1 from "../../images/stroy1.png";
import post1 from "../../images/Frame (8).png";
import post2 from "../../images/Frame (9).png";
import post3 from "../../images/Frame (10).png";
import blank_post2 from "../../images/Frame (11).png";
import { Link, useParams } from "react-router-dom";
import InnerHeader from "../home/Include/InnerHeader";
import RightsideBar from "../home/RightSide/RightsideBar";
import { AuthContext } from "../Contexts/AuthContext";
import axios from "axios";

function AnotherUserProfile() {
  const { state } = useContext(AuthContext);
  const accessToken = state.user.access;
  const {userID}= useParams();
  const [userInfo, setUserInfo] = useState({});

  const getProfileData = async () => {
    const config = {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    };
    
    await axios
      .get("http://3.88.144.157:8000/api/user/" +userID, config)
    .then((res) => {
        console.log('api called')
        setUserInfo(res.data);
        console.log(userInfo)
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProfileData();
  }, []);
  

  if  (!userInfo || !userInfo.data) { return <div>Loading...</div>;}else{
    return (
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-lg-9">
            <div className="profile_data">
              <div className="reels_header px-4">
                {/* <img src={NewLogo} alt=''></img> */}
                <InnerHeader />
              </div>
              <div className="profile_data_header">
                <div className="profile_data_photo">
                  
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwBgYAbyDg-2X7_Pba-oovRyPyTTmXK5l3XENFtj0&s" alt=""></img>
                </div>

                <div className="users_information">
                  <div className="user_name">
                    <p>{userInfo.data.username
                    }</p>
                    <i className="fa-solid fa-gear"></i>
                  </div>
                  <div className="post_count_data">
                    <p>
                      <b>1234 </b>posts
                    </p>
                    <p>
                      <b>{userInfo.data.followers_count} </b>follwers
                    </p>
                    <p>
                      <b>{userInfo.data.followings_count} </b>following
                    </p>
                  </div>
                  <Link to="/edit_profile">
                    <button className="btn  btn-secondary Edit_profile_btn">
                     follow
                    </button>
                  </Link>
                  <p className="profile_users_name">
                    {userInfo.data.first_name} {userInfo.data.last_name}
                  </p>
                  <p className="user_caption text-muted">bio</p>
                  <p className="user_caption">{userInfo.data.profile.bio}</p>
                  <p className="user_caption"> {userInfo.data.email}</p>
                </div>
              </div>
              <div className="profile_data_body">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  <div className="container-fluid">
                    <div
                      className=" navbar-collapse profile_data_nav"
                      id="navbarNav"
                    >
                      <ul className="navbar-nav explore_list">
                        <li className="nav-item profile_data_nav_list">
                          <i className="fa-regular fa-copy"></i>
                          <a className="nav-link" aria-current="page" href=" ">
                            POSTS
                          </a>
                        </li>
                        <li className="nav-item profile_data_nav_list">
                          <i className="fa-brands fa-youtube"></i>
                          <Link to="/reels">
                            <a className="nav-link" href=" ">
                              SHORTS
                            </a>
                          </Link>
                        </li>
                        <li className="nav-item profile_data_nav_list">
                          <i className="fa-regular fa-bookmark"></i>
                          <a className="nav-link" href=" ">
                            SAVED
                          </a>
                        </li>
                        <li className="nav-item profile_data_nav_list">
                          <i className="fa-regular fa-id-badge"></i>
                          <a
                            className="nav-link"
                            href=" "
                            tabIndex="-1"
                            aria-disabled="true"
                          >
                            TAGGED
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
                <div className="profile_post_sec">
                  <div className="row">
                    <div className="col-lg-4 p-1">
                      <div className="uploaded_post">
                        <img src={post1} alt=""></img>
                      </div>
                    </div>

                    <div className="col-lg-4 p-1">
                      <div className="uploaded_post">
                        <img src={post2} alt=""></img>
                      </div>
                    </div>

                    <div className="col-lg-4 p-1">
                      <div className="uploaded_post">
                        <img src={post3} alt=""></img>
                      </div>
                    </div>

                    <div className="col-lg-4 p-1">
                      <div className="upcoming_post">
                        <img src={blank_post2} alt=""></img>
                      </div>
                    </div>

                    <div className="col-lg-4 p-1">
                      <div className="upcoming_post">
                        <img src={blank_post2} alt=""></img>
                      </div>
                    </div>

                    <div className="col-lg-4 p-1">
                      <div className="upcoming_post">
                        <img src={blank_post2} alt=""></img>
                      </div>
                    </div>

                    <div className="col-lg-4 p-1">
                      <div className="upcoming_post">
                        <img src={blank_post2} alt=""></img>
                      </div>
                    </div>

                    <div className="col-lg-4 p-1">
                      <div className="upcoming_post">
                        <img src={blank_post2} alt=""></img>
                      </div>
                    </div>

                    <div className="col-lg-4 p-1">
                      <div className="upcoming_post">
                        <img src={blank_post2} alt=""></img>
                      </div>
                    </div>

                    <div className="col-lg-4 p-1">
                      <div className="upcoming_post">
                        <img src={blank_post2} alt=""></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <RightsideBar />
          </div>
        </div>
      </div>
    );
  }
}


export default AnotherUserProfile;
