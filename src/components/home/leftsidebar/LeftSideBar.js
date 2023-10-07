import React from 'react'
import Suggestions from './Suggestions'
import TrendingSec from './TrendingSec'

function LeftSideBar() {
    return (
        <div className='col-lg-12'>
            <div className='pr-1'>
                <Suggestions />
                <TrendingSec />
            </div>
        </div>
    )
}

export default LeftSideBar