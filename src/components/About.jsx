import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

function About() {
  return (
    <div className='content-item-container'>
      <div className="intro">
        <h1>Chiaoling <span style={{color: '#2377C6'}}>Hong</span></h1>
        <br />
        <h3>I am a software engineer who is passionate <br/>about user-centered design.</h3>
        <br />
        <br />
        <h3>clean.<span style={{color: '#4A9DEB'}}>simple</span>.design.</h3>
      </div>
      <div className="social-media-list pt-5">
        <a href='https://github.com/chiaolinghong3d' target='_blank' rel='noopener noreferrer'>
          <BsGithub className='social-media-icon'/>
        </a>
        <a href='https://www.linkedin.com/in/chiaolinghong/' target='_blank' rel='noopener noreferrer'>
          <BsLinkedin className='social-media-icon'/>
        </a>
      </div>
    </div>
  );
}

export default About;
