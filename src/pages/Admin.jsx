import React, { useState, useEffect } from 'react';
import { teamMembers as initialTeam } from '../data/team';
import { jobOpenings as initialJobs } from '../data/jobs';
import { happyClients as initialClients } from '../data/clients';
import { projects as initialProjects } from '../data/projects';
import { getStoredData, setStoredData, STORAGE_KEYS } from '../utils/storage';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const [team, setTeam] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [clients, setClients] = useState([]);
  const [projects, setProjects] = useState([]);

  const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem('adminAuth') === 'true');
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginForm.username === 'admin' && loginForm.password === 'mcinfra@admin') {
      setIsAuthenticated(true);
      sessionStorage.setItem('adminAuth', 'true');
      setLoginError('');
    } else {
      setLoginError('Invalid credentials');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('adminAuth');
  };

  // Existing Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(''); // 'project', 'team', 'job', 'client'
  const [editIndex, setEditIndex] = useState(null);
  const [formData, setFormData] = useState({});



  useEffect(() => {
    setTeam(getStoredData(STORAGE_KEYS.TEAM, initialTeam));
    setJobs(getStoredData(STORAGE_KEYS.JOBS, initialJobs));
    setClients(getStoredData(STORAGE_KEYS.CLIENTS, initialClients));
    setProjects(getStoredData(STORAGE_KEYS.PROJECTS, initialProjects));
  }, []);

  const handleSave = (type, data) => {
    let updatedList;
    if (type === 'project') {
      updatedList = [...projects];
      if (!data.id) data.id = data.name.toLowerCase().replace(/\s+/g, '-');
      if (editIndex !== null) updatedList[editIndex] = data;
      else updatedList.push(data);
      setProjects(updatedList);
      setStoredData(STORAGE_KEYS.PROJECTS, updatedList);
    } else if (type === 'team') {
      updatedList = [...team];
      if (editIndex !== null) updatedList[editIndex] = data;
      else updatedList.push(data);
      setTeam(updatedList);
      setStoredData(STORAGE_KEYS.TEAM, updatedList);
    } else if (type === 'job') {
      updatedList = [...jobs];
      if (editIndex !== null) updatedList[editIndex] = data;
      else updatedList.push(data);
      setJobs(updatedList);
      setStoredData(STORAGE_KEYS.JOBS, updatedList);
    } else if (type === 'client') {
      updatedList = [...clients];
      if (editIndex !== null) updatedList[editIndex] = data;
      else updatedList.push(data);
      setClients(updatedList);
      setStoredData(STORAGE_KEYS.CLIENTS, updatedList);
    }
    setIsModalOpen(false);
    setEditIndex(null);
    setFormData({});
  };

  const handleDelete = (type, index) => {
    if (!window.confirm('Are you sure you want to delete this item?')) return;
    
    let updatedList;
    if (type === 'project') {
      updatedList = projects.filter((_, i) => i !== index);
      setProjects(updatedList);
      setStoredData(STORAGE_KEYS.PROJECTS, updatedList);
    } else if (type === 'team') {
      updatedList = team.filter((_, i) => i !== index);
      setTeam(updatedList);
      setStoredData(STORAGE_KEYS.TEAM, updatedList);
    } else if (type === 'job') {
      updatedList = jobs.filter((_, i) => i !== index);
      setJobs(updatedList);
      setStoredData(STORAGE_KEYS.JOBS, updatedList);
    } else if (type === 'client') {
      updatedList = clients.filter((_, i) => i !== index);
      setClients(updatedList);
      setStoredData(STORAGE_KEYS.CLIENTS, updatedList);
    }
  };

  const openModal = (type, index = null) => {
    setModalType(type);
    setEditIndex(index);
    if (index !== null) {
      if (type === 'project') setFormData({...projects[index]});
      else if (type === 'team') setFormData({...team[index]});
      else if (type === 'job') setFormData({...jobs[index]});
      else if (type === 'client') setFormData({...clients[index]});
    } else {
      setFormData(type === 'project' ? { floorPlans: [], progress: [] } : {});
    }
    setIsModalOpen(true);
  };

  const restoreDefaults = () => {
    if (window.confirm('This will reset ALL data to original defaults. Continue?')) {
      localStorage.clear();
      window.location.reload();
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-primary p-4">
        <div className="bg-white p-8 md:p-12 shadow-2xl w-full max-w-md">
          <div className="flex flex-col items-center mb-8">
            <img src="/logo.png" alt="MC Infra" className="h-16 w-auto object-contain mb-4" />
            <h1 className="font-h1 text-2xl text-primary uppercase tracking-tighter">Admin Access</h1>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="font-label-caps text-xs text-primary uppercase tracking-widest">Username</label>
              <input 
                type="text" 
                className="w-full border border-gray-300 p-3 focus:outline-primary font-body-md"
                value={loginForm.username}
                onChange={(e) => setLoginForm({...loginForm, username: e.target.value})}
                required
              />
            </div>
            <div className="space-y-2">
              <label className="font-label-caps text-xs text-primary uppercase tracking-widest">Password</label>
              <input 
                type="password" 
                className="w-full border border-gray-300 p-3 focus:outline-primary font-body-md"
                value={loginForm.password}
                onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                required
              />
            </div>
            {loginError && <p className="text-error text-xs font-bold">{loginError}</p>}
            <button 
              type="submit" 
              className="w-full bg-secondary-container text-primary py-4 font-ui-button uppercase tracking-widest hover:bg-yellow-400 transition-colors border border-primary shadow-md font-bold"
            >
              Secure Login
            </button>
          </form>
          <p className="text-center text-[10px] text-gray-400 mt-8 uppercase tracking-widest">Authorized Personnel Only</p>
        </div>
      </div>
    );
  }

  // Helper functions for nested arrays
  const addFloorPlan = () => {
    const plans = formData.floorPlans || [];
    setFormData({ ...formData, floorPlans: [...plans, { type: '', size: '', facing: '', image: '' }] });
  };
  const updateFloorPlan = (i, f, v) => {
    const plans = [...formData.floorPlans]; plans[i][f] = v;
    setFormData({ ...formData, floorPlans: plans });
  };
  const removeFloorPlan = (i) => {
    setFormData({ ...formData, floorPlans: formData.floorPlans.filter((_, idx) => idx !== i) });
  };
  const addProgress = () => {
    const prog = formData.progress || [];
    setFormData({ ...formData, progress: [...prog, { date: '', title: '', status: '', image: '' }] });
  };
  const updateProgress = (i, f, v) => {
    const prog = [...formData.progress]; prog[i][f] = v;
    setFormData({ ...formData, progress: prog });
  };
  const removeProgress = (i) => {
    setFormData({ ...formData, progress: formData.progress.filter((_, idx) => idx !== i) });
  };

  return (
    <div className="flex bg-gray-50 min-h-screen font-body-md text-primary">
      {/* Sidebar */}
      <aside className="w-64 bg-primary text-white flex flex-col fixed h-full z-20">
        <div className="p-8 border-b border-white/10">
          <div className="flex items-center mb-2">
            <img src="/logo.png" alt="MC Infra" className="h-10 w-auto object-contain brightness-0 invert" />
          </div>
          <p className="text-[10px] text-secondary-container font-bold uppercase mt-1">Admin Dashboard</p>
        </div>
        <nav className="flex-1 py-8">
          {['projects', 'team', 'jobs', 'clients'].map((id) => (
            <button 
              key={id}
              onClick={() => setActiveTab(id)}
              className={`w-full text-left px-8 py-4 flex items-center gap-3 transition-all ${activeTab === id ? 'bg-white/10 border-r-4 border-secondary-container' : 'hover:bg-white/5'}`}
            >
              <span className="text-xs font-bold uppercase tracking-widest">{id}</span>
            </button>
          ))}
        </nav>
        <div className="p-8 space-y-4">
          <button 
            onClick={restoreDefaults}
            className="w-full border border-red-500/30 text-red-400 text-[10px] font-bold uppercase p-3 hover:bg-red-500 hover:text-white transition-all"
          >
            Restore Defaults
          </button>
          <button 
            onClick={handleLogout}
            className="w-full bg-white/10 text-white text-[10px] font-bold uppercase p-3 hover:bg-white/20 transition-all flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-xs">logout</span>
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-12">
        <header className="mb-12 flex justify-between items-end">
          <div>
            <h1 className="text-4xl font-h1 mt-2 capitalize">{activeTab}</h1>
          </div>
          <button onClick={() => openModal(activeTab.replace(/s$/, ''))} className="bg-primary text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-primary/90">
            Add New
          </button>
        </header>

        <div className="space-y-6">
          {activeTab === 'projects' && projects.map((p, i) => (
            <div key={i} className="bg-white p-6 border border-gray-200 flex gap-6">
              <img src={p.image} className="w-48 h-32 object-cover rounded" />
              <div className="flex-1">
                <h3 className="text-xl font-bold">{p.name}</h3>
                <p className="text-sm text-gray-500">{p.location} • {p.status}</p>
                <div className="flex gap-4 mt-4">
                  <button onClick={() => openModal('project', i)} className="text-xs font-bold text-primary hover:underline">EDIT DETAILS</button>
                  <button onClick={() => handleDelete('project', i)} className="text-xs font-bold text-red-600 hover:underline">DELETE</button>
                </div>
              </div>
            </div>
          ))}
          {/* Other tabs simplified for space */}
          {activeTab === 'team' && team.map((m, i) => (
            <div key={i} className="bg-white p-4 border border-gray-200 flex justify-between items-center">
              <span>{m.name} ({m.designation})</span>
              <div className="flex gap-4">
                <button onClick={() => openModal('team', i)} className="text-xs font-bold">EDIT</button>
                <button onClick={() => handleDelete('team', i)} className="text-xs font-bold text-red-600">DELETE</button>
              </div>
            </div>
          ))}
          {activeTab === 'jobs' && jobs.map((j, i) => (
            <div key={i} className="bg-white p-4 border border-gray-200 flex justify-between items-center">
              <span>{j.title} ({j.ctc})</span>
              <div className="flex gap-4">
                <button onClick={() => openModal('job', i)} className="text-xs font-bold">EDIT</button>
                <button onClick={() => handleDelete('job', i)} className="text-xs font-bold text-red-600">DELETE</button>
              </div>
            </div>
          ))}
          {activeTab === 'clients' && clients.map((c, i) => (
            <div key={i} className="bg-white p-4 border border-gray-200 flex justify-between items-center">
              <span>{c.name}</span>
              <div className="flex gap-4">
                <button onClick={() => openModal('client', i)} className="text-xs font-bold">EDIT</button>
                <button onClick={() => handleDelete('client', i)} className="text-xs font-bold text-red-600">DELETE</button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-primary/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white w-full max-w-2xl shadow-2xl p-8 max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-h1 mb-8 uppercase tracking-tight">{editIndex !== null ? 'Edit' : 'Add'} {modalType}</h2>
            <form onSubmit={(e) => { e.preventDefault(); handleSave(modalType, formData); }} className="space-y-6">
              {modalType === 'project' && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <input className="w-full border p-3 focus:outline-primary" placeholder="Project Name" value={formData.name || ''} onChange={e => setFormData({...formData, name: e.target.value})} required />
                    <input className="w-full border p-3 focus:outline-primary" placeholder="Category" value={formData.category || ''} onChange={e => setFormData({...formData, category: e.target.value})} required />
                  </div>
                  <input className="w-full border p-3 focus:outline-primary" placeholder="Location" value={formData.location || ''} onChange={e => setFormData({...formData, location: e.target.value})} required />
                  <div className="grid grid-cols-3 gap-4">
                    <input className="w-full border p-3 focus:outline-primary" placeholder="Starting Price" value={formData.price || ''} onChange={e => setFormData({...formData, price: e.target.value})} />
                    <input className="w-full border p-3 focus:outline-primary" placeholder="Possession Date" value={formData.possession || ''} onChange={e => setFormData({...formData, possession: e.target.value})} />
                    <select className="w-full border p-3 focus:outline-primary" value={formData.status || 'Ongoing'} onChange={e => setFormData({...formData, status: e.target.value})}>
                      <option value="Ongoing">Ongoing</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <input className="w-full border p-3 focus:outline-primary" placeholder="Configuration (e.g. 3BHK)" value={formData.config || ''} onChange={e => setFormData({...formData, config: e.target.value})} />
                    <input className="w-full border p-3 focus:outline-primary" placeholder="Project Size (e.g. 22 Acres)" value={formData.projectSize || ''} onChange={e => setFormData({...formData, projectSize: e.target.value})} />
                  </div>
                  <textarea className="w-full border p-3 focus:outline-primary" placeholder="Description" rows="2" value={formData.description || ''} onChange={e => setFormData({...formData, description: e.target.value})} />
                  <input className="w-full border p-3 focus:outline-primary" placeholder="Main Image URL" value={formData.image || ''} onChange={e => setFormData({...formData, image: e.target.value})} required />
                  <input className="w-full border p-3 focus:outline-primary" placeholder="Hero/Details Image URL" value={formData.heroImage || ''} onChange={e => setFormData({...formData, heroImage: e.target.value})} />
                  
                  {/* Floor Plans */}
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-bold text-xs uppercase text-secondary">Floor Plans</h3>
                      <button type="button" onClick={addFloorPlan} className="bg-secondary-container px-3 py-1 text-[10px] font-bold">ADD PLAN</button>
                    </div>
                    {formData.floorPlans?.map((p, i) => (
                      <div key={i} className="bg-gray-50 p-4 mb-4 space-y-3 border">
                        <input className="w-full border p-2 text-sm" placeholder="Type (e.g. UNIT A)" value={p.type} onChange={e => updateFloorPlan(i, 'type', e.target.value)} />
                        <div className="grid grid-cols-2 gap-3">
                          <input className="w-full border p-2 text-sm" placeholder="Size" value={p.size} onChange={e => updateFloorPlan(i, 'size', e.target.value)} />
                          <input className="w-full border p-2 text-sm" placeholder="Facing" value={p.facing} onChange={e => updateFloorPlan(i, 'facing', e.target.value)} />
                        </div>
                        <input className="w-full border p-2 text-sm" placeholder="Image URL" value={p.image} onChange={e => updateFloorPlan(i, 'image', e.target.value)} />
                        <button type="button" onClick={() => removeFloorPlan(i)} className="text-[10px] text-red-600 font-bold uppercase">Remove</button>
                      </div>
                    ))}
                  </div>

                  {/* Progress */}
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-bold text-xs uppercase text-secondary">Construction Progress</h3>
                      <button type="button" onClick={addProgress} className="bg-secondary-container px-3 py-1 text-[10px] font-bold">ADD MILESTONE</button>
                    </div>
                    {formData.progress?.map((p, i) => (
                      <div key={i} className="bg-gray-50 p-4 mb-4 space-y-3 border">
                        <div className="grid grid-cols-2 gap-3">
                          <input className="w-full border p-2 text-sm" placeholder="Date" value={p.date} onChange={e => updateProgress(i, 'date', e.target.value)} />
                          <input className="w-full border p-2 text-sm" placeholder="Title" value={p.title} onChange={e => updateProgress(i, 'title', e.target.value)} />
                        </div>
                        <input className="w-full border p-2 text-sm" placeholder="Image URL or Status" value={p.image || p.status} onChange={e => updateProgress(i, 'image', e.target.value)} />
                        <button type="button" onClick={() => removeProgress(i)} className="text-[10px] text-red-600 font-bold uppercase">Remove</button>
                      </div>
                    ))}
                  </div>
                </>
              )}
              {/* Other forms handled similarly */}
              {modalType === 'team' && (
                <div className="space-y-4">
                  <input className="w-full border p-3" placeholder="Name" value={formData.name || ''} onChange={e => setFormData({...formData, name: e.target.value})} required />
                  <input className="w-full border p-3" placeholder="Designation" value={formData.designation || ''} onChange={e => setFormData({...formData, designation: e.target.value})} required />
                  <input className="w-full border p-3" placeholder="Image URL" value={formData.image || ''} onChange={e => setFormData({...formData, image: e.target.value})} />
                </div>
              )}
              {modalType === 'job' && (
                <div className="space-y-4">
                  <input className="w-full border p-3" placeholder="Title" value={formData.title || ''} onChange={e => setFormData({...formData, title: e.target.value})} required />
                  <input className="w-full border p-3" placeholder="CTC" value={formData.ctc || ''} onChange={e => setFormData({...formData, ctc: e.target.value})} />
                  <input className="w-full border p-3" placeholder="Location" value={formData.location || ''} onChange={e => setFormData({...formData, location: e.target.value})} />
                </div>
              )}
              {modalType === 'client' && (
                <div className="space-y-4">
                  <input className="w-full border p-3" placeholder="Client Name" value={formData.name || ''} onChange={e => setFormData({...formData, name: e.target.value})} required />
                  <textarea className="w-full border p-3" placeholder="Message" value={formData.message || ''} onChange={e => setFormData({...formData, message: e.target.value})} required />
                </div>
              )}

              <div className="flex gap-4 pt-8">
                <button type="submit" className="flex-1 bg-primary text-white py-4 font-bold uppercase text-xs">Save</button>
                <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 border py-4 font-bold uppercase text-xs">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
