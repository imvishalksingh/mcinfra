import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0a0f1a] text-white w-full border-t border-white/5 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 font-body-md text-sm leading-relaxed">
          <div className="space-y-8">
            <div className="flex items-center">
              <img src="/logo.png" alt="MC Infra" className="h-16 w-auto object-contain brightness-0 invert" />
            </div>
            <p className="text-gray-400 max-w-xs">
              Pioneering structural excellence and residential comfort through precision engineering and ethical construction practices since 2009.
            </p>
            <div className="flex gap-6">
              <a href="https://www.facebook.com/profile.php?id=61570796094359" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-secondary-container transition-all hover:-translate-y-1">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.instagram.com/mcinfra/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-secondary-container transition-all hover:-translate-y-1">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://www.youtube.com/@mcinfrastructure" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-secondary-container transition-all hover:-translate-y-1">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-8 uppercase text-xs tracking-[0.2em] text-secondary-container">Quick Navigation</h4>
            <ul className="space-y-4">
              <li><Link to="/projects" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-secondary-container rounded-full opacity-0 group-hover:opacity-100 transition-all"></span> Projects</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-secondary-container rounded-full opacity-0 group-hover:opacity-100 transition-all"></span> Services</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-secondary-container rounded-full opacity-0 group-hover:opacity-100 transition-all"></span> Gallery</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-secondary-container rounded-full opacity-0 group-hover:opacity-100 transition-all"></span> Careers</Link></li>
              <li><Link to="/news" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-secondary-container rounded-full opacity-0 group-hover:opacity-100 transition-all"></span> News</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-8 uppercase text-xs tracking-[0.2em] text-secondary-container">Office Locations</h4>
            <div className="space-y-6">
              <div>
                <h5 className="text-white font-bold text-xs uppercase mb-2">Meerut Head Office</h5>
                <p className="text-gray-400">Office no 501, Gokul Vihar, Rohta Road, Near Cambridge Public School Pin 250002.</p>
              </div>
              <div className="pt-4 border-t border-white/5">
                <h5 className="text-white font-bold text-xs uppercase mb-2">Noida Regional Office</h5>
                <p className="text-gray-400">Plot No. 45, Sector 62, Noida, Uttar Pradesh 201301.</p>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-8 uppercase text-xs tracking-[0.2em] text-secondary-container">Direct Contact</h4>
            <div className="space-y-4">
              <a href="tel:+917983032984" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <span className="material-symbols-outlined text-secondary-container text-xl">call</span>
                +91 79830 32984
              </a>
              <a href="mailto:Sales@mcinfra.in" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <span className="material-symbols-outlined text-secondary-container text-xl">mail</span>
                Sales@mcinfra.in
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <span className="material-symbols-outlined text-secondary-container text-xl">schedule</span>
                Mon - Sat: 8:30 AM - 8:00 PM
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/5 py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-gray-500 uppercase tracking-widest text-center md:text-left">
            © {new Date().getFullYear()} MC Infra. RERA Reg No: PRM/KA/RERA/1251/310/PR/180516/001715
          </p>
          <div className="flex gap-8">
            <Link to="#" className="text-[10px] text-gray-500 hover:text-white uppercase tracking-widest transition-colors">Privacy</Link>
            <Link to="#" className="text-[10px] text-gray-500 hover:text-white uppercase tracking-widest transition-colors">Terms</Link>
            <Link to="#" className="text-[10px] text-gray-500 hover:text-white uppercase tracking-widest transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
