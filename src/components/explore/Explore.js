import React from 'react'
import Map from './Map'
import NewLogo from '../../images/NewLogo 1.png'
import LeftSideBar from '../home/leftsidebar/LeftSideBar'
import RightsideBar from '../home/RightSide/RightsideBar'



function Explore() {
    return (
        <div className='explore'>
            <div className='row'>
                <div className='col-lg-3'>
                    <div className='reels_header'>
                    <img src={NewLogo} alt=''></img>
                    </div>                
                    <LeftSideBar />
                </div>
                <div className='col-lg-6'>
                   <Map />
                </div>
                <div className='col-lg-3'><RightsideBar /></div>
            </div>
        </div>
    )
}

export default Explore