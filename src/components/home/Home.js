import React  from 'react'
import Header from './Include/Header'
import LeftSideBar from './leftsidebar/LeftSideBar'
import Post from './post/Post'
import RightsideBar from './RightSide/RightsideBar'
// import CheckboxProvider  from "../context/CheckboxContext"
// import { AppProvider } from '../context/Appcontext';
// import useCheckbox  from '../context/CheckboxContext';



function Home() {

  // const { isRightSidebarVisible, setIsRightSidebarVisible } = useCheckbox();

  return (
    <>
     {/* <CheckboxProvider> */}
    <div className='main_home_section'>
     <div className='container-fluid'>
        <div className='row'>
        <div className='col-lg-9'>
            <Header/>
          <div className='container-fluid'>
            <div className='row'> 
            <div className='col-lg-4'><LeftSideBar /></div>
            <div className='col-md-8'>
                <Post />
                <Post />
                <Post />
            </div>
            </div>
          </div>
        </div>
        <div className='col-lg-3'>
          <RightsideBar />
        </div>
        </div>
     </div>
     </div>
     {/* </CheckboxProvider> */}
    </>
  )
}

export default Home