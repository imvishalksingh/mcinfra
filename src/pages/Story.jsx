import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';

const Story = () => {
  return (
    <div style={{ paddingTop: '80px', backgroundColor: '#fcf8f8' }}>
      {/* Hero */}
      <section style={{ padding: '120px 0', backgroundColor: '#ffffff', borderBottom: '1px solid #e5e2e1' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ maxWidth: '800px' }}
          >
            <span className="text-gradient-gold" style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', display: 'block', marginBottom: '16px' }}>ESTABLISHED 2010</span>
            <h1 style={{ fontSize: 'clamp(2rem,5vw,64px)', lineHeight: '1.1', marginBottom: '24px', color: '#1c1b1b' }}>Legacy of <span className="text-gradient-gold">Visionary</span> Development</h1>
            <p style={{ fontSize: '18px', color: '#444748', lineHeight: '1.8' }}>
              Founded on the principles of architectural integrity and uncompromising luxury, MCINFRA has evolved from a boutique firm to a global leader in high-end developments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission/Vision */}
      <section style={{ padding: '120px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '80px', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800" 
                alt="Office" 
                style={{ width: '100%', borderRadius: '24px', boxShadow: '0 40px 60px rgba(33,33,33,0.05)' }}
              />
            </motion.div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
              <div style={{ display: 'flex', gap: '24px' }}>
                <div style={{ padding: '16px', background: '#f1edec', borderRadius: '12px', height: 'fit-content' }}>
                  <Target className="text-gold" size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '24px', marginBottom: '8px' }}>Our Mission</h3>
                  <p style={{ color: '#444748', fontSize: '16px', lineHeight: '1.7' }}>To create spaces that inspire, endure, and elevate the human experience through surgical precision in design and construction.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '24px' }}>
                <div style={{ padding: '16px', background: '#f1edec', borderRadius: '12px', height: 'fit-content' }}>
                  <Eye className="text-gold" size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '24px', marginBottom: '8px' }}>Our Vision</h3>
                  <p style={{ color: '#444748', fontSize: '16px', lineHeight: '1.7' }}>To be the global benchmark for architectural luxury, recognized for pushing the boundaries of what is possible in sustainable development.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: '120px 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span className="text-gradient-gold" style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', display: 'block', marginBottom: '16px' }}>OUR JOURNEY</span>
            <h2 style={{ fontSize: 'clamp(1.6rem,3.5vw,48px)' }}>Defining the Skyline</h2>
          </div>
          
          <div style={{ position: 'relative', maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '1px', background: '#e5e2e1', transform: 'translateX(-50%)' }} className="timeline-line"></div>
            
            {[
              { year: '2010', title: 'The Foundation', desc: 'MCINFRA established with a focus on luxury residential boutiques.' },
              { year: '2015', title: 'Vertical Expansion', desc: 'Launch of our first high-rise commercial tower in Manhattan.' },
              { year: '2018', title: 'Global Recognition', desc: 'Awarded "Architecture of the Year" for the Emerald Bay Villas.' },
              { year: '2023', title: 'Sustainable Future', desc: 'Initiated our first zero-carbon luxury development series.' }
            ].map((item, i) => (
                <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="timeline-item"
                style={{ 
                  display: 'flex', 
                  justifyContent: i % 2 === 0 ? 'flex-end' : 'flex-start',
                  width: '100%',
                  marginBottom: '60px',
                  position: 'relative'
                }}
              >
                <div style={{ 
                  width: '45%', 
                  padding: '28px', 
                  backgroundColor: '#fcf8f8', 
                  borderRadius: '20px',
                  textAlign: i % 2 === 0 ? 'right' : 'left',
                  border: '1px solid #e5e2e1',
                }}>
                  <span className="text-gradient-gold" style={{ fontWeight: 800, fontSize: '20px' }}>{item.year}</span>
                  <h4 style={{ margin: '8px 0', fontSize: '18px' }}>{item.title}</h4>
                  <p style={{ fontSize: '14px', color: '#444748' }}>{item.desc}</p>
                </div>
                <div className="timeline-dot" style={{ 
                  position: 'absolute', 
                  left: '50%', 
                  top: '32px', 
                  width: '12px', 
                  height: '12px', 
                  background: '#C89B3C', 
                  borderRadius: '50%', 
                  transform: 'translateX(-50%)',
                  boxShadow: '0 0 0 6px rgba(200, 155, 60, 0.12)'
                }}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Story;
