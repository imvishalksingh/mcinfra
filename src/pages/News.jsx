import React from 'react';

const News = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 md:px-8 py-12 font-body-md text-on-surface">
      {/* Header Section */}
      <section className="mb-16">
        <h1 className="font-h1 text-3xl md:text-h1 text-primary mb-4">Insights & Updates</h1>
        <p className="font-body-lg text-sm md:text-body-lg text-on-surface-variant max-w-2xl">
          Stay informed with the latest from the world of precision engineering, luxury interiors, and strategic real estate investments.
        </p>
      </section>

      {/* Category Navigation & Filters */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12 blueprint-dashed pb-8">
        <div className="flex flex-wrap gap-2 md:gap-4 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
          <button className="bg-primary text-white px-4 md:px-6 py-2 rounded-lg font-ui-button whitespace-nowrap text-xs md:text-sm">All News</button>
          <button className="bg-surface-container text-on-surface-variant px-4 md:px-6 py-2 rounded-lg font-ui-button hover:bg-outline-variant transition-colors whitespace-nowrap text-xs md:text-sm">Construction Updates</button>
          <button className="bg-surface-container text-on-surface-variant px-4 md:px-6 py-2 rounded-lg font-ui-button hover:bg-outline-variant transition-colors whitespace-nowrap text-xs md:text-sm">Interior Trends</button>
          <button className="bg-surface-container text-on-surface-variant px-4 md:px-6 py-2 rounded-lg font-ui-button hover:bg-outline-variant transition-colors whitespace-nowrap text-xs md:text-sm">Home Buying Tips</button>
        </div>
        <div className="relative w-full md:w-auto">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-sm md:text-base">search</span>
          <input className="pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-1 focus:ring-primary focus:border-primary outline-none w-full md:w-64 text-sm" placeholder="Search articles..." type="text" />
        </div>
      </div>

      {/* Featured Article (Asymmetric Layout) */}
      <article className="grid grid-cols-1 lg:grid-cols-12 gap-0 md:gap-8 mb-20 bg-white border border-gray-300 rounded overflow-hidden">
        <div className="lg:col-span-7 h-[300px] md:h-[400px] lg:h-auto overflow-hidden">
          <img 
            alt="Massive construction site at sunset" 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrx2Wh-NF2w6iPGLFstRHjSocO1TgWuJOurOMVOIoWw_5I87sipLejkIJ7VyFs-UAOhf_qlYyo1xLvJ25hezLGT3o02_W9IDzuPeYttH5fa1yGCTvhuqzdVQILLi7Gpf6EFH91BaZyIMwW-rraXDS2bc6AwEDoqi_XdB7g2_BIJyHVMzYN7FVrXv-IgiZxves7LJ1LrLDDZuKwTs97acCB7_aF6F_Nv3UC1UHZnhke_mkODpOlp5UwjzdHc_uN_GHFqrIoXqI5Bw"
          />
        </div>
        <div className="lg:col-span-5 p-6 md:p-10 flex flex-col justify-center">
          <span className="bg-secondary-container text-on-secondary-fixed px-3 py-1 rounded text-[10px] md:text-xs font-label-caps mb-6 inline-block w-fit">Construction Updates</span>
          <h2 className="font-h2 text-2xl md:text-h2 text-primary mb-4">The Future of Sustainable High-Rise Construction in Mumbai</h2>
          <p className="font-body-md text-sm md:text-base text-on-surface-variant mb-8">
            An in-depth look at how Astra Build-Tech is integrating green steel and solar-active facades into our upcoming skyline projects to meet 2030 climate goals.
          </p>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-sm md:text-base">engineering</span>
            </div>
            <div>
              <p className="font-bold text-xs md:text-sm text-primary">Ar. Vikram Singh</p>
              <p className="text-[10px] md:text-xs text-outline">Principal Architect • Oct 24, 2024</p>
            </div>
          </div>
          <button className="flex items-center gap-2 text-primary font-bold hover:underline text-sm md:text-base">
            Read Full Blueprint <span className="material-symbols-outlined text-sm md:text-base">arrow_forward</span>
          </button>
        </div>
      </article>

      {/* Bento Grid Articles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {/* Article 1 */}
        <div className="bg-white border border-gray-300 rounded flex flex-col group">
          <div className="h-48 md:h-56 overflow-hidden">
            <img 
              alt="Luxurious interior living space featuring minimalist brutalist design" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQQ6VKqGgRag5tRIm_NZsDd-YHhCRcT1A_4xJQBj2RRT7aOhDfLffAzULd5tpBLiiO7qQpod64psNoONQRurNUdVGamG-uTJlVilP_PVgBc58XXm1DTbSb1d0PGzB3pvVZO6Q9xXW6dd1B1bHarGgIe24NJvnPF5PCAtacen8-bQ8bkCUruNJZN3Y88_ttJW5WT00b5pU934zpJhacrtEc0H-XyVF6g2KygpNC9MJ4MCi6Q7JsnK_bSYLCGVvyCOh4xPrqAZ-K6Q"
            />
          </div>
          <div className="p-6 flex-1 flex flex-col">
            <span className="text-secondary font-label-caps text-[10px] md:text-xs mb-3 block">Interior Trends</span>
            <h3 className="font-h3 text-lg md:text-xl text-primary mb-3">The Brutalist Revival: Concrete as a Luxury Statement</h3>
            <p className="text-sm md:text-base text-on-surface-variant mb-6 line-clamp-3">
              Why interior designers are returning to raw textures and structural honesty in modern luxury apartments.
            </p>
            <div className="mt-auto pt-6 border-t border-gray-100 flex justify-between items-center">
              <span className="text-[10px] md:text-xs text-outline uppercase font-bold">5 Min Read</span>
              <span className="material-symbols-outlined text-primary text-sm md:text-base">bookmark</span>
            </div>
          </div>
        </div>
        
        {/* Article 2 */}
        <div className="bg-white border border-gray-300 rounded flex flex-col group">
          <div className="h-48 md:h-56 overflow-hidden">
            <img 
              alt="Real estate transaction in a modern office" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRKVz_5QN3JHkYaNFE9EbKaryIhQ63erdBw736-YXfrEX4ZSTfocjEyXKAwEWpBLeJsEHXCCOAvvR3uU186meIfAv8GQLyufsv8plyBVi_R9XgFLbFMugQZF9wSa3A3Iizg9_zSwyupoWHEaIA8QltQtXq219rUT0uB5LuWYITc6s9YA2MOmE_C20wuY5TTsxvbaL-LANEOqA_dpyc7-VgtlnNzU4e3CvtvSKSN__y6JqG4Q8i0KNJMchZfQFe9OGUhHxfT03nvQ"
            />
          </div>
          <div className="p-6 flex-1 flex flex-col">
            <span className="text-secondary font-label-caps text-[10px] md:text-xs mb-3 block">Home Buying Tips</span>
            <h3 className="font-h3 text-lg md:text-xl text-primary mb-3">RERA Compliance Checklist for First-Time Buyers</h3>
            <p className="text-sm md:text-base text-on-surface-variant mb-6 line-clamp-3">
              A technical guide to navigating property laws and ensuring your real estate investment is legally sound.
            </p>
            <div className="mt-auto pt-6 border-t border-gray-100 flex justify-between items-center">
              <span className="text-[10px] md:text-xs text-outline uppercase font-bold">8 Min Read</span>
              <span className="material-symbols-outlined text-primary text-sm md:text-base">bookmark</span>
            </div>
          </div>
        </div>
        
        {/* Article 3 */}
        <div className="bg-white border border-gray-300 rounded flex flex-col group">
          <div className="h-48 md:h-56 overflow-hidden">
            <img 
              alt="Concrete pump system pouring foundation" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD125yLGi9kj4vSIHqQqoG3JRFwt7oLFG86Z1JykOBhw0_C-offggGwg7npz8T5eHAUVCwEqhGBgoN5F93D_-wqdk8SIr93TdLytKnWqYa7Y9lBfBPmeJOvzhQCg6gZo-NvFNruzykC6Fly-RqisAnFa8FJVpDXyMWc15qi4BpSpU829IiHqn_wZGy4lhAVGT8Q3-s4u3tMOMhU1o5m3BAqPG6E3GlCZm45MXbTIoydg-lTxrWN5eFZSV7uEzy4o_3QORR7udZJ_A"
            />
          </div>
          <div className="p-6 flex-1 flex flex-col">
            <span className="text-secondary font-label-caps text-[10px] md:text-xs mb-3 block">Construction Updates</span>
            <h3 className="font-h3 text-lg md:text-xl text-primary mb-3">Quarterly Progress Report: The Astra HQ Complex</h3>
            <p className="text-sm md:text-base text-on-surface-variant mb-6 line-clamp-3">
              Foundation work for Phase II is complete. See the time-lapse and technical milestones achieved this quarter.
            </p>
            <div className="mt-auto pt-6 border-t border-gray-100 flex justify-between items-center">
              <span className="text-[10px] md:text-xs text-outline uppercase font-bold">4 Min Read</span>
              <span className="material-symbols-outlined text-primary text-sm md:text-base">bookmark</span>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section (Industrial Style) */}
      <section className="bg-primary-container p-8 md:p-12 rounded-lg relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="font-h2 text-2xl md:text-h2 text-white mb-4">MC Infra Intelligence Report</h2>
            <p className="text-sm md:text-base text-on-primary-container mb-0">
              Join 10,000+ industry professionals. Receive monthly technical updates on project timelines, market volatility reports, and investment opportunities.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <input className="flex-1 bg-white border-0 rounded px-4 md:px-6 py-3 md:py-4 font-body-md focus:ring-2 focus:ring-secondary/50 outline-none w-full text-sm" placeholder="Professional Email Address" type="email" />
              <button className="bg-secondary-container text-primary font-ui-button px-6 md:px-8 py-3 md:py-4 rounded hover:bg-yellow-400 transition-all flex items-center justify-center gap-2 uppercase tracking-widest text-xs md:text-sm whitespace-nowrap border border-primary shadow-sm" onClick={(e) => e.preventDefault()}>
                Subscribe <span className="material-symbols-outlined text-sm">send</span>
              </button>
            </div>
            <p className="text-[10px] md:text-xs text-on-primary-container opacity-80">
              Strict zero-spam policy. Your data is protected by MC Infra's data compliance standards.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default News;
