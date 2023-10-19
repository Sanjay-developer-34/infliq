import React from 'react'
import story1 from '../../../images/stroy1.png'
import photo_icon from '../../../images/post_something.png'
import userimg from '../../../images/Frame.png'
import { useState, } from 'react';
import { Link } from 'react-router-dom'


function RightsideBar({ sidebarVisible }) {


    const [showModal, setShowModal] = useState(false);
    const OpenModal = () => {
        setShowModal(true);
    }

    //  for  selecting files from system

    const fileInputRef = React.createRef();
    const [selectedFile, setSelectedFile] = useState('');

    const handleButtonClick = () => {
        // Trigger the click event on the file input when the button is clicked
        fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    // Handle the file selection here
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setSelectedFile(URL.createObjectURL(selectedFile));
      
    }// You can perform additional actions with the selected file here
  };

    const [searchModal, setSearchModal] = useState(false);
   
    return (
        <>
       

        <section id=' right_side_sec pt-3'>
            <div className=''>
                <div className={`Rightside_bar  ${ sidebarVisible ? 'show' : '' }`}>
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
                            <Link to='/profile'><p className='Profile_text'>profile</p></Link>
                        </div>
                    </div>
                    <div className='RS_bar_list'>
                        <ul className='RS_list_items'>
                            <li>
                                <button className='RS_btn'> <Link to='/home'><i className="fa-solid fa-house"></i>
                                    Home</Link></button>
                            </li>
                            <li>
                                <button className='RS_btn'  id='search_btn' onClick={()=>{setSearchModal(true)}}><i className="fa-solid fa-magnifying-glass"></i>
                                    Search</button>
                            </li>
                            <li>
                                <button className='RS_btn'><Link to='/Explore_page'><i className="fa-solid fa-earth-americas"></i>
                                    Explore</Link></button>
                            </li>
                            <li>
                                <button className='RS_btn'><Link to='/Shorts'><i className="fa-brands fa-youtube"></i>
                                    Shorts</Link></button>
                            </li>
                            <li>
                               <button className='RS_btn'><Link to='/message'><i className="fa-brands fa-rocketchat"></i>
                                    Message</Link></button> 
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


            <div className={`modal fade${showModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: showModal ? 'block' : 'none' }}>
                <div className='post_modal'>
                    <div className="modal-dialog">
                        <div className="modal-content">

                            <div className="modal-header post_modal_header">
                                <h4 className="modal-title modal_heading">Create a Post</h4>
                               
                                {selectedFile ? (<button type="button" className="post_button" onClick={() => setShowModal(false)} ><i className="fa-solid fa-check"></i></button>)
                                                     : (<i class="fa-solid fa-rectangle-xmark"></i>  )}
                                                     <button type="button" className="btn-close" onClick={() => setShowModal(false)} data-bs-dismiss="modal"> </button>             
                            </div>
                            <div className="modal-body">
                                <img src={photo_icon} alt=''></img>
                                <p>Drag Photos or Videos here</p>
                            </div>

                            <div className="modal-footer">
                            <div>
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    style={{ display: 'none' }}
                                    onChange={handleFileChange}
                                    accept="image/*"
                                />
                                <button type="button" onClick={handleButtonClick} className="btn select_btn">
                                    Select from computer
                                </button>
                                {selectedFile && (
                                    <div className='selected_file'>
                                        <img src={selectedFile} alt="Selected Preview"  />
                                    </div>
                                )}
                            </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            {/* ================Search modal============== */}

            <div className={`modal fade ${searchModal ? 'show' : ''}`} style={{ display: searchModal ? 'block' : 'none' }} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className='search_modal'>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header search_modal_header">
                                <h5 className="modal-title model_heading" id="exampleModalLabel">Search</h5>
                            </div>
                            <div  className='input_section'>
                                <input type='text' className='search_id' placeholder='search'></input>
                                <button type='button' className='btn btn-close input_clear' data-bs-dismiss="search_id"></button>
                            </div>

                            <div className="modal-body">
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
                            <div className="modal-footer">
                                <button type="button" onClick={() => setSearchModal(false)}  className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        </>
    )
}

export default RightsideBar