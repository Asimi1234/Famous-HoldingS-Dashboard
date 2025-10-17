/**
 * Application-wide constants
 */

// Admin/Staff Status
export const STATUS = {
  ACTIVE: 'active',
  DEACTIVATED: 'deactivated',
};

// Admin/Staff Roles/Designations
export const ROLES = {
  SALES_MARKETING: 'Sales and marketing',
  OPERATIONS: 'Operations',
  FINANCE: 'Finance',
  HR: 'Human Resources',
  IT: 'Information Technology',
  CUSTOMER_SERVICE: 'Customer service',
};

// Filter options for role dropdown
export const ROLE_FILTER_OPTIONS = [
  { value: 'all', label: 'All admin' },
  { value: 'active', label: 'Active admin' },
  { value: 'deactivated', label: 'Deactivated admin' },
];

// Date filter options
export const DATE_FILTER_OPTIONS = [
  { value: 'any', label: 'Any' },
  { value: 'today', label: 'Today' },
  { value: 'week', label: 'This week' },
  { value: 'month', label: 'This month' },
  { value: 'year', label: 'This year' },
];

// Status badge colors
export const STATUS_COLORS = {
  [STATUS.ACTIVE]: {
    bg: 'bg-green-50',
    text: 'text-green-700',
    dot: 'bg-green-500',
  },
  [STATUS.DEACTIVATED]: {
    bg: 'bg-red-50',
    text: 'text-red-700',
    dot: 'bg-red-500',
  },
};

// Navigation items
export const NAV_ITEMS = {
  BUSINESS: [
    { id: 'customers', label: 'Customers', icon: 'Users', path: '/customers' },
    { id: 'loans', label: 'Loans', icon: 'DollarSign', path: '/loans', badge: 2 },
    { 
      id: 'transactions', 
      label: 'Transactions', 
      icon: 'ArrowLeftRight', 
      path: '/transactions',
      children: [
        { id: 'agent', label: 'Agent', path: '/transactions/agent' },
        { id: 'supervisor', label: 'Supervisor', path: '/transactions/supervisor' },
        { id: 'accountant', label: 'Accountant', path: '/transactions/accountant' },
      ]
    },
  ],
  MANAGEMENT: [
    {
      id: 'employee',
      label: 'Employee',
      icon: 'Users',
      path: '/employees',
      children: [
        { id: 'agents', label: 'Agents', path: '/employees/agents' },
        { id: 'admin', label: 'Admin', path: '/employees/admin' },
      ]
    },
    {
      id: 'activity-control',
      label: 'Activity control',
      icon: 'Activity',
      path: '/activity',
      children: [
        { id: 'roles', label: 'Roles and permissions', path: '/activity/roles' },
        { id: 'approval', label: 'Approval workflow', path: '/activity/approval' },
      ]
    },
  ],
  SETTINGS: [
    { id: 'configurations', label: 'Configurations', icon: 'Settings', path: '/configurations' },
  ],
};