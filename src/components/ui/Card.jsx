import PropTypes from 'prop-types';
import { cn } from '../../utils/cn';

const Card = ({ 
  children,
  className,
  padding = true,
  ...props 
}) => {
  return (
    <div
      className={cn(
        'bg-white rounded-lg border border-gray-200 shadow-sm',
        padding && 'p-6',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  padding: PropTypes.bool,
};

export default Card;