import { getAdminStats } from '../../../data';
import StatsCard from '../../../components/common/StatsCard';

const AdminStats = () => {
  const stats = getAdminStats();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      <StatsCard title="All admin" value={stats.total} />
      <StatsCard title="Active admin" value={stats.active} />
      <StatsCard title="Deactivated admin" value={stats.deactivated} />
    </div>
  );
};

export default AdminStats;