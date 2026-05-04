import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { projects as initialProjects } from '../data/projects';
import { getStoredData, STORAGE_KEYS } from '../utils/storage';

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const allProjects = getStoredData(STORAGE_KEYS.PROJECTS, initialProjects);
    const found = allProjects.find(p => p.id === id || p.name.toLowerCase().replace(/\s+/g, '-') === id);
    setProject(found);
  }, [id]);

  if (!project) return <div className="p-20 text-center font-h1 text-primary">Project Not Found</div>;

  return (
    <main className="max-w-7xl mx-auto bg-white border-x border-gray-200 min-h-screen font-body-md text-on-background">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[600px] w-full overflow-hidden">
        <img 
          alt={project.name} 
          className="w-full h-full object-cover" 
          src={project.heroImage || project.image}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#002046]/80 to-transparent flex flex-col justify-end p-4 md:p-8 lg:p-16">
          <span className="text-secondary-container font-label-caps mb-2">{project.category?.toUpperCase() || 'RESIDENTIAL'} PROJECT</span>
          <h1 className="text-white font-h1 text-3xl md:text-h1 max-w-3xl">{project.name}</h1>
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <span className={`px-3 py-1 font-label-caps ${project.status === 'Completed' ? 'bg-tertiary text-on-tertiary' : 'bg-secondary-container text-on-secondary-fixed'}`}>
              {project.status?.toUpperCase()}
            </span>
            <span className="text-white/80 font-body-md flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">location_on</span> {project.location}
            </span>
          </div>
        </div>
      </section>

      {/* Project Overview & Form Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-gray-200">
        <div className="lg:col-span-8 p-6 md:p-10 lg:p-16 border-r border-gray-200">
          <h2 className="font-h2 text-2xl md:text-h2 text-primary mb-6">Project Overview</h2>
          <p className="font-body-lg text-on-surface-variant mb-10 leading-relaxed text-sm md:text-base">
            {project.description}
          </p>
          
          {/* Floor Plans */}
          {project.floorPlans?.length > 0 && (
            <div className="mb-10 lg:mb-16">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 blueprint-dashed pb-2 gap-2">
                <h3 className="font-h3 text-xl md:text-h3 text-primary">Floor Plans</h3>
                <span className="font-label-caps text-outline text-[10px] md:text-xs">TECHNICAL SPECIFICATIONS</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.floorPlans.map((plan, index) => (
                  <div key={index} className="border border-gray-300 p-4 bg-surface-container-lowest">
                    <img 
                      alt={plan.type} 
                      className="w-full hover:scale-105 transition-transform duration-500" 
                      src={plan.image}
                    />
                    <div className="mt-4">
                      <p className="font-label-caps text-primary">{plan.type}</p>
                      <p className="text-sm text-outline">{plan.size} | {plan.facing}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Construction Progress */}
          {project.progress?.length > 0 && (
            <div className="mb-10 lg:mb-16">
              <h3 className="font-h3 text-xl md:text-h3 text-primary mb-8">Construction Progress</h3>
              <div className="space-y-8 border-l-2 border-primary-container pl-8 ml-2">
                {project.progress.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-[41px] top-1 w-4 h-4 bg-secondary-container border-2 border-primary"></div>
                    <span className="font-label-caps text-primary mb-1 block">{step.date}</span>
                    <h4 className="font-h3 text-base md:text-lg mb-2">{step.title}</h4>
                    {step.image && (
                      <img 
                        alt={step.title} 
                        className="w-full h-32 md:h-48 object-cover border border-gray-300 mb-4" 
                        src={step.image}
                      />
                    )}
                    {step.percentage !== undefined && (
                      <div className="w-full h-1 bg-surface-container overflow-hidden">
                        <div className="h-full bg-secondary-container" style={{width: `${step.percentage}%`}}></div>
                      </div>
                    )}
                    {step.status && <p className="text-sm text-outline mt-2">Status: {step.status}</p>}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Content: Form */}
        <div className="lg:col-span-4 p-6 md:p-10 lg:p-16 bg-surface-container-low">
          <div className="sticky top-24 border border-gray-300 bg-white p-6 md:p-8">
            <h3 className="font-h3 text-xl md:text-h3 text-primary mb-2">Schedule a Site Visit</h3>
            <p className="text-sm text-on-surface-variant mb-6">Experience the structural precision of {project.name} firsthand.</p>
            <form className="space-y-4">
              <div>
                <label className="font-label-caps text-primary block mb-1">FULL NAME</label>
                <input className="w-full border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary rounded-none h-12 px-3" placeholder="Enter your name" type="text" />
              </div>
              <div>
                <label className="font-label-caps text-primary block mb-1">PHONE NUMBER</label>
                <input className="w-full border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary rounded-none h-12 px-3" placeholder="+91 00000 00000" type="tel" />
              </div>
              <div>
                <label className="font-label-caps text-primary block mb-1">PREFERRED DATE</label>
                <input className="w-full border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary rounded-none h-12 px-3" type="date" />
              </div>
              <button className="w-full bg-secondary-container text-primary font-ui-button py-4 border border-primary shadow-sm active:shadow-inner transition-all mt-4" onClick={(e) => e.preventDefault()}>BOOK INSPECTION</button>
            </form>
            <div className="mt-8 border-t border-dashed border-gray-300 pt-8">
              <div className="flex items-center gap-2 text-sm text-primary mb-2 font-semibold">
                <span className="material-symbols-outlined">verified</span> RERA Registered Project
              </div>
              <p className="text-xs text-outline">{project.rera}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Amenities */}
      <section className="p-6 md:p-10 lg:p-16 border-b border-gray-200">
        <h2 className="font-h2 text-2xl md:text-h2 text-primary mb-8 md:mb-12">World-Class Amenities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div className="sm:col-span-2 border border-gray-200 p-6 flex flex-col justify-between bg-surface-bright h-48 md:h-64">
            <span className="material-symbols-outlined text-4xl text-primary" style={{fontVariationSettings: "'FILL' 1"}}>pool</span>
            <div>
              <h4 className="font-h3 text-base md:text-lg mb-1">Infinity Pool</h4>
              <p className="text-xs md:text-sm text-on-surface-variant">Temperature-controlled lap pool overlooking the city skyline.</p>
            </div>
          </div>
          <div className="border border-gray-200 p-6 flex flex-col justify-between h-48 md:h-64">
            <span className="material-symbols-outlined text-4xl text-primary">fitness_center</span>
            <div>
              <h4 className="font-h3 text-base md:text-lg mb-1">Elite Gym</h4>
              <p className="text-xs md:text-sm text-on-surface-variant">Precor-equipped fitness center.</p>
            </div>
          </div>
          <div className="border border-gray-200 p-6 flex flex-col justify-between h-48 md:h-64">
            <span className="material-symbols-outlined text-4xl text-primary">park</span>
            <div>
              <h4 className="font-h3 text-base md:text-lg mb-1">Zen Garden</h4>
              <p className="text-xs md:text-sm text-on-surface-variant">Landscaped meditation zones.</p>
            </div>
          </div>
          <div className="border border-gray-200 p-6 flex flex-col justify-between h-48 md:h-64">
            <span className="material-symbols-outlined text-4xl text-primary">electric_car</span>
            <div>
              <h4 className="font-h3 text-base md:text-lg mb-1">EV Charging</h4>
              <p className="text-xs md:text-sm text-on-surface-variant">Dedicated 22kW charging bays.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectDetails;
