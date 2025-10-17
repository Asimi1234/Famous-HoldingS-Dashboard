import PropTypes from 'prop-types';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';

const PageHeader = ({ 
  title, 
  showBackButton = false, 
  action,
  actionLabel,
  onAction 
}) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-4">
        {showBackButton && (
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
        )}
        <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
      </div>

      {action || (onAction && (
        <Button onClick={onAction}>
          {actionLabel}
        </Button>
      ))}
    </div>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  showBackButton: PropTypes.bool,
  action: PropTypes.node,
  actionLabel: PropTypes.string,
  onAction: PropTypes.func,
};

export default PageHeader;