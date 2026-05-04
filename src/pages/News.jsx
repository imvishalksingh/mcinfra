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

      {/* Bento Grid Articles (Expanded with Top 10 Lists) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {/* Article: Top 10 Construction Companies in Meerut */}
        <div className="bg-white border border-gray-300 rounded-2xl overflow-hidden flex flex-col group hover:shadow-xl transition-all">
          <div className="h-48 overflow-hidden relative">
            <img 
              alt="Construction site with crane in Meerut" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <span className="absolute bottom-4 left-4 bg-secondary-container text-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Industry Leader</span>
          </div>
          <div className="p-8 flex-1 flex flex-col">
            <h3 className="font-h3 text-xl text-primary mb-4">Top 10 Construction Companies In Meerut (2024)</h3>
            <p className="text-sm text-on-surface-variant mb-6 line-clamp-3">A comprehensive review of the most reliable construction firms in Meerut, evaluated for structural integrity and project delivery.</p>
            <button className="mt-auto text-primary font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
              View Rankings <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Article: Top 10 Paint Brands */}
        <div className="bg-white border border-gray-300 rounded-2xl overflow-hidden flex flex-col group hover:shadow-xl transition-all">
          <div className="h-48 overflow-hidden relative">
            <img 
              alt="Colorful paint swatches" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              src="https://images.unsplash.com/photo-1562592306-4500ed61b442?auto=format&fit=crop&q=80&w=800"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <span className="absolute bottom-4 left-4 bg-secondary-container text-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Interior Guide</span>
          </div>
          <div className="p-8 flex-1 flex flex-col">
            <h3 className="font-h3 text-xl text-primary mb-4">Top 10 Paint Brands For Your Building & Home</h3>
            <p className="text-sm text-on-surface-variant mb-6 line-clamp-3">From Asian Paints to Berger, find the perfect finish and durability for your interior and exterior walls.</p>
            <button className="mt-auto text-primary font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
              Read Guide <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Article: Top 10 Cement Brands */}
        <div className="bg-white border border-gray-300 rounded-2xl overflow-hidden flex flex-col group hover:shadow-xl transition-all">
          <div className="h-48 overflow-hidden relative">
            <img 
              alt="Cement bags at construction site" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <span className="absolute bottom-4 left-4 bg-secondary-container text-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Structural Safety</span>
          </div>
          <div className="p-8 flex-1 flex flex-col">
            <h3 className="font-h3 text-xl text-primary mb-4">Top 10 Cement Brands for Home Construction</h3>
            <p className="text-sm text-on-surface-variant mb-6 line-clamp-3">Choosing the right cement is crucial for foundation strength. See our top picks for ultimate structural durability.</p>
            <button className="mt-auto text-primary font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
              Compare Brands <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Article: Top 10 PVC Pipes */}
        <div className="bg-white border border-gray-300 rounded-2xl overflow-hidden flex flex-col group hover:shadow-xl transition-all">
          <div className="h-48 overflow-hidden relative">
            <img 
              alt="PVC pipes stacked" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <span className="absolute bottom-4 left-4 bg-secondary-container text-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Plumbing Solutions</span>
          </div>
          <div className="p-8 flex-1 flex flex-col">
            <h3 className="font-h3 text-xl text-primary mb-4">Top 10 PVC Pipes: Durable Solutions for Modern Homes</h3>
            <p className="text-sm text-on-surface-variant mb-6 line-clamp-3">A guide to the best PVC and CPVC brands for leak-proof and long-lasting plumbing systems.</p>
            <button className="mt-auto text-primary font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
              Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Article: Top 10 Electrical Brands */}
        <div className="bg-white border border-gray-300 rounded-2xl overflow-hidden flex flex-col group hover:shadow-xl transition-all">
          <div className="h-48 overflow-hidden relative">
            <img 
              alt="Electrical switches and wiring" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <span className="absolute bottom-4 left-4 bg-secondary-container text-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Electrical Safety</span>
          </div>
          <div className="p-8 flex-1 flex flex-col">
            <h3 className="font-h3 text-xl text-primary mb-4">Top 10 Electrical Brands for Premium Wiring</h3>
            <p className="text-sm text-on-surface-variant mb-6 line-clamp-3">Ensure fire safety and efficient power management with these top-rated electrical brands.</p>
            <button className="mt-auto text-primary font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
              View Brands <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Article 6: Brutalist Revival (Existing preserved) */}
        <div className="bg-white border border-gray-300 rounded-2xl overflow-hidden flex flex-col group hover:shadow-xl transition-all">
          <div className="h-48 overflow-hidden">
            <img 
              alt="Luxurious interior living space" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQQ6VKqGgRag5tRIm_NZsDd-YHhCRcT1A_4xJQBj2RRT7aOhDfLffAzULd5tpBLiiO7qQpod64psNoONQRurNUdVGamG-uTJlVilP_PVgBc58XXm1DTbSb1d0PGzB3pvVZO6Q9xXW6dd1B1bHarGgIe24NJvnPF5PCAtacen8-bQ8bkCUruNJZN3Y88_ttJW5WT00b5pU934zpJhacrtEc0H-XyVF6g2KygpNC9MJ4MCi6Q7JsnK_bSYLCGVvyCOh4xPrqAZ-K6Q"
            />
          </div>
          <div className="p-8 flex-1 flex flex-col">
            <span className="text-secondary font-label-caps text-[10px] mb-3 block">Interior Trends</span>
            <h3 className="font-h3 text-lg text-primary mb-3">Concrete as a Luxury Statement</h3>
            <p className="text-sm text-on-surface-variant mb-6 line-clamp-2">Why interior designers are returning to raw textures in modern luxury apartments.</p>
            <button className="mt-auto text-primary font-bold text-sm flex items-center gap-2">Read More <span className="material-symbols-outlined text-sm">arrow_forward</span></button>
          </div>
        </div>
      </div>

      {/* Newsletter Section (Industrial Style) */}
      <section className="bg-primary-container p-8 md:p-16 rounded-[2rem] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-h2 text-3xl md:text-5xl text-white mb-6">MC Infra Intelligence Report</h2>
            <p className="text-lg text-on-primary-container opacity-80 mb-0">
              Join 10,000+ industry professionals. Receive monthly technical updates on project timelines and market volatility.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <input className="flex-1 bg-white border-0 rounded-xl px-6 py-4 font-body-md focus:ring-2 focus:ring-secondary/50 outline-none w-full text-sm" placeholder="Email Address" type="email" />
              <button className="bg-secondary-container text-primary font-bold px-8 py-4 rounded-xl hover:bg-yellow-400 transition-all flex items-center justify-center gap-2 uppercase tracking-widest text-xs border border-primary shadow-lg shadow-secondary/20" onClick={(e) => e.preventDefault()}>
                Subscribe <span className="material-symbols-outlined text-sm">send</span>
              </button>
            </div>
            <p className="text-[10px] text-on-primary-container opacity-60">
              Strict zero-spam policy. Your data is protected by MC Infra's standards.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default News;
