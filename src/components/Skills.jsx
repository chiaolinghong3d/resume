import React from "react";
import {
  FaGitAlt,
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaHtml5,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiFigma,
} from "react-icons/si";

function Skills() {
  return (
    <div className='content-item-container' id='skills'>
      <h2 className='text-uppercase pb-3'>skills</h2>
      <div className='content-item-border'>
        <div className='tool-icon-list'>
          <SiJavascript />
          <FaNodeJs />
          <FaReact />
          <FaCss3Alt />
          <FaHtml5 />
          <FaGitAlt />
          <SiMysql />
          <SiPostgresql />
          <SiMongodb />
          <SiAdobephotoshop />
          <SiAdobeillustrator />
          <SiFigma />
        </div>
      </div>
    </div>
  );
}

export default Skills;
