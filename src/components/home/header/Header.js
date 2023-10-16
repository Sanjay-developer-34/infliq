import React from 'react'
import NewLogo from '../../../images/NewLogo 1.png'
import Stories from './Stories';
import StoryData from './StoryData';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css'


function Header() {
  return (
    <div className='header'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-4'>
            <div className='NewLogo'>
              <img src={NewLogo} alt=""></img>
              <div className='menu_btn'>
                <i className="fa-solid fa-bars"></i>
                <input type='checkbox' id='chk' className='checking'></input>
                <lable for='chk'>Menu</lable>
              </div>
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
