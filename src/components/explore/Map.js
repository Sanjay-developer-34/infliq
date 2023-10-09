import React from 'react'
import map_img from '../../images/Rectangle 5836.png'
import story1 from '../../images/stroy1.png'


function Map() {
    return (
        <div className='map_section_parent'>
            <div className='explore_nav'>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav explore_list">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href=" ">HUB</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href=" ">MARKET</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href=" ">SPORTS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href=" " tabindex="-1" aria-disabled="true">EVENTS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href=" " tabindex="-1" aria-disabled="true">HASHTAGS</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className='map_sec'>
                    <img src={map_img} alt=''></img>
                </div>
            </div>
            <div className='explore_footer'>
                <div className='RS_left_content'>
                    <div className='RS_bar_img'>
                        <img src={story1} alt=''></img>
                    </div>
                    <div className='Username'>
                        <p className='name'>Ashwadh Chowdary</p>
                        <p className='uname'>ashwadh_chowdary</p>
                    </div>
                </div>
                <div className='explore_Profile'>
                    <p className='Profile_text'>profile</p>
                    <i class="fa-solid fa-chevron-right"></i>
                </div>
            </div>
        </div>
    )

}

export default Map