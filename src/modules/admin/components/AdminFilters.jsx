import PropTypes from 'prop-types';
import { Calendar, Filter, Plus, Edit, UserX } from 'lucide-react';
import SearchInput from '../../../components/common/SearchInput';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';
import Dropdown from '../../../components/ui/Dropdown';
import { ROLE_FILTER_OPTIONS, DATE_FILTER_OPTIONS } from '../../../utils/constants';
import { useNavigate } from 'react-router-dom';

const AdminFilters = ({ 
  searchQuery, 
  onSearchChange, 
  roleFilter, 
  onRoleChange,
  dateFilter,
  onDateChange 
}) => {
  const navigate = useNavigate();

  const optionsMenuItems = [
    {
      label: 'Add a new Admin',
      description: 'Click here to add a new admin',
      icon: <Plus className="w-5 h-5 text-blue-500" />,
      onClick: () => navigate('/employees/admin/create'),
    },
    {
      label: "Edit Admin's details",
      description: 'Click here to edit admin details',
      icon: <Edit className="w-5 h-5 text-blue-500" />,
      onClick: () => console.log('Edit admins'),
    },
    {
      label: "Deactivate Admin's account",
      description: 'Click here to deactivate employees account',
      icon: <UserX className="w-5 h-5 text-red-500" />,
      onClick: () => console.log('Deactivate admins'),
    },
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-3 mb-4">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
        {/* Search */}
        <div className="md:col-span-4">
          <SearchInput
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Text"
          />
        </div>

        {/* Role Filter */}
        <div className="md:col-span-3">
          <Select
            options={ROLE_FILTER_OPTIONS}
            value={roleFilter}
            onChange={(e) => onRoleChange(e.target.value)}
            placeholder="All admin"
          />
        </div>

        {/* Date Filter */}
        <div className="md:col-span-3">
          <Select
            options={DATE_FILTER_OPTIONS}
            value={dateFilter}
            onChange={(e) => onDateChange(e.target.value)}
            placeholder="From: Any"
          />
        </div>

        {/* Options Dropdown */}
        <div className="md:col-span-2">
          <Dropdown
            trigger={
              <Button variant="primary" className="w-full">
                Options
              </Button>
            }
            items={optionsMenuItems}
          />
        </div>
      </div>
    </div>
  );
};

AdminFilters.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  roleFilter: PropTypes.string.isRequired,
  onRoleChange: PropTypes.func.isRequired,
  dateFilter: PropTypes.string.isRequired,
  onDateChange: PropTypes.func.isRequired,
};

export default AdminFilters;