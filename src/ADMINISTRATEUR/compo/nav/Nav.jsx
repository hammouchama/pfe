import React from 'react'
import "./nav.css";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import admin from './admin.jpg';
import {NavLink,Link} from "react-router-dom";
import { removItem } from '../../../component/LocalStor';
import logoo from './logo.png'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const Nav = () => {
  return (
    <div className="nav">
        
      <div className="wrapper">
      <div className="items-logo">
        <Link to="/" style={{ textDecoration: "none" }}>
            <span className=""><img src={logoo} alt="logo" /></span>
            </Link>

        </div>
        <div className="items">

          {/*<div className="item">
            < NotificationsOutlinedIcon/>
            <div className="counter">10</div>

  </div>*/}
          
          <div className="item" style={{cursor: 'pointer'}}>
        
                    <LogoutOutlinedIcon className=""  onClick={()=>{
               removItem()
               window.location.replace("/")
             }}/>
                


          </div>
          
        
        </div>

      </div>

     
    </div>
  )
}

export default Nav
