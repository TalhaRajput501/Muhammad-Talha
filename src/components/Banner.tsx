import { useEffect, useRef } from 'react'
import Typed from "typed.js"
function Banner() {

  const skills = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    if (skills.current) {

      const typed = new Typed(skills.current, {
        strings: [
          'MERN Stack Development',
          'Frontend with React',
          'Backend with Node.js &amp; Express',
          'MongoDB Database Design',
          'Authentication with JWT & Bcrypt',
          'REST API Development',
          'State Management(Redux Toolkit)',
          'UI with Tailwind CSS',

        ],
        typeSpeed: 70,     // Faster typing so long texts finish quickly
        backSpeed: 40,     // Smooth backspacing speed
        startDelay: 300,   // Small pause before typing starts
        backDelay: 1000,
        loop: true,
        cursorChar: "&nbsp;",
      });

      return () => {
        typed.destroy()
      }

    }
  }, [])


  return (
    <div
      className=" mt-9  w-[95vw] flex justify-between sm:flex-row flex-col mx-auto items-center  "
    >
      {/* Introduction Paragraph */}
      <div
        className="smL:ml-12 w-full sm:w-[50%] mb-8"
      >
        <h1
          className='font-bold dark:text-[#e09f3e] sm:hidden text-center text-[#cb997e] mb-3 text-3xl font-archivo-black'
        >
          About Me 
        </h1>


        <h1
          className="text-2xl font-bold text-gray-700  dark:text-gray-200"
        >Hi, I’m
          <span className='font-bold text-4xl font-akaya-kanadaka dark:text-[#e09f3e] text-[#cb997e] ' > Talha Rajput 👋</span>
        </h1>

        <h1
          className="sm:text-2xl text-xl "
        >
          A MERN Stack Developer
        </h1>
        <div>
          <h2
            className='font-bold font-poppins text-lg sm:text-xl dark:text-gray-200 text-gray-800'
          >
            I turn ideas into full-stack web apps. <br />
            I build modern, scalable, and user-friendly solutions with the MERN stack.
          </h2>

          <h1
            className='font-bold dark:text-[#e09f3e]  text-[#cb997e] sm:text-3xl text-2xl font-archivo-black text-center sm:text-left'
          >
            My Core Skills
          </h1>

          <span className='sm:text-2xl text-xl font-bold dark:text-white text-gray-900' ref={skills} ></span>

        </div>
      </div>

      {/* MY picture */}
      <div
        className="sm:w-[50%] w-full flex  justify-center   "
      >
        <img
          className="rounded-4xl  object-cover  sm:w-[70%] w-full   "
          src='./talha.png'
          alt="muhammad talha" />
      </div>
    </div>
  )
}

export default Banner

