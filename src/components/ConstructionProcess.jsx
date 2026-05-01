import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ConstructionProcess = ({ dark = false }) => {
  const steps = [
    { 
      step: "01", 
      title: "Planning", 
      desc: "Feasibility study and landscape analysis.", 
      icon: "edit_note" 
    },
    { 
      step: "02", 
      title: "Design", 
      desc: "3D modeling and architectural blueprints.", 
      icon: "design_services" 
    },
    { 
      step: "03", 
      title: "Site Dev", 
      desc: "Excavation and foundation engineering.", 
      icon: "construction" 
    },
    { 
      step: "04", 
      title: "Structure", 
      desc: "Framing, walls, and structural roofing.", 
      icon: "architecture" 
    },
    { 
      step: "05", 
      title: "Finishing", 
      desc: "Interior, MEP, and aesthetic detailing.", 
      icon: "assignment_turned_in" 
    },
    { 
      step: "06", 
      title: "Handover", 
      desc: "Final audit and key handover ceremony.", 
      icon: "key" 
    },
  ];

  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="relative pt-12 pb-8">
      {/* Connector Line (Base) */}
      <div className={`absolute top-[76px] left-0 w-full h-[2px] ${dark ? 'bg-white/10' : 'bg-gray-100'} hidden md:block`}></div>
      
      {/* Animated Progress Line */}
      <motion.div 
        className="absolute top-[76px] left-0 h-[2px] bg-secondary-container z-10 hidden md:block shadow-[0_0_10px_rgba(255,215,0,0.5)]"
        initial={{ width: "0%" }}
        animate={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      />

      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-8 relative z-20">
        {steps.map((item, idx) => {
          const isActive = idx === activeStep;
          const isCompleted = idx < activeStep;

          return (
            <div 
              key={idx} 
              className="group relative flex flex-col items-center"
              onMouseEnter={() => setActiveStep(idx)}
            >
              {/* Step Circle */}
              <motion.div 
                layout
                className={`relative w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-6 border-2 transition-colors duration-300 ${
                  isActive 
                    ? (dark ? 'bg-secondary-container border-secondary-container text-primary shadow-[0_0_30px_rgba(255,215,0,0.3)]' : 'bg-primary border-primary text-white shadow-2xl') 
                    : isCompleted
                      ? (dark ? 'bg-primary border-secondary-container text-secondary-container' : 'bg-white border-primary text-primary')
                      : (dark ? 'bg-primary border-white/20 text-white/40' : 'bg-white border-gray-200 text-gray-300')
                }`}
              >
                <AnimatePresence mode="wait">
                  {isActive ? (
                    <motion.span 
                      key="icon"
                      initial={{ scale: 0, rotate: -45, opacity: 0 }}
                      animate={{ scale: 1, rotate: 0, opacity: 1 }}
                      exit={{ scale: 0, rotate: 45, opacity: 0 }}
                      className="material-symbols-outlined text-2xl md:text-3xl"
                    >
                      {item.icon}
                    </motion.span>
                  ) : (
                    <motion.span 
                      key="number"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-lg md:text-xl font-bold font-h2"
                    >
                      {item.step}
                    </motion.span>
                  )}
                </AnimatePresence>

                {/* Outer Ring for Active */}
                {isActive && (
                  <motion.div 
                    layoutId="outline"
                    className="absolute -inset-2 rounded-full border border-secondary-container/50 pointer-events-none"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.div>
              
              {/* Text Content */}
              <div className="text-center px-2">
                <motion.h4 
                  className={`font-bold uppercase text-[10px] md:text-xs tracking-widest mb-2 transition-colors duration-300 ${
                    isActive ? (dark ? 'text-secondary-container' : 'text-primary') : (dark ? 'text-white/60' : 'text-gray-400')
                  }`}
                >
                  {item.title}
                </motion.h4>
                
                <AnimatePresence>
                  {isActive && (
                    <motion.p 
                      initial={{ opacity: 0, y: 10, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: "auto" }}
                      exit={{ opacity: 0, y: 5, height: 0 }}
                      className={`text-[9px] md:text-[11px] leading-tight ${dark ? 'text-white/40' : 'text-gray-500'}`}
                    >
                      {item.desc}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Progress Indicator Dots for Mobile */}
              <div className="md:hidden mt-4">
                 <div className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-secondary-container' : 'bg-gray-200'}`}></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ConstructionProcess;
