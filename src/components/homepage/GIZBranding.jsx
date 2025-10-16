import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield } from 'lucide-react';

export function GIZBranding() {
  const navigate = useNavigate();
  const [isAdminMode, setIsAdminMode] = useState(false);

  const handleToggle = () => {
    const newMode = !isAdminMode;
    setIsAdminMode(newMode);
    
    if (newMode) {
      navigate('/admin-portal/overview');
    } else {
      navigate('/');
    }
  };

  return (
    <div className="flex items-center justify-end gap-4 mb-4 px-6 pt-6">
      {/* GIZ Branding */}
      <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200">
        {/* GIZ Logo placeholder - replace with actual logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#004E9A] rounded flex items-center justify-center text-white font-bold text-xs">
            GIZ
          </div>
          <div className="border-l border-gray-300 h-6 mx-1"></div>
          <div className="text-xs">
            <div className="font-bold text-[#004E9A]" style={{ fontFamily: "'Inter', 'Nunito', sans-serif" }}>
              Labour Reform &
            </div>
            <div className="text-gray-600 font-medium">
              Digital Learning Initiative
            </div>
          </div>
        </div>
      </div>

      {/* Admin Toggle - Moved to Right */}
      <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-lg shadow-sm border border-gray-200 hover:border-blue-300 transition-all">
        <Shield className="h-4 w-4 text-blue-600" />
        <span className="text-sm font-semibold text-gray-700">Admin Portal</span>
        <button
          onClick={handleToggle}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
            isAdminMode ? 'bg-blue-600' : 'bg-gray-300'
          }`}
          role="switch"
          aria-checked={isAdminMode}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              isAdminMode ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </div>
    </div>
  );
}

export default GIZBranding;

