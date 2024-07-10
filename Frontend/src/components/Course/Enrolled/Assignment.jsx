import React from 'react'
import GradientPurpleHeading from '../../utility/Heading/GradientPurpleHeading'

const Assignment = () => {
  return (
    <div className="p-4 flex flex-col items-start gap-6 text-left">
      <div className="px-8">
        <GradientPurpleHeading size={"bold"}>
          Assignments
        </GradientPurpleHeading>
      </div>
    </div>
  )
}

export default Assignment