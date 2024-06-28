import React from 'react'

const TitleBtn = ({children}) => {
  return (
    <button className="py-6 px-12 w-[165px] rounded-full bg-lightPurple text-darkPurple font-semibold text-lg text-center">{children}</button>
  )
}

export default TitleBtn