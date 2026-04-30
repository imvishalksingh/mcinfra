import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, CircleUser, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const links = [
    { name: 'Projects',   path: '/projects' },
    { name: 'About Us',   path: '/story' },
    { name: 'Residences', path: '/services' },
    { name: 'Investment', path: '#' },
    { name: 'Contact',    path: '/contact' },
  ];

  // Close menu on route change
  React.useEffect(() => { setIsOpen(false); }, [location.pathname]);

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(25px)',
        borderBottom: '1px solid rgba(0,0,0,0.05)',
        height: '80px',
        display: 'flex',
        alignItems: 'center',
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>

          {/* Brand */}
          <Link to="/" style={{ fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 900, letterSpacing: '-0.06em', color: '#0f172a', textDecoration: 'none' }}>
            MCINFRA
          </Link>

          {/* Desktop Links */}
          <div className="nav-links" style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                style={{
                  fontSize: '14px',
                  fontWeight: 700,
                  color: location.pathname === link.path ? '#C89B3C' : '#475569',
                  textDecoration: 'none',
                  letterSpacing: '0.03em',
                  transition: 'color 0.2s',
                  position: 'relative',
                }}
              >
                {link.name}
                {location.pathname === link.path && (
                  <div style={{ position: 'absolute', bottom: '-6px', left: 0, width: '100%', height: '2px', background: '#C89B3C', borderRadius: '2px' }} />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="nav-actions-desktop" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <button style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
              <Search size={20} />
            </button>
            <Link to="/contact" className="btn-pill btn-primary" style={{ fontSize: '12px', padding: '0.65rem 1.4rem' }}>
              Book Site Visit
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setIsOpen(!isOpen)}
            style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', color: '#0f172a', alignItems: 'center', justifyContent: 'center', padding: '4px' }}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            onClick={() => setIsOpen(false)}
            style={{
              color: location.pathname === link.path ? '#C89B3C' : '#0f172a',
              fontWeight: location.pathname === link.path ? 800 : 700,
            }}
          >
            {link.name}
          </Link>
        ))}
        <div style={{ paddingTop: '16px' }}>
          <Link to="/contact" className="btn-pill btn-primary" onClick={() => setIsOpen(false)} style={{ width: '100%', justifyContent: 'center' }}>
            Book Site Visit
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
