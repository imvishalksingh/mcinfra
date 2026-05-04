import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/story' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Careers', path: '/careers' },
    { name: 'News', path: '/news' },
    { name: 'Portal', path: '/portal' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Utility Top Bar */}
      <div className="bg-primary-container text-white py-2 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs tracking-wider font-label-caps gap-2 md:gap-0">
          <div className="flex gap-4 md:gap-6">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-sm" data-icon="call">call</span>
              +91 79830 32984
            </span>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-sm" data-icon="mail">mail</span>
              Sales@mcinfra.in
            </span>
          </div>
          <div className="flex gap-4 md:gap-6">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-sm" data-icon="schedule">schedule</span>
              8:30 AM - 8:00 PM
            </span>
            <span className="flex items-center gap-1 hidden md:flex">
              <span className="material-symbols-outlined text-sm" data-icon="location_on">location_on</span>
              Rohta Road, Meerut
            </span>
          </div>
          <div className="flex gap-4 items-center">
            <a href="https://www.facebook.com/profile.php?id=61570796094359" target="_blank" rel="noopener noreferrer" className="hover:text-secondary-container transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://www.instagram.com/mcinfra/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary-container transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://www.youtube.com/@mcinfrastructure" target="_blank" rel="noopener noreferrer" className="hover:text-secondary-container transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* TopAppBar */}
      <header className="sticky top-0 w-full z-50 border-b border-gray-300 bg-white">
        <nav className="flex justify-between items-center px-4 md:px-8 py-3 max-w-7xl mx-auto">
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="MC Infra" className="h-16 w-auto object-contain" />
          </Link>
          
          <div className="hidden lg:flex gap-4 xl:gap-8 items-center font-body-md font-medium text-sm tracking-wide">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`transition-colors ${
                  location.pathname === link.path
                    ? 'text-primary-container border-b-2 border-secondary-container pb-1'
                    : 'text-on-surface-variant hover:text-secondary'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <button className="bg-secondary-container text-primary font-ui-button px-6 py-2 rounded-lg hover:bg-yellow-400 transition-all uppercase tracking-widest text-xs">
              Get Free Estimate
            </button>
          </div>

          <button
            className="md:hidden flex items-center text-primary-container"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="material-symbols-outlined text-3xl">
              {isOpen ? 'close' : 'menu'}
            </span>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4 px-4 shadow-lg absolute w-full">
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block text-lg font-medium ${
                    location.pathname === link.path ? 'text-primary-container font-bold' : 'text-on-surface-variant'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <button className="bg-secondary-container text-primary font-ui-button px-6 py-3 rounded-lg hover:bg-yellow-400 transition-all uppercase tracking-widest text-sm w-full mt-4">
                Get Free Estimate
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
