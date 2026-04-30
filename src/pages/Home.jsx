import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ backgroundColor: '#fcf8f8', width: '100%', overflow: 'hidden' }}>

      {/* ── 1. HERO ── */}
      <section style={{ minHeight: '100svh', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBi5Q9mRBmUcYdYr8E-AVDkJwIehEBCengW_Zy9VeiYDeZB1HaRA7sv1HGVj36LRW8avxJKojpDu9TYluVes2QIT1uQypgT25WxinKz7vEUi9HeqtqljLG8HpT8ADMhb8LpF-oPBebpKqy2DNih2brN0ab1S5PPoEACS7Eq0l8V9l_bOkVeDMXs01o4Anhf21-D5vFfPO8AyTMs_sWd9WXpdmJ0jUb74qsdcLN5diU8kIHAz87671HN4zxrOMAYNbyds4ZddzqJ7g"
            alt="Ultra-luxury mansion at twilight"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.55) 100%)' }} />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 20, textAlign: 'center', padding: '120px 20px 200px' }}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ fontSize: 'clamp(2rem, 6vw, 72px)', color: 'white', lineHeight: '1.1', marginBottom: '20px', fontWeight: 900 }}
          >
            Building The Future Of<br />
            <span className="text-gradient-gold">Luxury Living</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'rgba(255,255,255,0.88)', maxWidth: '560px', margin: '0 auto 36px' }}
          >
            Premium residential and commercial real estate crafted with innovation, trust, and elegance.
          </motion.p>
          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Link to="/projects" className="btn-pill btn-primary">Explore Projects</Link>
            <Link to="/contact" className="btn-pill" style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.6)', color: 'white', backdropFilter: 'blur(10px)' }}>
              Book Consultation
            </Link>
          </motion.div>
        </div>

        {/* TRUST BAR */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', transform: 'translateY(50%)', zIndex: 30 }}>
          <div className="container">
            <div className="trust-bar-grid" style={{ backgroundColor: 'white', padding: '28px 32px', borderRadius: '20px', boxShadow: '0 20px 50px rgba(0,0,0,0.12)' }}>
              <div>
                <h2 className="text-gradient-gold" style={{ fontSize: 'clamp(28px,4vw,44px)' }}>10+</h2>
                <span style={{ fontSize: '11px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Years Experience</span>
              </div>
              <div>
                <h2 className="text-gradient-gold" style={{ fontSize: 'clamp(28px,4vw,44px)' }}>50+</h2>
                <span style={{ fontSize: '11px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Projects Delivered</span>
              </div>
              <div>
                <h2 className="text-gradient-gold" style={{ fontSize: 'clamp(28px,4vw,44px)' }}>5000+</h2>
                <span style={{ fontSize: '11px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Happy Families</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: 'clamp(80px, 12vw, 150px)' }} />

      {/* ── 2. FEATURED PROJECTS ── */}
      <section style={{ padding: 'clamp(48px,8vw,80px) 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '32px' }}>
            <h2 style={{ fontSize: 'clamp(1.6rem,4vw,48px)', color: '#0f172a' }}>Featured Projects</h2>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #ddd', background: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><ChevronLeft size={18} /></button>
              <button style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #ddd', background: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><ChevronRight size={18} /></button>
            </div>
          </div>

          <div className="projects-grid">
            {[
              { title: 'The Aura Residences', loc: 'Downtown District', price: '$2.5M', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800' },
              { title: 'Crestview Estates',   loc: 'Highland Hills',   price: '$4.1M', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800' },
              { title: 'Nexus Commercial',    loc: 'Financial Hub',    price: '$1.2M', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800' },
            ].map((p, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                style={{ backgroundColor: 'white', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 8px 24px rgba(0,0,0,0.05)', border: '1px solid #f1edec' }}
              >
                <img src={p.img} alt={p.title} style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }} />
                <div style={{ padding: '20px' }}>
                  <h3 style={{ fontSize: '18px', marginBottom: '4px' }}>{p.title}</h3>
                  <p style={{ color: '#64748b', fontSize: '14px', margin: '0 0 16px' }}>{p.loc}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '22px', fontWeight: 800 }}>{p.price}</span>
                    <Link to={`/projects/${i + 1}`} style={{ color: '#C89B3C', fontWeight: 700, fontSize: '13px' }}>View Details →</Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. VISION ── */}
      <section style={{ padding: 'clamp(60px,10vw,100px) 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="vision-grid">
            <div className="vision-images">
              <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=600" alt="Office" style={{ width: '100%', height: '380px', objectFit: 'cover', borderRadius: '20px' }} />
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600" alt="Building" style={{ width: '100%', height: '460px', objectFit: 'cover', borderRadius: '20px', marginTop: '40px' }} />
            </div>
            <div>
              <span className="text-gradient-gold" style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Our Vision</span>
              <h2 style={{ fontSize: 'clamp(1.6rem,3.5vw,52px)', color: '#0f172a', margin: '16px 0' }}>Crafting Legacies in Stone and Glass</h2>
              <p style={{ fontSize: 'clamp(15px,1.5vw,18px)', color: '#475569', lineHeight: '1.7', marginBottom: '28px' }}>
                At MCINFRA, we sculpt environments that elevate the human experience — every façade, every interior, every community is a testament to our craft.
              </p>
              <div style={{ borderLeft: '4px solid #C89B3C', paddingLeft: '20px', fontSize: 'clamp(16px,2vw,22px)', fontStyle: 'italic', color: '#475569', marginBottom: '36px', lineHeight: '1.6' }}>
                "Our mission is architectural brilliance."
              </div>
              <Link to="/story" className="btn-pill btn-outline">Discover Our Story</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
