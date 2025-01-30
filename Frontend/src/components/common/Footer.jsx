// components/common/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-base-200">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="footer p-10 text-base-content">
          {/* Company Info */}
          <div>
            <span className="footer-title">About Us</span>
            <Link to="/about" className="link link-hover">About CarRental</Link>
            <Link to="/how-it-works" className="link link-hover">How It Works</Link>
            <Link to="/careers" className="link link-hover">Careers</Link>
            <Link to="/press" className="link link-hover">Press</Link>
            <Link to="/blog" className="link link-hover">Blog</Link>
          </div>

          {/* Services */}
          <div>
            <span className="footer-title">Services</span>
            <Link to="/cars" className="link link-hover">Browse Cars</Link>
            <Link to="/locations" className="link link-hover">Rental Locations</Link>
            <Link to="/deals" className="link link-hover">Special Deals</Link>
            <Link to="/corporate" className="link link-hover">Corporate Rental</Link>
            <Link to="/long-term" className="link link-hover">Long Term Rental</Link>
          </div>

          {/* Support */}
          <div>
            <span className="footer-title">Support</span>
            <Link to="/help" className="link link-hover">Help Center</Link>
            <Link to="/contact" className="link link-hover">Contact Us</Link>
            <Link to="/faq" className="link link-hover">FAQ</Link>
            <Link to="/terms" className="link link-hover">Terms of Service</Link>
            <Link to="/privacy" className="link link-hover">Privacy Policy</Link>
          </div>

          {/* Newsletter */}
          <div>
            <span className="footer-title">Newsletter</span>
            <div className="form-control w-80">
              <label className="label">
                <span className="label-text">Subscribe for the latest updates</span>
              </label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="username@site.com" 
                  className="input input-bordered w-full pr-16" 
                />
                <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
          <div className="items-center grid-flow-col">
            <Link to="/" className="text-xl font-bold">
              CarRental
            </Link>
            <p>Copyright © {currentYear} - All rights reserved</p>
          </div> 
          <div className="md:place-self-center md:justify-self-end">
            <div className="grid grid-flow-col gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;