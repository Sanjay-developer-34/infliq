import React from 'react'
import NewLogo from '../../images/NewLogo 1.png'
import EditProfileData from './EditProfileData'
import Suggestions from '../home/leftsidebar/Suggestions'
import RightsideBar from '../home/RightSide/RightsideBar'

function EditProfile() {
    return (
        <>
            <div className='edit_profile_sec'>
                <div className='container-fluid'>
                    <div className='row'>

                        <div className='col-lg-9'>
                            <div className='reels_header'>
                                <img src={NewLogo} alt=''></img>
                            </div>
                            <div className='row'>
                                <div className='col-lg-4'><Suggestions /></div>
                                <div className='col-lg-7'><EditProfileData /></div>
                            </div>
                        </div>
                        <div className='col-lg-3'><RightsideBar /></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditProfile