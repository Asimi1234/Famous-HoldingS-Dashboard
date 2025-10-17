import { Outlet } from 'react-router-dom';
import AppLayout from '../components/layout/AppLayout';

const DashboardLayout = () => {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
};

export default DashboardLayout;