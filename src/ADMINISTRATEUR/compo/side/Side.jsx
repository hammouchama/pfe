import React from 'react'
import "./side.css";
// import Logo from "../../imgs/logo.png";
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import CategoryIcon from '@mui/icons-material/Category';
import InventorySharpIcon from '@mui/icons-material/InventorySharp';
import LocalShippingSharpIcon from '@mui/icons-material/LocalShippingSharp';
import QueryStatsSharpIcon from '@mui/icons-material/QueryStatsSharp';
import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp';
import SystemSecurityUpdateGoodSharpIcon from '@mui/icons-material/SystemSecurityUpdateGoodSharp';
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import {NavLink,Link} from "react-router-dom";
import { removItem } from '../../../component/LocalStor';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import logoo from './logo.png'
import Nav from 'react-bootstrap/Nav';
const Side = () => {

  /*  const navLinksStyles=({isActive})=>{
        return{
            color:isActive ? "rgb(0,0,0) ":" ",
           textDecoration:isActive ? "none" : "",
        }
    }*/
  return (
    
    <div className="side">
       
       {/* <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
            <span className="log"><img src={logoo} alt="logo" /></span>
            </Link>

        </div> */}
      
        <div className="center">
            <ul>
                <li>
                    
                    <NavLink   to="/" style={({ isActive }) => {
              return {
              borderBottom: isActive ? '3px solid darkorange' : "",
              };
            }}><DashboardIcon className="icon"/><span>Acceuil</span>
                    </NavLink>
                </li>
                <li>
                <NavLink  to="/admin/list" style={({ isActive }) => {
              return {
              borderBottom: isActive ? '3px solid darkorange' : "",
              };
            }}>
                    <GroupIcon className="icon"/><span>Utilisateurs</span>
                </NavLink>
                </li>
                
                <li><NavLink to="/admin/annonce" style={({ isActive }) => {
              return {
              borderBottom: isActive ? '3px solid darkorange' : "",
              };
            }} >
                    <CategoryIcon className="icon"/><span>Annoces</span></NavLink>
                </li>
               
              {/*  <li>
                 <InventorySharpIcon className="icon"/>
                <span>Avis</span>
              </li>*/}
              
                
                <li><NavLink to="/admin/annonc/new" style={({ isActive }) => {
              return {
              borderBottom: isActive ? '3px solid darkorange' : "",
              };
            }}>
                    <NotificationsSharpIcon className="icon"/>
                    <span>Liste d'attente</span></NavLink>
                  </li>
              
                
                <li>
                <NavLink to="/admin/single"style={({ isActive }) => {
              return {
              borderBottom: isActive ? '3px solid darkorange' : "",
              };
            }}>
                    <AccountCircleOutlinedIcon className="icon"/><span>Profil</span>
                </NavLink>
                </li>
                <li>
                <NavLink to="/admin/new"style={({ isActive }) => {
              return {
              borderBottom: isActive ? '3px solid darkorange' : "",
              };
            }}>
                    <AddCircleOutlineIcon className="icon"/><span>Ajouter Sous-Admin</span>
                </NavLink>
                </li>

            </ul>
        </div>
        
      
    </div>
    
  )
}

export default Side
