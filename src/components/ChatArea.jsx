import { IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import React from 'react'
import MessageOthers from './MessageOthers';
import MessageSelf from './MessageSelf';
import './MyStyle.css'


function ChatArea() {
  return (
    <div className='chatArea-container'>
        <div className='chatArea-header'>
          <div className='chatArea-header'>
              <p className='con-icon'>T</p>
              <div className='header-text'>
                <p className='con-title'>Title#1</p>
                <p className='con-timeStamp'>1 hour ago</p>
              </div>
              <IconButton>
                <DeleteIcon/>
              </IconButton>
          </div>
        </div>
        <div className='messages-container'>
          <MessageOthers/>
          <MessageSelf/>
          <MessageOthers/>
          <MessageSelf/>
          <MessageOthers/>
          <MessageSelf/>
          <MessageOthers/>
          <MessageSelf/>
        </div>
        <div className='text-input-area'>
          <input type="text" placeholder='type a message' className='search-box'/>
          <IconButton>
            <SendIcon/>
          </IconButton>
        </div>
    </div>
  )
}

export default ChatArea