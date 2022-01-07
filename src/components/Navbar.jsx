import React from 'react';
import NavbarItem from './NavbarItem';
import navbarItems from '../navbarItems';

function Navbar() {
  return (
    <nav
      className='navbar navbar-expand-lg flex-lg-column align-items-center py-2 text-center sticky-top'
      id='sideNav'
    >
      <div className="text-center pt-3">
        <a className='navbar-brand js-scroll-trigger' href='#page-top'>
          <span className='d-block d-lg-none title'><h3>Chiaoling Hong</h3></span>
          <span className='d-none d-lg-block'>
            <img
              className='img-fluid img-profile mx-auto mb-2'
              src={`${process.env.PUBLIC_URL}/img/profile.png`}
              alt='profile pic'
            />
          </span>
        </a>
      </div>
      <button
        className='navbar-toggler'
        type='button'
        data-bs-toggle='collapse'
        data-bs-target='#navbarResponsive'
        aria-controls='navbarResponsive'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarResponsive'>
        <ul className='navbar-nav flex-column w-100 justify-content-center'>
          {navbarItems.map(({href, name}) => 
            <NavbarItem href={href} name={name}/>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
