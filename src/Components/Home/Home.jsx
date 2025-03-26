import React from 'react'
import LeftSideBar from '../LeftSideBar/LeftSideBar'
import RightSideBar from '../RightSideBar/RightSideBar'

const Home = () => {
  return (
   <>
       <div className='flex'>
          <LeftSideBar/>
         <RightSideBar/>
       </div>
   </>
  )
}

export default Home
