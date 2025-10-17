/**
 * Mock transactions data for development
 */
export const mockTransactions = [
  {
    id: '1',
    type: 'deposit',
    amount: 50000,
    date: '2024-10-10T14:30:00',
    status: 'completed',
  },
  {
    id: '2',
    type: 'withdrawal',
    amount: 25000,
    date: '2024-10-09T10:15:00',
    status: 'completed',
  },
  {
    id: '3',
    type: 'transfer',
    amount: 100000,
    date: '2024-10-08T16:45:00',
    status: 'pending',
  },
];

/**
 * Get statistics for transactions data
 */
export const getTransactionStats = () => {
  return {
    total: mockTransactions.length,
    completed: mockTransactions.filter(t => t.status === 'completed').length,
    pending: mockTransactions.filter(t => t.status === 'pending').length,
  };
};