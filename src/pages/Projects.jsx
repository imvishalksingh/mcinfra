import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 md:px-8 py-12 bg-background font-body-md text-on-background">
      {/* Page Header */}
      <div className="mb-12 border-l-4 border-secondary-container pl-6">
        <h1 className="font-h1 text-3xl md:text-h1 text-primary uppercase">Project Portfolio</h1>
        <p className="font-body-lg text-base md:text-body-lg text-on-surface-variant max-w-2xl mt-4">
          Explore our landmark developments, from premium residential enclaves to sophisticated commercial hubs. Built on precision engineering and architectural integrity.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <aside className="w-full lg:w-64 flex-shrink-0">
          <div className="bg-white border border-outline-variant p-6 rounded-lg sticky top-24">
            <div className="flex items-center gap-2 mb-6 text-primary">
              <span className="material-symbols-outlined">filter_list</span>
              <span className="font-h3 text-lg uppercase tracking-tight">Filters</span>
            </div>
            
            {/* Category Filter */}
            <div className="mb-8">
              <label className="font-label-caps text-label-caps text-on-surface-variant mb-3 block">CATEGORY</label>
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input defaultChecked className="form-checkbox text-primary rounded-sm border-outline-variant" type="checkbox" />
                  <span className="text-body-md group-hover:text-primary transition-colors">Residential</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input className="form-checkbox text-primary rounded-sm border-outline-variant" type="checkbox" />
                  <span className="text-body-md group-hover:text-primary transition-colors">Commercial</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input className="form-checkbox text-primary rounded-sm border-outline-variant" type="checkbox" />
                  <span className="text-body-md group-hover:text-primary transition-colors">Plots</span>
                </label>
              </div>
            </div>
            
            {/* Status Filter */}
            <div className="mb-8">
              <label className="font-label-caps text-label-caps text-on-surface-variant mb-3 block">PROJECT STATUS</label>
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input className="form-radio text-primary border-outline-variant" name="status" type="radio" />
                  <span className="text-body-md group-hover:text-primary transition-colors">Ongoing</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input className="form-radio text-primary border-outline-variant" name="status" type="radio" />
                  <span className="text-body-md group-hover:text-primary transition-colors">Completed</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input className="form-radio text-primary border-outline-variant" name="status" type="radio" />
                  <span className="text-body-md group-hover:text-primary transition-colors">Upcoming</span>
                </label>
              </div>
            </div>
            
            {/* Location Filter */}
            <div className="mb-6">
              <label className="font-label-caps text-label-caps text-on-surface-variant mb-3 block">LOCATION</label>
              <select className="w-full bg-surface-container-lowest border border-outline-variant rounded p-2 text-body-md focus:border-primary focus:ring-0">
                <option>All Locations</option>
                <option>Central Business District</option>
                <option>North Industrial Corridor</option>
                <option>Premium Residential Zone</option>
              </select>
            </div>
            
            <button className="w-full py-2 bg-primary text-white font-ui-button rounded hover:bg-primary-container transition-all uppercase tracking-widest text-xs">
              Reset Filters
            </button>
          </div>
        </aside>

        {/* Projects Grid */}
        <div className="flex-grow space-y-8">
          {/* Project Card 1: Green Meadows */}
          <div className="bg-white border border-outline-variant rounded-lg overflow-hidden flex flex-col md:flex-row transition-all hover:border-primary-container">
            <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
              <img 
                alt="Ongoing Construction Site" 
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCO8Qg-XL2HWu02ucwB1NAQSDGV-jiqhfsOgFJkLi8FpvRcTTBJeCq54NUO3hruIb27RvBDufKzVgsBqHs8-A-aa4I8Qe26ZkUkuULhxxKFBWNaFcJ7RYxCbfSPoJ46wVfx7WX0y28QVA_4yJug9zu502z02CpwIUc1GP65lPnf-5FwnLbzflDFyTlj1sIfLOVa68UOkwowqqsba4_jLLoHS0aAF-5Bk6wTtXM0AG1h796lxYVg4nDb3dV9MF0bFiAiyausLhKrhQ"
              />
              <div className="absolute top-4 left-4 bg-secondary-container text-on-secondary-container px-3 py-1 font-label-caps text-[10px] tracking-widest rounded-sm">
                ONGOING
              </div>
            </div>
            <div className="p-6 md:p-8 md:w-3/5 flex flex-col justify-between">
              <div>
                <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
                  <h2 className="font-h2 text-2xl md:text-h2 text-primary">Green Meadows</h2>
                  <span className="font-label-caps text-xs text-on-surface-variant">RERA: PRM/KA/RERA/001715</span>
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant mb-6">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  <span className="text-body-md italic text-sm md:text-base">North Suburban Growth Corridor</span>
                </div>
                <div className="grid grid-cols-2 gap-y-6 blueprint-line pb-6 mb-6">
                  <div>
                    <p className="font-label-caps text-[10px] text-outline mb-1">POSSESSION DATE</p>
                    <p className="font-h3 text-base md:text-lg text-tertiary">December 2025</p>
                  </div>
                  <div>
                    <p className="font-label-caps text-[10px] text-outline mb-1">STARTING PRICE</p>
                    <p className="font-h3 text-base md:text-lg text-tertiary">₹1.2 Cr onwards</p>
                  </div>
                  <div>
                    <p className="font-label-caps text-[10px] text-outline mb-1">CONFIGURATION</p>
                    <p className="font-body-md font-semibold text-primary text-sm md:text-base">3 & 4 BHK Luxury Villas</p>
                  </div>
                  <div>
                    <p className="font-label-caps text-[10px] text-outline mb-1">PROJECT SIZE</p>
                    <p className="font-body-md font-semibold text-primary text-sm md:text-base">22 Acres Gated Community</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <Link to="/projects/green-meadows" className="flex-grow py-3 bg-primary text-white font-ui-button rounded text-center hover:bg-primary-container text-xs md:text-sm">VIEW DETAILS</Link>
                <button className="px-4 border border-primary text-primary hover:bg-primary-fixed transition-colors rounded">
                  <span className="material-symbols-outlined">download</span>
                </button>
              </div>
            </div>
          </div>

          {/* Project Card 2: Skyview Residency */}
          <div className="bg-white border border-outline-variant rounded-lg overflow-hidden flex flex-col md:flex-row transition-all hover:border-primary-container">
            <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
              <img 
                alt="Finished Modern Apartment Building" 
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQTHSoc_P3a7i9__Ml68BR-xJwb69KRnUWFQS7CHI1v_ujgmD_bjmDFcdNe8ss7eBf9H_dU11Pz4soKjhd2bT37zuK7S9SVETqDrvOsq9E_x1_saaXJ5CMlOnJi9o7TK2bfIn7-vA9AltG_jMrz7k0YSkf3xQ-h5J0P3mn0izH8o5t3mZRU2-KaJEhZ3E6VGrtluJVzDPVAL9ZwD7rMVGjt6PDFvpEr8472YSpVjYH-A8Wq8DIHGWygHv0cE5MMxwwysTv9tyL1w"
              />
              <div className="absolute top-4 left-4 bg-tertiary text-on-tertiary px-3 py-1 font-label-caps text-[10px] tracking-widest rounded-sm">
                COMPLETED
              </div>
            </div>
            <div className="p-6 md:p-8 md:w-3/5 flex flex-col justify-between">
              <div>
                <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
                  <h2 className="font-h2 text-2xl md:text-h2 text-primary">Skyview Residency</h2>
                  <span className="font-label-caps text-xs text-on-surface-variant">RERA: PRM/KA/RERA/004592</span>
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant mb-6">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  <span className="text-body-md italic text-sm md:text-base">City Heights, Central District</span>
                </div>
                <div className="grid grid-cols-2 gap-y-6 blueprint-line pb-6 mb-6">
                  <div>
                    <p className="font-label-caps text-[10px] text-outline mb-1">POSSESSION DATE</p>
                    <p className="font-h3 text-base md:text-lg text-tertiary">Ready to Move</p>
                  </div>
                  <div>
                    <p className="font-label-caps text-[10px] text-outline mb-1">STARTING PRICE</p>
                    <p className="font-h3 text-base md:text-lg text-tertiary">₹2.8 Cr onwards</p>
                  </div>
                  <div>
                    <p className="font-label-caps text-[10px] text-outline mb-1">CONFIGURATION</p>
                    <p className="font-body-md font-semibold text-primary text-sm md:text-base">Premium 4 BHK Penthouses</p>
                  </div>
                  <div>
                    <p className="font-label-caps text-[10px] text-outline mb-1">UNITS</p>
                    <p className="font-body-md font-semibold text-primary text-sm md:text-base">120 Exclusive Units</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <Link to="/projects/skyview-residency" className="flex-grow py-3 bg-primary text-white font-ui-button rounded text-center hover:bg-primary-container text-xs md:text-sm">VIEW DETAILS</Link>
                <button className="px-4 border border-primary text-primary hover:bg-primary-fixed transition-colors rounded">
                  <span className="material-symbols-outlined">download</span>
                </button>
              </div>
            </div>
          </div>

          {/* Industrial Accent: Progress Overview */}
          <div className="bg-surface-container p-6 md:p-8 border-l-8 border-secondary-container rounded-r-lg">
            <div className="flex items-center gap-4 mb-4">
              <span className="material-symbols-outlined text-primary scale-125 md:scale-150">construction</span>
              <h3 className="font-h3 text-primary uppercase text-xl md:text-2xl">Portfolio Statistics</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <p className="font-label-caps text-outline mb-2">COMMERCIAL SPACE DELIVERED</p>
                <div className="flex items-end gap-2">
                  <span className="text-h2 font-black text-primary">2.4M</span>
                  <span className="pb-1 font-semibold text-on-surface-variant">SQ.FT.</span>
                </div>
                <div className="w-full h-1 bg-white mt-2">
                  <div className="h-full bg-secondary-container" style={{width: '85%'}}></div>
                </div>
              </div>
              <div>
                <p className="font-label-caps text-outline mb-2">HAPPY FAMILIES</p>
                <div className="flex items-end gap-2">
                  <span className="text-h2 font-black text-primary">1500+</span>
                </div>
                <div className="w-full h-1 bg-white mt-2">
                  <div className="h-full bg-secondary-container" style={{width: '92%'}}></div>
                </div>
              </div>
              <div>
                <p className="font-label-caps text-outline mb-2">SAFETY SCORE</p>
                <div className="flex items-end gap-2">
                  <span className="text-h2 font-black text-primary">99.8%</span>
                </div>
                <div className="w-full h-1 bg-white mt-2">
                  <div className="h-full bg-secondary-container" style={{width: '99%'}}></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default Projects;
