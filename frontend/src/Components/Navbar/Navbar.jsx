import "./navbar.scss"

import SearchIcon from '@mui/icons-material/Search';
import Notifications from '@mui/icons-material/Notifications';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import { useState } from "react";

const Navbar = () => {
  const [isScroll,setIsScroll]=useState(false);

  window.onscroll = () =>{
    setIsScroll(window.pageYOffset===0 ?false : true);
    return ()=>window.onscroll=null;
  }

  return (
    <div className ={isScroll ?  "navbar scrolled":"navbar"}>
      <div className="container">
        <div className="left">
          <img className="logo" src="https://images.crowdspring.com/blog/wp-content/uploads/2016/06/27132348/netflix-new-logo.png" alt="" />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New And Popular</span>
          <span>My Wishlist</span>
        </div>
        <div className="right">
          <SearchIcon className="icon"/>
          Kids
          <Notifications className="icon"/>
          <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt=""/>
          <div className="profile">
            <ArrowDropDown className="icon" />
            <span className="options">Settings</span>
            <span className="options">Logout</span> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar