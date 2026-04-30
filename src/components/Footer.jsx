import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white w-full border-t border-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8 py-12 max-w-7xl mx-auto font-body-md text-sm leading-relaxed">
        <div className="space-y-6">
          <div className="text-xl font-bold text-white uppercase tracking-wider">MC Infra</div>
          <p className="text-gray-400">
            Pioneering structural excellence and residential comfort through precision engineering and ethical construction practices since 2009.
          </p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-gray-400 hover:text-secondary-container cursor-pointer transition-colors" data-icon="social_leaderboard">social_leaderboard</span>
            <span className="material-symbols-outlined text-gray-400 hover:text-secondary-container cursor-pointer transition-colors" data-icon="link">link</span>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-secondary-container">Quick Links</h4>
          <ul className="space-y-4">
            <li><Link to="/projects" className="text-gray-400 hover:text-white transition-colors">Projects</Link></li>
            <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
            <li><Link to="/gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</Link></li>
            <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
            <li><Link to="/news" className="text-gray-400 hover:text-white transition-colors">News</Link></li>
            <li><Link to="/portal" className="text-gray-400 hover:text-white transition-colors">Customer Portal</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-secondary-container">Legal</h4>
          <ul className="space-y-4">
            <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
            <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">RERA Disclosure</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-secondary-container">Contact Us</h4>
          <p className="text-gray-400 mb-4">123 Demo Street, Test City, 000000</p>
          <p className="text-gray-400">
            T: +91 00000 00000<br />
            E: demo@example.com
          </p>
        </div>
      </div>
      
      <div className="border-t border-gray-800 py-6 px-8 max-w-7xl mx-auto">
        <p className="text-xs text-gray-500 text-center md:text-left">
          © {new Date().getFullYear()} MC Infra. RERA Reg No: PRM/KA/RERA/1251/310/PR/180516/001715
        </p>
      </div>
    </footer>
  );
};

export default Footer;
