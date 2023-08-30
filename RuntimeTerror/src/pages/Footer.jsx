import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiFacebookFill } from "react-icons/ri";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import "./Footer.css";
import CarterLogo from "./CarterLogo";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="about">
            <div className="logo">
              <CarterLogo/>
            </div>
            <div className="detail">
              <div className="icon">
                <li>
                  <RiFacebookFill />
                </li>
                <li>
                  <AiOutlineInstagram />
                </li>
                <li>
                  <AiOutlineTwitter />
                </li>
                <li>
                  <BsYoutube />
                </li>
              </div>
            </div>
          </div>
          <div className="Supports">
            <h3>Support</h3>
            <ul>
              <li>Customer Service</li>
              <li>Accessibility Support</li>
              <li>Shipnping</li>
              <li>Returns</li>
              <li>Gift Cards</li>
              <li>Today's Deals</li>
              <li>Size Chart</li>
              <li>Carter's Credit Card</li>
              <li>My Rewarding Moments</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="about">
            <h3>About</h3>
            <ul>
              <li>Carter's Inc.</li>
              <li>Life With Kids</li>
              <li>Baby of the Month Contest</li>
              <li>All Store Locations</li>
              <li>International</li>
              <li>Join Carter's Affiliate Program</li>
              <li>Investor Relations</li>
              <li>Careers</li>
              <li>Raise the Future</li>
              <li>Refer a Friend</li>
            </ul>
          </div>
        </div>
      </div>
      <p>50% OFF EVERYTHING: Savings based on MSRP. Excludes Little Planet®, Sneak Peek, Treasure Box, Skip Hop® and Clearance. Other exclusions may apply.  BUY 1, GET 2 FREE JEANS: First item at MSRP. Additional items of equal or lesser value. Excludes select styles and Clearance. Discount reflected in cart online.
*MSRP is our Manufacturers Suggested Retail Price at which we suggest our collections be initially offered. We list an MSRP on our products that we sell ourselves and that sell through our wholesale partners. Our wholesale partners are free to use our MSRP or set a different selling price. We generally introduce our new collections at MSRP on our website. Since MSRP is a suggested price, actual sales may or may not have been made at MSRP in any certain area or in all areas. Prices may vary by channel or location.
Many of our collections have a DOB (Date of Birth) on the price tag or on their website product page. This is the date that this item or a similar item was originally offered for sale at the MSRP.</p>
    </>
  );
};

export default Footer;
