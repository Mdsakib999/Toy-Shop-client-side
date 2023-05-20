import React from "react";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <div>
        
        <p className="text-xl">
          RoboKingdom Industries Ltd.
          <br />
          Providing Robot toys since 1992.
          <br />
          Mobile: +945 1250 1486
          <br />
          Email: info@robokingdom.com.
        </p>
      </div>
      <div>
        <span className="footer-title">Business Opportunity</span>
        <a className="link link-hover">Become a Marketplace Vendor</a>
        <a className="link link-hover">Become a Dealer</a>
        <a className="link link-hover">Suggest Your Products</a>
      </div>
      <div>
        <span className="footer-title">Get to Know US</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Security & Privacy</a>
        <a className="link link-hover">Career</a>
      </div>
      <div>
        <span className="footer-title">Community</span>
        <a className="link link-hover">Forums</a>
        <a className="link link-hover">New's</a>
        <a className="link link-hover">Robots</a>
      </div>
    </footer>
  );
};

export default Footer;
