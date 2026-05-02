import React, { useState } from 'react';

const Portal = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex bg-[#F3F4F6] min-h-screen text-on-surface font-body-md w-full relative">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* SideNavBar */}
      <aside className={`fixed md:sticky top-0 md:top-20 h-screen md:h-[calc(100vh-80px)] w-64 border-r border-gray-300 bg-gray-100 z-50 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 flex flex-col`}>
        <div className="p-6 border-b border-gray-300 md:hidden flex justify-between items-center bg-white">
          <div className="flex items-center">
            <img src="/logo.png" alt="MC Infra" className="h-10 w-auto object-contain" />
          </div>
          <button onClick={() => setIsSidebarOpen(false)} className="text-primary">
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>
        </div>
        <div className="p-6 border-b border-gray-300 hidden md:block">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="MC Infra" className="h-8 w-auto object-contain" />
            <span className="text-lg font-black text-primary uppercase">Portal</span>
          </div>
          <div className="text-[10px] font-label-caps text-gray-500 uppercase tracking-widest mt-1">Precision Engineering</div>
        </div>
        <nav className="flex-1 py-4 overflow-y-auto">
          <div className="px-4 py-2 font-label-caps text-[10px] text-gray-400 mb-2 tracking-widest">DASHBOARD</div>
          <a className="flex items-center gap-3 px-6 py-4 bg-gray-200 text-primary font-bold border-l-4 border-secondary-container transition-all" href="#dashboard" onClick={(e) => {e.preventDefault(); setIsSidebarOpen(false)}}>
            <span className="material-symbols-outlined">foundation</span>
            <span className="font-label-caps text-xs">Home</span>
          </a>
          <a className="flex items-center gap-3 px-6 py-4 text-gray-500 hover:bg-white transition-all" href="#projects" onClick={(e) => {e.preventDefault(); setIsSidebarOpen(false)}}>
            <span className="material-symbols-outlined">architecture</span>
            <span className="font-label-caps text-xs">Projects</span>
          </a>
          <a className="flex items-center gap-3 px-6 py-4 text-gray-500 hover:bg-white transition-all" href="#portfolio" onClick={(e) => {e.preventDefault(); setIsSidebarOpen(false)}}>
            <span className="material-symbols-outlined">apartment</span>
            <span className="font-label-caps text-xs">Portfolio</span>
          </a>
          <a className="flex items-center gap-3 px-6 py-4 text-gray-500 hover:bg-white transition-all" href="#team" onClick={(e) => {e.preventDefault(); setIsSidebarOpen(false)}}>
            <span className="material-symbols-outlined">groups</span>
            <span className="font-label-caps text-xs">Team</span>
          </a>
        </nav>
        <div className="p-6 mt-auto bg-gray-100">
          <div className="flex items-center gap-3 mb-6 border border-gray-200 p-3 bg-white">
            <div className="w-10 h-10 bg-primary-container rounded flex items-center justify-center text-white font-bold shrink-0">JD</div>
            <div className="overflow-hidden">
              <div className="text-xs font-bold truncate">John Doe</div>
              <div className="text-[10px] text-gray-500 truncate">Unit 402, Block B</div>
            </div>
          </div>
          <button className="w-full bg-secondary-container text-primary py-3 font-ui-button uppercase tracking-widest flex items-center justify-center gap-2 border border-primary text-xs hover:bg-yellow-400 transition-colors shadow-sm">
            <span className="material-symbols-outlined text-sm">contact_phone</span>
            Site Visit
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 w-full min-h-screen md:min-h-[calc(100vh-80px)] flex flex-col">
        {/* Mobile Header Bar */}
        <div className="md:hidden flex items-center justify-between p-4 bg-white border-b border-gray-300 sticky top-0 z-30">
          <button onClick={() => setIsSidebarOpen(true)} className="text-primary flex items-center gap-2">
            <span className="material-symbols-outlined text-2xl">menu</span>
            <span className="font-bold text-sm">PORTAL MENU</span>
          </button>
        </div>

        <div className="p-4 md:p-8 overflow-y-auto flex-1">
          <div className="max-w-6xl mx-auto">
            <header className="mb-10">
              <h1 className="font-h1 text-2xl md:text-h1 text-primary mb-2">Project Overview</h1>
              <p className="text-sm md:text-body-lg text-on-surface-variant">Welcome back, John. Here is the latest progress on your unit at The Horizon Apartments.</p>
            </header>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Construction Status Card */}
              <div className="md:col-span-12 lg:col-span-8 bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="p-4 md:p-6 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center bg-gray-50 gap-3">
                  <h3 className="font-h3 text-xs md:text-sm uppercase tracking-widest text-primary">Unit Progress: Horizon - Block B</h3>
                  <span className="px-3 py-1 bg-secondary-container text-primary text-[10px] font-bold uppercase rounded border border-primary">In Progress</span>
                </div>
                <div className="p-4 md:p-8">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-2">
                    <span className="font-bold text-base md:text-lg">Slab Casting: Floor 14</span>
                    <span className="text-primary font-black text-sm md:text-base">65% Complete</span>
                  </div>
                  <div className="w-full bg-gray-200 h-3 md:h-4 rounded-full mb-8">
                    <div className="bg-secondary-container h-full rounded-full" style={{ width: '65%' }}></div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 blueprint-dashed">
                    <div className="pb-4">
                      <div className="text-[10px] md:text-xs text-gray-500 uppercase font-bold mb-1">Expected Completion</div>
                      <div className="text-base md:text-lg font-bold">Oct 2024</div>
                    </div>
                    <div className="pb-4">
                      <div className="text-[10px] md:text-xs text-gray-500 uppercase font-bold mb-1">Next Milestone</div>
                      <div className="text-base md:text-lg font-bold">Internal Brickwork</div>
                    </div>
                    <div className="pb-4">
                      <div className="text-[10px] md:text-xs text-gray-500 uppercase font-bold mb-1">Last Site Visit</div>
                      <div className="text-base md:text-lg font-bold">12 May 2024</div>
                    </div>
                  </div>
                </div>
                <div className="relative h-48 md:h-64 w-full overflow-hidden">
                  <img 
                    alt="Construction site featuring reinforced concrete slab" 
                    className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 transition-all duration-700" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYSgGfS7yuyspYfeBSzt5YrWZHDky5L-nugh8eAL7srAWdX7uA2E2HGoBrv28uTqcDHsbDD11b7nN13LMdpKkEJ6NcmpmplnbSHAiY3AXPS4t9BvxGH7tYdvl43LSoHK1OAjfC8pHp8k5dpZsndVBgeOLGk9HLg3c9FAZKcq_44LrTI08B1t4KjjRwywp9epFE-u-ijMjntytiGL7_spDAcoKTKOUHANw1hRAYyLFi2L2ubcb2HMLWHgXVldwJxOL-wAffIaCRIg"
                  />
                </div>
              </div>

              {/* Payment Overview */}
              <div className="md:col-span-12 lg:col-span-4 bg-white border border-gray-200 rounded-lg flex flex-col h-auto lg:h-full">
                <div className="p-4 md:p-6 border-b border-primary-container bg-primary">
                  <h3 className="font-h3 text-white text-xs md:text-sm uppercase tracking-widest">Financial Summary</h3>
                </div>
                <div className="p-4 md:p-6 flex-1 flex flex-col">
                  <div className="mb-6 md:mb-8">
                    <div className="text-[10px] md:text-xs text-gray-500 uppercase font-bold mb-1">Total Unit Cost</div>
                    <div className="text-2xl md:text-3xl font-black text-primary">₹ 1,45,00,000</div>
                  </div>
                  <div className="space-y-4 md:space-y-6 flex-1">
                    <div className="flex justify-between items-end">
                      <span className="text-xs md:text-sm font-bold">Paid to date</span>
                      <span className="text-xs md:text-sm">₹ 85,00,000</span>
                    </div>
                    <div className="w-full bg-gray-100 h-2">
                      <div className="bg-green-600 h-full" style={{ width: '58%' }}></div>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end text-error gap-1">
                      <span className="text-xs md:text-sm font-bold">Upcoming Demand</span>
                      <span className="text-sm md:text-base font-black">₹ 12,50,000</span>
                    </div>
                    <div className="text-[10px] text-gray-400 italic">Due on completion of 14th floor slab.</div>
                  </div>
                </div>
                <div className="p-4 md:p-6 bg-gray-50 border-t border-gray-100 mt-auto">
                  <button className="w-full bg-primary text-white py-3 rounded font-ui-button uppercase tracking-widest text-xs md:text-sm hover:bg-primary-container transition-colors shadow-md">Pay Now</button>
                </div>
              </div>

              {/* Documents Section */}
              <div className="md:col-span-6 lg:col-span-6 bg-white border border-gray-200 rounded-lg">
                <div className="p-4 md:p-6 border-b border-gray-100 flex items-center justify-between">
                  <h3 className="font-h3 text-[10px] md:text-xs uppercase tracking-widest text-primary">Project Documents</h3>
                  <span className="material-symbols-outlined text-gray-400 text-sm md:text-base">folder</span>
                </div>
                <div className="divide-y divide-gray-100">
                  <div className="p-3 md:p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-3 md:gap-4 overflow-hidden">
                      <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-gray-100 rounded shrink-0">
                        <span className="material-symbols-outlined text-error text-sm md:text-base">picture_as_pdf</span>
                      </div>
                      <div className="overflow-hidden">
                        <div className="font-bold text-xs md:text-sm truncate">Builder Buyer Agreement (BBA)</div>
                        <div className="text-[10px] md:text-xs text-gray-400 truncate">Signed on 15 Jan 2024 • 4.2MB</div>
                      </div>
                    </div>
                    <button className="p-2 hover:bg-gray-200 rounded transition-colors shrink-0">
                      <span className="material-symbols-outlined text-primary text-sm md:text-base">download</span>
                    </button>
                  </div>
                  <div className="p-3 md:p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-3 md:gap-4 overflow-hidden">
                      <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-gray-100 rounded shrink-0">
                        <span className="material-symbols-outlined text-error text-sm md:text-base">picture_as_pdf</span>
                      </div>
                      <div className="overflow-hidden">
                        <div className="font-bold text-xs md:text-sm truncate">Payment Receipt #A2940</div>
                        <div className="text-[10px] md:text-xs text-gray-400 truncate">Issued on 10 May 2024 • 1.1MB</div>
                      </div>
                    </div>
                    <button className="p-2 hover:bg-gray-200 rounded transition-colors shrink-0">
                      <span className="material-symbols-outlined text-primary text-sm md:text-base">download</span>
                    </button>
                  </div>
                  <div className="p-3 md:p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-3 md:gap-4 overflow-hidden">
                      <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-gray-100 rounded shrink-0">
                        <span className="material-symbols-outlined text-error text-sm md:text-base">picture_as_pdf</span>
                      </div>
                      <div className="overflow-hidden">
                        <div className="font-bold text-xs md:text-sm truncate">Possession Letter Draft</div>
                        <div className="text-[10px] md:text-xs text-gray-400 truncate">Available for Review • 800KB</div>
                      </div>
                    </div>
                    <button className="p-2 hover:bg-gray-200 rounded transition-colors shrink-0">
                      <span className="material-symbols-outlined text-primary text-sm md:text-base">download</span>
                    </button>
                  </div>
                </div>
                <div className="p-4 text-center border-t border-gray-100">
                  <a className="text-[10px] md:text-xs font-bold text-primary hover:underline uppercase tracking-widest" href="#all-docs" onClick={(e) => e.preventDefault()}>View All Documents</a>
                </div>
              </div>

              {/* Support Ticket Area */}
              <div className="md:col-span-6 lg:col-span-6 bg-white border border-gray-200 rounded-lg flex flex-col">
                <div className="p-4 md:p-6 border-b border-gray-100 flex items-center justify-between">
                  <h3 className="font-h3 text-[10px] md:text-xs uppercase tracking-widest text-primary">Support & Requests</h3>
                  <span className="material-symbols-outlined text-gray-400 text-sm md:text-base">support_agent</span>
                </div>
                <div className="p-4 md:p-6 flex-1 flex flex-col gap-6">
                  <div className="border border-gray-200 p-3 md:p-4 bg-surface-container-low rounded">
                    <div className="flex justify-between items-start mb-2 gap-2">
                      <span className="text-[10px] md:text-xs font-bold uppercase text-primary">Ticket #9021 - Flooring Selection</span>
                      <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[8px] md:text-[10px] font-bold rounded whitespace-nowrap">RESOLVED</span>
                    </div>
                    <p className="text-xs md:text-sm text-gray-600 mb-3">Customer confirmed Choice B (Granite) for the main foyer area during visit.</p>
                    <div className="text-[8px] md:text-[10px] text-gray-400">Last updated 2 days ago by CRM Team</div>
                  </div>
                  
                  <div className="space-y-4 mt-auto">
                    <h4 className="text-[10px] font-bold uppercase text-gray-400">New Request</h4>
                    <div className="grid grid-cols-2 gap-3 md:gap-4">
                      <button className="flex flex-col items-center justify-center p-3 md:p-4 border border-dashed border-gray-300 rounded hover:border-primary hover:bg-gray-50 transition-all group">
                        <span className="material-symbols-outlined text-gray-400 group-hover:text-primary mb-1 md:mb-2 text-sm md:text-base">construction</span>
                        <span className="text-[8px] md:text-[10px] font-bold uppercase text-center">Change Request</span>
                      </button>
                      <button className="flex flex-col items-center justify-center p-3 md:p-4 border border-dashed border-gray-300 rounded hover:border-primary hover:bg-gray-50 transition-all group">
                        <span className="material-symbols-outlined text-gray-400 group-hover:text-primary mb-1 md:mb-2 text-sm md:text-base">visibility</span>
                        <span className="text-[8px] md:text-[10px] font-bold uppercase text-center">Request Visit</span>
                      </button>
                    </div>
                    <button className="w-full bg-white border border-primary text-primary py-3 rounded font-ui-button uppercase tracking-widest text-[10px] md:text-xs hover:bg-gray-50 transition-all shadow-sm">Submit Technical Query</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Portal;
