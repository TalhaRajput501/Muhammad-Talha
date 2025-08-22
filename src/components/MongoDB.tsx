import React from 'react'

interface componentProp {
  className: string
}
function MongoDB({ className }: componentProp) {
  return (

      <div className={`p-6 rounded-2xl w-42 h-42 flex flex-col items-center justify-center shadow-md  cursor-pointer bg-white border border-gray-200 hover:shadow-xl ${className}`}>


        <div className="flex items-center justify-center scale-[1.00311]">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            role="img"
            viewBox="0 0 24 24"
            className="w-19 h-19 text-[#267e18]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"></path>
          </svg>
        </div>


        <p className="mt-4 text-sm font-semibold text-center transition-colors duration-300 text-gray-800">
          Mongo DB
        </p>
      </div>
  )
}

export default MongoDB
