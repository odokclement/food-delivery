import  { useState } from 'react'
import PropTypes from 'prop-types';
import './Nav.css'
import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom';

const Nav = ({setShowLogin}) => {
    const[menu,setMenu] = useState("home");
  return (
    <div  className='navbar'>
    <Link to= '/' onClick={()=>setMenu("home")}>
     <div className="navbar-logo">
     <img src={assets.logo}alt=""  className='logo'/>
     </div>
     </Link>
     <ul className='navbar-menu'>
        <Link to= '/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</Link>
        <a href='#explore-menu' onClick={()=>setMenu("menu")}className={menu==="menu"?"active":""}>menu</a>
        <a href='#app-download'  onClick={()=>setMenu("mobile-app")}className={menu==="mobile-app"?"active":""}>mobile-app</a>
        <a href='#footer'  onClick={()=>setMenu("contact-us")}className={menu==="contact-us"?"active":""}>contact us</a>
     </ul>
     <div className="navbar-right">
        <img src={assets.search_icon}alt="" />
        <div className="navbar-search-icon">
        <Link to= '/cart' ><img src={assets.basket_icon} alt="" /></Link>
            
            <div className="dot"></div>
        </div>
        <button onClick={()=>setShowLogin(true)} >sign in</button>
     </div>
    </div>
  )
}
Nav.propTypes = {
    setShowLogin: PropTypes.func.isRequired,
};

export default Nav;
