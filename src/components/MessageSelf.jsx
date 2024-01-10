import React from 'react'
import './MyStyle.css'

function MessageSelf() {
  return (
    <div className='self-message-container'>
        <div className='messagebox'>
            <p>this is sample message</p>
            <p className='selt-timeStamp'>12:00am</p>
        </div>
    </div>
  )
}

export default MessageSelf