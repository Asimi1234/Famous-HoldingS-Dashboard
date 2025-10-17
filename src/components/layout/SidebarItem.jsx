import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as Icons from 'lucide-react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { cn } from '../../utils/cn';

const SidebarItem = ({ item, isOpen, onToggle, currentPath }) => {
  const Icon = Icons[item.icon];
  const isActive = currentPath === item.path;
  const hasChildren = item.children && item.children.length > 0;

  if (hasChildren) {
    return (
      <div className="mb-1">
        <button
          onClick={onToggle}
          className={cn(
            'w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors',
            isOpen ? 'bg-gray-100 text-gray-900' : 'text-gray-700 hover:bg-gray-50'
          )}
        >
          <div className="flex items-center gap-3">
            {Icon && <Icon className="w-5 h-5" />}
            <span>{item.label}</span>
            {item.badge && (
              <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center ml-2">
                {item.badge}
              </span>
            )}
          </div>
          {isOpen ? (
            <ChevronDown className="w-4 h-4" />
          ) : (
            <ChevronRight className="w-4 h-4" />
          )}
        </button>

        {/* Children */}
        {isOpen && (
          <div className="ml-8 mt-1 space-y-1">
            {item.children.map((child) => {
              const isChildActive = currentPath === child.path;
              return (
                <Link
                  key={child.id}
                  to={child.path}
                  className={cn(
                    'block px-3 py-2 rounded-lg text-sm transition-colors',
                    isChildActive
                      ? 'bg-blue-50 text-blue-600 font-medium'
                      : 'text-gray-700 hover:bg-gray-50'
                  )}
                >
                  {child.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  // Items without children - regular link
  return (
    <Link
      to={item.path}
      className={cn(
        'flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors mb-1',
        isActive
          ? 'bg-blue-50 text-blue-600 font-medium'
          : 'text-gray-700 hover:bg-gray-50'
      )}
    >
      <div className="flex items-center gap-3">
        {Icon && <Icon className="w-5 h-5" />}
        <span>{item.label}</span>
      </div>
      {item.badge && (
        <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {item.badge}
        </span>
      )}
    </Link>
  );
};

SidebarItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    icon: PropTypes.string,
    path: PropTypes.string,
    badge: PropTypes.number,
    children: PropTypes.array,
  }).isRequired,
  isOpen: PropTypes.bool,
  onToggle: PropTypes.func,
  currentPath: PropTypes.string.isRequired,
};

export default SidebarItem;