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

// Navigation items (using custom image icons)
export const NAV_ITEMS = {
  BUSINESS: [
    {
      id: 'customers',
      label: 'Customers',
      icon: '/assets/images/icon/customer_icon.svg',
      path: '/customers',
    },
    {
      id: 'loans',
      label: 'Loans',
      icon: '/assets/images/icon/loan_icon.svg',
      path: '/loans',
      children: [
        { id: 'agent', /*label: 'Agent', icon: '/assets/images/icon/agent_icon.svg', path: '/transactions/agent'*/ },
        { id: 'supervisor',/*label: 'Agent', icon: '/assets/images/icon/agent_icon.svg', path: '/transactions/agent'*/ },
        { id: 'accountant',/*label: 'Agent', icon: '/assets/images/icon/agent_icon.svg', path: '/transactions/agent'*/},
      ],
      badge: 2,
    },
    {
      id: 'transactions',
      label: 'Transactions',
      icon: '/assets/images/icon/transactions_icon.svg',
      path: '/transactions',
      children: [
        { id: 'agent', label: 'Agent', icon: '/assets/images/icon/agent_icon.svg', path: '/transactions/agent' },
        { id: 'supervisor', label: 'Supervisor', icon: '/assets/images/icon/supervisor_icon.svg', path: '/transactions/supervisor' },
        { id: 'accountant', label: 'Accountant', icon: '/assets/images/icon/accountant_icon.svg', path: '/transactions/accountant' },
      ],
    },
  ],
  MANAGEMENT: [
    {
      id: 'employee',
      label: 'Employee',
      icon: '/assets/images/icon/employee_icon.svg',
      path: '/employees',
      children: [
        { id: 'agents', label: 'Agents',icon: '/assets/images/icon/agent_icon.svg',  path: '/employees/agents' },
        { id: 'admin', label: 'Admin', icon: '/assets/images/icon/admin_icon.svg', path: '/employees/admin' },
      ],
    },
    {
      id: 'activity-control',
      label: 'Activity control',
      icon: '/assets/images/icon/activity_control_icon.svg',
      path: '/activity',
      children: [
        { id: 'roles', label: 'Roles and permissions', icon: '/assets/images/icon/roles_icon.svg', path: '/activity/roles' },
        { id: 'approval', label: 'Approval workflow', icon: '/assets/images/icon/approval_icon.svg', path: '/activity/approval' },
      ],
    },
  ],
  SETTINGS: [
    {
      id: 'configurations',
      label: 'Configurations',
      icon: '/assets/images/icon/configuration_icon.svg',
      path: '/configurations',
    },
  ],
};
