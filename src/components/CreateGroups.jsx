import { IconButton } from '@mui/material'
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import React from 'react'
// import 'MyStyle.css'

function CreateGroups() {
  return (
    <div className='createGroups-container'>
        <input placeholder='enter name of the group' className='search-box'/>
        <IconButton>
        <DoneOutlineIcon/>
        </IconButton>
    </div>
  )
}

export default CreateGroups