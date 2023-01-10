import React , {useEffect,useState,useContext} from 'react'
import { NavLink,Link} from 'react-router-dom';
import logo from './logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import UseContext from "../contexts/UseContext";
import {getItem} from '../component/LocalStor';
import { removItem} from '../component/LocalStor';
//import App from '../App';
//import { Dropdown,DropdownButton } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/free-solid-svg-icons'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
const Navbar = () => {
  const {isconnecter}=useContext(UseContext)
  const [login,setLogin]=useState(false)
  useEffect(()=>{
    setLogin(getItem('login'))
  },[isconnecter])
  return (
  <nav className="navbar navbar-expand-lg navbar-mainbg" id='nn-v'>
    
      <NavLink className="navbar-brand navbar-logo" to="/">
       <img src={logo} alt='logo' id="nav-logo"/>
      </NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"> <i className="fas fa-bars text-white"></i></span>
      
    </button>
      <div 
        className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto all-ul">
            
            <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
            </div>
            
            <li className="nav-item">
              <NavLink style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "rgba(255, 255, 255, 0.5)" : "",
                color : isActive ? "rgb(0,0,0)" :"",
              };
            }}
              to="/">
              <i className="fa fa-home fa-fw" aria-hidden="true"></i>&nbsp;Accueil
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#nous" >
                <i 
                className="far fa-address-book">
                </i>Apropos de nous
              </a> 
            </li>
           <>{
            login ?(<>
             <li className="nav-item">
                <NavLink style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "rgba(255, 255, 255, 0.5)" : "",
                color : isActive ? "rgb(0,0,0)" :"",
                
              };
            }}
                to="/annonce"><i className="fa fa-bullhorn" aria-hidden="true"></i>
                Annonces</NavLink></li>
              <li className="nav-item">
                <NavLink style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "rgba(255, 255, 255, 0.5)" : "",
                color : isActive ? "rgb(0,0,0)" :"",
              };
            }}
                 to="/profil" ><i className="fa fa-user" aria-hidden="true"></i>
                Profil</NavLink>
                </li>
                <li className="nav-item">
             <NavLink to="#" 
             onClick={()=>{
               removItem()
               window.location.replace("/")
             }}>
            <LogoutOutlinedIcon className="icon"/> Deconnexion</NavLink>
             </li>
             </>
           ):(
             <>
             <li className="nav-item ">
              <NavLink style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "rgba(255, 255, 255, 0.5)" : "",
                color : isActive ? "rgb(0,0,0)" :"",
              };
            }} className="isDisabled"
              to="/inscription" id='insec'><LoginOutlinedIcon className="icon" style={{color:"rgb(0,0,0)"}}/>Inscription</NavLink> 
              <div className='my-uls' id='Inscription'>
                      <dl>
                        <dt><NavLink  to="/inscription/moderateur">Modérateur</NavLink></dt>
                        <dt><NavLink  to="/inscription/client">Client</NavLink></dt>
                     </dl>
                 </div>
              </li>
               <li className="nav-item">
             <NavLink style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "rgba(255, 255, 255, 0.5)" : "",
                color : isActive ? "rgb(0,0,0)" :"",
              };
            }} 
              to="/connexion"> <LoginOutlinedIcon className="icon" style={{color:"rgb(0,0,0)"}}/>Connexion</NavLink>
             </li>
                </>
           )}</> 
        </ul>
      </div>
     
  </nav>
  )
}
export default Navbar;