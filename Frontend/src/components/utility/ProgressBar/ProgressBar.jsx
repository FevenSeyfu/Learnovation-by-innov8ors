import React from 'react'

const ProgressBar = ({progressPercentage}) => {
  return (
    <div
          style={{ 
            width: `${progressPercentage}%`, 
            background: 'linear-gradient(150.09deg, #8B15BD 0.04%, #F7936F 100.04%)'
          }}
          className="h-full  rounded-full"
        ></div>
  )
}

export default ProgressBar