import React from 'react';

const Careers = () => {
  return (
    <main className="pt-8 pb-12 px-4 md:px-8 max-w-7xl mx-auto font-body-md text-on-background">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-h1 text-4xl md:text-h1 text-primary mb-6">Build Your Future with MC Infra</h1>
            <p className="font-body-lg text-base md:text-body-lg text-on-surface-variant mb-8">We are looking for engineers, architects, and visionaries to lead India's next generation of industrial infrastructure. Join a team where precision meets purpose.</p>
            <div className="flex flex-wrap gap-4">
              <a className="bg-secondary-container text-on-secondary-container px-8 py-3 rounded font-ui-button uppercase tracking-wider text-xs md:text-sm text-center" href="#openings">View Openings</a>
              <a className="border border-outline px-8 py-3 rounded font-ui-button uppercase tracking-wider hover:bg-surface-container-low transition-colors text-xs md:text-sm text-center" href="#life">Life at MC Infra</a>
            </div>
          </div>
          <div className="h-64 md:h-96 w-full rounded-xl overflow-hidden shadow-sm border border-gray-200 bg-white p-2">
            <img 
              alt="Focused civil engineer reviewing architectural blueprints" 
              className="w-full h-full object-cover rounded-lg" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQmxfp_aPCcpcFLrZUoDz0X6lvd5ktykUBeVzgACYoXa42yKVm6mFd-vMwy7A01ZupbWytD1fXmGxKcO26gLS_ngDcIAc0boVAt0wMWC26vxM8javAMBqOOdlzY1N_GRqy7lNR1iyruNm5kW3BH9yNyk_1GFan9guUZ6bTRzfiLZqaOdWEne7cmJ8VjLrAxHqD3JonwizN866SG02iiSXDb1mNgWYJe9dNqsWkrUNc78BkEouaPcwSl2z9c16o0oXWlIlv_o18Ug"
            />
          </div>
        </div>
      </section>

      {/* Life at MC Infra: Bento Grid */}
      <section className="mb-24" id="life">
        <div className="mb-8">
          <span className="font-label-caps text-xs md:text-label-caps text-secondary mb-2 block">CULTURE & ENVIRONMENT</span>
          <h2 className="font-h2 text-3xl md:text-h2 text-primary">Life at MC Infra</h2>
          <div className="w-24 h-2 bg-secondary-container mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:h-[600px]">
          <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden border border-gray-200 rounded-xl h-64 md:h-auto">
            <img 
              alt="Team of construction professionals in a site office" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqmc1EdaKrT2VWBI-s2Z8hEBsEp71HyNIeDu_RhF-5Vz14O6Qj9dDdIAPkd6zKoJxZPlogyKzHpOzeqkz1lHhoDyfRlGnCmLeeM507OCu75WALCqmvsaGiM1eejWx2S0Dvubtn7wAGyUzAnHan8i5-ps8FfzSNSw8rxp5RS3_7cO2wG9llSE6xQ279i888BJ1L_ZD1S3ErZF2KMDXxsxQwau2SouR5Zt68kuvfSoOi4NGJzohxTxYMI2CHBHRZgSHPU6KOm7uBVQ"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-primary/80 to-transparent text-white">
              <h3 className="font-h3 text-xl md:text-h3">Site Collaboration</h3>
              <p className="text-xs md:text-sm opacity-90">Where technical expertise meets on-ground reality.</p>
            </div>
          </div>
          <div className="relative group overflow-hidden border border-gray-200 rounded-xl h-64 md:h-auto">
            <img 
              alt="Modern skyscraper glass facade" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpSb6NUslfMaCpbJBG1nWK-5E_fWl0YjNsx9W-YrnlLLrpsyETSaCP1b-46ltE6T_q7AHJlRdW_-bD07o1NyZweXzHnWshXWpuZWOQOUsA0tofLOivoJ12bjQWTmdGdZT56m40jCpdvi4boH2ltIJQaO2yise-Y7S-N_MpiGegvFuq1HASgxGqj03ke8ErM_lUKvwSgv0bxeUaB95iWqlTmwuRBaMcSZNmiNXhDf1XPbqwDpEGyYUoITgjrgUH9Ht8Nmw9CMghgg"
            />
          </div>
          <div className="relative group overflow-hidden border border-gray-200 rounded-xl h-64 md:h-auto">
            <img 
              alt="Engineers having a casual conversation near a crane" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvbFc5Veqk7dB9C7xYKqng5TyQaR5C86kRlqqkO91KUN5c4ZpXkTudJVeaNJLPcFd9eoLliknLzGVBbGHpJkQ_pLDn5Zjtz48F18E2L9qyoNNv__BALOnOEjbHyqCvKds7FGyWBVcG7eFOUN1K81VXjJG9L-NdIqOG-Gbh4BmZZBebfR4RkyNV9Hu8_edx46vXscH-jJr7Ac2NgY3C2KUdpaKAlxA244qpMSjaux9WGTWWjhLdlV_jYaPKkE0CozMaJI0f_5Vfjg"
            />
          </div>
          <div className="md:col-span-2 relative group overflow-hidden border border-gray-200 rounded-xl h-64 md:h-auto">
            <img 
              alt="Architectural studio at night" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoVBbqKn5HtAQcvKhWlJQ8nc_4fMSN7Em3ZRqZlHJwaWoTQjC8U8qZq_8FpqW4EpKUOm6b70EnXoTkOcOY1t_kZ6HCBE54V3DTnJdz__E2ZqrTqGrRBVMuyX0Nk06c03ocLRJ0OYZjLg-yYUtjm6FDHDqYJyzD5mQPXpvC54TIWYMcj-u_PTjujOvtoKefA37IjaY4olDzJaszrTSaptbgSCWrgF2VVHosOvs4ralyUpdqdhXOW7dpK8JxVA5Nxohg2EkytNCT8g"
            />
            <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors"></div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="mb-24" id="openings">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
          <div>
            <span className="font-label-caps text-xs md:text-label-caps text-secondary mb-2 block">CURRENT OPPORTUNITIES</span>
            <h2 className="font-h2 text-3xl md:text-h2 text-primary">Open Positions</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-4 py-2 bg-surface-container rounded-full text-[10px] md:text-xs font-bold border border-gray-200 uppercase tracking-widest text-on-surface-variant">All Locations</span>
            <span className="px-4 py-2 bg-surface-container rounded-full text-[10px] md:text-xs font-bold border border-gray-200 uppercase tracking-widest text-on-surface-variant">Full-Time</span>
          </div>
        </div>
        <div className="space-y-4">
          {/* Job Card 1 */}
          <div className="bg-white p-6 rounded border border-gray-200 hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-start md:items-center group">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="font-h3 text-xl md:text-h3 text-primary">Senior Site Engineer</h3>
                <span className="bg-green-100 text-green-800 text-[10px] px-2 py-1 rounded font-bold uppercase tracking-wider">Immediate Joiner</span>
              </div>
              <div className="flex flex-wrap gap-4 md:gap-6 text-xs md:text-sm text-on-surface-variant">
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">location_on</span> Mumbai, India</span>
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">work</span> 5-8 Years Exp</span>
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">payments</span> Competitive</span>
              </div>
            </div>
            <button className="mt-4 md:mt-0 w-full md:w-auto border-2 border-primary text-primary px-8 py-2 font-ui-button uppercase tracking-widest group-hover:bg-primary group-hover:text-white transition-all" onClick={(e) => {e.preventDefault(); document.getElementById('apply').scrollIntoView({behavior: 'smooth'})}}>Apply Now</button>
          </div>
          
          {/* Job Card 2 */}
          <div className="bg-white p-6 rounded border border-gray-200 hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-start md:items-center group">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="font-h3 text-xl md:text-h3 text-primary">Project Manager (Industrial)</h3>
                <span className="bg-yellow-100 text-yellow-800 text-[10px] px-2 py-1 rounded font-bold uppercase tracking-wider">High Priority</span>
              </div>
              <div className="flex flex-wrap gap-4 md:gap-6 text-xs md:text-sm text-on-surface-variant">
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">location_on</span> Delhi HQ</span>
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">work</span> 10+ Years Exp</span>
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">payments</span> Industry Standard</span>
              </div>
            </div>
            <button className="mt-4 md:mt-0 w-full md:w-auto border-2 border-primary text-primary px-8 py-2 font-ui-button uppercase tracking-widest group-hover:bg-primary group-hover:text-white transition-all" onClick={(e) => {e.preventDefault(); document.getElementById('apply').scrollIntoView({behavior: 'smooth'})}}>Apply Now</button>
          </div>
          
          {/* Job Card 3 */}
          <div className="bg-white p-6 rounded border border-gray-200 hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-start md:items-center group">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="font-h3 text-xl md:text-h3 text-primary">Junior Architect</h3>
              </div>
              <div className="flex flex-wrap gap-4 md:gap-6 text-xs md:text-sm text-on-surface-variant">
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">location_on</span> Pune, India</span>
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">work</span> 2-4 Years Exp</span>
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">payments</span> Negotiable</span>
              </div>
            </div>
            <button className="mt-4 md:mt-0 w-full md:w-auto border-2 border-primary text-primary px-8 py-2 font-ui-button uppercase tracking-widest group-hover:bg-primary group-hover:text-white transition-all" onClick={(e) => {e.preventDefault(); document.getElementById('apply').scrollIntoView({behavior: 'smooth'})}}>Apply Now</button>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="max-w-4xl mx-auto" id="apply">
        <div className="bg-white border border-gray-200 p-6 md:p-12">
          <div className="mb-10 text-center">
            <h2 className="font-h2 text-2xl md:text-h2 text-primary mb-2">Quick Application</h2>
            <p className="text-sm md:text-base text-on-surface-variant">Don't see a fit? Send your CV anyway and we'll reach out when we have a spot.</p>
            <div className="blueprint-dashed w-1/3 mx-auto mt-6"></div>
          </div>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-label-caps text-[10px] md:text-xs text-primary block">FULL NAME</label>
                <input className="w-full border border-gray-200 p-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary rounded-none" placeholder="John Doe" type="text" />
              </div>
              <div className="space-y-2">
                <label className="font-label-caps text-[10px] md:text-xs text-primary block">EMAIL ADDRESS</label>
                <input className="w-full border border-gray-200 p-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary rounded-none" placeholder="demo@example.com" type="email" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-label-caps text-[10px] md:text-xs text-primary block">PRIMARY SKILLSET</label>
                <select className="w-full border border-gray-200 p-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary rounded-none bg-white">
                  <option>Site Engineering</option>
                  <option>Project Management</option>
                  <option>Architectural Design</option>
                  <option>Quality Surveying</option>
                  <option>Safety & Compliance</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="font-label-caps text-[10px] md:text-xs text-primary block">UPLOAD RESUME (PDF)</label>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col items-center justify-center w-full h-12 md:h-14 border border-dashed border-gray-300 cursor-pointer hover:bg-surface-container-low transition-colors">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-on-surface-variant text-sm md:text-base">upload_file</span>
                      <span className="text-xs md:text-sm font-semibold text-on-surface-variant">Choose File</span>
                    </div>
                    <input className="hidden" type="file" />
                  </label>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <label className="font-label-caps text-[10px] md:text-xs text-primary block">COVER LETTER / ADDITIONAL INFO</label>
              <textarea className="w-full border border-gray-200 p-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary rounded-none" placeholder="Briefly describe your experience in industrial construction..." rows="4"></textarea>
            </div>
            <div className="pt-4">
              <button className="w-full bg-secondary-container text-primary font-ui-button py-4 border border-primary shadow-sm hover:opacity-90 transition-opacity mt-4 uppercase tracking-widest text-xs md:text-sm" onClick={(e) => e.preventDefault()}>SUBMIT APPLICATION</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Careers;
