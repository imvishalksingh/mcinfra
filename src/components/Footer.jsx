import React from 'react';
import { Link } from 'react-router-dom';

// Inline SVG icons — avoids lucide-react v1.x export name issues
const FacebookIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const XIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l16 16M4 20L20 4"/>
  </svg>
);

const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
  </svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const MailIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="M2 7l10 7 10-7"/>
  </svg>
);

const PhoneIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 15a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.92 4.14h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 11.9a16 16 0 0 0 5.61 5.61l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const MapPinIcon = ({ size = 18, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const SocialIcons = [FacebookIcon, XIcon, InstagramIcon, LinkedinIcon];

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#ffffff', padding: '100px 0 40px', borderTop: '1px solid #f1f5f9' }}>
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <h2 style={{ fontSize: '28px', fontWeight: 900, color: '#0f172a' }}>MCINFRA</h2>
            <p style={{ color: '#64748b', fontSize: '15px', lineHeight: '1.7' }}>
              Defining the future of luxury real estate through architectural excellence and innovative development. Established 2010.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              {SocialIcons.map((Icon, i) => (
                <a key={i} href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b', transition: 'all 0.3s' }}>
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <h4 style={{ fontSize: '16px', fontWeight: 800, color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {['All Projects', 'Our Story', 'Services', 'Investment', 'Contact'].map((link) => (
                <Link key={link} to="#" style={{ color: '#64748b', textDecoration: 'none', fontSize: '15px', fontWeight: 500 }}>{link}</Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <h4 style={{ fontSize: '16px', fontWeight: 800, color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Contact Us</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', color: '#64748b' }}>
                <MailIcon size={18} />
                <span style={{ fontSize: '15px' }}>info@mcinfra.com</span>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', color: '#64748b' }}>
                <PhoneIcon size={18} />
                <span style={{ fontSize: '15px' }}>+1 (555) 123-4567</span>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', color: '#64748b' }}>
                <MapPinIcon size={18} style={{ marginTop: '4px' }} />
                <span style={{ fontSize: '15px', lineHeight: '1.5' }}>123 Luxury Ave, Suite 500<br/>New York, NY 10001</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <h4 style={{ fontSize: '16px', fontWeight: 800, color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Newsletter</h4>
            <p style={{ color: '#64748b', fontSize: '15px' }}>Subscribe to receive updates on new launches.</p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <input type="email" placeholder="Email" style={{ padding: '12px 16px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#f8fafc', flex: 1 }} />
              <button className="btn-pill btn-primary" style={{ padding: '12px 20px', borderRadius: '12px' }}>Join</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom" style={{ paddingTop: '32px', borderTop: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <p style={{ color: '#94a3b8', fontSize: '14px' }}>© 2024 MCINFRA Development Group. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '32px' }}>
            <a href="#" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px' }}>Privacy Policy</a>
            <a href="#" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px' }}>Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
