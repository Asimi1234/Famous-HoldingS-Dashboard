/**
 * Mock loans data for development
 */
export const mockLoans = [
  {
    id: '1',
    customerName: 'Alice Williams',
    loanAmount: 500000,
    status: 'active',
    dueDate: '2024-12-31',
  },
  {
    id: '2',
    customerName: 'Bob Johnson',
    loanAmount: 750000,
    status: 'pending',
    dueDate: '2024-11-30',
  },
];

/**
 * Get statistics for loans data
 */
export const getLoanStats = () => {
  return {
    total: mockLoans.length,
    active: mockLoans.filter(loan => loan.status === 'active').length,
    pending: mockLoans.filter(loan => loan.status === 'pending').length,
  };
};