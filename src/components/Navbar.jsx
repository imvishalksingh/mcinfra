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
              +91 00000 00000
            </span>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-sm" data-icon="mail">mail</span>
              demo@example.com
            </span>
          </div>
          <div className="flex gap-4 md:gap-6">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-sm" data-icon="schedule">schedule</span>
              9 AM - 7 PM
            </span>
            <span className="flex items-center gap-1 hidden md:flex">
              <span className="material-symbols-outlined text-sm" data-icon="location_on">location_on</span>
              123 Demo Street
            </span>
          </div>
        </div>
      </div>

      {/* TopAppBar */}
      <header className="sticky top-0 w-full z-50 border-b border-gray-300 bg-white">
        <nav className="flex justify-between items-center px-4 md:px-8 py-3 max-w-7xl mx-auto">
          <Link to="/" className="text-2xl font-black tracking-tighter text-primary-container">
            MC Infra
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
              Get Quote
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
                Get Quote
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
