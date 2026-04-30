import React from 'react';

const Gallery = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 md:px-8 py-12 bg-background text-on-background font-body-md">
      {/* Page Header */}
      <section className="mb-16 border-l-4 border-secondary pl-6">
        <span className="font-label-caps text-secondary uppercase tracking-widest text-xs md:text-sm">Site Progress Portfolio</span>
        <h1 className="font-h1 text-3xl md:text-h1 text-primary mt-2">Ongoing Work & Gallery</h1>
        <p className="text-base md:text-body-lg text-on-surface-variant mt-4 max-w-2xl">A transparent, documentary-style look into our active sites, specialized machinery, and recent structural completions. Precision in every pour, safety in every lift.</p>
      </section>

      {/* Live From Sites (Documentary Feed) */}
      <section className="mb-24">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 blueprint-dashed pb-4 gap-4">
          <h2 className="font-h2 text-2xl md:text-h2 text-primary flex items-center gap-3">
            <span className="material-symbols-outlined text-secondary" style={{fontVariationSettings: "'FILL' 1"}}>sensors</span>
            Live From Sites
          </h2>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-error text-white text-xs font-bold rounded">LIVE UPDATES</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Large Featured Progress Card */}
          <div className="md:col-span-8 group border border-outline-variant bg-white p-2">
            <div className="relative overflow-hidden aspect-[16/9]">
              <img 
                alt="Documentary-style photograph of a massive construction site" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxAFe7oCgu0xdZPQxyLDtYkjzDxo1ZfH1syH9WjV0ZjDBqT8K4lEMkoM-ZeB0ylhSs39BexkWpYpcW5LB278m5sLxCFOpdKYtu5xFG3645lvabN9CQTluO7bD0Pvo4GU94JXkvnfkAsAc7rN9mrBVLwSZ2rEMfJt2l4tP7JVUX4fKmu_kAWY0fJu2JXQlc5jyb-hMfFcgsOFZkUtTlXKwldT1tyugehoVbIINyO0X3e689HbTUW9EoNIVdylFXK-cBU4pUHjceQg"
              />
              <div className="absolute top-4 left-4 bg-primary/90 text-white px-3 py-1 text-[10px] md:text-xs font-bold">PROJECT ID: MC-204-BLR</div>
            </div>
            <div className="py-4 px-2">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 gap-2">
                <h3 className="font-h3 text-xl md:text-h3 text-primary">Prestige Tech Park - Phase III</h3>
                <span className="font-label-caps text-on-surface-variant text-[10px] md:text-xs">OCT 24, 2024</span>
              </div>
              <p className="text-sm md:text-body-md text-on-surface-variant mb-4">Finalizing the Level 4 slab reinforcement. Concrete pouring initiated at 06:00 IST with three pump trucks on rotation.</p>
              <div className="w-full bg-surface-container h-3 rounded-full overflow-hidden">
                <div className="bg-secondary h-full w-[65%]"></div>
              </div>
              <div className="flex justify-between mt-2 font-label-caps text-on-surface-variant text-[10px] md:text-xs">
                <span>65% COMPLETE</span>
                <span>ETA: Q1 2025</span>
              </div>
            </div>
          </div>
          
          {/* Secondary Progress Cards Stack */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="border border-outline-variant bg-white p-2">
              <div className="relative aspect-square md:aspect-auto md:h-48 overflow-hidden">
                <img 
                  alt="Construction worker performing precision welding" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXmvULCBSP8DcDCg7x1IabF6z_oSwZT7CIhyTRhKWosF6kIB3zZTt8Dl70RHNdqPBn9dOPpEP0hXc-vuiTGr9p45_2kJcpl-ph2tBspLLn5itMcx8EyhWbEV5eHJYpLWDgrtPHi5z8KK7VcB2Qf-LIJJ2jHbeMB-s6-2lHd_81w2V27SrUFpBjrXCZDHsr0KHGUB42jRRw9Ka8MJxohpqfvVvT19SPZa3XJBI0OBqf2azsiWER-MttmCgFCozB8Hi_DrO16xT50w"
                />
              </div>
              <div className="pt-4 px-2">
                <div className="flex justify-between text-[10px] md:text-xs font-bold mb-1">
                  <span className="text-secondary uppercase">Structural Steel</span>
                  <span className="text-on-surface-variant">OCT 22, 2024</span>
                </div>
                <h4 className="font-bold text-primary text-sm md:text-base">Vertical Frame Welding</h4>
              </div>
            </div>
            
            <div className="border border-outline-variant bg-white p-2">
              <div className="relative aspect-square md:aspect-auto md:h-48 overflow-hidden">
                <img 
                  alt="Towering yellow construction crane against a clear sky" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBKOKdsL67PM6TmLagYS_9TqF9KFlwcwwl4j_n7xDg979EbBsQD-W1cjTJr_K453sDO05mhtOyT9TT4hz2N54BSZHAhIHk05kuFuH1bWh4_-ownYKpfVja7GRqhq7b6KoP0_KuM6y0fC0v9c68yJGgaQo5Q921V1F5dB8ZkV-UZ5RtnoyGQN0h3n5opwyB1AFvteowCGGmoZb6Vq5GF6JIqXROiSAMQ6AG7Yh3CBlpJgBhFEi6CePb-5kH7FG5x9I7suvQdk2Klg"
                />
              </div>
              <div className="pt-4 px-2">
                <div className="flex justify-between text-[10px] md:text-xs font-bold mb-1">
                  <span className="text-secondary uppercase">Logistics</span>
                  <span className="text-on-surface-variant">OCT 21, 2024</span>
                </div>
                <h4 className="font-bold text-primary text-sm md:text-base">Crane Assembly: Site B</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Machinery Section */}
      <section className="mb-24 bg-surface-container-low -mx-4 md:-mx-8 px-4 md:px-8 py-16 border-y border-outline-variant">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <h2 className="font-h2 text-2xl md:text-h2 text-primary flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary" style={{fontVariationSettings: "'FILL' 1"}}>precision_manufacturing</span>
              Heavy Machinery Fleet
            </h2>
            <p className="text-sm md:text-body-md text-on-surface-variant mt-2">Our owned and maintained equipment ensures zero downtime and maximum site safety.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Machine 1 */}
            <div className="bg-white border border-outline-variant rounded-lg overflow-hidden group">
              <div className="h-48 md:h-64 overflow-hidden">
                <img 
                  alt="High-capacity concrete mixer truck" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB33p7Ar3sO8MwJFcJlq6ugqA0rqF99gai3vkTngjnLRc20IUXJ_4yoW3sUUZwkiBRjQkgLl4e_CVwARROFS3nPxcRrglp8Npo24srP7uHODN9fXnUWDdwS8yNTlEj0S_qYQkDDxG68WXvHQPe5s9_M85EIceoD8Hxz_DgpVepQ7Y1KV6JwDDRH80v3nSzzMvG65QFNDxwEqURe0Ss9AaJTqSQujaBA0CpHXRXahyPA8Qscjb52a5eHk05sAdl5Oq5eQMCDb-yv_Q"
                />
              </div>
              <div className="p-6">
                <span className="font-label-caps text-secondary text-[10px] md:text-xs">READY-MIX DELIVERY</span>
                <h3 className="font-h3 text-lg md:text-xl text-primary mt-1">Schwing Stetter Transit Mixer</h3>
                <div className="mt-4 space-y-2 border-t border-gray-100 pt-4">
                  <div className="flex justify-between text-xs md:text-sm">
                    <span className="text-on-surface-variant">Capacity:</span>
                    <span className="font-bold">7.0 m³</span>
                  </div>
                  <div class="flex justify-between text-xs md:text-sm">
                    <span className="text-on-surface-variant">Fleet Count:</span>
                    <span className="font-bold">12 Units</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Machine 2 */}
            <div className="bg-white border border-outline-variant rounded-lg overflow-hidden group">
              <div className="h-48 md:h-64 overflow-hidden">
                <img 
                  alt="Hydraulic excavator working" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlPFyElyb5ZHltO9uf69aDYSPHDiMlw8cenlD9cNrQFHEOgdMLjazWjLh1fA5DIaKtglmrfjwYauEtcahqUI8u1zjW5rc_KG6LdwymbkKelLquJqPKhetCR47-9C_aOnRFeFomB5mhRCJcjYBtz0oJkK6B-n09fXbnVk_7DWDDHeTBCywJuFlQZKFwd3qHKQyALlpF_EBaw-90j6SH1FbaYNw-ru1TfKza_VBkN1t6yWxOMScGnwE3vBu6jrGeFZuHdcPGK0G4cw"
                />
              </div>
              <div className="p-6">
                <span className="font-label-caps text-secondary text-[10px] md:text-xs">EARTHWORKS</span>
                <h3 className="font-h3 text-lg md:text-xl text-primary mt-1">CAT 320 Hydraulic Excavator</h3>
                <div className="mt-4 space-y-2 border-t border-gray-100 pt-4">
                  <div className="flex justify-between text-xs md:text-sm">
                    <span className="text-on-surface-variant">Operating Weight:</span>
                    <span className="font-bold">22,500 kg</span>
                  </div>
                  <div className="flex justify-between text-xs md:text-sm">
                    <span className="text-on-surface-variant">Engine Power:</span>
                    <span className="font-bold">110 kW</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Machine 3 */}
            <div className="bg-white border border-outline-variant rounded-lg overflow-hidden group">
              <div className="h-48 md:h-64 overflow-hidden">
                <img 
                  alt="Massive blue and yellow mobile crane" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSji6II2_uogEAPLdcR4O7NN0kyJKxqIkly8x6ac0m9C1gdu9CMEjuGK8XrXYtLjfrEyEHiRmne_VpLGEMrd8KMU_SssT75m_07HqKNhnBHbs0LLNPscgLNiFIrQoY-9XtwmINbKCOTu9QFTYFccwHXOhR4c-oxZGzfhsdOwZOcund4xCYkM3qmssLi6QX01ugTH2n_27OFNaDpEMD68ZwZ3vjdRjmrBCLfOC7MsiBqKy4T1f19Kutn5-dQ0VSekbQEzbQYCUu8A"
                />
              </div>
              <div className="p-6">
                <span className="font-label-caps text-secondary text-[10px] md:text-xs">HEAVY LIFTING</span>
                <h3 className="font-h3 text-lg md:text-xl text-primary mt-1">Liebherr LTM 1100 Mobile Crane</h3>
                <div className="mt-4 space-y-2 border-t border-gray-100 pt-4">
                  <div className="flex justify-between text-xs md:text-sm">
                    <span className="text-on-surface-variant">Max Capacity:</span>
                    <span className="font-bold">100 t</span>
                  </div>
                  <div className="flex justify-between text-xs md:text-sm">
                    <span className="text-on-surface-variant">Boom Length:</span>
                    <span className="font-bold">60 m</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Completed Work Section */}
      <section className="mb-16">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
          <h2 className="font-h2 text-2xl md:text-h2 text-primary flex items-center gap-3">
            <span className="material-symbols-outlined text-secondary" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
            Completed Work
          </h2>
          <button className="flex items-center gap-2 text-primary font-bold hover:underline text-sm md:text-base">
            View All Projects
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Completed Card 1 */}
          <div className="flex flex-col gap-6">
            <div className="relative group">
              <div className="absolute inset-0 border-2 border-secondary translate-x-3 translate-y-3 -z-10 transition-transform group-hover:translate-x-1 group-hover:translate-y-1"></div>
              <img 
                alt="Modern commercial office building" 
                className="w-full aspect-[4/3] object-cover border border-outline-variant" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuApPH-O8Oa8qQLN8WPkMJr0PIzAxPTQcmDqbgtgKcB9gAx5MtWfMY29UDUTv_t2IBbRPgNXRBiee8FMqYn4c45BpY_Zh_1MzhR5PXCtw4e4KWSKt4HkdsOjy804h8I6w4kOQFJ8NY5kKqSfU6pU65d-t9s4_KXzvNR4BpPTdht9zHky7FLnI5m5Np59dVFJ8g-i3baXtj9F-r2L7yXymnD04iBZWJ9_pn11XQXPdJBE8pN0jCO4yH6aarRE-7cfHP90g_zVywLrRg"
              />
            </div>
            <div>
              <span className="font-label-caps text-secondary text-[10px] md:text-xs">COMMERCIAL SECTOR</span>
              <h3 className="font-h1 text-2xl md:text-h1 text-primary mt-1">Skyline Corporate Center</h3>
              <p className="text-sm md:text-body-md text-on-surface-variant mt-3">Completed in 2023. A 250,000 sq. ft. Grade-A office space featuring sustainable facade engineering and advanced HVAC integration.</p>
              <div className="mt-6 flex flex-wrap gap-4">
                <span className="px-3 py-1 bg-surface-container text-xs font-bold border border-outline-variant">RERA REGISTERED</span>
                <span className="px-3 py-1 bg-surface-container text-xs font-bold border border-outline-variant">LEED GOLD</span>
              </div>
            </div>
          </div>
          
          {/* Completed Card 2 */}
          <div className="flex flex-col gap-6">
            <div className="relative group">
              <div className="absolute inset-0 border-2 border-secondary translate-x-3 translate-y-3 -z-10 transition-transform group-hover:translate-x-1 group-hover:translate-y-1"></div>
              <img 
                alt="Completed high-end residential apartment complex" 
                className="w-full aspect-[4/3] object-cover border border-outline-variant" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBG2m7_eSJFBTBBnzfG4sYsZIpe74dN4iMhYMB7-OFeBr-6jud1A5xZPsdxh8dXzGsVCPH74eZRbx6CY64SIlwbu7O0O-IcLVY_ABGHHjWiLfsixmQ42Bzg1u4_g9uprNsMfDjYdMHcQN4lztCONxur5IoO9FdRIqgfWY1CHn77yAOmmslIOq5s970deebX6CYaCHxkl9qAoTGG7V-dxqayNiD7fBOHxrQuEe8JWsKLD5nZ6h-JcTmqiaY53Jx5uTkSBnboWdp9jg"
              />
            </div>
            <div>
              <span className="font-label-caps text-secondary text-[10px] md:text-xs">RESIDENTIAL SECTOR</span>
              <h3 className="font-h1 text-2xl md:text-h1 text-primary mt-1">The Grand Atrium Residences</h3>
              <p className="text-sm md:text-body-md text-on-surface-variant mt-3">Delivered 4 months ahead of schedule. A luxury residential project consisting of 120 units with premium finishing and structural integrity.</p>
              <div className="mt-6 flex flex-wrap gap-4">
                <span className="px-3 py-1 bg-surface-container text-xs font-bold border border-outline-variant">OC RECEIVED</span>
                <span className="px-3 py-1 bg-surface-container text-xs font-bold border border-outline-variant">VAASTU COMPLIANT</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Gallery;
