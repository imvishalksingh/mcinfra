import React from 'react';
import { motion } from 'framer-motion';

// Inline SVG icons — avoids lucide-react v1.x naming issues
const LandmarkIcon = () => (
  <svg width={32} height={32} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/>
    <line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/>
    <line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7"/>
  </svg>
);
const PenToolIcon = () => (
  <svg width={32} height={32} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
    <path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/>
  </svg>
);
const BarChartIcon = () => (
  <svg width={32} height={32} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
    <line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/>
  </svg>
);
const HardHatIcon = () => (
  <svg width={32} height={32} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z"/>
    <path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"/><path d="M4 15v-3a8 8 0 0 1 16 0v3"/>
  </svg>
);

const services = [
  {
    icon: <LandmarkIcon />,
    title: 'Architectural Design',
    desc: 'Collaborating with global architects to create iconic silhouettes that redefine city skylines and coastal vistas.',
    features: ['Concept Development', 'Structural Engineering', 'Interior Curation'],
  },
  {
    icon: <PenToolIcon />,
    title: 'Luxury Development',
    desc: 'End-to-end development of premium residential and commercial real estate with a focus on artisanal craftsmanship.',
    features: ['Site Acquisition', 'Feasibility Studies', 'Master Planning'],
  },
  {
    icon: <BarChartIcon />,
    title: 'Strategic Investment',
    desc: 'Providing exclusive investment opportunities in high-growth luxury markets with robust projected returns.',
    features: ['Portfolio Management', 'Market Analysis', 'Risk Assessment'],
  },
  {
    icon: <HardHatIcon />,
    title: 'Project Management',
    desc: 'Surgical precision in execution, ensuring every project is delivered on time, on budget, and beyond expectations.',
    features: ['Quality Control', 'Supply Chain', 'Safety Oversight'],
  },
];

const Services = () => {
  return (
    <div style={{ paddingTop: '80px', backgroundColor: '#fcf8f8' }}>

      {/* Header */}
      <section style={{ padding: 'clamp(60px,8vw,120px) 0', textAlign: 'center', backgroundColor: '#ffffff', borderBottom: '1px solid #e5e2e1' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-gradient-gold" style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}>What We Do</span>
            <h1 style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', marginBottom: '20px' }}>
              Our <span style={{ color: '#C89B3C' }}>Expertise</span>
            </h1>
            <p style={{ fontSize: 'clamp(15px,1.5vw,1.2rem)', color: '#475569', maxWidth: '640px', margin: '0 auto', lineHeight: 1.7 }}>
              We provide a full spectrum of real estate solutions, executed with architectural precision and a relentless focus on luxury.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cards */}
      <section style={{ padding: 'clamp(48px,8vw,100px) 0' }}>
        <div className="container">
          <div className="services-grid">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                style={{
                  padding: 'clamp(24px,3vw,40px)',
                  backgroundColor: '#ffffff',
                  borderRadius: '24px',
                  border: '1px solid #e5e2e1',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                }}
              >
                <div style={{ color: '#C89B3C' }}>{service.icon}</div>
                <h3 style={{ fontSize: 'clamp(18px,2vw,24px)' }}>{service.title}</h3>
                <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '15px' }}>{service.desc}</p>
                <div style={{ marginTop: 'auto', paddingTop: '20px', borderTop: '1px solid #f1edec' }}>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'none', padding: 0 }}>
                    {service.features.map((feat, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#475569' }}>
                        <div style={{ width: '6px', height: '6px', backgroundColor: '#C89B3C', borderRadius: '50%', flexShrink: 0 }} />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
