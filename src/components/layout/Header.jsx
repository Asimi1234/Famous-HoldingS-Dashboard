import { Bell, ArrowRightLeft } from 'lucide-react';
import { cn } from '../../utils/cn';
import UserMenu from './UserMenu';

const Header = () => {
  const notificationCount = 1;

  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      {/* Left side - can add breadcrumbs or page title here if needed */}
      <div></div>

      {/* Right side - Actions */}
      <div className="flex items-center gap-4">
        {/* Switch Portal Button */}
        <button className="flex items-center gap-2 px-4 py-2 border border-[#1A8AF6] rounded-lg text-sm text-[#1A8AF6] font-medium hover:bg-gray-50 transition-colors">
          <ArrowRightLeft className="w-4 h-4" />
          <span>Switch portal</span>
        </button>

        {/* Notifications */}
        <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <Bell className="w-5 h-5 text-gray-600" />
          {notificationCount > 0 && (
            <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
              {notificationCount}
            </span>
          )}
        </button>

        {/* User Menu */}
        <UserMenu />
      </div>
    </header>
  );
};

export default Header;