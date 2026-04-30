import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, BedDouble, Bath, Square, Calendar, Download, Share2, CheckCircle2 } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';

const ProjectDetails = () => {
  const { id } = useParams();

  // In a real app, fetch based on ID. For now, mock data.
  const project = {
    title: 'The Obsidian Tower',
    location: '55 Hudson Yards, Manhattan, NY',
    price: 'Starting from $4.5M',
    description: 'A masterpiece of contemporary architecture, The Obsidian Tower stands as a beacon of luxury in the heart of Manhattan. Designed by world-renowned architect Elena Vance, this 70-story residential spire offers panoramic views of the Hudson River and the city skyline.',
    specs: [
      { icon: <BedDouble size={20} />, label: 'Bedrooms', value: '2 - 5' },
      { icon: <Bath size={20} />, label: 'Bathrooms', value: '2.5 - 4.5' },
      { icon: <Square size={20} />, label: 'Area', value: '2,400 - 5,800 sq ft' },
      { icon: <Calendar size={20} />, label: 'Completion', value: 'Q4 2025' }
    ],
    features: ['Private Elevator Entry', '24/7 Concierge Service', 'Infinity Edge Pool', 'Sky Lounge & Bar', 'State-of-the-art Wellness Center', 'Smart Home Integration'],
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=800'
    ]
  };

  return (
    <div style={{ paddingTop: '40px' }}>
      {/* Hero Gallery */}
      <section style={{ height: '70vh', display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '8px', padding: '8px' }}>
        <div style={{ height: '100%', overflow: 'hidden', borderRadius: 'var(--radius-xl) 0 0 var(--radius-xl)' }}>
          <img src={project.images[0]} alt="Hero" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: '8px' }}>
          <div style={{ overflow: 'hidden', borderRadius: '0 var(--radius-xl) 0 0' }}>
            <img src={project.images[1]} alt="Gallery 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ overflow: 'hidden', borderRadius: '0 0 var(--radius-xl) 0', position: 'relative' }}>
            <img src={project.images[2]} alt="Gallery 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <button className="glass" style={{ position: 'absolute', bottom: '1.5rem', right: '1.5rem', padding: '0.75rem 1.5rem', borderRadius: 'var(--radius-full)', fontWeight: 600, color: 'white' }}>
              View All 15 Photos
            </button>
          </div>
        </div>
      </section>

      <section style={{ padding: '60px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr', gap: '80px' }}>
            {/* Left Column: Details */}
            <div>
              <div style={{ marginBottom: '3rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <h1 style={{ fontSize: '3rem' }}>{project.title}</h1>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <button className="glass" style={{ padding: '0.75rem', borderRadius: '50%' }}><Share2 size={20} /></button>
                    <button className="glass" style={{ padding: '0.75rem', borderRadius: '50%' }}><Download size={20} /></button>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--on-surface-variant)', marginBottom: '2rem' }}>
                  <MapPin size={20} className="text-gold" /> {project.location}
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', padding: '2rem 0', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  {project.specs.map((spec, i) => (
                    <div key={i}>
                      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', color: 'var(--on-surface-variant)', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                        {spec.icon} {spec.label}
                      </div>
                      <div style={{ fontWeight: 600, fontSize: '1.125rem' }}>{spec.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '3rem' }}>
                <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Overview</h3>
                <p style={{ fontSize: '1.125rem', color: 'var(--on-surface-variant)', lineHeight: '1.8' }}>{project.description}</p>
              </div>

              <div>
                <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Amenities</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  {project.features.map((feature, i) => (
                    <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                      <CheckCircle2 size={18} className="text-gold" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Inquiry Form */}
            <div>
              <div className="glass" style={{ padding: '3rem', borderRadius: 'var(--radius-xl)', position: 'sticky', top: '120px' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Interested?</h3>
                <p style={{ color: 'var(--on-surface-variant)', marginBottom: '2rem', fontSize: '0.875rem' }}>Register your interest to receive an exclusive project brochure and pricing guide.</p>
                
                <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 700, color: 'var(--on-surface-variant)' }}>Full Name</label>
                    <input type="text" placeholder="John Doe" style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 'var(--radius-default)', color: 'white' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 700, color: 'var(--on-surface-variant)' }}>Email Address</label>
                    <input type="email" placeholder="john@example.com" style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 'var(--radius-default)', color: 'white' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 700, color: 'var(--on-surface-variant)' }}>Message</label>
                    <textarea rows="4" placeholder="I would like to know more about..." style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 'var(--radius-default)', color: 'white', resize: 'none' }}></textarea>
                  </div>
                  <button type="submit" className="btn-pill btn-primary" style={{ width: '100%', marginTop: '1rem' }}>Send Inquiry</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
