import React, { useState } from "react";
import Followers_profile from '../../images/Frame (3).png'
import chat_profile_img from "../../images/Frame (1).png";
import unfollowed_profile from '../../images/Frame (4).png'

import followed_profile from  '../../images/Frame (5).png'
import followed_profile2 from  '../../images/Frame (6).png'
import post_img from '../../images/Frame (7).png'

function LeftsideMsgBar() {
  const [notificationModal, setNotificationModal] = useState(false);
  const NotificationModal = () => {
    setNotificationModal(true);
  };

  return (
    <section className="left_msgbar">
      
      <div className="left_header">
        <p className="left_chat_username">
          ashwadh
          <i class="fa-solid fa-chevron-down"></i>
        </p>
        <i class="fa-regular fa-pen-to-square"></i>
      </div>
      <div className="leftmsg_body">
        <div className="nav_btns">
          <button type="submit" className="btn btns">
            chats
          </button>
          <button type="submit" className="btn btns">
            groups
          </button>
          <button
            type="submit"
            onClick={NotificationModal}
            className="btn btns"
          >
            notification
          </button>
        </div>
        <div className="body_items">
          <div className="senders_profile">
            <img src={chat_profile_img} alt=""></img>
            <p className="senders_name">Chirag Singla</p>
          </div>
        </div>
      </div>

      {/* ===========================Notification Modal==================== */}

      <div className="notification_sec">
        <div
          className={`modal fade ${notificationModal ? "show" : ""}`}
          tabIndex="-1"
          role="dialog"
          style={{ display: notificationModal ? "block" : "none" }}
        >
          <div className="notification_modal">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header notification_header">
                  <h4 className="modal-title ">Notifications</h4>
                  <button type="button" className="btn-close" onClick={() => setNotificationModal(false)} data-bs-dismiss="modal"></button>
                </div>

                <div className="modal-body">
                  <h5 className="sub_heading">yesterday</h5>
                  <div className="recent_content">
                    <img src={Followers_profile} alt="" ></img>
                    <div className="followers" >
                      <p className="followers_username">roirin_femlivart2931ec</p>
                      <p className="followers_status">started following you. <span className="time_status">1d</span></p>
                    </div>
                    <button type="submit" className="follow_button">Follow</button>
                  </div>
                  <div className="this_week_notification">
                    <h5 className="sub_heading">This Week</h5>
                    <div className="weekly_status">
                      <img src={unfollowed_profile} alt=""></img>
                      <p className="weekly_caption">follow <b>imkirtszxzxza, sanju</b> and others you know to see their photos and videos. <span className="time_status">1d</span></p>
                    </div>
                    <div className="weekly_status">
                      <img src={unfollowed_profile} alt=""></img>
                      <p className="weekly_caption"><b>Lorem spum</b> is on Instagram.<b>One_more_acc</b> and 1 other follow them. <span className="time_status">3d</span></p>
                      <button type="submit" className="follow_button">Follow</button>
                    </div>
                  </div>
                  <div className="Earlier">
                    <h5 className="sub_heading">Earlier</h5>
                    <div className="weekly_status">
                      <div className="users_profile">
                        <img src={followed_profile} alt=""></img>
                        <img src={followed_profile2} alt="" className="followed_profile"></img>
                      </div> 
                       <div><p className="weekly_caption"> <b>brainmemind, sarakbrl</b> and <b>yashwant_chandel_</b>liked your reel. <span className="time_status">1d</span></p>
                      </div> 
                      <img src={post_img} alt=""></img>
                    </div>
                    <div className="weekly_status">
                      <div className="users_profile">
                        <img src={followed_profile} alt=""></img>
                        <img src={followed_profile2} alt="" className="followed_profile"></img>
                      </div> 
                       <div><p className="weekly_caption"> <b>brainmemind, sarakbrl</b> and <b>yashwant_chandel_</b>liked your reel. <span className="time_status">1d</span></p>
                      </div> 
                      <img src={post_img} alt=""></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeftsideMsgBar;
