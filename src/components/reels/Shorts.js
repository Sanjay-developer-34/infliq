import React from 'react'
import shorts_img from '../../images/Rectangle 65.png'
import user_img from '../../images/Rectangle 11.png'

function Shorts() {
    return (
        <div className='shorts_sec'>
            <div className='row'>
                <div className='col-lg-12'>
                    <div className='shorts_sec_content'>
                        <div className='shots_items '>
                            <div className='shorts_header border'>
                                <button type='button' className='shorts_button'>FOLLOWING</button>
                                <button type='button' className='shorts_button'>SUGGESTIONS</button>
                            </div>
                            <div className='shorts_body'>
                                <img src={shorts_img} alt=''></img>
                                <div className='shorts_footer'>
                                    <div className='shorts_footer_content'>
                                        <img src={user_img} alt=''></img>
                                        <div className='users_box'>
                                            <p className='shorts_username'>Neil_joseph</p>
                                            <p className='users_caption'>The swag never drops 😎...</p>
                                            <div className='songs_detail'>
                                                <i className="fa-solid fa-music"></i>
                                                <p className='songs_name'>All the way (Westside Remix)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='shorts_icon'>
                            <div className='icon_content'>
                                <i className="fa-solid fa-thumbs-up"></i>
                                <p>245k</p>
                            </div>
                            <div className='icon_content'>
                                <i className="fa-solid fa-thumbs-down"></i>
                                <p>dislike</p>
                            </div>
                            <div className='icon_content'>
                                <i className="fa-solid fa-message"></i>
                                <p>952</p>
                            </div>
                            <div className='icon_content'>
                                <i className="fa-solid fa-share"></i>
                                <p>share</p>
                            </div>
                            <div className='icon_content'>
                                <i className="fa-solid fa-ellipsis"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shorts