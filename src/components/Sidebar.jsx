import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import NightlightIcon from "@mui/icons-material/Nightlight";
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from "@mui/material";
import ConversationItem from "./ConversationItem";

function Sidebar() {
   const [conversations,setConersation] = useState([
    {
      name:"Test#1",
      lastMessage :"Hello",
      timeStamp:"Today"
    },
    {
      name:"Test#2",
      lastMessage :"good morning",
      timeStamp:"Today"
    },
    {
      name:"Test#3",
      lastMessage :"Whats up",
      timeStamp:"Today"
    }
   ])

   

  return (
    <div className="sideBar-container">
      <div className="sb-header">
        <div>
        <IconButton>
          <AccountCircleIcon />
        </IconButton>
        </div>
        <div>
        <IconButton>
          <PersonAddIcon />
        </IconButton>
        <IconButton>
          <GroupAddIcon />
        </IconButton>
        <IconButton>
          <AddCircleIcon />
        </IconButton>
        <IconButton>
          <NightlightIcon />
        </IconButton>
        </div>    
      </div>
      <div className="sb-search">
        <SearchIcon />
        <input className="search-box" placeholder="Search"/>
      </div>
      <div className="sb-conversations">
        {
          conversations.map((conversation)=>{
            return <ConversationItem props={conversation}/>
          })
        }
      </div>
    </div>
  );
}

export default Sidebar;
