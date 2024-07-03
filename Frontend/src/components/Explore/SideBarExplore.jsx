import React from 'react'

const SideBarExplore = () => {
  return (
    <ul className='p-6 border' style={{ height: 'calc(100vh - 72px)' }}>
      <li><a href="/dashboard/explore/courses">Courses</a></li>
      <li><a href="/dashboard/explore/events">Events</a></li>
      <li><a href="/dashboard/explore/mentors">Mentors</a></li>
    </ul>
  )
}

export default SideBarExplore