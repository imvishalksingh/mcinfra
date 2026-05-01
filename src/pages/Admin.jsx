import React, { useState } from 'react';
import { teamMembers as initialTeam } from '../data/team';
import { jobOpenings as initialJobs } from '../data/jobs';
import { happyClients as initialClients } from '../data/clients';
import { projects as initialProjects } from '../data/projects';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const [team, setTeam] = useState(initialTeam);
  const [jobs, setJobs] = useState(initialJobs);
  const [clients, setClients] = useState(initialClients);
  const [projects, setProjects] = useState(initialProjects);

  const renderProjects = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-primary">Manage Projects</h2>
        <button className="bg-primary text-white px-4 py-2 rounded text-sm uppercase tracking-widest font-bold">Add Project</button>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 border border-gray-200 rounded shadow-sm flex flex-col md:flex-row gap-6">
            <img src={project.image} alt={project.name} className="w-full md:w-48 h-32 object-cover rounded" />
            <div className="flex-1 space-y-2">
              <div className="flex justify-between">
                <h3 className="text-xl font-bold text-primary">{project.name}</h3>
                <span className={`text-[10px] px-2 py-1 rounded font-bold uppercase ${project.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                  {project.status}
                </span>
              </div>
              <p className="text-sm text-gray-500"><span className="font-bold">Location:</span> {project.location}</p>
              <p className="text-sm text-gray-500"><span className="font-bold">Completion:</span> {project.completion}%</p>
              <div className="flex gap-2 pt-2">
                <button className="text-xs text-primary font-bold border border-primary px-3 py-1 hover:bg-primary hover:text-white transition-all">EDIT</button>
                <button className="text-xs text-error font-bold border border-error px-3 py-1 hover:bg-error hover:text-white transition-all">DELETE</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderTeam = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-primary">Manage Team Members</h2>
        <button className="bg-primary text-white px-4 py-2 rounded text-sm uppercase tracking-widest font-bold">Add Member</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {team.map((member, index) => (
          <div key={index} className="bg-white p-4 border border-gray-200 rounded shadow-sm">
            <img src={member.image} alt={member.name} className="w-16 h-16 rounded-full mx-auto mb-4 object-cover" />
            <h3 className="text-center font-bold text-primary">{member.name}</h3>
            <p className="text-center text-xs text-gray-500 uppercase tracking-widest mb-4">{member.designation}</p>
            <div className="flex justify-center gap-2">
              <button className="text-[10px] text-primary font-bold border border-primary px-2 py-1">EDIT</button>
              <button className="text-[10px] text-error font-bold border border-error px-2 py-1">REMOVE</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderJobs = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-primary">Manage Careers</h2>
        <button className="bg-primary text-white px-4 py-2 rounded text-sm uppercase tracking-widest font-bold">Post New Job</button>
      </div>
      <div className="bg-white border border-gray-200 rounded overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest">Title</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest">CTC</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {jobs.map((job, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-primary">{job.title}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{job.ctc}</td>
                <td className="px-6 py-4 text-sm">
                  <div className="flex gap-4">
                    <button className="text-primary font-bold hover:underline">Edit</button>
                    <button className="text-error font-bold hover:underline">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="flex bg-gray-50 min-h-screen font-body-md">
      {/* Admin Sidebar */}
      <aside className="w-64 bg-primary text-white flex flex-col">
        <div className="p-8 border-b border-white/10">
          <h1 className="text-xl font-black uppercase tracking-tighter">MC Infra</h1>
          <p className="text-[10px] text-secondary-container font-bold uppercase tracking-[0.2em] mt-1">Admin Dashboard</p>
        </div>
        <nav className="flex-1 py-8">
          <button 
            onClick={() => setActiveTab('projects')}
            className={`w-full text-left px-8 py-4 flex items-center gap-3 transition-all ${activeTab === 'projects' ? 'bg-white/10 border-r-4 border-secondary-container' : 'hover:bg-white/5'}`}
          >
            <span className="material-symbols-outlined text-sm">architecture</span>
            <span className="text-xs font-bold uppercase tracking-widest">Projects</span>
          </button>
          <button 
            onClick={() => setActiveTab('team')}
            className={`w-full text-left px-8 py-4 flex items-center gap-3 transition-all ${activeTab === 'team' ? 'bg-white/10 border-r-4 border-secondary-container' : 'hover:bg-white/5'}`}
          >
            <span className="material-symbols-outlined text-sm">groups</span>
            <span className="text-xs font-bold uppercase tracking-widest">Team</span>
          </button>
          <button 
            onClick={() => setActiveTab('jobs')}
            className={`w-full text-left px-8 py-4 flex items-center gap-3 transition-all ${activeTab === 'jobs' ? 'bg-white/10 border-r-4 border-secondary-container' : 'hover:bg-white/5'}`}
          >
            <span className="material-symbols-outlined text-sm">work</span>
            <span className="text-xs font-bold uppercase tracking-widest">Careers</span>
          </button>
          <button 
            onClick={() => setActiveTab('clients')}
            className={`w-full text-left px-8 py-4 flex items-center gap-3 transition-all ${activeTab === 'clients' ? 'bg-white/10 border-r-4 border-secondary-container' : 'hover:bg-white/5'}`}
          >
            <span className="material-symbols-outlined text-sm">sentiment_satisfied</span>
            <span className="text-xs font-bold uppercase tracking-widest">Clients</span>
          </button>
        </nav>
        <div className="p-8 border-t border-white/10">
          <button className="text-[10px] font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors">Logout</button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-12 overflow-y-auto">
        <header className="mb-12">
          <span className="text-secondary font-label-caps tracking-[0.2em] uppercase">Control Panel</span>
          <h1 className="text-4xl font-h1 text-primary mt-2">Content Management</h1>
          <div className="w-24 h-1 bg-secondary-container mt-4"></div>
        </header>

        {activeTab === 'projects' && renderProjects()}
        {activeTab === 'team' && renderTeam()}
        {activeTab === 'jobs' && renderJobs()}
        {activeTab === 'clients' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-primary">Client Feedback</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {clients.map((client, index) => (
                <div key={index} className="bg-white p-6 border border-gray-200 rounded shadow-sm">
                  <p className="italic text-gray-600 mb-4 text-sm">"{client.message}"</p>
                  <div className="flex justify-between items-end">
                    <div>
                      <h4 className="font-bold text-primary">{client.name}</h4>
                      <p className="text-[10px] text-gray-500 uppercase">{client.designation}</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="text-[10px] font-bold text-primary uppercase">Edit</button>
                      <button className="text-[10px] font-bold text-error uppercase">Remove</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Admin;
