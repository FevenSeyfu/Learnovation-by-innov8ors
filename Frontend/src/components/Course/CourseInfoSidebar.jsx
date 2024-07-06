import React from 'react'
import CourseInfo from './CourseInfo'
import SetGoal from './SetGoal'

const CourseInfoSidebar = () => {
  return (
    <div className=' flex flex-col p-6' >
        <CourseInfo />
        <SetGoal />
    </div>
  )
}

export default CourseInfoSidebar