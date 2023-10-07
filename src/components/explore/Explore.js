import React from 'react'
import Map from './Map'
import LeftSideBar from '../home/leftsidebar/LeftSideBar'
import RightsideBar from '../home/RightSide/RightsideBar'



function Explore() {
    return (
        <div className='explore'>
            <div className='row'>
                <div className='col-lg-3'> <LeftSideBar /></div>
                <div className='col-lg-6'><Map /></div>
                <div className='col-lg-3'> <RightsideBar /></div>
            </div>
        </div>
    )
}

export default Explore