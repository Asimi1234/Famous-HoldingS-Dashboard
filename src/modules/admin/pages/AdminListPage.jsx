import { useState, useMemo, useEffect } from 'react';
import { getAdmins, filterAdmins } from '../../../data';
import AdminStats from '../components/AdminStats';
import AdminFilters from '../components/AdminFilters';
import AdminTable from '../components/AdminTable';

const AdminListPage = () => {
  const [admins, setAdmins] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('any');

  // Load admins from localStorage on mount
  useEffect(() => {
    setAdmins(getAdmins());
  }, []);

  // Reload admins when navigating back to this page
  useEffect(() => {
    const handleFocus = () => {
      setAdmins(getAdmins());
    };
    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, []);

  const filteredAdmins = useMemo(() => {
    return filterAdmins(admins, {
      search: searchQuery,
      status: roleFilter,
      date: dateFilter,
    });
  }, [admins, searchQuery, roleFilter, dateFilter]);

  return (
    <div>
      <AdminStats />
      <AdminFilters
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        roleFilter={roleFilter}
        onRoleChange={setRoleFilter}
        dateFilter={dateFilter}
        onDateChange={setDateFilter}
      />
      <AdminTable admins={filteredAdmins} />
    </div>
  );
};

export default AdminListPage;