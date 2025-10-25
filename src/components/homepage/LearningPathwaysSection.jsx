import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ChevronLeft, 
  ChevronRight,
  Award,
  Star,
  Trophy,
  Medal
} from 'lucide-react';

const CourseCard = ({ image, title, description, progress, level, isStarted }) => {
  const { t } = useTranslation();
  const levelColors = {
    'Beginner': 'bg-green-100 text-green-700 border-green-200',
    'Intermediate': 'bg-blue-100 text-blue-700 border-blue-200',
    'Advanced': 'bg-purple-100 text-purple-700 border-purple-200',
  };
  
  const translatedLevel = t(`learning.levels.${level}`);

  return (
    <Card className="h-[420px] border-2 bg-white hover:shadow-xl hover:scale-[1.02] transition-all duration-300 hover:border-[#004E9A]/30 group overflow-hidden flex flex-col">
      {/* Course Image */}
      <div className="relative h-40 flex-shrink-0 overflow-hidden bg-gradient-to-br from-gray-100 to-blue-50">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Level Badge - Positioned on Image */}
        {level && (
          <div className="absolute top-3 right-3">
            <Badge className={`${levelColors[level]} border font-medium text-xs px-2 py-1 shadow-md`}>
              {translatedLevel}
            </Badge>
          </div>
        )}
      </div>

      <CardContent className="p-5 flex flex-col flex-1">
        {/* Title and Description - Fixed Height */}
        <div className="mb-4 h-[88px] flex flex-col">
          <h3 className="font-bold text-gray-900 mb-2 text-base leading-tight group-hover:text-[#004E9A] transition-colors line-clamp-2 min-h-[44px]" style={{ fontFamily: "'Inter', 'Nunito', sans-serif" }}>
            {title}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 min-h-[40px]">
            {description}
          </p>
        </div>

        {/* Progress Bar - Fixed Height */}
        <div className="mb-4 h-[44px] flex flex-col justify-center">
          {isStarted ? (
            <>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-gray-600">{t('learning.progress')}</span>
                <span className="text-xs font-bold text-[#004E9A]">{progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-[#004E9A] to-[#F5C518] h-2 rounded-full transition-all duration-500 shadow-sm"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </>
          ) : (
            <div className="h-full"></div>
          )}
        </div>

        {/* Action Button */}
        <Button 
          className={`w-full ${isStarted ? 'bg-[#004E9A] hover:bg-[#003d7a]' : 'bg-[#F5C518] hover:bg-[#d4a614] text-gray-900'} text-white font-semibold transition-all duration-300 shadow-md hover:shadow-lg`}
        >
          {isStarted ? t('learning.continueLearning') : t('learning.startCourse')}
        </Button>
      </CardContent>
    </Card>
  );
};

export function LearningPathwaysSection() {
  const { t } = useTranslation();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef(null);

  // Mock course data - replace with actual API data
  const courses = [
    {
      id: 1,
      image: "/assets/Digital literacy.jpg",
      title: t('learning.courses.digitalLiteracy.title'),
      description: t('learning.courses.digitalLiteracy.description'),
      progress: 65,
      level: "Beginner",
      isStarted: true
    },
    {
      id: 2,
      image: "/assets/UnderstandingNewLabourCodes.PNG",
      title: t('learning.courses.labourCodes.title'),
      description: t('learning.courses.labourCodes.description'),
      progress: 30,
      level: "Beginner",
      isStarted: true
    },
    {
      id: 3,
      image: "/assets/Course.jpg",
      title: t('learning.courses.trainerProgram.title'),
      description: t('learning.courses.trainerProgram.description'),
      progress: 0,
      level: "Advanced",
      isStarted: false
    },
    {
      id: 4,
      image: "/assets/Workplace Compliance Awareness.PNG",
      title: t('learning.courses.compliance.title'),
      description: t('learning.courses.compliance.description'),
      progress: 0,
      level: "Intermediate",
      isStarted: false
    },
    {
      id: 5,
      image: "/assets/Course.jpg",
      title: t('learning.courses.certification.title'),
      description: t('learning.courses.certification.description'),
      progress: 45,
      level: "Intermediate",
      isStarted: true
    },
    {
      id: 6,
      image: "/assets/Digital literacy.jpg",
      title: t('learning.courses.leadership.title'),
      description: t('learning.courses.leadership.description'),
      progress: 0,
      level: "Advanced",
      isStarted: false
    },
  ];

  const completedCourses = courses.filter(c => c.progress === 100).length;
  const inProgressCourses = courses.filter(c => c.progress > 0 && c.progress < 100).length;

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350;
      const newScrollLeft = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      return () => container.removeEventListener('scroll', checkScroll);
    }
  }, []);

  return (
    <section className="w-full bg-gradient-to-br from-gray-50 to-blue-50/50 py-8 px-6 rounded-2xl shadow-sm border border-gray-100">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-6">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2" style={{ fontFamily: "'Inter', 'Nunito', sans-serif" }}>
              <span className="text-2xl">📚</span>
              {t('learning.title')}
            </h2>
            <p className="text-sm text-gray-600 max-w-2xl">
              {t('learning.subtitle')}
            </p>
          </div>
          
          {/* Summary Pill */}
          <div className="flex items-center gap-3">
            <div className="bg-white border-2 border-[#004E9A]/20 rounded-full px-4 py-2 shadow-sm">
              <span className="text-sm font-semibold text-[#004E9A]">
                {t('learning.coursesActive', { count: completedCourses + inProgressCourses, total: courses.length })}
              </span>
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                className="h-9 w-9 rounded-full border-2 disabled:opacity-30 hover:bg-[#004E9A] hover:text-white hover:border-[#004E9A] transition-all"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                className="h-9 w-9 rounded-full border-2 disabled:opacity-30 hover:bg-[#004E9A] hover:text-white hover:border-[#004E9A] transition-all"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="max-w-7xl mx-auto relative">
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {courses.map((course) => (
            <div key={course.id} className="flex-shrink-0 w-[320px]">
              <CourseCard {...course} />
            </div>
          ))}
        </div>
      </div>

      {/* Badges & Certificates Section - Compact */}
      <div className="max-w-7xl mx-auto mt-6">
        <div className="bg-gray-50/50 rounded-lg p-4 border border-gray-200/50">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-1.5">
              <Trophy className="h-4 w-4 text-gray-500" />
              <h3 className="text-sm font-semibold text-gray-700" style={{ fontFamily: "'Inter', 'Nunito', sans-serif" }}>
                {t('learning.achievements.title')}
              </h3>
            </div>
            
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {/* Badge 1 - Digital Literacy Master */}
            <div className="bg-white rounded-md p-3 border border-gray-200 hover:border-green-300 hover:bg-green-50/30 transition-all group cursor-pointer">
              <div className="flex flex-col items-center text-center gap-1.5">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <Award className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-gray-800">{t('learning.achievements.badges.digitalMaster')}</p>
                  <p className="text-[9px] text-gray-500">{t('learning.achievements.earned')}</p>
                </div>
              </div>
            </div>

            {/* Badge 2 - Quick Learner */}
            <div className="bg-white rounded-md p-3 border border-gray-200 hover:border-blue-300 hover:bg-blue-50/30 transition-all group cursor-pointer">
              <div className="flex flex-col items-center text-center gap-1.5">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <Star className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-gray-800">{t('learning.achievements.badges.quickLearner')}</p>
                  <p className="text-[9px] text-gray-500">{t('learning.achievements.earned')}</p>
                </div>
              </div>
            </div>

            {/* Certificate - Digital Skills */}
            <div className="bg-white rounded-md p-3 border border-gray-200 hover:border-amber-300 hover:bg-amber-50/30 transition-all group cursor-pointer">
              <div className="flex flex-col items-center text-center gap-1.5">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                  <Medal className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-gray-800">{t('learning.achievements.certificates.labourRights')}</p>
                  <p className="text-[9px] text-amber-600 font-medium">{t('learning.achievements.certificate')}</p>
                </div>
              </div>
            </div>

            {/* Badge 3 - Locked/Coming Soon */}
            <div className="bg-gray-50 rounded-md p-3 border border-dashed border-gray-300 opacity-50 cursor-not-allowed">
              <div className="flex flex-col items-center text-center gap-1.5">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <Trophy className="h-5 w-5 text-gray-400" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-gray-500">{t('learning.achievements.badges.nextLevel')}</p>
                  <p className="text-[9px] text-gray-400">{t('learning.achievements.locked')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Indicator - Compact */}
          <div className="mt-3 pt-3 border-t border-gray-200">
            <div className="flex items-center justify-between text-[10px] text-gray-500 mb-1.5">
              <span>{t('learning.achievements.progress')}</span>
              <span className="font-semibold text-gray-700">3 / 12 {t('learning.achievements.unlocked')}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-gray-400 to-gray-500 h-1.5 rounded-full transition-all duration-500"
                style={{ width: '25%' }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer - Supported by REDEX */}
      <div className="max-w-7xl mx-auto mt-6 flex justify-end">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span>{t('learning.supportedBy')}</span>
          <div className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-full shadow-sm border border-gray-200">
            <div className="w-5 h-5 bg-[#004E9A] rounded-sm flex items-center justify-center text-white font-bold text-[8px]">
              REDEX
            </div>
            <span className="font-semibold text-[#004E9A]">Deutsche Gesellschaft</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LearningPathwaysSection;

