import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Shield, ArrowLeft } from 'lucide-react';
import { LanguageSelector } from '../ui/LanguageSelector';

export function AdminPortalHeader() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [isAdminMode, setIsAdminMode] = useState(true);
  const isMainAdminPortal = location.pathname === '/admin-portal';

  const handleToggle = () => {
    const newMode = !isAdminMode;
    setIsAdminMode(newMode);
    
    if (newMode) {
      navigate('/admin-portal/overview');
    } else {
      navigate('/');
    }
  };

  const handleBack = () => {
    navigate('/admin-portal/overview');
  };

  return (
    <div className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Left - Back Button (only show on sub-pages) */}
          

          {/* Right - Branding and Toggle */}
          <div className="flex items-center gap-4 ml-auto">
            {/* REDEX Branding */}
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#004E9A] rounded flex items-center justify-center text-white font-bold text-xs">
                  REDEX
                </div>
                <div className="border-l border-gray-300 h-6 mx-1"></div>
                <div className="text-xs">
                  <div className="font-bold text-[#004E9A]" style={{ fontFamily: "'Inter', 'Nunito', sans-serif" }}>
                    {t('header.labourReform')}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {t('header.digitalLearningInitiative')}
                  </div>
                </div>
              </div>
            </div>

            {/* Language Selector */}
            <LanguageSelector />

            {/* Admin Toggle */}
            <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-lg shadow-sm border border-gray-200 hover:border-blue-300 transition-all">
              <Shield className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-semibold text-gray-700">{t('header.adminPortal')}</span>
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
        </div>
      </div>
    </div>
  );
}

export default AdminPortalHeader;

