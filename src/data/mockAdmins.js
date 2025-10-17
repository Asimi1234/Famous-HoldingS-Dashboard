import { STATUS, ROLES } from '../utils/constants';

// Generate 200+ random mock admins
const generateMockAdmins = (count = 200) => {
  const firstNames = ['John', 'Jane', 'Michael', 'Sarah', 'David', 'Emily', 'Daniel', 'Sophia', 'Chris', 'Olivia', 'James', 'Emma', 'Robert', 'Mia', 'William', 'Ava', 'Joseph', 'Isabella', 'Ethan', 'Grace'];
  const lastNames = ['Smith', 'Johnson', 'Brown', 'Williams', 'Jones', 'Miller', 'Davis', 'Garcia', 'Rodriguez', 'Martinez', 'Lopez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin', 'Lee', 'Perez'];
  const roles = Object.values(ROLES);
  const statuses = Object.values(STATUS);

  const admins = [];

  for (let i = 1; i <= count; i++) {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const role = roles[Math.floor(Math.random() * roles.length)];
    const status = statuses[Math.floor(Math.random() * statuses.length)];

    admins.push({
      id: i.toString(),
      firstName,
      lastName,
      email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}${i}@example.com`,
      phoneNumber: `+23480${Math.floor(100000000 + Math.random() * 899999999)}`,
      designation: role,
      onboardingDate: new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1, 9, 0, 0).toISOString(),
      status,
      avatar: null,
    });
  }

  return admins;
};

const initialMockAdmins = generateMockAdmins(220); // Generate 220 admins
const STORAGE_KEY = 'finance_admin_list';

/**
 * Get admins from localStorage or return initial data
 */
export const getAdmins = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialMockAdmins));
    return initialMockAdmins;
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return initialMockAdmins;
  }
};

/**
 * Save admins to localStorage
 */
const saveAdmins = (admins) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(admins));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};

export const mockAdmins = getAdmins();

export const addAdmin = (adminData) => {
  const admins = getAdmins();
  const newAdmin = {
    ...adminData,
    id: Date.now().toString(),
    onboardingDate: new Date().toISOString(),
    status: STATUS.ACTIVE,
    avatar: null,
  };
  const updatedAdmins = [...admins, newAdmin];
  saveAdmins(updatedAdmins);
  return newAdmin;
};

export const updateAdmin = (id, adminData) => {
  const admins = getAdmins();
  const updatedAdmins = admins.map(admin => 
    admin.id === id ? { ...admin, ...adminData } : admin
  );
  saveAdmins(updatedAdmins);
  return updatedAdmins.find(admin => admin.id === id);
};

export const deleteAdmin = (id) => {
  const admins = getAdmins();
  const updatedAdmins = admins.filter(admin => admin.id !== id);
  saveAdmins(updatedAdmins);
  return true;
};

export const getAdminStats = () => {
  const admins = getAdmins();
  const total = admins.length;
  const active = admins.filter(admin => admin.status === STATUS.ACTIVE).length;
  const deactivated = admins.filter(admin => admin.status === STATUS.DEACTIVATED).length;
  return { total, active, deactivated };
};

export const getAdminById = (id) => {
  const admins = getAdmins();
  return admins.find(admin => admin.id === id) || null;
};

export const filterAdmins = (admins, filters = {}) => {
  let filtered = [...admins];

  if (filters.search) {
    const searchLower = filters.search.toLowerCase();
    filtered = filtered.filter(admin => 
      admin.firstName.toLowerCase().includes(searchLower) ||
      admin.lastName.toLowerCase().includes(searchLower) ||
      admin.email.toLowerCase().includes(searchLower) ||
      admin.phoneNumber.includes(searchLower)
    );
  }

  if (filters.status && filters.status !== 'all') {
    filtered = filtered.filter(admin => admin.status === filters.status);
  }

  if (filters.role && filters.role !== 'all') {
    filtered = filtered.filter(admin => admin.designation === filters.role);
  }

  return filtered;
};
