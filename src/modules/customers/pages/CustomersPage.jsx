import EmptyState from '../../../components/common/EmptyState';
import { Users } from 'lucide-react';

const CustomersPage = () => {
  const handleRefresh = () => {
    console.log('Refreshing...');
    // Add refresh logic here
  };

  return (
    <div>
      {/* Stats cards showing 0 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <p className="text-sm text-gray-600 mb-2">All customers</p>
          <p className="text-3xl font-bold text-gray-900">0</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <p className="text-sm text-gray-600 mb-2">Active customers</p>
          <p className="text-3xl font-bold text-gray-900">0</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <p className="text-sm text-gray-600 mb-2">Inactive customers</p>
          <p className="text-3xl font-bold text-gray-900">0</p>
        </div>
      </div>

      {/* Filters (similar to admin) */}
      <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-4">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              disabled
            />
          </div>
          <div className="md:col-span-3">
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg" disabled>
              <option>All customers</option>
            </select>
          </div>
          <div className="md:col-span-3">
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg" disabled>
              <option>From: Any</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg" disabled>
              Options
            </button>
          </div>
        </div>
      </div>

      {/* Empty State */}
      <div className="bg-white rounded-lg border border-gray-200">
        <EmptyState
          icon={Users}
          title="No data available"
          description="There is no data for this section yet. Kindly refresh this section to see if there are new updated information"
          onRefresh={handleRefresh}
        />
      </div>
    </div>
  );
};

export default CustomersPage;