import { Routes, Route, Navigate } from 'react-router-dom';
import { ROUTES } from './routesConfig';
import AppLayout from '../components/layout/AppLayout';

// Admin pages
import { 
  AdminListPage, 
  AdminDetailsPage, 
  CreateAdminPage 
} from '../modules/admin';

// Customers page
import { CustomersPage } from '../modules/customers';

const AppRoutes = () => {
  return (
    <Routes>
      {/* All routes wrapped in AppLayout */}
      <Route path="/" element={<AppLayout />}>
        {/* Redirect root to admin list */}
        <Route index element={<Navigate to={ROUTES.ADMIN_LIST} replace />} />
        
        {/* Admin routes */}
        <Route path={ROUTES.ADMIN_LIST} element={<AdminListPage />} />
        <Route path={ROUTES.ADMIN_DETAILS} element={<AdminDetailsPage />} />
        <Route path={ROUTES.ADMIN_CREATE} element={<CreateAdminPage />} />
        <Route path={ROUTES.ADMIN_EDIT} element={<CreateAdminPage />} />
        
        {/* Customers route - shows empty state */}
        <Route path={ROUTES.CUSTOMERS_LIST} element={<CustomersPage />} />
        
        {/* Transactions routes */}
        <Route path="transactions" element={<PlaceholderPage title="Transactions" />} />
        <Route path="transactions/agent" element={<PlaceholderPage title="Agent Transactions" />} />
        <Route path="transactions/supervisor" element={<PlaceholderPage title="Supervisor Transactions" />} />
        <Route path="transactions/accountant" element={<PlaceholderPage title="Accountant Transactions" />} />
        
        {/* Employee routes */}
        <Route path="employees" element={<PlaceholderPage title="Employees" />} />
        <Route path="employees/agents" element={<PlaceholderPage title="Agents" />} />
        
        {/* Activity control routes */}
        <Route path="activity" element={<PlaceholderPage title="Activity Control" />} />
        <Route path="activity/roles" element={<PlaceholderPage title="Roles and Permissions" />} />
        <Route path="activity/approval" element={<PlaceholderPage title="Approval Workflow" />} />
        
        {/* Loans route */}
        <Route path={ROUTES.LOANS_LIST} element={<PlaceholderPage title="Loans" />} />
        
        {/* Configurations route */}
        <Route path={ROUTES.CONFIGURATIONS} element={<PlaceholderPage title="Configurations" />} />
      </Route>
      
      {/* 404 route - OUTSIDE AppLayout */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

// Placeholder component for routes not yet implemented
const PlaceholderPage = ({ title }) => {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
        <p className="text-gray-600">This page is under construction.</p>
      </div>
    </div>
  );
};

// 404 Page - No layout
const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page not found</p>
        <a href="/" className="text-blue-600 hover:text-blue-700 underline">
          Go back home
        </a>
      </div>
    </div>
  );
};

export default AppRoutes;