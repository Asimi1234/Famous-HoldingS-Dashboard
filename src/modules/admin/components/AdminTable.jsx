import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { Eye, Edit, Trash2, UserCheck, UserX } from "lucide-react";
import Avatar from "../../../components/ui/Avatar";
import Badge from "../../../components/ui/Badge";
import Dropdown from "../../../components/ui/Dropdown";
import Pagination from "../../../components/common/Pagination";
import { formatDate, formatPhoneNumber } from "../../../utils/formatters";
import { updateAdmin, deleteAdmin } from "../../../data";
import { STATUS } from "../../../utils/constants";

const AdminTable = ({ admins, onDataChange }) => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Calculate pagination
  const totalItems = admins.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedAdmins = admins.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (newItemsPerPage) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1); // Reset to first page
  };

  const handleRowClick = (adminId) => {
    navigate(`/employees/admin/${adminId}`);
  };

  const handleToggleStatus = (admin) => {
    const newStatus =
      admin.status === STATUS.ACTIVE ? STATUS.DEACTIVATED : STATUS.ACTIVE;
    updateAdmin(admin.id, { status: newStatus });

    if (onDataChange) {
      onDataChange();
    }

    window.location.reload();
  };

  const handleDelete = (adminId) => {
    if (window.confirm("Are you sure you want to delete this admin?")) {
      deleteAdmin(adminId);
      window.location.reload();
    }
  };

  const getDropdownItems = (admin) => [
    {
      label: "View Details",
      icon: <Eye className="w-4 h-4" />,
      onClick: () => navigate(`/employees/admin/${admin.id}`),
    },
    {
      label: "Edit",
      icon: <Edit className="w-4 h-4" />,
      onClick: () => navigate(`/employees/admin/edit/${admin.id}`),
    },
    {
      label: admin.status === STATUS.ACTIVE ? "Deactivate" : "Activate",
      icon:
        admin.status === STATUS.ACTIVE ? (
          <UserX className="w-4 h-4" />
        ) : (
          <UserCheck className="w-4 h-4" />
        ),
      onClick: () => handleToggleStatus(admin),
      className:
        admin.status === STATUS.ACTIVE
          ? "text-orange-600 hover:bg-orange-50"
          : "text-green-600 hover:bg-green-50",
    },
    {
      label: "Delete",
      icon: <Trash2 className="w-4 h-4" />,
      onClick: () => handleDelete(admin.id),
      className: "text-red-600 hover:bg-red-50",
    },
  ];

  if (admins.length === 0) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
        <p className="text-gray-500">No admins found matching your filters.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Admin
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Phone number
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Designation & role
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Onboarding date
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {paginatedAdmins.map((admin) => (
              <tr
                key={admin.id}
                onClick={() => handleRowClick(admin.id)}
                className="hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <Avatar
                      firstName={admin.firstName}
                      lastName={admin.lastName}
                      src={admin.avatar}
                      size="md"
                    />
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {admin.firstName} {admin.lastName}
                      </div>
                      <div className="text-sm text-gray-500">{admin.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {formatPhoneNumber(admin.phoneNumber)}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {admin.designation}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {formatDate(admin.onboardingDate)}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Badge status={admin.status}>
                    {admin.status === "active" ? "Active" : "Deactivated"}
                  </Badge>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <div onClick={(e) => e.stopPropagation()}>
                    <Dropdown items={getDropdownItems(admin)} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
          onItemsPerPageChange={handleItemsPerPageChange}
        />
      )}
    </div>
  );
};

AdminTable.propTypes = {
  admins: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phoneNumber: PropTypes.string.isRequired,
      designation: PropTypes.string.isRequired,
      onboardingDate: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      avatar: PropTypes.string,
    })
  ).isRequired,
  onDataChange: PropTypes.func,
};

export default AdminTable;
