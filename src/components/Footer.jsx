import React from "react";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
import "../componentcss/Footer.css";

const Footer = () => {
  return (
    <div className="footerDiv">
      <div className="footerTitle text-center text-white">
        <h2 className="">
          <span className="">SHOPIFY</span>
        </h2>
      </div>
      <div className="footerSocial">
        <p style={{ margin: "0" }} className="">
          Social Links
        </p>

        <div className="socialIconDiv">
          <div className="socialIcon">
            <FaFacebookSquare size={20} color="" />
          </div>
          <div className="socialIcon">
            <FaTwitterSquare size={20} color="" />
          </div>
          <div className="socialIcon">
            <AiFillInstagram size={20} color="" />
          </div>
          <div className="socialIcon">
            <ImLinkedin size={20} color="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
