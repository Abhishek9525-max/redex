import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Play, ArrowRight, Info, ChevronLeft, ChevronRight } from 'lucide-react';

const CourseCard = ({ title, description, progress, level, isStarted, difficulty }) => {
  const getDifficultyColor = (level) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-100 text-green-700';
      case 'Intermediate':
        return 'bg-blue-100 text-blue-700';
      case 'Advanced':
        return 'bg-purple-100 text-purple-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <Card className="w-full max-w-sm bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        {/* Header with icon and difficulty badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <BookOpen className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <span className="text-blue-500 text-sm font-medium">Course</span>
              <span className="text-gray-900 text-sm font-bold ml-1">Learning</span>
            </div>
          </div>
          {difficulty && (
            <Badge className={`${getDifficultyColor(difficulty)} text-xs px-2 py-1 rounded-full`}>
              {difficulty}
            </Badge>
          )}
        </div>

        {/* Course title */}
        <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
        
        {/* Course description */}
        <p className="text-sm text-gray-600 mb-4">{description}</p>

        {/* Progress section */}
        {isStarted ? (
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">Progress</span>
              <span className="text-sm font-bold text-blue-600">{progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        ) : (
          <div className="mb-4 flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-600">Ready to start</span>
          </div>
        )}

        {/* Action button */}
        <Button 
          className={`w-full rounded-lg ${
            isStarted 
              ? 'bg-blue-500 hover:bg-blue-600 text-white' 
              : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}
        >
          {isStarted ? (
            <>
              <Play className="h-4 w-4 mr-2" />
              Continue Learning
            </>
          ) : (
            <>
              <ArrowRight className="h-4 w-4 mr-2" />
              Start Learning
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

export function NewCoursesSection() {
  // Mock course data matching the image
  const courses = [
    {
      id: 1,
      title: "Course 1",
      description: "Basic course description and learning objectives",
      progress: 65,
      difficulty: "Beginner",
      isStarted: true
    },
    {
      id: 2,
      title: "Course 2", 
      description: "Intermediate course content and skills development",
      progress: 30,
      difficulty: "Intermediate",
      isStarted: true
    },
    {
      id: 3,
      title: "Course 3",
      description: "Advanced training program",
      progress: 0,
      difficulty: null,
      isStarted: false
    }
  ];

  return (
    <section className="w-full bg-gray-50 py-8 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="flex flex-col">
                <div className="w-6 h-2 bg-orange-400 rounded mb-1"></div>
                <div className="w-6 h-2 bg-green-400 rounded mb-1"></div>
                <div className="w-6 h-2 bg-blue-400 rounded"></div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">This Section Shows Courses</h2>
                <p className="text-sm text-gray-600 mt-1">
                  This section shows courses - all learning content and educational materials are here
                </p>
              </div>
            </div>
            <Info className="h-5 w-5 text-gray-400" />
          </div>
          
          {/* Navigation controls */}
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 px-3 py-1 rounded-full">
              3 / 6 Active
            </Badge>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="w-8 h-8 rounded-full border-gray-300">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="w-8 h-8 rounded-full border-gray-300">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewCoursesSection;
