import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1e2126] text-white py-5 px-6 md:px-10">
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-center">

        {/* Left Section */}

        <div className="mb-6 sm:mb-0 flex flex-col items-center sm:items-start">

          {/* Site name */}

          <h1 className="text-4xl font-semibold text-green-400 hover:text-green-500 transition duration-300">MOVIELO</h1>

          {/* Site description */}

          <p className="mt-4 text-sm text-gray-300 text-center sm:text-left">Your ultimate movie streaming destination</p>
        </div>

        {/* Center Section - Links, Legal, and Social */}

        <div className="flex flex-wrap justify-center gap-16 sm:gap-20 mb-6 sm:mb-0">

          {/* Links Section */}

          <div className="flex flex-col items-center sm:items-start mb-6 sm:mb-0">
            <h3 className="font-bold text-lg text-amber-400 mb-4">Links</h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li><a href="#" className="hover:text-amber-500 transition duration-300">Browse Movies</a></li>
              <li><a href="#" className="hover:text-amber-500 transition duration-300">Requests</a></li>
              <li><a href="#" className="hover:text-amber-500 transition duration-300">Blog</a></li>
              <li><a href="#" className="hover:text-amber-500 transition duration-300">RSS</a></li>
            </ul>
          </div>

          {/* Legal Section */}

          <div className="flex flex-col items-center sm:items-start mb-6 sm:mb-0">
            <h3 className="font-bold text-lg text-amber-400 mb-4">Legal</h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li><a href="#" className="hover:text-amber-500 transition duration-300">DMCA</a></li>
              <li><a href="#" className="hover:text-amber-500 transition duration-300">User Agreement</a></li>
              <li><a href="#" className="hover:text-amber-500 transition duration-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-amber-500 transition duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Social Media Section */}

          <div className="flex flex-col items-center sm:items-start">
            <h3 className="font-bold text-lg text-amber-400 mb-4">Social</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-amber-500 transition duration-300">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-amber-500 transition duration-300">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-amber-500 transition duration-300">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-amber-500 transition duration-300">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Section - Copyright */}

        <div className="text-center sm:text-right mt-6 sm:mt-0">
          <p className="text-sm text-gray-400 mr-2">© 2025 Movielo, All Rights Reserved</p>
        </div>
      </div>

      {/* Bottom Line - Legal Information and Proxies */}
      
      <div className="bg-[#181a1f] py-4 mt-10 text-center">
        <p className="text-sm text-gray-400">By using this site you agree to and accept our <a href="#" className="text-green-400 hover:text-green-500">User Agreement</a>.</p>
        <div className="mt-2">
          <a href="#" className="text-sm text-gray-400 hover:text-amber-500">Movielo Proxies</a> - 
          <a href="#" className="text-sm text-gray-400 hover:text-amber-500"> Movielo Proxies (TOR)</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
