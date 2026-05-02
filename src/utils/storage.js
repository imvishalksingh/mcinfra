const STORAGE_KEYS = {
  TEAM: 'mcinfra_team',
  JOBS: 'mcinfra_jobs',
  CLIENTS: 'mcinfra_clients',
  PROJECTS: 'mcinfra_projects',
};

export const getStoredData = (key, initialData) => {
  const stored = localStorage.getItem(key);
  return stored ? JSON.parse(stored) : initialData;
};

export const setStoredData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export { STORAGE_KEYS };
