import { useParams, useNavigate } from 'react-router-dom';
import { getAdminById } from '../../../data';
import { ArrowLeft } from 'lucide-react';
import Card from '../../../components/ui/Card';
import Avatar from '../../../components/ui/Avatar';
import Badge from '../../../components/ui/Badge';
import Button from '../../../components/ui/Button';
import { formatDate, formatPhoneNumber } from '../../../utils/formatters';

const AdminDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const admin = getAdminById(id);

  if (!admin) {
    return (
      <div>
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => navigate('/employees/admin')}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <h1 className="text-2xl font-bold text-gray-900">Admin not found</h1>
        </div>
        <Card>
          <p className="text-center text-gray-500 py-8">
            The admin you are looking for does not exist.
          </p>
        </Card>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/employees/admin')}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <h1 className="text-xl font-semibold text-gray-900">Staff's details</h1>
        </div>
        <Button onClick={() => navigate(`/employees/admin/edit/${id}`)}>
          Option
        </Button>
      </div>

      {/* Details Card */}
      <Card>
        <div className="flex items-start gap-6">
          {/* Avatar */}
          <Avatar
            firstName={admin.firstName}
            lastName={admin.lastName}
            src={admin.avatar}
            size="xl"
          />

          {/* Details Grid */}
          <div className="flex-1 grid grid-cols-2 gap-x-12 gap-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">Name:</label>
              <p className="text-base font-medium text-gray-900">
                {admin.firstName} {admin.lastName}
              </p>
            </div>

            {/* Designation & role */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Designation & role
              </label>
              <p className="text-base font-medium text-gray-900">
                {admin.designation}
              </p>
            </div>

            {/* Phone number */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Phone number:
              </label>
              <p className="text-base font-medium text-gray-900">
                {formatPhoneNumber(admin.phoneNumber)}
              </p>
            </div>

            {/* Employee status */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Employee status:
              </label>
              <div className="mt-1">
                <Badge status={admin.status}>
                  {admin.status === 'active' ? 'Active' : 'Deactivated'}
                </Badge>
              </div>
            </div>

            {/* Email address */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Email address:
              </label>
              <p className="text-base font-medium text-gray-900">{admin.email}</p>
            </div>

            {/* Onboarding date */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Onboarding-date:
              </label>
              <p className="text-base font-medium text-gray-900">
                {formatDate(admin.onboardingDate)}
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AdminDetailsPage;