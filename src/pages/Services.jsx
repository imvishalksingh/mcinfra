import React from 'react';
import { Link } from 'react-router-dom';
import ConstructionProcess from '../components/ConstructionProcess';

const Services = () => {
  return (
    <main className="bg-background font-body-md text-on-background">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[614px] flex items-center bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            alt="Massive construction site at twilight" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWXQVMBTUV_2QUowNpj6GNltopCuyXU-tE9_lkVpgj09icVu1ew6_QuUwOr9HZrBAKdwsGZyOP6l5io6gjFVMUgJIVfUzYO0KEkruGkIlDGGGmnV6iied8H-mMhHB_xoWX9PBb4ywEkQgp2dvRvsL_W3v74W_tm_Tb-JKkg2AUwVbo-6IoCs32kWgexK4Hd_OcZ3exZ2wTEd5KC1E3QWiqyCfV_YqzQb3HWfKCEkflxBuG3AtBPuM5Eg3MKEq9swVbl9ktZUtV3A"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="max-w-2xl">
            <span className="bg-secondary-container text-on-secondary-container px-2 py-1 text-xs font-label-caps inline-block mb-4">Our Expertise</span>
            <h1 className="font-h1 text-4xl md:text-h1 text-white mb-4">Engineering the <br className="hidden md:block" />Future of Infrastructure.</h1>
            <p className="text-base md:text-body-lg font-body-lg text-primary-fixed-dim max-w-lg">From residential landmarks to complex civil works, MC Infra delivers structural integrity and aesthetic excellence across India.</p>
          </div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="py-16 md:py-24 bg-surface-container-low border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-12">
            <h2 className="font-h2 text-3xl md:text-h2 text-primary">Core Specializations</h2>
            <div className="h-1 w-24 bg-secondary-container mt-2 md:mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Residential */}
            <div className="md:col-span-8 bg-white border border-outline-variant p-6 md:p-8 flex flex-col md:flex-row gap-8 group hover:border-primary transition-colors">
              <div className="w-full md:w-1/2 overflow-hidden">
                <img 
                  alt="Modern luxury residential villa" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeR-QLFyWvj6gNMO-xKa8VF-_xijC5ES93HjWXdsTqlooRf58kbEo3OO-FuxhjWtKpGoJdBfELXxQlAFK5lVNEMiqGhZ9a3zIa4DqPjtHOd0HXDZYgP8gpTc-HkugVU06cKjDwOss1aKuEyPi6cHnl62CEoi8Uf_nAY_iZsqHvLRdAaD9cjD8s5z6Y64U1MtbGcEQsU3HceLp06AElbWQPh1CHdsjEh2yeCNFR0rZflMn_bTYAQxTS4BkgfhN9_-wDenxWJ9QL2g"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <span className="material-symbols-outlined text-primary text-4xl mb-2" data-icon="foundation">foundation</span>
                <h3 className="font-h3 text-2xl md:text-h3 text-primary mb-2">Residential Construction</h3>
                <p className="text-on-surface-variant mb-4 text-sm md:text-base">Bespoke luxury villas, high-rise apartments, and sustainable housing communities built with premium materials.</p>
                <ul className="space-y-2 mb-6 text-sm font-semibold text-primary">
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-xs">check_circle</span> Turnkey Housing</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-xs">check_circle</span> Sustainable Design</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-xs">check_circle</span> Smart Home Integration</li>
                </ul>
                <button className="text-primary font-ui-button flex items-center gap-2 group-hover:gap-4 transition-all">Explore Residential <span className="material-symbols-outlined">arrow_forward</span></button>
              </div>
            </div>
            {/* Interior */}
            <div className="md:col-span-4 bg-white border border-outline-variant p-6 md:p-8 group hover:border-primary transition-colors">
              <div className="h-48 mb-4 overflow-hidden">
                <img 
                  alt="Elegant corporate office interior" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBexoq4I8H-EMd0oG1TP9E0NJOE5e9b855EH5y7wOAGjMpMqrPeLjaEZpjNHj-9pQCwnwVYNoOJM5yeWde5VmUf3RTO78UuagrYqQoR3xs3oICUQ8F6EZDSwJaT3ZukUBZsJQC5woJ2tCYmiSDL0IWI-A2R80VhdCPajeDHMXPfGqS91cy8K_mHvZMqkp61mlTKoq1XigNqLbryBeJIS2-eM_crpaea2ULQ0_F2hz24PZ29L6XVk_tS3wPO0395AewRskPVAulH8Q"
                />
              </div>
              <span className="material-symbols-outlined text-primary text-4xl mb-2" data-icon="format_paint">format_paint</span>
              <h3 className="font-h3 text-2xl md:text-h3 text-primary mb-2">Interior Work</h3>
              <p className="text-on-surface-variant text-sm mb-4">Custom interiors for corporate offices, retail outlets, and luxury homes focusing on ergonomics and brand identity.</p>
              <button className="text-primary font-ui-button flex items-center gap-2">View Portfolio <span className="material-symbols-outlined">arrow_forward</span></button>
            </div>
            {/* Commercial */}
            <div className="md:col-span-4 bg-white border border-outline-variant p-6 md:p-8 group hover:border-primary transition-colors">
              <div className="h-48 mb-4 overflow-hidden">
                <img 
                  alt="Towering glass skyscraper" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuACNh3HYaFPXarj6nBWQfDUi8JyB1UcC-FEtecYy08QQwTs0oEgvlvPomIK5HWBJ5_HkjyCFKPeec09xcaWSfJt0xC9mVm7sNJmHER4n8ILikQD_EQKUdin-MRiDN_DCBrw9nznf7HdPDxGzLcWXwTv6i25ln1c4KY_4gGwjwnTId4zAWzp7Nsd69pperYUEMzhJBO0sqe_hhTAHRLnXQ3HuqfdkhvdY6ZGV11yZEehMFS-6UaVdi6nGK28OyDtXqkT7-Wec06Tjg"
                />
              </div>
              <span className="material-symbols-outlined text-primary text-4xl mb-2" data-icon="apartment">apartment</span>
              <h3 className="font-h3 text-2xl md:text-h3 text-primary mb-2">Commercial Projects</h3>
              <p className="text-on-surface-variant text-sm mb-4">Office towers, shopping malls, and industrial complexes engineered for maximum utility and ROI.</p>
              <button className="text-primary font-ui-button flex items-center gap-2">Project List <span className="material-symbols-outlined">arrow_forward</span></button>
            </div>
            {/* Civil */}
            <div className="md:col-span-8 bg-white border border-outline-variant p-6 md:p-8 flex flex-col md:flex-row gap-8 group hover:border-primary transition-colors">
              <div className="w-full md:w-1/2 flex flex-col justify-center order-2 md:order-1">
                <span className="material-symbols-outlined text-primary text-4xl mb-2" data-icon="architecture">architecture</span>
                <h3 className="font-h3 text-2xl md:text-h3 text-primary mb-2">Civil Engineering</h3>
                <p className="text-on-surface-variant mb-4 text-sm md:text-base">Public infrastructure including bridges, highways, and water treatment plants designed with rigorous safety standards.</p>
                <ul className="space-y-2 mb-6 text-sm font-semibold text-primary">
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-xs">check_circle</span> Structural Stability</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-xs">check_circle</span> Seismic Retrofitting</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-xs">check_circle</span> Geotechnical Survey</li>
                </ul>
                <button className="text-primary font-ui-button flex items-center gap-2">Technical Specs <span className="material-symbols-outlined">arrow_forward</span></button>
              </div>
              <div className="w-full md:w-1/2 overflow-hidden order-1 md:order-2">
                <img 
                  alt="Massive civil engineering project" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBy4B_szKN2uL1jg4OFONhjYMEKpaBERkY4ZBMle64U-PtLnalJrnliIE_aNGMxtzqfqLGp3puhGtOS3mJREcKux85_FKwEb98XWXvVbTzu9cOT4uWyt4SJO8g-cJ63hXCYWoS__5u3_3vhAfWkKX5DM_iTUUkFF7hPlXK_WA6Qw1L0N5m9eb4Em_jJDx8_bGJCqZ9pWd4ACRPk6ahao9ssm9BpHtW6vyRBUX6RyUTfXKRLeUNo-8eNlRgKfLKcEIt8jjaymwILAg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Construction Process Timeline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="font-label-caps text-secondary tracking-widest text-xs">The MC Infra Methodology</span>
            <h2 className="font-h2 text-3xl md:text-h2 text-primary">From Planning to Handover</h2>
          </div>
          <ConstructionProcess dark={false} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary-container text-on-primary-container">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="font-h2 text-3xl md:text-h2 text-white mb-2">Ready to build your vision?</h2>
            <p className="text-body-md opacity-80 text-white">Consult with our lead engineers today for a detailed technical proposal.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Link to="/contact" className="bg-secondary-container text-on-secondary-container px-6 py-3 rounded font-ui-button uppercase tracking-widest active:scale-95 transition-all text-center">
              Schedule Site Visit
            </Link>
            <button className="border border-white text-white px-6 py-3 rounded font-ui-button uppercase tracking-widest hover:bg-white hover:text-primary transition-all text-center">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
