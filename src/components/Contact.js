import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });    
    
    const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitSheet = async (e) => {
    e.preventDefault();

    const formDataToSend = {
      Name: formData.name,
      Email: formData.email,
      Message: formData.message,
    };

    try {
      const response = await fetch(
        'https://sheetdb.io/api/v1/4lk9h41qds10o',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formDataToSend),
        }
      );

      if (response.ok) {
        console.log('Form submitted successfully');
        // Reset the form
        setFormData({
          name: '',
          email: '',
          message: '',
        });
        setSubmissionStatus('success');
      } else {
        console.error('Error submitting form:', response.statusText);
        setSubmissionStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
    // Clear submission status after 5 seconds
    setTimeout(() => {
      setSubmissionStatus(null);
    }, 2000);
  };
  
  const handleEmailClick = () => {
    const emailAddress = 'shubhcy99@gmail.com';
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <div className="container mx-auto p-8 my-8 bg-blue-950">
      <h1 className="text-3xl font-bold mb-6 text-orange-300">Contact Me</h1>

      <div className="flex flex-wrap">
        {/* Contact Form - Left Side */}
        <form onSubmit={(e) => handleSubmitSheet(e)} className="w-full md:w-1/2 pr-4 mb-8">
          <div className="mb-4">
            <label htmlFor="name" className="text-white block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 border border-white rounded"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="text-white block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border border-white rounded"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="text-white block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full p-2 border border-white rounded"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
            {/* Display submission status message */}
          {submissionStatus === 'success' && (
            <div className="text-green-500 mb-4">Form submitted successfully!</div>
          )}
          {submissionStatus === 'error' && (
            <div className="text-red-500 mb-4">Error submitting form. Please try again.</div>
          )}
          <button
            type="submit"
            className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-300"
          >
            Submit
          </button>
        </form>

        {/* Connect With Me Section - Right Side */}
        <div className="w-full md:w-1/2 mb-8 pl-4">
          <h2 className="text-3xl font-bold mb-6 text-orange-300">Connect With Me</h2>

          <div className="text-lg text-white mb-4" onClick={handleEmailClick} style={{ cursor: 'pointer' }}>
            <span className="text-orange-500">Email</span>: <span className = "hover:text-gray-300">shubhcy99@gmail.com</span>
          </div>
          <div className="text-lg text-white mb-4">
            <span className="text-orange-500">Phone</span>: (210) 660-0183
          </div>

          <p className="text-white">
            Feel free to connect with me on social media or drop me an email. I'm always open to new opportunities and collaborations!
          </p>
          <br />

          <div className="space-x-4 text-white">
            <a
              href="https://www.linkedin.com/in/shubhcy99/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-blue-500 transition-colors m-4 pr-2"
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
    </div>
  );
};

export default Contact;