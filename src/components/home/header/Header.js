import React  from 'react'
import NewLogo from '../../../images/NewLogo 1.png'
import Stories from './Stories';
import StoryData from './StoryData';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css'
import { useCheckbox } from '../../context/CheckboxContext';
import RightsideBar from '../RightSide/RightsideBar';
import { useState } from 'react'

function Header({ toggleSidebar }) {

  const { isChecked, toggleCheckbox } = useCheckbox();
  const [isRightSidebarVisible, setRightSidebarVisible] = useState(false);

  return (
    <div className='header'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-4'>
            <div className='NewLogo'>
              <img src={NewLogo} alt=""></img>
              <div className='menu_btn'>
                <i className="fa-solid fa-bars"></i>
                <input type='checkbox' id=' toggleSidebar ' checked={isChecked}  onChange={() => {
            toggleCheckbox();
            setRightSidebarVisible(!isRightSidebarVisible);
          }} className='checking'></input>
                <lable for='chk'>Menu</lable>
              </div>

              <RightsideBar sidebarVisible={isRightSidebarVisible} />
            </div>
           
          </div>
         
          <div className='col-lg-8'>
            <div className='Stories mt-3'>
              <OwlCarousel className='owl-theme' margin={1} items={2}>
                {StoryData.map((item,index) => <Stories key={index} imgsrc={item.imgsrc} />)}
              </OwlCarousel>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header
