import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Globe, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <div style={{ paddingTop: '60px' }}>
      <section style={{ padding: '120px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '80px' }}>
            {/* Left: Contact Info */}
            <div>
              <h1 style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>Let's Build the <span className="text-gold">Future</span></h1>
              <p style={{ fontSize: '1.125rem', color: 'var(--on-surface-variant)', marginBottom: '4rem' }}>
                Whether you're looking for a new residence, an investment opportunity, or a partnership, our team is ready to assist you.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <div style={{ padding: '1rem', background: '#f3f4f6', borderRadius: 'var(--radius-default)', height: 'fit-content' }}>
                    <Mail className="text-gold" />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Email Us</h4>
                    <p style={{ color: 'var(--on-surface-variant)' }}>info@mcinfra.com</p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <div style={{ padding: '1rem', background: '#f3f4f6', borderRadius: 'var(--radius-default)', height: 'fit-content' }}>
                    <Phone className="text-gold" />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Call Us</h4>
                    <p style={{ color: 'var(--on-surface-variant)' }}>+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <div style={{ padding: '1rem', background: '#f3f4f6', borderRadius: 'var(--radius-default)', height: 'fit-content' }}>
                    <MapPin className="text-gold" />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Visit Us</h4>
                    <p style={{ color: 'var(--on-surface-variant)' }}>123 Luxury Ave, New York, NY</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right: Form */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ padding: '4rem', backgroundColor: '#ffffff', borderRadius: 'var(--radius-xl)', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 20px 40px rgba(0,0,0,0.03)' }}
            >
              <form style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--on-surface-variant)' }}>Full Name</label>
                  <input type="text" placeholder="John Doe" style={{ padding: '1rem', border: '1px solid #e5e7eb', borderRadius: 'var(--radius-default)', background: '#f9fafb' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--on-surface-variant)' }}>Email Address</label>
                  <input type="email" placeholder="john@example.com" style={{ padding: '1rem', border: '1px solid #e5e7eb', borderRadius: 'var(--radius-default)', background: '#f9fafb' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--on-surface-variant)' }}>Message</label>
                  <textarea rows="5" placeholder="Your requirements..." style={{ padding: '1rem', border: '1px solid #e5e7eb', borderRadius: 'var(--radius-default)', background: '#f9fafb', resize: 'none' }}></textarea>
                </div>
                <button type="submit" className="btn-pill btn-primary" style={{ width: '100%' }}>Send Message <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} /></button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
