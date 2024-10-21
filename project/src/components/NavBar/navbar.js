import React from "react";
import "./navbar.css";
import logo from '../../assets/logo.png';
import {Link} from 'react-scroll';

const Navbar = () => {
    return (
       <nav className="navbar">
            <img src={logo} alt="logo" className="logo" />
            <div className="desktopMenu">
                <Link className="desktopMenuList">Home </Link>
                <Link className="desktopMenuList">Portfolio</Link>
                <Link className="desktopMenuList">Jobs</Link>
                <Link className="desktopMenuList">Payments</Link>
            </div>
            <button className="connect-wallet">Connect Wallet</button>
       </nav>
    );
}
export default Navbar;