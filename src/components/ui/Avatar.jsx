import PropTypes from 'prop-types';
import { cn } from '../../utils/cn';
import { getInitials } from '../../utils/formatters';

const Avatar = ({ 
  firstName,
  lastName,
  src,
  size = 'md',
  className 
}) => {
  const sizes = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
    xl: 'w-16 h-16 text-xl',
  };
  
  const initials = getInitials(firstName, lastName);
  
  return (
    <div
      className={cn(
        'inline-flex items-center justify-center rounded-full bg-blue-500 text-white font-medium flex-shrink-0',
        sizes[size],
        className
      )}
    >
      {src ? (
        <img 
          src={src} 
          alt={`${firstName} ${lastName}`} 
          className="w-full h-full rounded-full object-cover"
        />
      ) : (
        <span>{initials}</span>
      )}
    </div>
  );
};

Avatar.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  src: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  className: PropTypes.string,
};

export default Avatar;