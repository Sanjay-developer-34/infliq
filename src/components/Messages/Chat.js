import React from 'react'
import chat_profile_img from '../../images/Frame (1).png'
import msgs_profile_img from '../../images/Frame (2).png'
import backward_icon from '../../images/Frame (1).svg'
import dots_img from '../../images/Frame.svg'

function Chat() {
    return (
        <div className='chat_sec'>
            <div className='chat_header'>
                <div className='chat_profile'>
                    <img src={chat_profile_img} alt=''></img>
                    <div className='chat_users'>
                        <p className='chat_username'>Chirag Sinha</p>
                        <p className='active_time'>Active 20h ago </p>
                    </div>
                </div>
                <div className='chat_icon'>
                <i className="fa-sharp fa-solid fa-phone"></i>
                <i className="fa-sharp fa-solid fa-video"></i>
                <i className="fa-sharp fa-solid fa-info"></i>
                </div>
            </div>
            <div className='chat_body'>
                <div className='left_body'>
                    <div className='left_body_content'>
                        <img src={chat_profile_img} alt='' className='profile_photo'></img>
                        <div className='received_msg'>
                            <img src={msgs_profile_img} alt=""></img>
                            <p className='msg_content'>
                            These 5 useful websites are so amazing! 🔥🙌 #adamdigital
                            </p>
                        </div>
                            <div className='left_body_icons'>
                            <i className="fa-regular fa-face-smile"></i>
                            <img src={backward_icon} alt=''></img>
                            <img src={dots_img} alt=''></img>
                        </div>
                    </div>
                    
                </div>
                <p className='timing'>5:00 AM</p>
                <div className='right_body'>
                    <p  className="msg_send">hello whats up?</p>
                </div>
                
            </div>
            <div className='footer'>
                    <i className="fa-regular fa-face-smile"></i>
                    <input
                        type="text"
                        placeholder='messages....'
                        className="send_msgs_field form-control"
                    ></input>
                    <i className="fa-regular fa-file"></i>
                    <i className="fa-regular fa-heart"></i>
                </div>

            </div>
            )
}

            export default Chat