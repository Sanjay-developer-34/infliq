import React from 'react'
import story1 from '../../../images/stroy1.png'

function RightsideBar() {
    return (
        <section className=' right_side_se mt-3'>
            <div className=''>
                <div className='Rightside_bar'>
                    <div className='RS_bar_content'>
                        <div className='RS_left_content'>
                            <div className='RS_bar_img'>
                                <img src={story1} alt=''></img>
                            </div>
                            <div className='Username'>
                                <p className='name'>Ashwadh Chowdary</p>
                                <p className='uname'>ashwadh_chowdary</p>
                            </div>
                        </div>
                        <div className='Profile'>
                            <p className='Profile_text'>profile</p>
                        </div>
                    </div>
                    <div className='RS_bar_list'>
                        <ul className='RS_list_items'>
                            <li>
                                <i class="fa-solid fa-house"></i>
                                <a href='home'  >Home</a>
                            </li>
                            <li>
                                <i class="fa-solid fa-magnifying-glass"></i>
                                <a href='home'  >Search</a>
                            </li>
                            <li>
                                <i class="fa-solid fa-earth-americas"></i>
                                <a href='home'  >Explore</a>
                            </li>
                            <li>
                                <i class="fa-brands fa-youtube"></i>
                                <a href='home'  >Shorts</a>
                            </li>
                            <li>
                                <i class="fa-brands fa-rocketchat"></i>
                                <a href='home'  >Message</a>
                            </li>
                            <li>
                                <i class="fa-brands fa-spotify"></i>
                                <a href='home'  >Notifcation</a>
                            </li>
                            <li>
                                <i class="fa-sharp fa-regular fa-plus"></i>
                                <a href='home'  >Post</a>
                            </li>
                            <li>
                                <i class="fa-solid fa-gear"></i>
                                <a href='home'  >Setting</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RightsideBar