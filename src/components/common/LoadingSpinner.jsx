import PropTypes from 'prop-types';
import { Loader2 } from 'lucide-react';
import { cn } from '../../utils/cn';

const LoadingSpinner = ({ size = 'md', className }) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <div className="flex items-center justify-center p-4">
      <Loader2 
        className={cn(
          'animate-spin text-blue-500',
          sizes[size],
          className
        )} 
      />
    </div>
  );
};

LoadingSpinner.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
};

export default LoadingSpinner;