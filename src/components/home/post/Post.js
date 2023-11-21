import React, { useEffect, useState } from 'react'
import PostImg from '../../../images/post_img.png'
import story1 from '../../../images/stroy1.png'
import post_icons from '../../../images/post_foot-icon.svg'
import post_foot_icons from '../../../images/post_foot_icon3.svg'
import post_foot_icons2 from '../../../images/post_foot_icon2.svg'
import post_foot_icons3 from '../../../images/post_foot_icon.svg'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css'
import axios from 'axios'
import { useContext } from 'react'
import { AuthContext } from '../../Contexts/AuthContext'


function Post() {

   
// const {state} = useContext(AuthContext);

// const Accesstoken= state.user.access;
const Accesstoken='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAwMTQxODM5LCJqdGkiOiI0ZjRmNmMxMmE1ZWI0NTM1YWNkMmVhMTE2NmM4YWZlOSIsInVzZXJfaWQiOjEyNn0.YIJtIg63p3CmsQhTMQ5ydJ8Zwqu6XB0MneoV6I6TFOo';

    const options = {
        // Number of items to display in the carousel
        loop: true, // Enable loop mode
        autoplay: true, // Autoplay the carousel
      };

    //   =====API for Get all post ========
    //  const api_url= 'http://3.88.144.157:8000/api/posts/?page=1';
    const [allPost, setAllPost]=useState({});

     const getPostData = async()=>{
        try{
            const config={
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `bearer ${Accesstoken}`
                }
            }
            const response= await axios.get('http://3.88.144.157:8000/api/posts/?page=1' , config);
            console.log('API response:' , response.results);
            setAllPost(response.results)

        }catch(error){
             console.log('API error' ,error)
        }
     }

     useEffect(()=>{
        getPostData();
     },[] );
    
    


    return (
        
            <div >
            <div className='post_section'>
                <div className="card mt-5 shadow p-3 mx-5 bg-white rounded">
                    <div className='post_header'>
                        <div className='post_profile'>
                            <img src={story1} alt='' className='post_img' />
                            <p className='username'>{allPost.results.first_name}</p>
                            <ul className='post_list_item'>
                                <li className='text-muted' >20 m ago</li>
                            </ul>
                        </div>
                        <div className='post_icon'>
                            <i className="fa-solid fa-ellipsis-vertical"></i>
                        </div>
                    </div>
                    <OwlCarousel className='owl-theme'  items={3} margin={1} >
                        <div className='item'  {...options}><img className="card-img-top mt-2" src={PostImg} alt="" /></div>
                    </OwlCarousel>
    
                    <div className="post_card_icon mt-3">
                        <img src={post_icons} alt='' className='post_icons' />
                        <div className='post_icons_right'>
                            <img src={post_foot_icons} alt='' />
                            <img src={post_foot_icons2} alt='' />
                            <img src={post_foot_icons3} alt='' />
                        </div>
                    </div>
                    <div className='post_foot_like'>
                        <p className='likes'>1300 likes</p>
                        <p className='caption'>ashwadh_chowdary Bald Eagle hunting </p>
                    </div>
                    <div className='post_foot_comment'>
                        <div className='comments'>View all 210 comments</div>
                        <input type='text' placeholder='Add a comments...' className='add_comments' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post