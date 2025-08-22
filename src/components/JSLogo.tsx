import React from 'react'
interface componentProp {
  className: string
}
function JSLogo({ className }: componentProp) {
  return (


    <div className={`p-6 rounded-2xl w-42 h-42 flex flex-col items-center justify-center shadow-md  cursor-pointer bg-white border border-gray-200 hover:shadow-xl ${className}`}>

      <div className="flex items-center justify-center scale-100 rotate-0">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 448 512"
          className="text-yellow-400 w-19 h-19"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"></path>
        </svg>
      </div>

      <p className="mt-4 text-sm font-semibold text-center transition-colors duration-300 text-gray-800">
        JavaScript
      </p>
    </div>


  )
}

export default JSLogo
