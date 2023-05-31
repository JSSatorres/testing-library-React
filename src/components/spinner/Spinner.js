import React from 'react'

const Spinner = () => {
  return (
    <div className="flex items-center justify-center">
    <div className="inline-block animate-spin ease-linear rounded-full border-4 border-t-4 border-blue-500 h-12 w-12 mr-2"></div>
    <span className="text-blue-500 font-semibold text-xl">Loading</span>
  </div>
  )
}

export default Spinner
