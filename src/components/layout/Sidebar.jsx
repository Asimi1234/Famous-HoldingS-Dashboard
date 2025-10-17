import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { cn } from '../../utils/cn';
import { NAV_ITEMS } from '../../utils/constants';
import SidebarItem from './SidebarItem';
import Logo from '../../../public/assets/images/logo_big.png';

const Sidebar = () => {
  const location = useLocation();
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (sectionId) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b border-gray-200">
        <img 
          src={Logo}
          alt="Company Logo" 
          className="h-8 w-auto"
        />
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4">
        {/* Business Section */}
        <div className="px-3 mb-6">
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-3">
            Business
          </div>
          {NAV_ITEMS.BUSINESS.map((item) => (
            <SidebarItem
              key={item.id}
              item={item}
              isOpen={openSections[item.id]}
              onToggle={() => toggleSection(item.id)}
              currentPath={location.pathname}
            />
          ))}
        </div>

        {/* Management Section */}
        <div className="px-3 mb-6">
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-3">
            Management
          </div>
          {NAV_ITEMS.MANAGEMENT.map((item) => (
            <SidebarItem
              key={item.id}
              item={item}
              isOpen={openSections[item.id]}
              onToggle={() => toggleSection(item.id)}
              currentPath={location.pathname}
            />
          ))}
        </div>

        {/* Settings Section */}
        <div className="px-3">
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-3">
            Settings
          </div>
          {NAV_ITEMS.SETTINGS.map((item) => (
            <SidebarItem
              key={item.id}
              item={item}
              currentPath={location.pathname}
            />
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;