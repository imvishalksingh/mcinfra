import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ConstructionProcess from '../components/ConstructionProcess';
import { happyClients as initialClients } from '../data/clients';
import { projects as initialProjects } from '../data/projects';
import { getStoredData, STORAGE_KEYS } from '../utils/storage';

const Home = () => {
  const [happyClients, setHappyClients] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setHappyClients(getStoredData(STORAGE_KEYS.CLIENTS, initialClients));
    setProjects(getStoredData(STORAGE_KEYS.PROJECTS, initialProjects).slice(0, 4));
  }, []);
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
            <h1 className="font-h1 text-4xl md:text-5xl lg:text-h1">Building Your Dreams With Care</h1>
            <p className="font-body-lg text-lg md:text-xl text-surface-variant max-w-xl">
              MC Infra delivers residential, commercial, and infrastructure projects with quality construction and timely delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/projects" className="bg-secondary-container text-primary font-ui-button px-8 py-4 rounded hover:brightness-110 transition-all flex items-center justify-center gap-2">
                View Projects
              </Link>
              <Link to="/contact" className="border-2 border-white text-white font-ui-button px-8 py-4 rounded hover:bg-white/10 transition-all text-center">
                Build House AI
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
      <section className="py-24 bg-white border-y border-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div className="space-y-4">
              <span className="text-secondary font-label-caps tracking-[0.3em] uppercase text-xs font-bold">Specializations</span>
              <h2 className="font-h2 text-3xl md:text-4xl text-primary">Core Construction Services</h2>
            </div>
            <div className="h-[1px] flex-grow mx-12 bg-primary/10 hidden md:block"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="group p-10 bg-white border border-gray-100 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-8 -mt-8 group-hover:scale-150 transition-transform duration-700"></div>
              <span className="material-symbols-outlined text-5xl text-primary mb-8 block transition-transform group-hover:-translate-y-2" data-icon="apartment">apartment</span>
              <h3 className="font-h3 text-2xl mb-4 text-primary">Residential</h3>
              <p className="text-on-surface-variant leading-relaxed">High-end apartment towers and luxury gated communities designed for modern urban living with premium finishes.</p>
            </div>
            <div className="group p-10 bg-white border border-gray-100 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-8 -mt-8 group-hover:scale-150 transition-transform duration-700"></div>
              <span className="material-symbols-outlined text-5xl text-primary mb-8 block transition-transform group-hover:-translate-y-2" data-icon="corporate_fare">corporate_fare</span>
              <h3 className="font-h3 text-2xl mb-4 text-primary">Commercial</h3>
              <p className="text-on-surface-variant leading-relaxed">State-of-the-art office spaces, tech parks, and retail centers built for commercial success and functional brilliance.</p>
            </div>
            <div className="group p-10 bg-white border border-gray-100 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-8 -mt-8 group-hover:scale-150 transition-transform duration-700"></div>
              <span className="material-symbols-outlined text-5xl text-primary mb-8 block transition-transform group-hover:-translate-y-2" data-icon="engineering">engineering</span>
              <h3 className="font-h3 text-2xl mb-4 text-primary">Civil Engineering</h3>
              <p className="text-on-surface-variant leading-relaxed">Robust infrastructure projects, bridges, and industrial structures with engineering precision and lifetime durability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section (Restored visuals) */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/5 rounded-3xl -rotate-2"></div>
            <img 
              className="relative w-full h-[600px] object-cover rounded-2xl shadow-2xl z-10" 
              alt="An expert site engineer inspecting a complex architectural blueprint" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmRiUEJCfvGEB3qp_vBhC9GTD6YtzE3ElChHIOw7H924lG7bGk2QdrLEUrw2xIMibTv-Of5GeskNpfB83H1RtM3SXvv93v9eA4NzgY3OF41QZhJrKePi_CHLE6ayE5mYuSS2EJ-6xNsCe1oNJ80Jly4OYRIY7GXvQHuoEw6Sdq5cqp-tOdz_BHvw-rvNzSwGy4VZ6YKW5A_4-4aZp7DBCv5YDLTm3ZQUt6lt0Sb_kgrieKqKUtkqbZc5U6DP3H-QGBU4pJeIHNbA"
            />
            <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-2xl shadow-xl z-20 border border-gray-100 hidden lg:block">
              <div className="flex items-center gap-4 mb-2">
                <span className="w-12 h-[2px] bg-secondary"></span>
                <span className="font-label-caps text-xs tracking-widest text-secondary font-bold uppercase">Our Legacy</span>
              </div>
              <span className="block font-h3 text-4xl text-primary mb-1">ISO 9001</span>
              <span className="block text-sm text-on-surface-variant font-medium">Certified Excellence Standards</span>
            </div>
          </div>
          <div className="space-y-10">
            <div className="space-y-4">
              <span className="text-secondary font-label-caps tracking-[0.3em] uppercase text-xs font-bold">Who We Are</span>
              <h2 className="font-h2 text-4xl md:text-5xl text-primary leading-tight">Engineering Quality with Rigid Safety Standards</h2>
            </div>
            <p className="text-lg text-on-surface-variant leading-relaxed font-light">
              At MC Infra, we believe that structural integrity is the foundation of trust. Every project undergoes rigorous site inspections and quality checks to ensure it exceeds global safety benchmarks.
            </p>
            <div className="grid grid-cols-1 gap-6">
              <div className="flex items-start gap-6 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary" data-icon="verified">verified</span>
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg mb-1">Premium Grade Materials</h4>
                  <p className="text-sm text-on-surface-variant">We source only Tier-1 materials for long-term structural durability and resistance.</p>
                </div>
              </div>
              <div className="flex items-start gap-6 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary" data-icon="safety_check">safety_check</span>
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg mb-1">Zero-Incident Safety Policy</h4>
                  <p className="text-sm text-on-surface-variant">Strict adherence to industrial safety protocols for every onsite personnel and visitor.</p>
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
              <button className="bg-primary text-white px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase shadow-lg shadow-primary/20">Button List Property</button>
              <button className="border border-gray-200 px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-gray-50 transition-colors">ONGOING</button>
              <button className="border border-gray-200 px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-gray-50 transition-colors">COMPLETED</button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project) => (
              <div key={project.id} className="group border border-gray-200">
                <div className="relative overflow-hidden h-[400px]">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    alt={project.name} 
                    src={project.image}
                  />
                  <div className={`absolute top-4 left-4 ${project.status === 'Completed' ? 'bg-primary text-white' : 'bg-secondary-container text-primary'} px-3 py-1 text-[10px] font-bold uppercase tracking-widest`}>
                    {project.status}
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-2">
                    <div>
                      <h3 className="font-h3 text-xl mb-1">{project.name}</h3>
                      <p className="text-sm text-on-surface-variant flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">location_on</span> {project.location}
                      </p>
                    </div>
                    <div className="sm:text-right">
                      <span className="block text-[10px] font-label-caps text-on-surface-variant uppercase mb-1">RERA No.</span>
                      <span className="bg-gray-100 px-2 py-1 text-[10px] border border-gray-300">{project.rera}</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-100 h-2 mb-2">
                    <div className="bg-secondary-container h-full" style={{ width: `${project.completion || 0}%` }}></div>
                  </div>
                  <div className="flex justify-between text-[10px] font-label-caps text-on-surface-variant">
                    <span>{project.completion || 0}% COMPLETE</span>
                    <span>POSSESSION: {project.possession?.toUpperCase()}</span>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <Link to={`/projects/${project.id}`} className="text-primary font-label-caps text-xs flex items-center gap-2 hover:gap-4 transition-all uppercase">
                      View Project Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Construction Process */}
      <section className="py-16 bg-[#0a0f1a] text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="text-center mb-12 space-y-2">
            <span className="text-secondary-container font-label-caps tracking-[0.3em] uppercase text-[10px] font-bold">The Blueprint</span>
            <h2 className="font-h2 text-3xl md:text-4xl">Our Systematic Construction Process</h2>
          </div>
          <ConstructionProcess dark={true} />
        </div>
      </section>

      {/* Testimonials Section (Updated content, restored visuals) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-secondary font-label-caps tracking-[0.3em] uppercase text-xs font-bold">Happy Homeowners</span>
                <h2 className="font-h2 text-4xl md:text-5xl text-primary">Voices of Satisfaction</h2>
              </div>
              <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100 relative shadow-sm">
                <span className="material-symbols-outlined text-7xl text-primary/10 absolute top-4 right-8 select-none" data-icon="format_quote">format_quote</span>
                <p className="relative z-10 text-xl md:text-2xl text-primary font-light italic leading-relaxed mb-10">
                  "Moving into our new home at Skyline Heights was a dream come true. The quality of finishing and the way the MC Infra team handled the handover made us feel truly special."
                </p>
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/20">RS</div>
                  <div>
                    <h4 className="font-bold text-primary text-lg">Rakesh & Sneha Sharma</h4>
                    <p className="text-sm text-on-surface-variant font-medium uppercase tracking-wider">Homeowners, Phase 1</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/5 rounded-[40px] rotate-3 group-hover:rotate-0 transition-transform duration-700"></div>
              <div className="relative aspect-video rounded-[32px] overflow-hidden shadow-2xl border-4 border-white z-10">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/mZL1gnlKTeQ" 
                  title="MC Infra Brand Video" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* Partner Logos Section */}
          <div className="py-20 border-t border-gray-100">
            <div className="text-center mb-12">
              <span className="text-on-surface-variant font-label-caps tracking-[0.4em] uppercase text-[10px] font-bold opacity-60">Trusted By Industry Leaders</span>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
              <div className="flex items-center gap-3">
                <span className="font-h2 text-3xl font-black tracking-tighter">SUPERTECH</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-h2 text-3xl font-black tracking-tighter">M2M</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-h2 text-3xl font-black tracking-tighter">GODREJ</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-h2 text-3xl font-black tracking-tighter">DLF</span>
              </div>
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
