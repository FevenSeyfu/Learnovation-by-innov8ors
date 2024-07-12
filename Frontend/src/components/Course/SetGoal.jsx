import React, { useEffect, useState } from 'react';
import Typography from '../utility/Typography/Typography';
import ButtonPrimary from '../utility/Button/ButtonPrimary';
import { useDarkMode } from 'usehooks-ts';
import { useCourseContext } from '../../Context/CourseContext';
import { useParams } from 'react-router-dom';
import CalendarDropdown from '../utility/Dropdown/CalendarDropdown'; 
import { useDropdown } from '../../Context/DropdownContext';
import SetGoalModal from './SetGoalModal';

const SkeletonLoader = () => (
  <div className="animate-pulse flex flex-col gap-4">
    <div className="h-4 bg-gray-300 rounded"></div>
    <div className="h-4 bg-gray-300 rounded"></div>
  </div>
);

const SetGoal = () => {
  const { id } = useParams();
  const { courses, updateCourseField } = useCourseContext(); 
  const [course, setCourse] = useState(null);
  const { dropdownStates, toggleDropdown, selectedValues, updateDateSelection } = useDropdown();
  const [showSetGoalModal, setShowSetGoalModal] = useState(false);
  
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const isDarkMode = useDarkMode();

  useEffect(() => {
    const selectedCourse = courses.find(course => course.id === Number(id));
    setCourse(selectedCourse);
  }, [courses, id]);

  useEffect(() => {
    if (!dropdownStates['dateDropDown']) {
      updateCourseField(id, { goalStartDate: selectedValues.dateRange.startDate, goalEndDate: selectedValues.dateRange.endDate });
    }
  }, [dropdownStates, id, selectedValues.dateRange]);

  const handleDateSelect = (date, isStartDate) => {
    if (isStartDate) {
      setStartDate(date);
    } else {
      setEndDate(date);
    }
  };

  const applyDateSelection = () => {
    if (startDate && endDate) {
      updateCourseField(id, { goalStartDate: startDate, goalEndDate: endDate });
      toggleDropdown('dateDropDown'); 
      setShowSetGoalModal(true);
    }
  };

  const handleSetGoal = () => {
    toggleDropdown('dateDropDown'); 
  };

  const handleConfirmGoal = () => {
    // Logic to handle goal confirmation
    setShowSetGoalModal(false); // Close the SetGoalModal
  };

  const handleCancelGoal = () => {
    setShowSetGoalModal(false); 
  };

  if (!course) {
    return <div className='p-4 border rounded-2xl flex flex-col gap-2'><SkeletonLoader /></div>;
  }

  return (
    <div className='p-4 border rounded text-left flex flex-col gap-4 dark:border-gray-700'>
      <Typography
        tag={"p"}
        weight={"regular"}
        size={"md"}
        type={"text"}
        color={ isDarkMode ? "#94a3b8":"#e5e7eb"}
      >
        Wanna complete this course by a specific date?
      </Typography>
      <ButtonPrimary size={"2xl"} onClick={handleSetGoal}>
        Set a Goal Date
      </ButtonPrimary>
      {dropdownStates['dateDropDown'] && ( 
        <div className="fixed inset-0 backdrop-blur-md flex justify-center items-center">
           <CalendarDropdown 
            id='dateDropDown' 
            startDate={startDate}
            endDate={endDate}
            onDateSelect={handleDateSelect} 
            onApply={applyDateSelection}
            onCancel={() => toggleDropdown('dateDropDown')}
          /> 
        </div>
      )}
      {showSetGoalModal && (
         <div className="fixed inset-0 backdrop-blur-md flex justify-center items-center">
        <SetGoalModal
          onConfirm={handleConfirmGoal}
          onCancel={handleCancelGoal}
        />
        </div>
      )}
    </div>
  );
};

export default SetGoal;