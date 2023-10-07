import React from 'react'
import story1 from '../../../images/stroy1.png'
import photo_icon from '../../../images/post_something.png'
import PostImg from '../../../images/post_img.png'
import userimg from '../../../images/Frame.png'
import { useState } from 'react';


function RightsideBar() {


    const [showModal, setShowModal] = useState(false);
    const OpenModal = () => {
        setShowModal(true);
    }

    const [showpostModal, setShowpostModal] = useState(false);
    const PostModal = () => {
        setShowpostModal(true);
    }

    const [searchModal, setSearchModal] = useState(false);
    const SearchModal = () => {
        setSearchModal(true);
    }

    return (


        <section className=' right_side_se pt-3'>
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
                                <button className='RS_btn'> <i className="fa-solid fa-house"></i>
                                    Home</button>
                            </li>
                            <li>
                                <button className='RS_btn' onClick={SearchModal}><i className="fa-solid fa-magnifying-glass"></i>
                                    Search</button>
                            </li>
                            <li>
                                <button className='RS_btn'><i className="fa-solid fa-earth-americas"></i>
                                    Explore</button>
                            </li>
                            <li>
                                <button className='RS_btn'><i className="fa-brands fa-youtube"></i>

                                    Shorts</button>
                            </li>
                            <li>
                                <button className='RS_btn'><i className="fa-brands fa-rocketchat"></i>
                                    Message</button>
                            </li>
                            <li>
                                <button className='RS_btn'>  <i className="fa-brands fa-spotify"></i>
                                    Notifcation</button>
                            </li>
                            <li className=''>
                                <button className='RS_btn' onClick={OpenModal}> <i className="fa-sharp fa-regular fa-plus"></i>
                                    Post</button>
                            </li>
                            <li>
                                <button className='RS_btn' > <i className="fa-solid fa-gear"></i>
                                    Setting</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            {/* ======================Open Modal ======================*/}



            <div className={`modal ${showModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: showModal ? 'block' : 'none' }}>
                <div className='post_modal'>
                    <div className="modal-dialog">
                        <div className="modal-content">

                            <div className="modal-header post_modal_header">
                                <h4 className="modal-title modal_heading">Create a Post</h4>
                                <button type="button" className="btn-close" onClick={() => setShowModal(false)} data-bs-dismiss="modal"></button>
                            </div>
                            <div className="modal-body">
                                <img src={photo_icon} alt=''></img>
                                <p>Drag Photos or Videos here</p>
                            </div>

                            <div className="modal-footer">
                                <button type="button" onClick={PostModal} className="btn select_btn">Select from computer</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            {/* ========================post Modal ======================= */}


            <div className={`modal ${showpostModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: showpostModal ? 'block' : 'none' }}>
                <div className='post_modal'>
                    <div className="modal-dialog">
                        <div className="modal-content">

                            <div className="modal-header post_modal_header">
                                <h4 className="modal-title modal_heading">Create a Post</h4>
                                <button type="button" className="post_button" onClick={() => setShowpostModal(false)} ><i className="fa-solid fa-check"></i></button>
                            </div>

                            <div className="modal-body">
                                <img src={PostImg} alt=''></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* ================Search modal============== */}

            <div class={`modal fade ${searchModal ? 'show' : ''}`} style={{ display: searchModal ? 'block' : 'none' }} id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className='search_modal'>
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header search_modal_header">
                                <h5 class="modal-title model_heading" id="exampleModalLabel">Search</h5>
                            </div>
                            <input type='text' className='search_id' placeholder='search'></input>
                            <div class="modal-body">
                               <div className='body_btn'>
                                    <p>Recent</p>
                                    <button type='button'>Clear all</button>
                               </div>
                                <div className='search_box'>
                                    <div className='searched_content'>
                                        <img src={userimg} alt=''></img>
                                        <div>
                                            <p className='serched_name'>name</p>
                                            <p className='searched_username'>username</p>
                                        </div>
                                    </div>
                                    <button type='button' className='btn btn-close'></button>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button"  class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default RightsideBar