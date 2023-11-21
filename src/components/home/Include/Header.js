import React from "react";
import NewLogo from "../../../images/NewLogo 1.png";
import Stories from "./Stories";
import { useState } from "react";
import photo_icon from '../../../images/post_something.png';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import InnerHeader from "./InnerHeader";
import { useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../Contexts/AuthContext";

function Header() {
  const { state } = useContext(AuthContext);
  const [StoryData, setStoryData] = useState([]);
  const accessToken = state.user.access;
  const getStoryData = async () => {
    const config = {
      headers: {
        Authorization:
          "Bearer " + accessToken
      },
    };
    await axios
      .get("http://3.88.144.157:8000/api/stories/user/126", config)
      .then((res) => {
        setStoryData(res.data);
        console.log(res.data);
      });
  };

  useEffect(() => {
    getStoryData();
  }, []);

  // ---------------------Story modal--------------------------//


  const [showModal, setShowModal] = useState(false);
  const OpenModal = () => {
    setShowModal(true);
  };

  //  for  selecting files from system

  const fileInputRef = React.createRef();
  const [story, setStory] = useState("");

  const handleButtonClick = () => {
    // Trigger the click event on the file input when the button is clicked
    fileInputRef.current.click();
  };


  // const [selectedfile, setSelectedfile] = useState(null);
  const handlestoryChange = (e) => {
    // Handle the file selection here
   
    const file = e.target.files[0];
    if (file) {
      setStory(URL.createObjectURL(file));
      // setSelectedfile(URL.createObjectURL(file));
      // setShowModal('true');
    } // You can perform additional actions with the selected file here
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object to send the file file
    const formData = new FormData();
    formData.append("file", story);
  };

  

  return (
    <>
      <div className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4">
              <InnerHeader />
            </div>

            <div className="col-lg-8">
              <div className="Stories mt-3">
                <OwlCarousel className="owl-theme" margin={1} items={2}>
                  <div    className="Stories_content item" key={Math.random()}>
                 
                      <img
                        onClick={()=>setShowModal(true)}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Font_Awesome_5_solid_user-plus.svg/1279px-Font_Awesome_5_solid_user-plus.svg.png"
                        alt=""
                      />
                    
                    <p>Your Story</p>
                  </div>
                  {StoryData.map((item, index) => (
                    <Stories
                      key={index}
                      imgsrc={item.file}
                      userName={item.user.username}
                    />
                  ))}
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* --------------------Modal for story----------------------- */}

      <div
        className={`modal fade${showModal ? "show" : ""}`}
        tabIndex="-1"
        role="dialog"
        style={{ display: showModal ? "block" : "none" }}
      >
        <div className="post_modal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header post_modal_header">
                <h4 className="modal-title modal_heading">Create a story</h4>

                {story ? (
                  <button
                    type="button"
                    className="post_button"
                    accept="file/*"
                    onClick={handleSubmit}
                  >
                    <i className="fa-solid fa-check"></i>
                  </button>
                ) : (
                  <i class="fa-solid fa-rectangle-xmark"></i>
                )}
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                  data-bs-dismiss="modal"
                >

                </button>
              </div>
              <div className="modal-body">
                <img src={photo_icon} alt=""></img>
                <p>Drag Photos or Videos here</p>
              </div>

              <div className="modal-footer">
                <div>
                  <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handlestoryChange}
                    accept="file/*"
                  />

                  <button
                    type="button"
                    onClick={handleButtonClick}
                    className="btn select_btn"
                  >
                    Select from computer
                  </button>
                  
                  {story && (
                    <div className="selected_file">
                      <img src={story} alt="Selected Preview" />
                    </div>
                  )}
                   
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
