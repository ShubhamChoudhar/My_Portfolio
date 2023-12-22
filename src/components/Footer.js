import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const handleEmailClick = () => {
    const emailAddress = 'shubhcy99@gmail.com';
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <footer className="bg-gray-800 mt-8 text-white p-4 md:p-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-bold mb-2 text-orange-300">Contact Me</h2>
          <p className="text-lg" onClick={handleEmailClick} style={{ cursor: 'pointer' }}>
            <span className="text-orange-500">Email</span>: <span className="hover:text-gray-300">shubhcy99@gmail.com</span>
          </p>
          <p className="text-lg">
            <span className="text-orange-500">Phone</span>: (210) 660-0183
          </p>
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold mb-2 text-orange-300">Connect With Me</h2>
          <div className="flex justify-center md:justify-start">
            <a
              href="https://www.linkedin.com/in/shubhcy99/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-blue-500 transition-colors pr-2"
            >
              <FontAwesomeIcon size="lg" icon={faLinkedin} />
            </a>
            <a
              href="https://github.com/ShubhamChoudhar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-orange-500 transition-colors"
            >
              <FontAwesomeIcon size="lg" icon={faGithub} />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p>&copy; 2023 Shubham Choudhary. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;