import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import coursesData from '../../data/courses.json';
import certificateHidden from '../../assets/images/Certificates/certificateLocked.png';
import Typography from '../utility/Typography/Typography';

const SkeletonLoader = () => (
  <div className="animate-pulse flex flex-col gap-4">
    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
    <div className="h-32 bg-gray-300 rounded"></div>
  </div>
);

const CourseInfo = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const courseDetails = coursesData.courses.find(course => course.id === Number(id));

    if (courseDetails) {
      setCourse(courseDetails);
      setIsCompleted(courseDetails.isCompleted);
    } else {
      console.log('Course not found');
    }
  }, [id]);

  if (!course) {
    return <div className='p-4 border rounded-2xl flex flex-col gap-2'><SkeletonLoader /></div>;
  }

  return (
    <div className='p-4 border rounded-2xl flex flex-col gap-2'>
      <div className='text-left flex flex-col gap-4'>
        <div>
          <Typography
            tag={"p"}
            weight={"medium"}
            size={"xs"}
            type={"text"}
            color="#667085"
          >
            Language in
          </Typography>
          <Typography
            tag={"p"}
            weight={"regular"}
            size={"md"}
            type={"text"}
            color="#101828"
          >
            {course.language}
          </Typography>
        </div>
        <div>
          <Typography
            tag={"p"}
            weight={"medium"}
            size={"xs"}
            type={"text"}
            color="#667085"
          >
            Last Updated
          </Typography>
          <Typography
            tag={"p"}
            weight={"regular"}
            size={"md"}
            type={"text"}
            color="#101828"
          >
            {course.lastUpdated}
          </Typography>
        </div>
        <div>
          <Typography
            tag={"p"}
            weight={"medium"}
            size={"xs"}
            type={"text"}
            color="#667085"
          >
            Courses Type
          </Typography>
          <Typography
            tag={"p"}
            weight={"regular"}
            size={"md"}
            type={"text"}
            color="#101828"
          >
            {course.courseType}
          </Typography>
        </div>
        <div>
          <Typography
            tag={"p"}
            weight={"medium"}
            size={"xs"}
            type={"text"}
            color="#667085"
          >
            Enrolled
          </Typography>
          <Typography
            tag={"p"}
            weight={"regular"}
            size={"md"}
            type={"text"}
            color="#101828"
          >
            {course.learnersEnrolled}
          </Typography>
        </div>
        <div>
          <Typography
            tag={"p"}
            weight={"medium"}
            size={"xs"}
            type={"text"}
            color="#667085"
          >
            Certificate of Completion
          </Typography>
          <Typography
            tag={"p"}
            weight={"regular"}
            size={"md"}
            type={"text"}
            color={isCompleted ? "#1d9767" : '#fe2a45'}
          >
            {isCompleted ? 'Completed' : 'Locked'}
          </Typography>
        </div>
      </div>
      <img src={certificateHidden} alt="Certificate Preview" className='w-60'/>
    </div>
  );
};

export default CourseInfo;
