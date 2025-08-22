interface componentProp {
  className: string
}
function Tailwind({className}: componentProp) {
  return (

    <div className={`p-6 rounded-2xl w-42 h-42 flex flex-col items-center justify-center shadow-md  cursor-pointer bg-white border border-gray-200 hover:shadow-xl ${className}`}>


        <div className="flex items-center justify-center">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            role="img"
            viewBox="0 0 24 24"
            className="text-cyan-500 w-19 h-19"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 
    C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 
    C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 
    c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 
    C10.337,13.382,8.976,12,6.001,12z"></path>
          </svg>
        </div>


        <p className="mt-4 text-sm font-semibold text-center transition-colors duration-300 text-gray-800">
          Tailwind CSS
        </p>
      </div>
  )
}

export default Tailwind
