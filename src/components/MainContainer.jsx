import React from 'react'
import './MyStyle.css'
import Sidebar from './Sidebar'
import WorkArea from './WorkArea'
import ChatArea from './ChatArea'
import Welcome from './Welcome'
import CreateGroups from './CreateGroups'

function MainContainer() {
  return (
    <div className='main-container'>
        <Sidebar/>
        {/* <Welcome/> */}
        <CreateGroups/>
        {/* <WorkArea/> */}
        {/* <ChatArea/> */}
    </div>
    
  )
}

export default MainContainer