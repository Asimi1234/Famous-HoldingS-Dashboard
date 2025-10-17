import PropTypes from 'prop-types';
import { FileX } from 'lucide-react';
import Button from '../ui/Button';

const EmptyState = ({ 
  title = 'No data available',
  description = 'There is no data for this section yet. Kindly refresh this section to see if there are new updated information',
  onRefresh,
  icon: Icon = FileX 
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
        <Icon className="w-8 h-8 text-gray-400" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 text-center max-w-md mb-6">{description}</p>
      {onRefresh && (
        <Button variant="outline" onClick={onRefresh}>
          Refresh page
        </Button>
      )}
    </div>
  );
};

EmptyState.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  onRefresh: PropTypes.func,
  icon: PropTypes.elementType,
};

export default EmptyState;