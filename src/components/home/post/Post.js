import React from 'react'
import PostImg from '../../../images/post_img.png'
import story1 from '../../../images/stroy1.png'
import post_icons from '../../../images/post_foot-icon.svg'
import post_foot_icons from '../../../images/post_foot_icon3.svg'
import post_foot_icons2 from '../../../images/post_foot_icon2.svg'
import post_foot_icons3 from '../../../images/post_foot_icon.svg'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css'


function Post() {

    const options = {
        items: 3, // Number of items to display in the carousel
        // loop: true, // Enable loop mode
        autoplay: false, // Autoplay the carousel
      };
    


    return (
        
            <div >
            <div className='post_section'>
                <div className="card mt-5 shadow p-3 mx-5 bg-white rounded">
                    <div className='post_header'>
                        <div className='post_profile'>
                            <img src={story1} alt='' className='post_img' />
                            <p className='username'>ashwadh_chowdary</p>
                            <ul className='post_list_item'>
                                <li className='text-muted' >20 m ago</li>
                            </ul>
                        </div>
                        <div className='post_icon'>
                            <i className="fa-solid fa-ellipsis-vertical"></i>
                        </div>
                    </div>
                    <OwlCarousel className='owl-theme' margin={10} >
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