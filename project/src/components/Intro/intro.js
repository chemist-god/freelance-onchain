import React from "react";
import './intro.css'
import bg from '../../assets/icon.png';
import { Link } from "react-scroll";
const Intro =() => {
    return (
       <section id="intro">
        <div className="introContent">
        <h1 className="freelance">FREELANCE</h1>
        <h1 className="freelance" id="chain">CHAIN</h1>
        <p className="message"> A decentralized freelancing platform where <br></br> designers and clients can securely connect, 
        <br></br>manage projects, and execute payments through 
        <br></br>blockchain-based smart contracts. </p>
        <Link>
        <button className="sign-up">SIGN UP NOW</button>
        </Link> 
        <h4 className="secure">Secure Connections for Creative Minds</h4>
        </div>
        <img src={bg} alt="icon" className="bg" />
       </section>
    );
}
export default Intro; 