import React, { useState, useEffect } from 'react';
import { teamMembers as initialTeam } from '../data/team';
import { getStoredData, STORAGE_KEYS } from '../utils/storage';

const Story = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    setTeamMembers(getStoredData(STORAGE_KEYS.TEAM, initialTeam));
  }, []);
  return (
    <main className="max-w-7xl mx-auto px-4 md:px-8 py-16 bg-surface text-on-surface font-body-md">
      {/* Hero Section: Company Story */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
        <div className="lg:col-span-7">
          <span className="font-label-caps text-secondary mb-4 block">ESTABLISHED 2008</span>
          <h1 className="font-h1 text-3xl md:text-h1 text-primary mb-6">Our Foundation is Built on Honesty and Grit</h1>
          <p className="font-body-lg text-base md:text-body-lg text-on-surface-variant mb-8 max-w-2xl">
            Started as a small engineering consultancy with just three desks and a single vision, MC Infra has grown into a regional leader in industrial and residential infrastructure. We don't just build structures; we forge lasting legacies through structural reliability and architectural precision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="border border-gray-200 p-6 bg-white flex-1">
              <div className="text-3xl md:text-h2 text-primary font-bold">16+</div>
              <div className="font-label-caps text-on-surface-variant mt-2">YEARS OF SERVICE</div>
            </div>
            <div className="border border-gray-200 p-6 bg-white flex-1">
              <div className="text-3xl md:text-h2 text-primary font-bold">450+</div>
              <div className="font-label-caps text-on-surface-variant mt-2">PROJECTS COMPLETED</div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="border border-gray-200 bg-white p-2">
            <img 
              alt="Professional photograph of a modern commercial headquarters building" 
              className="w-full h-auto md:h-[500px] object-cover rounded-sm" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5HeEZSqqz85Y2lFq1HM14MyEAVH1tt4BYP_O7tAkNQF3UeWePb9onsomsVh5UBquPZT22Ys1SSPryyjaT-W94ezG_gYcuVhU2XQ7fPsjhRRocnWKwm1iSQJhsLNoEOlcQlnt27evBg4vbf3mIpZzGOj2Srt-nJg6Iuo0MhHn5o_Wb2nNciMLuDsPq_qxpzhPHoX2rSbSNRodFxujEQPQx_uC18aVIcuHPC4skKYpvLe2smMmL3AUS4fuXbB83t3YUS1-i1FyvNw"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-secondary-container p-6 border border-gray-200 hidden md:block">
            <p className="font-h3 text-on-secondary-container">Integrity in Every Beam.</p>
          </div>
        </div>
      </section>

      {/* Blueprint Separator */}
      <div className="w-full h-px blueprint-line mb-24"></div>

      {/* Company Journey Timeline (Restored) */}
      <section className="mb-24">
        <div className="text-center mb-16">
          <h2 className="font-h2 text-3xl md:text-h2 text-primary">The MC Infra Journey</h2>
          <p className="text-on-surface-variant mt-2">A decade and a half of engineering excellence.</p>
        </div>
        <div className="relative">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 hidden lg:block"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 2008 */}
            <div className="relative bg-white border border-gray-200 p-6 group hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-primary text-white flex items-center justify-center font-bold mb-4">2008</div>
              <h3 className="font-h3 text-primary mb-2 text-lg">The First Blueprint</h3>
              <p className="text-sm text-on-surface-variant">Founded as Cole Engineering Associates, specializing in local bridge inspections and soil testing for small developers.</p>
            </div>
            {/* 2013 */}
            <div className="relative bg-white border border-gray-200 p-6 group hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-primary text-white flex items-center justify-center font-bold mb-4">2013</div>
              <h3 className="font-h3 text-primary mb-2 text-lg">Expansion</h3>
              <p className="text-sm text-on-surface-variant">Secured the first major government contract for urban drainage systems, doubling our team of licensed civil engineers.</p>
            </div>
            {/* 2018 */}
            <div className="relative bg-white border border-gray-200 p-6 group hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-primary text-white flex items-center justify-center font-bold mb-4">2018</div>
              <h3 className="font-h3 text-primary mb-2 text-lg">MC Infra Rebrand</h3>
              <p className="text-sm text-on-surface-variant">Official rebranding to MC Infra to reflect our broad capabilities in full-scale industrial construction and RERA compliance.</p>
            </div>
            {/* 2024 */}
            <div className="relative bg-white border border-gray-200 p-6 group hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-secondary text-on-surface flex items-center justify-center font-bold mb-4">2024</div>
              <h3 className="font-h3 text-primary mb-2 text-lg">Future Horizons</h3>
              <p className="text-sm text-on-surface-variant">Leading the industry with sustainable building practices and a workforce of over 100+ specialized engineers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section (Added) */}
      <section className="mb-24">
        <div className="text-center mb-16">
          <span className="font-label-caps text-secondary mb-2 block">OUR LEADERSHIP & EXPERTS</span>
          <h2 className="font-h2 text-3xl md:text-h2 text-primary">Meet the MC Infra Team</h2>
          <div className="w-24 h-2 bg-secondary-container mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white border border-gray-200 p-6 group hover:shadow-lg transition-all">
              <div className="w-full h-64 overflow-hidden mb-6">
                <img 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                  src={member.image}
                />
              </div>
              <h3 className="font-h3 text-xl text-primary mb-1">{member.name}</h3>
              <p className="font-label-caps text-xs text-secondary tracking-widest">{member.designation}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Founder's Message & Team Strength (Restored) */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
        <div className="bg-primary-container p-8 md:p-12 text-white flex flex-col justify-center">
          <span className="material-symbols-outlined text-4xl text-secondary-container mb-6" data-icon="format_quote">format_quote</span>
          <h2 className="font-h2 text-2xl md:text-h2 text-white mb-6">A Message from Mr. Jaivinder Kumar</h2>
          <p className="font-body-lg italic mb-8 opacity-90 text-sm md:text-base">
            "At MC Infra, we believe that construction is more than just steel and concrete. It's about trust. When we sign a contract, we aren't just promising a building; we are promising our word that every bolt is tightened and every safety protocol is exceeded. Our stability comes from the sweat of our engineers and the honesty of our leadership."
          </p>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-secondary-container">
              <img 
                alt="Portrait of Mr. Jaivinder Kumar" 
                className="w-full h-full object-cover" 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200"
              />
            </div>
            <div>
              <div className="font-bold text-lg">Mr. Jaivinder Kumar</div>
              <div className="font-label-caps text-secondary-container">FOUNDER</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div>
            <h2 className="font-h2 text-2xl md:text-h2 text-primary mb-4">Our Engineering Strength</h2>
            <p className="text-on-surface-variant mb-6 text-sm md:text-base">Our greatest asset is our collective technical intelligence. With over 100+ site engineers and project managers, we bring unparalleled expertise to every site.</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-gray-200 p-4 bg-white text-center">
                <span className="material-symbols-outlined text-primary text-3xl" data-icon="engineering">engineering</span>
                <div className="font-bold text-xl mt-2">100+</div>
                <div className="font-label-caps text-xs">LICENSED ENGINEERS</div>
              </div>
              <div className="border border-gray-200 p-4 bg-white text-center">
                <span className="material-symbols-outlined text-primary text-3xl" data-icon="safety_check">safety_check</span>
                <div className="font-bold text-xl mt-2">10M+</div>
                <div className="font-label-caps text-xs">SAFE MAN-HOURS</div>
              </div>
            </div>
          </div>
          <div className="relative h-48 md:h-64 border border-gray-200 overflow-hidden">
            <img 
              alt="Group of site engineers" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpoNyHS5GbTxVmbVyNOROQNMmF5jB6CQetVkeaZVHM7-i01aHLLVy0byiJX7X-KR2EWlzoUHrzuVLfARCoYSQ3BfvihrsE8bOgSvVSfOhZTP4yuQzh4qbQf2vnIMLYwidQzPM5h8MoPnkR9Jol2PZIckHpmz8OOL-F6Ulm7gulLegGVXub_qhlmWLhYZI8iQstzoayCA0qgw1jR_E1CnH9HtUaC_mBL6rd8T0s4k64uRogf4AJlLdkTHJ57gpxpxQ8MqopwVcEyg"
            />
          </div>
        </div>
      </section>

      {/* Certifications & Standards (Restored) */}
      <section className="border border-gray-200 bg-white p-8 md:p-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="max-w-md text-center md:text-left">
            <h2 className="font-h3 text-xl md:text-2xl text-primary mb-2">Compliance & Certifications</h2>
            <p className="text-on-surface-variant text-sm">We strictly adhere to national and international standards to ensure the highest levels of safety and quality in every project.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-80 grayscale hover:grayscale-0 transition-all">
            <div className="flex flex-col items-center">
              <span className="material-symbols-outlined text-4xl mb-2 text-primary" data-icon="verified">verified</span>
              <span className="font-label-caps text-[10px]">ISO 9001:2015</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="material-symbols-outlined text-4xl mb-2 text-primary" data-icon="apartment">apartment</span>
              <span className="font-label-caps text-[10px]">RERA REGISTERED</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="material-symbols-outlined text-4xl mb-2 text-primary" data-icon="construction">construction</span>
              <span className="font-label-caps text-[10px]">NACE CERTIFIED</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="material-symbols-outlined text-4xl mb-2 text-primary" data-icon="eco">eco</span>
              <span className="font-label-caps text-[10px]">IGBC GREEN HOME</span>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between text-xs text-gray-500 uppercase tracking-widest gap-4 text-center md:text-left">
          <div>RERA REG NO: PRM/KA/RERA/1251/310/PR/180516/001715</div>
          <div>ISO CERTIFIED MANAGEMENT SYSTEMS</div>
        </div>
      </section>
    </main>
  );
};

export default Story;
