import React from 'react'
import CourseInfo from './CourseInfo'
import SetGoal from './SetGoal'

const CourseInfoSidebar = () => {
  return (
    <div className='max-w-[300px] flex flex-col p-6 gap-8' >
        <CourseInfo />
        <SetGoal />
    </div>
  )
}

export default CourseInfoSidebar