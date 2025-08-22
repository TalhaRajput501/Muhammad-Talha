interface componnetProp { 
  className: string
}
function HTML({className}: componnetProp) {
  return (

     <div className={`p-6 rounded-2xl w-42 h-42 flex flex-col items-center justify-center shadow-md  cursor-pointer bg-white border border-gray-200 hover:shadow-xl ${className}`}>


        <div className="flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            className="text-[#E34F26] w-19 h-19"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="0"
          >
            <path
              d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"
            />
          </svg>
        </div>


        <p className="mt-4 text-sm font-semibold text-center transition-colors duration-300 text-gray-800">
          HTML
        </p>
      </div>
  )
}

export default HTML
