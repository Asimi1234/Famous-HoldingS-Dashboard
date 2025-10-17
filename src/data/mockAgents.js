import { STATUS, ROLES } from '../utils/constants';

/**
 * Mock agents data for development
 */
export const mockAgents = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Agent',
    email: 'john.agent@example.com',
    phoneNumber: '+2348098765432',
    designation: 'Field Agent',
    onboardingDate: '2024-09-01T10:00:00',
    status: STATUS.ACTIVE,
    avatar: null,
  },
  {
    id: '2',
    firstName: 'Mary',
    lastName: 'Johnson',
    email: 'mary.j@example.com',
    phoneNumber: '+2348098765433',
    designation: 'Sales Agent',
    onboardingDate: '2024-08-15T11:30:00',
    status: STATUS.ACTIVE,
    avatar: null,
  },
  {
    id: '3',
    firstName: 'Peter',
    lastName: 'Brown',
    email: 'peter.b@example.com',
    phoneNumber: '+2348098765434',
    designation: 'Customer Agent',
    onboardingDate: '2024-07-20T09:15:00',
    status: STATUS.DEACTIVATED,
    avatar: null,
  },
];

/**
 * Get statistics for agents data
 */
export const getAgentStats = () => {
  const total = mockAgents.length;
  const active = mockAgents.filter(agent => agent.status === STATUS.ACTIVE).length;
  const deactivated = mockAgents.filter(agent => agent.status === STATUS.DEACTIVATED).length;

  return {
    total,
    active,
    deactivated,
  };
};