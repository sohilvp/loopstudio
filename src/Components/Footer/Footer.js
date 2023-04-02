import React from "react";
import {AiFillFacebook} from 'react-icons/ai'
import {FaTwitter} from 'react-icons/fa'
import {BsPinterest,BsInstagram} from 'react-icons/bs'
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer-bg">
    <div className="width-container">
      <div className="footer-container">
        <div className="left-footer">
         <span>loopstudio</span>
          <ul className="footer-nav-list">
            <li>About</li>
            <li>Careers</li>
            <li>Events</li>
            <li>Products</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="right-footer">
          <ul className="icon-list">
           <li><AiFillFacebook /></li>
           <li><FaTwitter /></li>
           <li><BsPinterest /></li>
           <li><BsInstagram /></li>
          </ul>
          <p> © 2021 Loopstudios. All rights reserved</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;
