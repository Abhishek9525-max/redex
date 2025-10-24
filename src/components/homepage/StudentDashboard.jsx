import React from 'react';
import { useNavigate } from 'react-router-dom';
import { REDEXBranding } from './REDEXBranding';
import { WelcomeStatsSection } from './WelcomeStatsSection';
import { CalendarEventsSection } from './CalendarEventsSection';
import { AwarenessUpdatesSection } from './AwarenessUpdatesSection';
import { NewCoursesSection } from './NewCoursesSection';
import { GroupsCommunitySection } from './GroupsCommunitySection';
import { QuickActionsSection } from './QuickActionsSection';
import ZoomClassesSection from './ZoomClassesSection';
import { CourseAssessmentInsights } from './CourseAssessmentInsights';

export function StudentDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* REDEX Branding Header */}
      <REDEXBranding />
      
      {/* Top Section - Two Column Layout */}
      <div className="max-w-7xl mx-auto px-6 pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Left Side - Welcome & Stats */}
          <div className="space-y-6">
            <WelcomeStatsSection />
          </div>
          
          {/* Right Side - Calendar & Events */}
          <div className="space-y-4 lg:sticky lg:top-6 lg:self-start">
            <CalendarEventsSection />
          </div>
        </div>

        {/* Awareness & Updates Timeline Section */}
        <div className="mb-8">
          <AwarenessUpdatesSection />
        </div>

        {/* My Courses Section */}
        <div className="mb-8">
          <NewCoursesSection />
        </div>

        {/* Additional Sections Below */}
        <div className="space-y-8">
          {/* <ZoomClassesSection /> */}
          
          {/* Course & Assessment Insights */}
          {/* <CourseAssessmentInsights /> */}
          
          {/* Groups & Community Section */}
          {/* <GroupsCommunitySection /> */}

          {/* Quick Actions & Next Steps - Final Section */}
          <QuickActionsSection />
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;