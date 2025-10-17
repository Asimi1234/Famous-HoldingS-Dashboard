/**
 * Route paths configuration
 */
export const ROUTES = {
  HOME: '/',
  
  // Admin routes
  ADMIN_LIST: '/employees/admin',
  ADMIN_DETAILS: '/employees/admin/:id',
  ADMIN_CREATE: '/employees/admin/create',
  ADMIN_EDIT: '/employees/admin/edit/:id',
  
  // Agents routes
  AGENTS_LIST: '/employees/agents',
  
  // Customers routes
  CUSTOMERS_LIST: '/customers',
  
  // Loans routes
  LOANS_LIST: '/loans',
  
  // Transactions routes
  TRANSACTIONS_LIST: '/transactions',
  
  // Settings routes
  CONFIGURATIONS: '/configurations',
};