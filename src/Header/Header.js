import React from 'react'
import "./Header.css"
import amazonlogo from "./amazonlogo.jpg"
import {Link} from 'react-router-dom'
import SearchIcon from "@material-ui/icons/Search"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from '../StateProvider'
import { auth } from "../firebase";
function Header() {
    const [{basket, user}] = useStateValue();
    const login = () => {
        if (user) {
            auth.signOut();
        }
    };
    return (        
        <nav className="header">
            <Link to="/">
            <img className="nav_logo" src={amazonlogo} alt="logo"/></Link>
        <div className="nav-search-con">   <input type="text" className="search_nav"/>
<SearchIcon className="search-icon"/>
</div>
<div className="nav-options">
    <Link to={!user && "/login"} className="nav-links">
        <div onClick={login} className="option-nav">
            <span className="LineOne">Hello {user?.email}</span>
            <span className="LineTwo">{user ? 'Sign Out' : 'Sign in'}</span>
        </div>

    </Link>

    <Link to="/" className="nav-links">
        <div className="option-nav">
            <span className="LineOne">Returns</span>
            <span className="LineTwo">& Orders</span>
        </div>

    </Link>

    <Link to="/" className="nav-links">
        <div className="option-nav">
            <span className="LineOne">Your</span>
            <span className="LineTwo">Prime</span>
        </div>

    </Link>

    <Link to="/checkout" className="nav-links">
        <div className="nav-cart">
     
            <span><ShoppingCartIcon/></span>
          
            <span className="LineTwo Cart-count">{basket?.length}</span>
        </div>
        </Link>
    
</div>
        </nav>
       
    )
}

export default Header
