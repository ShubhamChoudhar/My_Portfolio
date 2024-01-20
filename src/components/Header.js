import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="bg-gray-800 p-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="py-4 text-white text-2xl font-bold">
          <Link to="/" className="">Shubham Choudhary</Link>
        </div>
        <div className="lg:flex lg:items-center">
          <ul className="flex flex-col lg:flex-row p-4 lg:p-0 lg:space-x-4">
            <li>
              <Link to="/" className="text-white text-lg hover:text-orange-300">Home</Link>
            </li>
            <li>
              <Link to="/about" className="text-white text-lg hover:text-orange-300">About</Link>
            </li>
            <li>
              <Link to="/projects" className="text-white text-lg hover:text-orange-300">Projects</Link>
            </li>
            <li>
              <a href="https://drive.google.com/file/d/16Ma0JtYRajOepcaNu9hgV-yfHtxTMONO/view?usp=drive_link"
                 target="_blank" rel="noopener noreferrer" className="text-white text-lg hover:text-orange-300">Resume</a>
            </li>
            <li>
              <Link to="/contact" className="text-white text-lg hover:text-orange-300">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;