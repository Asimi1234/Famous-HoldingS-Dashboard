import PropTypes from 'prop-types';
import { cn } from '../../utils/cn';
import { STATUS, STATUS_COLORS } from '../../utils/constants';

const Badge = ({ 
  status,
  children,
  className 
}) => {
  const colors = STATUS_COLORS[status] || STATUS_COLORS[STATUS.ACTIVE];
  
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium',
        colors.bg,
        colors.text,
        className
      )}
    >
      <span className={cn('w-1.5 h-1.5 rounded-full', colors.dot)} />
      {children || status}
    </span>
  );
};

Badge.propTypes = {
  status: PropTypes.oneOf([STATUS.ACTIVE, STATUS.DEACTIVATED]).isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Badge;