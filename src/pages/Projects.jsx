import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const MapPinIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const projectsData = [
  { id: 1, title: 'The Aura Residences', category: 'Residential', location: 'Downtown District', price: '$2.5M', badge: 'Ready to Move', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmC3J-ChyV_5me-Y3GlJZwRZfNdtxIlvpeacohJNTAPlrWvhdvzLq84kZKxnrfztvotrojix8gm5_60E9rkwLrY5UKgMAeMLe9241xBYHPmNxF7IvvbzKrnkElHqJwRFIvb5GR_v0vKsPPVEIYFCJVWTbRfeD6j-_DH9FdLswxmS4vVso0WDMLnptP40gP15eDcBI1tOVJD3aoHalrZiDLVakr_Lq-NEnJz7f9ruVnOylyR40LWzC5z2kMtluEMgRmrUzSn3hUsw' },
  { id: 2, title: 'Crestview Estates', category: 'Residential', location: 'Highland Hills', price: '$4.1M', badge: 'Under Construction', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAh6WyHtlwmTpnZNSRQ9_LDKtJe7v6I8CrwgTV22-XJB5eV7xiTBGhIwytyBWxDmpT_eMTd80yvLJ_lx-WPW2n2_22rwUJE021ChVbC869AScroFQcumkTYwW1CB5uugtkyLfls7bav2CjH7e4X3R7kXlUnntS-CXkuB1tZZuG_opzVRzhUjt43OfoXyBAa3F6iX93uGIqfaU2fNtK3KffGFS_cg36l0MWIMMuFOwFYHhu3BMVtgZgyof-tOsGUUdhi3t3srkOxg' },
  { id: 3, title: 'Nexus Commercial', category: 'Commercial', location: 'Financial Hub', price: '$1.2M', badge: 'New Launch', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB51DDv5UWs6ldLIrA9whdv_KE6mvIlTcpVk1IZDvyxbEv_bFEK7N0mwxzzz_UOvL9JFHSAuVPl4IL-4ag4Jc_Lc4XvIntECREJ3zLJW51ixotZJCXD-aF5_8lHpcBQ-MvyWdBFnKI0PyloXdGTvyttS9ffWeOludmnilNzm2n0tOFI_suCK293p0PHMXNL4gJlB1xHAlXABYqwINmHddjpTQhmuBlJTP8M6aLHGDevnl4cUCUBGMz8DhG-Zc3pg1UKkSwzK84HYg' },
  { id: 4, title: 'Lumina Heights', category: 'Residential', location: 'London, UK', image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&q=80&w=800', price: '£3.2M' },
  { id: 5, title: 'Nova Logistics Hub', category: 'Industrial', location: 'Dubai, UAE', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800', price: '$120M' },
  { id: 6, title: 'Azure Retreat', category: 'Hospitality', location: 'Santorini, Greece', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800', price: '$18M' }
];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Residential', 'Commercial', 'Industrial', 'Hospitality'];

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <div style={{ paddingTop: '80px', backgroundColor: '#fcf8f8' }}>
      {/* Header */}
      <section style={{ padding: '80px 0', borderBottom: '1px solid #e5e2e1', backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '32px' }}>
            <div>
              <span className="text-gradient-gold" style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', display: 'block', marginBottom: '8px' }}>CURATED COLLECTION</span>
              <h1 style={{ fontSize: 'clamp(1.8rem,4vw,48px)', color: '#1c1b1b' }}>Our Portfolio</h1>
            </div>
            
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  style={{
                    padding: '10px 24px',
                    borderRadius: '9999px',
                    backgroundColor: filter === cat ? '#C89B3C' : '#f1edec',
                    color: filter === cat ? 'white' : '#444748',
                    fontSize: '14px',
                    fontWeight: 700,
                    transition: 'all 0.3s ease',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="projects-grid">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -8 }}
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    border: '1px solid #e5e2e1',
                    boxShadow: '0 40px 40px rgba(33,33,33,0.04)'
                  }}
                >
                  <div style={{ height: '300px', position: 'relative' }}>
                    <img src={project.img || project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ 
                      position: 'absolute', 
                      top: '16px', 
                      left: '16px', 
                      padding: '6px 16px', 
                      backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                      backdropFilter: 'blur(10px)',
                      borderRadius: '9999px',
                      fontSize: '12px',
                      fontWeight: 800,
                      color: '#1c1b1b'
                    }}>
                      {project.category}
                    </div>
                  </div>
                  <div style={{ padding: '32px' }}>
                    <h3 style={{ fontSize: '24px', marginBottom: '4px' }}>{project.title}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#444748', fontSize: '14px', marginBottom: '16px' }}>
                      <MapPinIcon size={14} /> {project.location}
                    </div>
                    <div style={{ height: '1px', background: '#e5e2e1', marginBottom: '16px' }}></div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <span style={{ fontSize: '12px', color: '#444748', display: 'block' }}>STARTING FROM</span>
                        <span style={{ fontSize: '24px', fontWeight: 600 }}>{project.price}</span>
                      </div>
                      <Link to={`/projects/${project.id}`} style={{ color: '#C89B3C', fontSize: '12px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                        View Details <ChevronRight size={14} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
