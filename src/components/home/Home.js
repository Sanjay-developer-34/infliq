import React from 'react'
import Header from './header/Header'
import LeftSideBar from './leftsidebar/LeftSideBar'
import Post from './post/Post'
import RightsideBar from './RightSide/RightsideBar'

function Home() {
  return (
    <>
    <div className='main_home_section'>
     <div className='container-fluid'>
        <div className='row'>
        <div className='col-lg-9'>
            <Header />
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
    </>
  )
}

export default Home