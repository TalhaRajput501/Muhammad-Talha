import  { useState, useEffect } from 'react'
import { Moon, Sun } from "lucide-react"; // lightweight icons


function Toggle() {

  const [darkMode, setDarkMode] = useState<boolean>(false)

  useEffect(() => {

    document.querySelector('html')?.classList.toggle('dark')
    // console.log(document.querySelector('html')?.classList)

  }, [darkMode])

  return (
    <div>
      <button
        onClick={() => setDarkMode(darkMode => !darkMode)}
        className="relative  cursor-pointer flex h-9 w-17 items-center rounded-full bg-gray-300 dark:bg-gray-700 p-1 transition-colors duration-300 mr-4  "
      >
        {/* Circle that slides */}
        <span
          className={`absolute left-1 top-1 flex h-7 w-7 items-center justify-center rounded-full bg-white dark:bg-gray-900 shadow-md transform transition-all duration-300 ${darkMode ? "translate-x-8" : "translate-x-0"
            }`}
        >
          {darkMode ? (
            <Moon className="h-5 w-5 text-blue-400" />
          ) : (
            <Sun className="h-5 w-5 text-yellow-500" />
          )}
        </span>
      </button>
      
    </div>
  )
}

export default Toggle
