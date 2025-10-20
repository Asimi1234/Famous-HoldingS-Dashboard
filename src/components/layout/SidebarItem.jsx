import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ChevronUp, ChevronRight } from "lucide-react";
import { cn } from "../../utils/cn";

const SidebarItem = ({ item, isOpen, onToggle, currentPath }) => {
  const isActive = currentPath === item.path;
  const hasChildren = item.children && item.children.length > 0;

  if (hasChildren) {
    return (
      <div className="mb-1">
        {/* Parent item button */}
        <button
          onClick={onToggle}
          className={cn(
            "w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors",
            isOpen
              ? "bg-gray-100 text-[#8C8C8C]"
              : "text-[#8C8C8C] hover:bg-gray-50"
          )}
        >
          {/* Left side — icon + label */}
          <div className="flex items-center gap-3">
            <img src={item.icon} alt={item.label} className="w-5 h-5" />
            <span>{item.label}</span>
          </div>

          {/* Right side — arrow + badge */}
          <div className="flex items-center gap-2">
            {isOpen ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
            {item.badge && (
              <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center ">
                {item.badge}
              </span>
            )}
          </div>
        </button>

        {/* Child links */}
        {isOpen && (
          <div className="ml-8 mt-1 space-y-1">
            {item.children.map((child) => {
              const isChildActive = currentPath === child.path;
              return (
                <Link
                  key={child.id}
                  to={child.path}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
                    isChildActive
                      ? "bg-blue-50 text-blue-600 font-medium"
                      : "text-[#8C8C8C] hover:bg-gray-50"
                  )}
                >
                  {/* Child icon */}
                  {child.icon && (
                    <img
                      src={child.icon}
                      alt={child.label}
                      className="w-4 h-4 opacity-80"
                    />
                  )}
                  <span>{child.label}</span>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  // Regular item (no children)
  return (
    <Link
      to={item.path}
      className={cn(
        "flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors mb-1",
        isActive
          ? "bg-blue-50 text-blue-600 font-medium"
          : "text-[#8C8C8C] hover:bg-gray-50"
      )}
    >
      <div className="flex items-center gap-3">
        {/* Parent icon */}
        <img src={item.icon} alt={item.label} className="w-5 h-5" />
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
    icon: PropTypes.string.isRequired,
    path: PropTypes.string,
    badge: PropTypes.number,
    children: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        icon: PropTypes.string,
        path: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
  isOpen: PropTypes.bool,
  onToggle: PropTypes.func,
  currentPath: PropTypes.string.isRequired,
};

export default SidebarItem;
