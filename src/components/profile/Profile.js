import React from 'react'
import ProfileData from './ProfileData'
import RightsideBar from '../home/RightSide/RightsideBar'


function Profile() {
  return (
    
    <div className='container-fluid mt-3'>
    <div className='row'>
      <div className='col-lg-9'>
      <ProfileData/>
      </div>
      <div className='col-lg-3'>
        <RightsideBar/>
      </div>
    </div>
    </div>

  )
}

export default Profile