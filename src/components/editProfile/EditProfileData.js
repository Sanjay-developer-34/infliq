import React from 'react'
import story1 from '../../images/stroy1.png'
import Logout from '../../images/logout.png'

function EditProfileData() {
    return (
        <div className='edit_profile'>
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
                                    <input type='text' className='form-control '></input>
                                    <p className='input_pera'>Help people discover your account by using the name you're
                                        known by: either your full name, nickname, or business name.</p>
                                </div>
                            </div>

                            <div className='input_field'>
                                <div className='input_heading'>Username</div>
                                <div className='input_content'>
                                    <input type='text' className='form-control '></input>
                                    <p className='input_pera'>In most cases, you'll be able to change your username back to up
                                        vox_ for another 14 days.</p>
                                </div>
                            </div>

                            <div className='input_field'>
                                <div className='input_heading'>Bio</div>
                                <div className='input_content'>
                                    <input type='text-area' className='form-control '></input>
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
                                    <input type='text' className='form-control '></input>
                                </div>
                            </div>

                            <div className='input_field personal_detail'>
                                <div className='input_heading'>Phone number </div>
                                <div className='input_content'>
                                    <input type='text' className='form-control '></input>
                                </div>
                            </div>

                            <div className='input_field personal_detail'>
                                <div className='input_heading'>Gender</div>
                                <div className='input_content'>
                                    <input type='text' className='form-control '></input>
                                </div>
                            </div>

                            <div className='input_field personal_detail'>
                                <div className='input_heading'>Date of birth</div>
                                <div className='input_content'>
                                    <input type='text' className='form-control '></input>
                                </div>
                            </div>
                            <div className='edit_profile_footer'>
                                <div className='edit_footer_content'>
                                    <button className='submit_btn'>Submit</button>
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
    )
}

export default EditProfileData