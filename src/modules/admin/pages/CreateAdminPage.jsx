import { useNavigate } from 'react-router-dom';
import PageHeader from '../../../components/common/PageHeader';
import AdminForm from '../components/AdminForm';
import { addAdmin } from '../../../data';

const CreateAdminPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (formData) => {
    // Add the new admin to localStorage
    const newAdmin = addAdmin(formData);
    
    console.log('Admin created:', newAdmin);
    
    // Show success message
    alert(`Admin "${formData.firstName} ${formData.lastName}" created successfully!`);
    
    // Navigate back to admin list
    navigate('/employees/admin');
  };

  const handleCancel = () => {
    navigate('/employees/admin');
  };

  return (
    <div>
      <PageHeader title="Create/edit an staff" showBackButton />
      <AdminForm onSubmit={handleSubmit} onCancel={handleCancel} />
    </div>
  );
};

export default CreateAdminPage;