import React from "react";
import SkillsIcon from "../assets/images/Skills_Icon.png";
import EducationIcon from "../assets/images/Education_Icon.png";
import AboutMe from "../assets/images/About_Me.png";

const About = () => {
  return (
    <div className="container mx-auto p-8 my-8 bg-blue-950">
      <h1 className="text-3xl font-bold mb-6 text-orange-500">About Me</h1>

      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 mb-8 pr-4">
          <p className="mb-4 text-white text-lg">
            Hello, I'm{" "}
            <span className="text-yellow-300 font-semibold text-xl">
              Shubham Choudhary
            </span>
            , a passionate and results-driven
            <span className="text-yellow-300 font-medium"> SOFTWARE DEVELOPER</span>{" "}
            with a keen interest in building innovative web technologies. I have
            a solid foundation in programming languages such as{" "}
            <span className="text-yellow-300 text-xl">JavaScript</span>, and{" "}
            <span className="text-yellow-300 text-xl">Python</span> with
            expertise in web development using popular frameworks and libraries
            like <span className="text-yellow-300 text-xl">React.js</span> and
            <span className="text-yellow-300 text-xl"> Node.js</span>.
          </p>

          <p className="mb-4 text-white text-lg">
            I am currently working as
            a <span className="text-yellow-300 text-xl">Software Developer</span> at <span className="text-yellow-300 text-xl">
                Galaxy Software Solutions Inc.</span>, where I am actively involved in:-
            <ul className="text-orange-300 font-semibold">
              <li>&nbsp;&nbsp;&nbsp;• Design and develop distributed software systems.</li>
              <li>&nbsp;&nbsp;&nbsp;• Write functional code for software applications.</li>
              <li>&nbsp;&nbsp;&nbsp;• Work on database integration with relational databases.</li>
            </ul>
          </p>

          <p className="mb-4 text-white text-lg">
            Outside of coding, I enjoy capturing memories through photos, travel, and listening to music. Feel free to explore my portfolio 
            to get a glimpse of my projects and accomplishments.
          </p>

          <p className="mb-4 text-orange-700 text-xl ">
            Let's build something amazing together!
          </p>
        </div>

        <div className="w-full md:w-1/2 mb-8">
          <img className="w-full h-auto" src={AboutMe} alt="About Me"></img>
        </div>
      </div>

      <div className="w-full mb-8 pr-4">
        <section className="flex items-center">
          <h2 className="text-3xl font-bold mb-4 mr-4 text-orange-500">Skills</h2>
          <img src={SkillsIcon} alt="Skills Icon" className="w-8 h-8" />
        </section>
        <ul className="list-disc list-inside text-white">
          <li>
            <span className="text-orange-300 font-medium text-lg">Languages</span>: Python | JavaScript | HTML | CSS
          </li>
          <li>
            <span className="text-orange-300 font-medium text-lg">Frameworks</span>: MySql, Express.js, React.js, Node.js - MERN Stack
          </li>
          <li>
            <span className="text-orange-300 font-medium text-lg">Databases</span>: MySQL | MongoDB | SQL Server
          </li>
          <li>
            <span className="text-orange-300 font-medium text-lg">Courses</span>: Design and Analysis of Algorithms | Database Systems | Software Engineering | Object Oriented Programming (OOPs)
          </li>
          <li>
            <span className="text-orange-300 font-medium text-lg">Tools</span>: GIT | Node.js | Express.js | Docker | AWS (EC2, S3, API Gateway, Lambda, Route53, VPC)
          </li>
        </ul>
      </div>

      <div className="w-full mb-8">
        <section className="flex items-start">
          <h2 className="text-3xl font-bold mb-4 mr-4 text-orange-500">Education</h2>
          <img src={EducationIcon} alt="Education Icon" className="w-8 h-8" />
        </section>

        <ul className="list-disc list-inside text-white">
          <li className="flex flex-col md:flex-row md:justify-start items-start mb-4 md:mb-0">
            <div className="mb-2 md:mb-0 md:mr-8">
              <span className="text-orange-300 text-lg font-semibold">The University of Texas at Arlington</span>
              <span className="block md:inline-block text-md pl-4 md:pl-0">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Master of Science - Computer Science
              </span>
            </div>
            <div className="text-md text-white md:text-right flex-grow text-md pl-4 md:pl-0">
              August 2021 – May 2023
            </div>
          </li>

          <li className="flex flex-col md:flex-row md:justify-start items-start md:items-start">
            <div className="mb-2 md:mb-0 md:mr-8">
              <span className="text-orange-300 text-lg font-semibold">University of Mumbai</span>
              <span className="block md:inline-block text-md text-md pl-2 md:pl-0">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bachelor of Engineering – Information Technology
              </span>
            </div>
            <div className="text-md text-white md:text-right flex-grow text-md pl-2 md:pl-0">
              August 2017 – June 2021
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
