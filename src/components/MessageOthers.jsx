import React from 'react'
import './MyStyle.css'

function MessageOthers() {
  return (
    <div className='other-message-container'>
        <div className='conversation-container'>
            <p className='con-icon'>T</p>
            <div className='other-text-content-'>
                <p className='con-title'>randomuser</p>
                <p className='con-lastMessage'>This is sdample message</p>
                <p className='self-timeStamp'>12:00am</p>
            </div>

        </div>
    </div>
  )
}

export default MessageOthers