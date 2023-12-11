"use client";
import React from 'react'

const TabButton = ({active, selectTab, children}) => {

  const buttonClasses = active 
  ? "text-cyan-500 border-b border-cyan-600" 
  : "text-[#ADB7BE]";
  return (
    <button onClick={selectTab}>
       <p className={`mr-3 font-semibold hover:text-cyan-700  ${buttonClasses}`}>
        {children}
      </p>
    </button>
    
  )
}

export default TabButton