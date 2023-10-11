import React from 'react'
import Chat from './Chat'
import NewLogo from '../../images/NewLogo 1.png'
import LeftsideMsgBar from './LeftsideMsgBar'
import RightsideBar from '../home/RightSide/RightsideBar'

function Message() {
  return (

    <div className='message_sec'>
      <div className='container-fluid'>

        <div className='row'>
          <div className='col-lg-9 chat_main_box'>
            <div className='reels_header px-4'>
              <img src={NewLogo} alt=''></img>
            </div>
            <div className="row">
              <div className='col-lg-5 p-0 border-right' ><LeftsideMsgBar /></div>
              <div className='col-lg-7 p-0' > <Chat /></div>
            </div>

          </div>
          <div className='col-lg-3 pt-4'>
            <RightsideBar />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Message