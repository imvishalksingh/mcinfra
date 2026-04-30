import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
  const { id } = useParams();
  
  // Here we would typically fetch the project details based on the ID.
  // For now, we will use static data based on the blueprint.
  
  return (
    <main className="max-w-7xl mx-auto bg-white border-x border-gray-200 min-h-screen font-body-md text-on-background">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[600px] w-full overflow-hidden">
        <img 
          alt="Massive construction site for a luxury high-rise apartment complex" 
          className="w-full h-full object-cover" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4_0nAl_fs5YGHo9DUhWS9_SJnTM-4D_x7E8kGGazqxa5vvmjmXAThGTjQRb0D0Sw1diQ8TmnbKHa9AP9Kc2G9U9GAsVGwGSutfQFRhDalJnTaZJcH9DpmQPOBJPk0EcRNJQ7AiFM2ymJbiSttmWxAfz7qigBoDLace8ypTnTeD0j3Q-5TZce-jZ8QiptCBLUzbQudcYSE7YNicIHtehO3RDaeBckq_nq6K7N9eslsZPFvtkQE1FHfg5_6VITbRHAiQYS7qwGUHQ"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#002046]/80 to-transparent flex flex-col justify-end p-4 md:p-8 lg:p-16">
          <span className="text-secondary-container font-label-caps mb-2">RESIDENTIAL PROJECT</span>
          <h1 className="text-white font-h1 text-3xl md:text-h1 max-w-3xl">The Horizon Apartments</h1>
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <span className="bg-secondary-container text-on-secondary-fixed px-3 py-1 font-label-caps">IN PROGRESS</span>
            <span className="text-white/80 font-body-md flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">location_on</span> Demo Location, Test City
            </span>
          </div>
        </div>
      </section>

      {/* Project Overview & Form Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-gray-200">
        {/* Left Content: Overview */}
        <div className="lg:col-span-8 p-6 md:p-10 lg:p-16 border-r border-gray-200">
          <h2 className="font-h2 text-2xl md:text-h2 text-primary mb-6">Project Overview</h2>
          <p className="font-body-lg text-on-surface-variant mb-10 leading-relaxed text-sm md:text-base">
            Designed for urban professionals, The Horizon Apartments combine architectural elegance with structural integrity. Spanning 4.5 acres, this development features 220 premium units with panoramic city views and Grade-A construction standards. Every slab is cast with high-strength reinforced concrete to ensure generational longevity.
          </p>
          
          {/* Floor Plans (Technical Drawing Style) */}
          <div className="mb-10 lg:mb-16">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 blueprint-dashed pb-2 gap-2">
              <h3 className="font-h3 text-xl md:text-h3 text-primary">Floor Plans</h3>
              <span className="font-label-caps text-outline text-[10px] md:text-xs">TECHNICAL SPECIFICATIONS SHEET NO. 04</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-300 p-4 bg-surface-container-lowest">
                <img 
                  alt="Technical architectural floor plan for a 3BHK apartment" 
                  className="w-full grayscale opacity-80 hover:opacity-100 transition-opacity" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxnss7STs-W6WcUehOe2DwdWqf3hlH1pRD5giySOivThs5vsyr1MMPBB4_DW5bQYlArrR7DhGB1-yI6S_-GQGK6Hcr90kKwyx2Or_XRzUa3OJZfwtmLWIbHAW3_p4WZf3yuKdwVKPn03fSn6MIBmOYRUOdrrBBn5FxAhcpKg5pW8ErlJSiTC6ZxoeJYxanIGjqc-MUFM9vaCXCcjU5HYQuqeS_xprPhN9HbUZGoBEAdBHMzzCiPe7rlpFqHyEdnGEHrXEdPMe-GA"
                />
                <div className="mt-4">
                  <p className="font-label-caps text-primary">UNIT TYPE A - 3BHK</p>
                  <p className="text-sm text-outline">1,850 SQ. FT. | EAST FACING</p>
                </div>
              </div>
              <div className="border border-gray-300 p-4 bg-surface-container-lowest">
                <img 
                  alt="Architectural section drawing of a 2BHK residential unit" 
                  className="w-full grayscale opacity-80 hover:opacity-100 transition-opacity" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnktCmrMqNs9YGQEKKaxj1uguL2dxNcJLeQeZz57yyLSP2o7x3Hl6VXYZrtmQFki8JHp8cusgzQRpKtSv7sDSSeKNbWVGFf7I2l98rIfB_peqzu1F7I73t06Xhj-Bauuz6P5glAyhVIZdoHZZHP0OujFfyXyWL7uuy6OE87H9T3oJ-NSfoEtDiGgchIW9oJkZoh5YW3yzyJEX1VUXff5Q4fJGJvFzGxoLFQzddSSSZpz6FYrKZNMEAY4qLgyjm_newujldNP_kEw"
                />
                <div className="mt-4">
                  <p className="font-label-caps text-primary">UNIT TYPE B - 2BHK</p>
                  <p className="text-sm text-outline">1,420 SQ. FT. | WEST FACING</p>
                </div>
              </div>
            </div>
          </div>

          {/* Construction Progress Timeline */}
          <div className="mb-10 lg:mb-16">
            <h3 className="font-h3 text-xl md:text-h3 text-primary mb-8">Construction Progress</h3>
            <div className="space-y-8 border-l-2 border-primary-container pl-8 ml-2">
              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-4 h-4 bg-secondary-container border-2 border-primary"></div>
                <span className="font-label-caps text-primary mb-1 block">OCTOBER 2024 - PRESENT</span>
                <h4 className="font-h3 text-base md:text-lg mb-2">Floor 12 Slab Pouring</h4>
                <img 
                  alt="Active construction site showing heavy machinery pouring concrete" 
                  className="w-full h-32 md:h-48 object-cover border border-gray-300 mb-4" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSrtJX6rdDijrxfa31QjI7zeonzEW-ZCGKmxPzVtwkCBGc3IBsxg07PwukTdmSgWBaL1RjZIyORiMEIHYdslrJyA6lNL5mKhhhSYwGnFwNbiGwR4CLhVInsUUs0994XMwly9VUITaBnk0jVqsye_UBfGxc4vvTheuQcbaF15GXqLHP7XcBgwcr7r-7xO3VcMEA-_muVr_QVwZm9iqU0eWji9Z0B5_ShdTi7u7hrg4_W0ijxp7AklwnpV7W0zeZ8L1UdXLqqZ1HOw"
                />
              </div>
              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-4 h-4 bg-gray-300 border-2 border-gray-400"></div>
                <span className="font-label-caps text-outline mb-1 block">AUGUST 2024</span>
                <h4 className="font-h3 text-base md:text-lg mb-2 text-outline">Brickwork & Internal Plastering (Floors 1-6)</h4>
                <div className="w-full h-1 bg-surface-container overflow-hidden">
                  <div className="w-full h-full bg-secondary-container"></div>
                </div>
                <p className="text-sm text-outline mt-2">Status: 100% Completed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content: Form */}
        <div className="lg:col-span-4 p-6 md:p-10 lg:p-16 bg-surface-container-low">
          <div className="sticky top-24 border border-gray-300 bg-white p-6 md:p-8">
            <h3 className="font-h3 text-xl md:text-h3 text-primary mb-2">Schedule a Site Visit</h3>
            <p className="text-sm text-on-surface-variant mb-6">Experience the structural precision of The Horizon Apartments firsthand.</p>
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
              <p className="text-xs text-outline">PRM/KA/RERA/1251/310/PR/180516/001715</p>
            </div>
          </div>
        </div>
      </div>

      {/* Amenities Bento Grid */}
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
          <div className="md:col-span-3 border border-gray-200 p-6 flex flex-col justify-between bg-[#1B365D] text-white h-48 md:h-64">
            <span className="material-symbols-outlined text-4xl text-secondary-container">security</span>
            <div>
              <h4 className="font-h3 text-base md:text-lg mb-1">Industrial-Grade Security</h4>
              <p className="text-xs md:text-sm text-white/80">3-tier biometric access, 24/7 CCTV perimeter surveillance, and armed response teams for maximum resident safety.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Advantages & Map */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-0 border-b border-gray-200">
        <div className="p-6 md:p-10 lg:p-16">
          <h2 className="font-h2 text-2xl md:text-h2 text-primary mb-8 md:mb-12">Location Advantage</h2>
          <div className="space-y-6 md:space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-surface-container-high flex items-center justify-center font-bold text-primary flex-shrink-0">05</div>
              <div>
                <h4 className="font-h3 text-sm md:text-md">MINS TO ITPL</h4>
                <p className="text-xs md:text-sm text-outline">Direct connectivity to the largest tech hub in Bengaluru.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-surface-container-high flex items-center justify-center font-bold text-primary flex-shrink-0">10</div>
              <div>
                <h4 className="font-h3 text-sm md:text-md">MINS TO MANIPAL HOSPITAL</h4>
                <p className="text-xs md:text-sm text-outline">World-class tertiary healthcare within immediate reach.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-surface-container-high flex items-center justify-center font-bold text-primary flex-shrink-0">02</div>
              <div>
                <h4 className="font-h3 text-sm md:text-md">MINS TO METRO STATION</h4>
                <p className="text-xs md:text-sm text-outline">Effortless transit via the newly opened Purple Line extension.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-64 md:h-full min-h-[300px] md:min-h-[400px] border-l md:border-t-0 border-t border-gray-200 bg-gray-100">
          <img 
            alt="Professional map visualization showing the Whitefield area of Bengaluru" 
            className="w-full h-full object-cover grayscale opacity-90" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdIcbSz9npZggSmo_-OAJFcim9TlLIPTxrH2hR6kCawnqIsuUbPRc2tWAki8-028Kvx6ijrlwO3eLeHwfj0I9oUD1TXRwKqc1SBN_TOa7ik2L-fTkf4v8Vi3H_TwPuHBq5hTQeUlbqrWwtnaKwRURk1Hpz4EnoWiNayx4NDNMjnxXjhlWetTqjPEQ5JXWKrWERou9e6TuhUljqyt2nvlbSbfrVCeJHN7GGHbk1qXCEBsabgOyldRIfPf3ZKfdr35Kc6HXZO1WGXQ"
          />
        </div>
      </section>

      {/* Payment Plan Table */}
      <section className="p-6 md:p-10 lg:p-16">
        <h2 className="font-h2 text-2xl md:text-h2 text-primary mb-8 md:mb-12">Structured Payment Plan</h2>
        <div className="overflow-x-auto border border-gray-300">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-primary text-white font-label-caps text-xs md:text-sm">
                <th className="p-3 md:p-4 border-r border-white/10">MILESTONE</th>
                <th className="p-3 md:p-4 border-r border-white/10 text-center">% PAYABLE</th>
                <th className="p-3 md:p-4">REMARKS</th>
              </tr>
            </thead>
            <tbody className="font-body-md text-xs md:text-sm">
              <tr className="bg-white border-b border-gray-300">
                <td className="p-3 md:p-4 border-r border-gray-300 font-semibold">Booking Amount</td>
                <td className="p-3 md:p-4 border-r border-gray-300 text-center">10%</td>
                <td className="p-3 md:p-4 text-outline">Due at time of reservation</td>
              </tr>
              <tr className="bg-surface-container-low border-b border-gray-300">
                <td className="p-3 md:p-4 border-r border-gray-300 font-semibold">Completion of Foundation</td>
                <td className="p-3 md:p-4 border-r border-gray-300 text-center">15%</td>
                <td className="p-3 md:p-4 text-outline">Certified by project structural engineer</td>
              </tr>
              <tr className="bg-white border-b border-gray-300">
                <td className="p-3 md:p-4 border-r border-gray-300 font-semibold">Completion of 5th Floor Slab</td>
                <td className="p-3 md:p-4 border-r border-gray-300 text-center">25%</td>
                <td className="p-3 md:p-4 text-outline">Ongoing construction milestone</td>
              </tr>
              <tr className="bg-surface-container-low border-b border-gray-300">
                <td className="p-3 md:p-4 border-r border-gray-300 font-semibold">Completion of Brickwork</td>
                <td className="p-3 md:p-4 border-r border-gray-300 text-center">20%</td>
                <td className="p-3 md:p-4 text-outline">Internal and external wall completion</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 md:p-4 border-r border-gray-300 font-semibold">Possession</td>
                <td className="p-3 md:p-4 border-r border-gray-300 text-center">30%</td>
                <td className="p-3 md:p-4 text-outline">Handover of keys and RERA closure</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default ProjectDetails;
