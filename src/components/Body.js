import React, { useEffect, useState } from "react";
import Web_Development from "../assets/images/Web_Development.jpg";
import ExperienceIcon from "../assets/images/Experience_Icon.jpg";
import CertificateIcon from "../assets/images/Certificate_Icon.png";
import Bitmoji from "../assets/images/Bitmoji.png";
import { Link } from "react-router-dom";

const Body = () => {
  const [isContentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    // Simulate content fade-in effect
    const timeout = setTimeout(() => {
      setContentVisible(true);
    }, 500); // Adjust the delay as needed

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="container mx-auto mt-8 p-4 sm:p-8 bg-blue-950">
      {/* Image Container */}
        <div className={`flex flex-col-reverse sm:flex-row items-center ${isContentVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 ease-in-out`}>
          <div className="w-full sm:w-1/2 pl-0 sm:pl-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Hi There!👋</h1>
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">I'm <span className = "text-yellow-300">Shubham Choudhary</span>, a 
              passionate <span className = "text-yellow-300">MERN Stack Developer</span>.
            </h2>
            <p className="text-lg text-white mb-4">
              Welcome to my portfolio. I specialize in creating modern, responsive, and user-friendly web applications. 
              With expertise in MERN Stack, I bring ideas to life through clean and efficient code.
            </p>
            <p className="text-lg text-white">
              Let's collaborate and build something amazing together!
            </p>
          </div>
          <div className="w-full sm:w-1/2 pr-0 sm:pr-8 mb-4 sm:mb-0">
            <img src={Web_Development} alt="Web Development" className="w-full h-auto object-cover rounded-lg" />
          </div>
        </div>
    
        <div className="flex flex-col-reverse md:flex-row mt-8">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:mt-12 pr-4 flex flex-col items-center justify-center">
            <h1 className="text-center font-bold text-3xl md:text-4xl text-orange-500 mb-4">LET ME PRESENT MYSELF</h1>
              <div className="text-white">
                <p>
                  I have cultivated a profound enthusiasm for programming and have attained a noticeable proficiency, especially in the domain of{" "}
                  <span className="text-yellow-300 text-lg font-bold">Data Structures and Algorithms</span>, emphasizing my proficiency in{" "}
                  <span className="text-yellow-300 text-lg font-bold">Python programming</span>.
                </p>
                <br />
                <p>
                  I'm a web developer with expertise in{" "}
                  <span className="text-yellow-300 text-lg font-bold">Javascript and React</span>.
                </p>
                <p>
                  My passion lies in creating innovative web technologies and products. I excel in product development using{" "}
                  <span className="text-yellow-300 text-lg font-bold">Node.js, and React.js</span>, positioning myself as a versatile contributor to the dynamic field of technology.
                </p>
              </div>
          </div>

          <div className="w-full md:w-1/2 mb-8 md:mb-8">
            <img src={Bitmoji} alt="Bitmoji" className="w-full h-auto md:w-96 md:h-60 mt-8 ml-0 md:ml-12" />
          </div>
        </div>

        {/* Sections Below Image Container */}
          <div className="flex mt-8 flex-wrap">

          {/* Experience Section */}
            <div className="w-full mb-8">
              <section className="flex items-center">
                <h2 className="text-3xl font-bold mb-4 mr-4 text-orange-500">Experience</h2>
                <img src={ExperienceIcon} alt="Experience Icon" className="w-8 h-8" />
              </section>
              <ul className="list-disc list-inside text-white">
                {/* Experience Item 1 */}
                <li className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div className="mb-2 md:mb-0">
                    <span className="text-blue-300 text-lg font-extrabold">
                      Software Developer at Galaxy Software Solutions Inc.
                    </span>
                  </div>

                  <div className="text-white md:text-right">
                    <span className="md:hidden">Oct 2023 - Present</span>
                    <span className="hidden md:inline-block">Oct 2023 - Present</span>
                  </div>
                </li>

                {/* Experience Item 1 Details */}
                <p className="text-yellow-500 mt-2">
                &nbsp;&nbsp;&nbsp;Develop distributed software with a focus on &nbsp;&nbsp;&nbsp;integration, automation, analysis, and &nbsp;&nbsp;&nbsp;optimization within specified constraints.
                </p>

                <div className="text-white">
                  <ul className="list-disc list-inside ml-4">
                    &nbsp;&nbsp;&nbsp;<li>Design and develop distributed software, emphasizing continuous integration and delivery.</li>
                    &nbsp;&nbsp;&nbsp;<li>Configure, automate, and analyze software applications using scientific models for outcome prediction.</li>
                    &nbsp;&nbsp;&nbsp;<li>Evaluate and plan the installation of software, ensuring adherence to specifications, addressing errors, and optimizing performance.</li>
                    &nbsp;&nbsp;&nbsp;<li>Analyze organizational needs and software requirements, ensuring feasible design within cost and time constraints for existing systems.</li>
                  </ul>
                </div>

                {/* Experience Item 2 */}
                <li className="pt-4 flex flex-col md:flex-row md:justify-between md:items-start">
                  <div className = "mb-2 md:mb-0">
                    <span className="text-blue-300 text-lg font-extrabold">
                      Web Developer at Seminaut INC.
                      <Link target = "_blank" to = "https://drive.google.com/file/d/1hdDqgsIRZckXQckdfN-rWU-h2-WNwBEW/view?usp=drive_link" 
                          className = "text-orange-500 hover:text-orange-300 font-light ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Certificate
                      </Link>
                    </span>
                   
                  </div>

                  <div className="text-white md:text-right">
                    <span className="md:hidden">Feb 2023 - May 2023</span>
                    <span className="hidden md:inline-block">Feb 2023 - May 2023</span>
                  </div>
                </li>

                {/* Experience Item 2 Details */}
                <p className="text-yellow-500 mt-2">
                  &nbsp;&nbsp;&nbsp;Code optimization and collaborative design &nbsp;&nbsp;&nbsp;integration.
                </p>

                <div className="text-white">
                  <ul className="list-disc list-inside ml-4">
                    &nbsp;&nbsp;&nbsp;<li>Design and develop distributed software, emphasizing continuous integration and delivery.</li>
                    &nbsp;&nbsp;&nbsp;<li>Configure, automate, and analyze software applications using scientific models for outcome prediction.</li>
                    &nbsp;&nbsp;&nbsp;<li>Evaluate and plan the installation of software, ensuring adherence to specifications, addressing errors, and optimizing performance.</li>
                    &nbsp;&nbsp;&nbsp;<li>Analyze organizational needs and software requirements, ensuring feasible design within cost and time constraints for existing systems.</li>
                  </ul>
                </div>

                {/* Experience Item 3 */}
                <li className="pt-4 flex flex-col md:flex-row md:justify-between md:items-start">
                  <div className = "mb-2 md:mb-0">
                    <span className="text-blue-300 text-lg font-extrabold">
                      ReactJS Developer at Primary Key Technologies
                      <Link target = "_blank" to = "https://drive.google.com/file/d/1fc1imCMzhFinO9hj8aq21TJdpjaSQDIR/view?usp=drive_link" 
                          className = "text-orange-500 hover:text-orange-300 font-light ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Certificate
                      </Link>
                    </span>
                   
                  </div>

                  <div className="text-white md:text-right">
                    <span className="md:hidden">September 2020 - July 2023</span>
                    <span className="hidden md:inline-block">September 2020 - July 2023</span>
                  </div>
                </li>

                {/* Experience Item 3 Details */}
                <p className = "text-yellow-500">&nbsp;&nbsp;&nbsp;Built modules, and improved performance for an ERP project.</p>

                <div className="text-white">
                  <ul className="list-disc list-inside ml-4">
                    &nbsp;&nbsp;&nbsp;<li>Developed React frontend modules for ERP project, integrated with SQL Server with Laravel for seamless 
                    data integration.</li>
                    &nbsp;&nbsp;&nbsp;<li>Collaborated effectively with UX/UI designers, backend developers, and other team members for integrated 
                    application development.</li>
                    &nbsp;&nbsp;&nbsp;<li>Evaluate and plan the installation of software, ensuring adherence to specifications, addressing errors, and optimizing performance.</li>
                    &nbsp;&nbsp;&nbsp;<li>Boosted application performance through component optimization, techniques like lazy loading, and ensured 
                    cross-device responsiveness.</li>
                  </ul>
                </div>
              </ul>
            </div>

            {/* Certifications */}
            <div className="w-full mb-8">
              <section className="flex items-center">
                <h2 className="text-3xl font-bold mb-4 mr-4 text-orange-500">Certifications</h2>
                <img src={CertificateIcon} alt="Certificate Icon" className="w-8 h-8" />
              </section>

              <ul className="list-disc list-inside pb-4">
                <li className="flex justify-between items-center">
                  <div className="text-white">
                    <span className="text-blue-300 text-lg font-bold">
                      Ultimate AWS Certified Cloud Practioner
                    </span>
                    <span className="ml-4 md:ml-8 text-orange-500 hover:text-orange-300 font-light">
                      <Link
                        target="_blank"
                        to="https://www.udemy.com/certificate/UC-ec3ef236-2877-4018-ad43-e0a4a8066809/"
                      >
                        Certificate
                      </Link>
                    </span>
                  </div>
                  <span className="text-white md:ml-4">Aug 2023</span>
                </li>
              </ul>

              <ul className="list-disc list-inside pb-4">
                <li className="flex justify-between items-center">
                  <div className="text-white">
                    <span className="text-blue-300 text-lg font-bold">
                      Docker for the Absolute Beginner – Hands-On – DevOps
                    </span>
                    <span className="ml-4 md:ml-8 text-orange-500 hover:text-orange-300 font-light">
                      <Link
                        target="_blank"
                        to="https://www.udemy.com/certificate/UC-ec3ef236-2877-4018-ad43-e0a4a8066809/"
                      >
                        Certificate
                      </Link>
                    </span>
                  </div>
                  <span className="text-white md:ml-4">Aug 2023</span>
                </li>
              </ul>

              <ul className="list-disc list-inside">
                <li className="flex justify-between items-center">
                  <div className="text-white">
                    <span className="text-blue-300 text-lg font-bold">
                      Foundations of User Experience (UX) Design
                    </span>
                    <span className="ml-4 md:ml-8 text-orange-500 hover:text-orange-300 font-light">
                      <Link
                        target="_blank"
                        to="https://www.udemy.com/certificate/UC-ec3ef236-2877-4018-ad43-e0a4a8066809/"
                      >
                        Certificate
                      </Link>
                    </span>
                  </div>
                  <span className="text-white md:ml-4">Feb 2022</span>
                </li>
              </ul>

            </div>

          </div>
      
    </div>
  );
};

export default Body;