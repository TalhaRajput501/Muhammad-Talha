'use client'
import { useState, useEffect } from 'react'
import { Moon, Sun } from "lucide-react"; // lightweight icons


function Toggle() {

  // const [darkMode, setDarkMode] = useState<boolean>(false)
  const [mode, setMode] = useState(localStorage.getItem('mode') || import.meta.env.VITE_THEME_MODE || 'dark')

  useEffect(() => {
    console.log('theme', mode)
    if (mode === 'dark') {
      document.querySelector('html')?.classList.add('dark')
      localStorage.setItem('mode', 'dark')
    } else {
      document.querySelector('html')?.classList.remove('dark')
      localStorage.setItem('mode', 'light')

    }
  }, [mode])

  // useEffect(() => {

  //   document.querySelector('html')?.classList.toggle('dark')
  //   // console.log(document.querySelector('html')?.classList)

  // }, [darkMode])

  return (
    <div>
      <button
        onClick={() => setMode((mode: string) => mode === 'dark' ? 'light' : 'dark')}
        className="relative  cursor-pointer flex h-9 w-17 items-center rounded-full bg-gray-300 dark:bg-gray-700 p-1 transition-colors duration-300 mr-4  "
      >
        {/* Circle that slides */}
        <span
          className={`absolute left-1 top-1 flex h-7 w-7 items-center justify-center rounded-full bg-white dark:bg-gray-900 shadow-md transform transition-all duration-300 ${mode === 'dark' ? "translate-x-8" : "translate-x-0"
            }`}
        >
          {mode === 'dark' ? (
            <Sun className="h-5 w-5 text-yellow-500" />
          ) : ( // i use this logic just because if i use moon above my code will break in   production 
            <Moon className="h-5 w-5 text-blue-400" />
          )}
        </span>
      </button>

    </div>
  )
}

export default Toggle
