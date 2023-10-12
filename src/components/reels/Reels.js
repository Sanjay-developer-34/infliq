import React from 'react'
import NewLogo from '../../images/NewLogo 1.png'
import Shorts from './Shorts'
import LeftSideBar from '../home/leftsidebar/LeftSideBar'
import RightsideBar from '../home/RightSide/RightsideBar'

function Reels() {
  return (

    <div className='reels_page'>

      <div className='row'>
        
          <div className='col-lg-3 pr-3'>
          <div className='reels_left_side'>
            <div className='reels_header'>
              <img src={NewLogo} alt=''></img>
            </div>
            <LeftSideBar />
          </div>
        </div>
        <div className='col-lg-6'>  <Shorts /></div>
        <div className='col-lg-3'><RightsideBar /></div>
      </div>
    </div>

  )
}

export default Reels