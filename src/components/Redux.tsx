
interface componentProp {
  className: string
}
function Redux({className}: componentProp) {
  return (
    <div className={`p-6 rounded-2xl w-42 h-42 flex flex-col items-center justify-center shadow-md  cursor-pointer bg-white border border-gray-200 hover:shadow-xl ${className}`}>


      <div className="flex items-center justify-center scale-100 rotate-0">
      <img
            className='rounded-xl   w-22 mx-auto'
            alt="redux"
            src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png"
          />
      </div>

      <p className="mt-4 text-sm font-semibold text-center transition-colors duration-300 text-gray-800">
        Redux
      </p>
    </div> 

  )
}

export default Redux
