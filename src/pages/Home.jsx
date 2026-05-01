import React from 'react';
import { Link } from 'react-router-dom';
import ConstructionProcess from '../components/ConstructionProcess';
import { happyClients } from '../data/clients';

const Home = () => {
  return (
    <main className="bg-background text-on-background font-body-md">
      {/* Hero Section (Restored visuals) */}
      <section className="relative h-[650px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover grayscale-[20%]" 
            alt="A large scale construction site at dusk with several towering cranes" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDU0g6f098CWP0bBTIB5yg-ojnVQ_npwGbBo2y3_0gRJScY4hey_ipdPuJQL_dGZOg52oG1WsW_SOOPQa5dJt_1j7I-5rPh9U_1g564QjD8ULgw63cBVPD_4GZbFPXEStjHMTJpjNLpdsIo6EjmKOLMKaWSfXcqB5NIIW7iXmw4iOzi95RxX0JEDXZ1VNWH7_0EE7CaYsk-5_qYoE46i8B8rwULZ9xBGkcWYu8X39zO-_Xwv079mgtXqXAUqkgJcSFuLDca7HzI6w"
          />
          <div className="absolute inset-0 bg-primary/60 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <h1 className="font-h1 text-4xl md:text-5xl lg:text-h1">Building Homes and Commercial Spaces with Trust</h1>
            <p className="font-body-lg text-lg md:text-xl text-surface-variant max-w-xl">
              MC Infra delivers residential, commercial, and infrastructure projects with quality construction and timely delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/projects" className="bg-secondary-container text-primary font-ui-button px-8 py-4 rounded hover:brightness-110 transition-all flex items-center justify-center gap-2">
                View Projects
              </Link>
              <Link to="/contact" className="border-2 border-white text-white font-ui-button px-8 py-4 rounded hover:bg-white/10 transition-all text-center">
                Contact Team
              </Link>
            </div>
          </div>
          <div className="hidden md:grid grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-sm p-8 border border-white/20">
              <div className="text-secondary-container font-h1 text-4xl mb-2">16+</div>
              <div className="font-label-caps text-xs text-surface-variant uppercase tracking-widest">Years of Excellence</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 border border-white/20">
              <div className="text-secondary-container font-h1 text-4xl mb-2">450+</div>
              <div className="font-label-caps text-xs text-surface-variant uppercase tracking-widest">Projects Delivered</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 border border-white/20 col-span-2">
              <div className="text-secondary-container font-h1 text-4xl mb-2">10M+</div>
              <div className="font-label-caps text-xs text-surface-variant uppercase tracking-widest">Sq Ft Developed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section (Restored visuals) */}
      <section className="py-24 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div className="space-y-4">
              <span className="text-secondary font-label-caps tracking-[0.2em] uppercase">Specializations</span>
              <h2 className="font-h2 text-3xl md:text-h2 text-primary">Core Construction Services</h2>
            </div>
            <div className="h-1 flex-grow mx-12 blueprint-line opacity-30 hidden md:block"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-10 border border-gray-200 hover:border-primary transition-all bg-surface-container-lowest">
              <span className="material-symbols-outlined text-5xl text-primary mb-6" data-icon="apartment">apartment</span>
              <h3 className="font-h3 text-2xl mb-4 group-hover:text-primary transition-colors">Residential</h3>
              <p className="text-on-surface-variant">High-end apartment towers and luxury gated communities designed for modern urban living.</p>
            </div>
            <div className="group p-10 border border-gray-200 hover:border-primary transition-all bg-surface-container-lowest">
              <span className="material-symbols-outlined text-5xl text-primary mb-6" data-icon="corporate_fare">corporate_fare</span>
              <h3 className="font-h3 text-2xl mb-4 group-hover:text-primary transition-colors">Commercial</h3>
              <p className="text-on-surface-variant">State-of-the-art office spaces, tech parks, and retail centers built for commercial success.</p>
            </div>
            <div className="group p-10 border border-gray-200 hover:border-primary transition-all bg-surface-container-lowest">
              <span className="material-symbols-outlined text-5xl text-primary mb-6" data-icon="engineering">engineering</span>
              <h3 className="font-h3 text-2xl mb-4 group-hover:text-primary transition-colors">Civil Engineering</h3>
              <p className="text-on-surface-variant">Robust infrastructure projects, bridges, and industrial structures with engineering precision.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section (Restored visuals) */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              className="w-full h-[500px] object-cover border border-gray-300" 
              alt="An expert site engineer inspecting a complex architectural blueprint" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmRiUEJCfvGEB3qp_vBhC9GTD6YtzE3ElChHIOw7H924lG7bGk2QdrLEUrw2xIMibTv-Of5GeskNpfB83H1RtM3SXvv93v9eA4NzgY3OF41QZhJrKePi_CHLE6ayE5mYuSS2EJ-6xNsCe1oNJ80Jly4OYRIY7GXvQHuoEw6Sdq5cqp-tOdz_BHvw-rvNzSwGy4VZ6YKW5A_4-4aZp7DBCv5YDLTm3ZQUt6lt0Sb_kgrieKqKUtkqbZc5U6DP3H-QGBU4pJeIHNbA"
            />
            <div className="absolute -bottom-8 -right-8 bg-secondary-container p-8 border border-primary hidden md:block">
              <span className="block font-h3 text-3xl text-primary">ISO 9001:2015</span>
              <span className="block font-label-caps text-xs text-primary/80 uppercase">Certified Standards</span>
            </div>
          </div>
          <div className="space-y-8">
            <span className="text-secondary font-label-caps tracking-[0.2em] uppercase">Who We Are</span>
            <h2 className="font-h2 text-3xl md:text-h2 text-primary">Engineering Quality with Rigid Safety Standards</h2>
            <p className="text-body-lg text-on-surface-variant leading-relaxed">
              At MC Infra, we believe that structural integrity is the foundation of trust. Every project undergoes rigorous site inspections and quality checks to ensure it exceeds global safety benchmarks.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4 pb-4 border-b border-gray-200">
                <span className="material-symbols-outlined text-primary" data-icon="verified">verified</span>
                <div>
                  <h4 className="font-bold text-primary">Premium Grade Materials</h4>
                  <p className="text-sm text-on-surface-variant">We source only Tier-1 materials for long-term structural durability.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 pb-4 border-b border-gray-200">
                <span className="material-symbols-outlined text-primary" data-icon="safety_check">safety_check</span>
                <div>
                  <h4 className="font-bold text-primary">Zero-Incident Safety Policy</h4>
                  <p className="text-sm text-on-surface-variant">Strict adherence to industrial safety protocols for every onsite personnel.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section (Restored visuals) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4">
              <span className="text-secondary font-label-caps tracking-[0.2em] uppercase">Our Portfolio</span>
              <h2 className="font-h2 text-3xl md:text-h2 text-primary">Project Showcase</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              <button className="bg-primary text-white px-4 py-2 text-sm font-label-caps">ALL</button>
              <button className="border border-gray-300 px-4 py-2 text-sm font-label-caps hover:bg-gray-50 transition-colors">ONGOING</button>
              <button className="border border-gray-300 px-4 py-2 text-sm font-label-caps hover:bg-gray-50 transition-colors">COMPLETED</button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Project Card 1 */}
            <div className="group border border-gray-200">
              <div className="relative overflow-hidden h-[400px]">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  alt="Modern architectural rendering of high-rise apartment towers" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHUNjkS1FjeJSSe8W4IBwDbxrqavTUd42XyTpHSaouM-8MCURbWmtjWXymMa9HUBPThRebapsM_cMRelDHcQWZJaQudOeIJi6IwQK-Ov27MPC2Zrll8EViS7e_8Z_Q3g6Sz2eE5fcvivxcv7kj8pRXAzSVvxStyv-lDX4lN2CGT172orXv-Z4ai7jUgh9xC6JB-YT9SwR5joEHtFxWCkZg4eD3mmXhSjrSVlncwJn-ovHd-2YBT0_zr1_vg1IFkUmKm5qksANY5Q"
                />
                <div className="absolute top-4 left-4 bg-secondary-container px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">Ongoing</div>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-2">
                  <div>
                    <h3 className="font-h3 text-xl mb-1">Skyline Heights</h3>
                    <p className="text-sm text-on-surface-variant flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm" data-icon="location_on">location_on</span> Rohta Road, Meerut
                    </p>
                  </div>
                  <div className="sm:text-right">
                    <span className="block text-[10px] font-label-caps text-on-surface-variant uppercase mb-1">RERA No.</span>
                    <span className="bg-gray-100 px-2 py-1 text-[10px] border border-gray-300">PRM/KA/RERA/1251/310/PR/180516/001715</span>
                  </div>
                </div>
                <div className="w-full bg-gray-100 h-2 mb-2">
                  <div className="bg-secondary-container h-full w-[65%]"></div>
                </div>
                <div className="flex justify-between text-[10px] font-label-caps text-on-surface-variant">
                  <span>65% COMPLETE</span>
                  <span>POSSESSION: DEC 2025</span>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="group border border-gray-200">
              <div className="relative overflow-hidden h-[400px]">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  alt="A finished contemporary commercial building" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJbYqyi5xA3Hx2EX-P-fmP7UE6vFzBKRFALlFZ7COCVYSZ1cJ5fOeqqIMKLVCRFMZ1k_Wln83lUTLJyWt5Jtnlm1F12-cvMbJoOS1uLyOl8HEXGwTNUH-XSzAFf4Wsb1clmaX1nsY1NANg2QA5OMntlOvweXf_xHBcnQ_RNyiDe6nbOKU_gCqF9QvuUWeXJIknSHFPUpiWzsBT8uGVKuriWpNC75m7YHXAe19jb3dsDArWQYIhPxS6Pdt2ljMRvtrPT04qadG_pg"
                />
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest">Completed</div>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-2">
                  <div>
                    <h3 className="font-h3 text-xl mb-1">Nexus Business Hub</h3>
                    <p className="text-sm text-on-surface-variant flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm" data-icon="location_on">location_on</span> Meerut City
                    </p>
                  </div>
                  <div className="sm:text-right">
                    <span className="block text-[10px] font-label-caps text-on-surface-variant uppercase mb-1">Status</span>
                    <span className="bg-green-100 text-green-700 px-2 py-1 text-[10px] border border-green-200">Ready to Move</span>
                  </div>
                </div>
                <p className="text-sm text-on-surface-variant mb-6">A premium grade-A office space delivered ahead of schedule with 100% occupancy.</p>
                <button className="text-primary font-label-caps text-xs flex items-center gap-2 hover:gap-4 transition-all">
                  VIEW CASE STUDY <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Construction Process */}
      <section className="py-24 bg-primary text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20 space-y-4">
            <span className="text-secondary-container font-label-caps tracking-[0.2em] uppercase">The Blueprint</span>
            <h2 className="font-h2 text-3xl md:text-h2">Our Systematic Construction Process</h2>
          </div>
          <ConstructionProcess dark={true} />
        </div>
      </section>

      {/* Testimonials Section (Updated content, restored visuals) */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
            <div className="space-y-8">
              <span className="text-secondary font-label-caps tracking-[0.2em] uppercase">Happy Homeowners</span>
              <h2 className="font-h2 text-3xl md:text-h2 text-primary">Voices of Satisfaction</h2>
              <div className="bg-white p-8 md:p-12 border border-gray-200 relative">
                <span className="material-symbols-outlined text-6xl text-secondary-container absolute -top-8 -left-4 opacity-50" data-icon="format_quote">format_quote</span>
                <p className="text-body-lg text-base md:text-lg italic mb-8">
                  "Moving into our new home at Skyline Heights was a dream come true. The quality of finishing and the way the MC Infra team handled the entire handover ceremony made us feel truly special. It's rare to see such transparency in construction timelines today."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">RS</div>
                  <div>
                    <h4 className="font-bold text-primary">Rakesh & Sneha Sharma</h4>
                    <p className="text-xs text-on-surface-variant">Homeowners, Phase 1</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                className="w-full h-[400px] md:h-[600px] object-cover border-8 border-white shadow-sm" 
                alt="A joyful family standing in front of their brand new modern home" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0Tsc1JQyPrE9w8JdIbQYdrw3_0AEC5_QCFXUqJZjHKonmnYX7VIU_9BIihDqyF3LAjUpJ6dO2K2GItQ1oVhNBUCKQzIBVp_WVgAl7MAKAnYr_DEiu0OAPVw93Nh60KVQF54xbC8WOm7TQY4fGmvz_8riyuyabBRJK2nvRwVSzHP9rkI8pFzz25cePoyAIYL3S78hIWeIgHf_O5p6gaLgrTcY1fcaYAwf9f0lp-MitWK6IuGCeq21nT80w42ympcbpd7x1IpXEGw"
              />
            </div>
          </div>
          
          {/* Grid for Additional Happy Clients */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {happyClients.map((client, index) => (
              <div key={index} className="bg-white p-6 border border-gray-200 relative group hover:border-primary transition-all">
                <p className="text-on-surface-variant italic mb-6 text-xs md:text-sm leading-relaxed">
                  "{client.message}"
                </p>
                <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                  <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-primary font-bold shrink-0 text-xs">
                    {client.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-xs">{client.name}</h4>
                    <p className="text-[10px] text-on-surface-variant font-medium">{client.designation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
