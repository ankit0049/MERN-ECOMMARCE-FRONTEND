import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Mission */}
          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold mb-2">Company Mission</h4>
            <p className="text-sm mb-2">Making the world a better place through constructing elegant hierarchies.</p>
            <div className="flex">
              {/* Social Icons */}
              <a href="#" className="mr-2">
                <FaFacebook />
              </a>
              <a href="#" className="mr-2">
                <FaInstagram />
              </a>
              <a href="#" className="mr-2">
                <FaTwitter />
              </a>
              <a href="#" className="mr-2">
                <FaYoutube />
              </a>
            </div>
          </div>
          {/* Company Sections */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-2">Solutions</h4>
            <ul className="text-sm">
              <li>Marketing</li>
              <li>Analytics</li>
              <li>Commerce</li>
              <li>Insights</li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-2">Support</h4>
            <ul className="text-sm">
              <li>Pricing</li>
              <li>Documentation</li>
              <li>Guides</li>
              <li>API Status</li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-2">Company</h4>
            <ul className="text-sm">
              <li>About</li>
              <li>Blog</li>
              <li>Jobs</li>
              <li>Press</li>
              <li>Partners</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs mt-4">
          <p>&copy; 2020 Your Company, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
