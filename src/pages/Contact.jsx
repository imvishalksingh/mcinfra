import React from 'react';

const Contact = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 md:px-8 py-12 bg-background text-on-surface font-body-md">
      {/* Map Section */}
      <section className="w-full mb-12 border border-outline-variant bg-white overflow-hidden">
        <div className="h-[300px] md:h-[450px] bg-surface-container-highest relative">
          <img 
            alt="Satellite map view of Test City" 
            className="w-full h-full object-cover grayscale-[0.2] contrast-[1.1]" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGD7H5p69shuSTWeOEJkfP3QIZKqeK71Y9V9VCpYQyrhhSUee0oXwhNgGEXjdYkwPTm3l9RZ1rJtdQ3DIiYo3Bk_Y5_xlcVn81C4dQ6a6iUEvU-2_Ci8RGL7tuRRersqdOBiW4PcS-HCHN6DesPQcV6ikAjxs4kT65VLdDHKx8_2dXSAci0kr88RpEHXtfJw_smHk7Iq40rM-150e4TlRhN3gsZF8B6osDfon2Wu_3P7Q8tNmUft13WNmqS_P7j4oeC8Cd_7DeWw"
          />
          <div className="absolute inset-0 pointer-events-none border-[8px] md:border-[12px] border-white/10"></div>
          {/* Mock Map Marker Overlay */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <span className="material-symbols-outlined text-error text-4xl md:text-5xl drop-shadow-md" style={{fontVariationSettings: "'FILL' 1"}}>location_on</span>
            <div className="bg-white p-2 md:p-3 border border-outline mt-2 shadow-sm text-center">
              <p className="font-h3 text-primary text-xs md:text-sm">MC Infra Headquarters</p>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Side: Office Details */}
        <div className="lg:col-span-5 space-y-10">
          <div className="border border-outline-variant bg-white p-6 md:p-8">
            <h1 className="font-h2 text-3xl md:text-h2 text-primary mb-6">Contact Details</h1>
            <div className="space-y-8">
              {/* Main Office */}
              <div className="blueprint-line pb-6">
                <span className="font-label-caps text-secondary uppercase block mb-3">Main Office - Meerut</span>
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-outline">apartment</span>
                  <p className="font-body-md text-on-surface-variant text-sm md:text-base">
                    Office no 501, Gokul Vihar, Rohta Road,<br />
                    Near Cambridge Public School, Pin 250002
                  </p>
                </div>
              </div>
              {/* Site Offices */}
              <div className="blueprint-line pb-6">
                <span className="font-label-caps text-secondary uppercase block mb-3">Site Offices</span>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined text-outline">construction</span>
                    <p className="font-body-md text-on-surface-variant text-sm md:text-base">
                      <span className="font-bold">Project Alpha:</span> Electronic City Phase II
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined text-outline">construction</span>
                    <p className="font-body-md text-on-surface-variant text-sm md:text-base">
                      <span className="font-bold">Project Horizon:</span> Whitefield IT Hub
                    </p>
                  </div>
                </div>
              </div>
              {/* Communication */}
              <div className="blueprint-line pb-6">
                <span className="font-label-caps text-secondary uppercase block mb-3">Communication</span>
                <div className="space-y-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold text-gray-500 uppercase">Project Discussion</span>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-outline text-sm">call</span>
                      <a className="font-body-md text-primary font-bold hover:underline text-sm md:text-base" href="tel:+917983032984">+91 79830 32984</a>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold text-gray-500 uppercase">Site Visit</span>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-outline text-sm">call</span>
                      <a className="font-body-md text-primary font-bold hover:underline text-sm md:text-base" href="tel:+917457891221">+91 7457 891 221</a>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold text-gray-500 uppercase">Material Discussion</span>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-outline text-sm">call</span>
                      <a className="font-body-md text-primary font-bold hover:underline text-sm md:text-base" href="tel:+9109568861832">+91 095688 61832</a>
                    </div>
                  </div>
                  <div className="pt-2 space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-outline text-sm">mail</span>
                      <a className="text-sm hover:text-primary transition-colors" href="mailto:Sales@mcinfra.in">Sales@mcinfra.in</a>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-outline text-sm">mail</span>
                      <a className="text-sm hover:text-primary transition-colors" href="mailto:Projects@mcinfra.in">Projects@mcinfra.in</a>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-outline text-sm">mail</span>
                      <a className="text-sm hover:text-primary transition-colors" href="mailto:hr@mcinfra.com">hr@mcinfra.com</a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Hours */}
              <div>
                <span className="font-label-caps text-secondary uppercase block mb-3">Office Hours</span>
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-outline">schedule</span>
                  <div>
                    <p className="font-body-md text-on-surface-variant text-sm md:text-base">Monday - Sunday: 08:30 AM - 08:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Office Visual */}
          <div className="border border-outline-variant bg-white overflow-hidden group">
            <img 
              alt="Professional corporate reception area" 
              className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAozZrMts8IBEGgnCWz0yKrcjMQ_4rVlwpnDOVNUulmNSHULMigMjfUoCOKt0-6cI2OlWZi6_P6HOhHpUQqZNdjypwTgF_esFXPf5C-WoEmSz5bO-ikjSMVf2ZDC7vU62ryXksRV4ezuxViGJYl52mPIIGy6g5_1DSlm4vGk9Xk62mNFdXxn353sWHPdmQy51JUkiaSm_wt-ylPjXx8d9AEdbuE61YTXsiR1eFr3b0SQ9taDKa43e-SHshH339aLQlJFFpgqiHuEA"
            />
            <div className="p-4 border-t border-outline-variant">
              <p className="font-label-caps text-outline text-center">MAIN OFFICE RECEPTION</p>
            </div>
          </div>
        </div>

        {/* Right Side: Inquiry Form */}
        <div className="lg:col-span-7 mt-8 lg:mt-0">
          <div className="border border-outline-variant bg-white p-6 md:p-10 h-full">
            <h2 className="font-h2 text-2xl md:text-h2 text-primary mb-2">Inquiry Form</h2>
            <p className="font-body-lg text-on-surface-variant mb-10 text-sm md:text-base">Please fill out the form below, and our team will get back to you within 24 business hours.</p>
            
            <form className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="font-label-caps text-primary uppercase">Full Name</label>
                  <input className="w-full bg-white border border-outline-variant px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-body-md" placeholder="e.g. John Doe" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="font-label-caps text-primary uppercase">Phone Number</label>
                  <input className="w-full bg-white border border-outline-variant px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-body-md" placeholder="+91 00000 00000" type="tel" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="font-label-caps text-primary uppercase">Email Address</label>
                  <input className="w-full bg-white border border-outline-variant px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-body-md" placeholder="demo@example.com" type="email" />
                </div>
                <div className="space-y-2">
                  <label className="font-label-caps text-primary uppercase">Area of Interest</label>
                  <select className="w-full bg-white border border-outline-variant px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-body-md">
                    <option>Commercial Development</option>
                    <option>Residential Construction</option>
                    <option>Government Tenders</option>
                    <option>Infrastructure Logistics</option>
                    <option>Others</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-label-caps text-primary uppercase">Message</label>
                <textarea className="w-full bg-white border border-outline-variant px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-body-md resize-none" placeholder="Describe your project or inquiry details..." rows={6}></textarea>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-outline-variant gap-4">
                <p className="text-xs text-outline italic text-center sm:text-left">By submitting this form, you agree to our privacy policy.</p>
                <button className="bg-secondary-container text-on-secondary-container px-10 py-4 font-ui-button uppercase tracking-widest hover:brightness-95 transition-all flex items-center justify-center gap-3 border border-secondary w-full sm:w-auto" type="submit" onClick={(e) => e.preventDefault()}>
                  Send Inquiry
                  <span className="material-symbols-outlined text-sm">send</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
