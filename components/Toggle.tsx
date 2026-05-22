'use client'
import { useState, useEffect } from 'react'
import { Moon, Sun } from "lucide-react"; // lightweight icons


function Toggle() {
  type ThemeMode = 'dark' | 'light'
  const getDefaultMode = (): ThemeMode => {
    const envMode = process.env.NEXT_PUBLIC_THEME_MODE
    return envMode === 'light' || envMode === 'dark' ? envMode : 'dark'
  }
  const getStoredMode = (): ThemeMode | null => {
    if (typeof window === 'undefined') {
      return null
    }
    const storedMode = window.localStorage.getItem('mode')
    return storedMode === 'light' || storedMode === 'dark' ? storedMode : null
  }
  const [mode, setMode] = useState<ThemeMode>(() => getStoredMode() ?? getDefaultMode())

  useEffect(() => {
    // console.log('theme', mode)
    const root = document.documentElement
    if (mode === 'dark') {
      root.classList.add('dark')
      window.localStorage.setItem('mode', 'dark')
    } else {
      root.classList.remove('dark')
      window.localStorage.setItem('mode', 'light')

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
        className="relative cursor-pointer flex h-9 w-[4.25rem] items-center rounded-full bg-gray-300 dark:bg-gray-700 p-1 transition-colors duration-300 mr-4"
      >
        {/* Circle that slides */}
        <span
          className={`absolute left-1 top-1 flex h-7 w-7 items-center justify-center rounded-full bg-white dark:bg-gray-900 shadow-md transform transition-all duration-300 ${mode === 'dark' ? "translate-x-8" : "translate-x-0"
            }`}
        >
          {mode === 'dark' ? (
            <Sun className="h-5 w-5 text-yellow-500" />
          ) : (   
            <Moon className="h-5 w-5 text-blue-400" />
          )}
        </span>
      </button>

    </div>
  )
}

export default Toggle