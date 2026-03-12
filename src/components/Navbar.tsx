import { useState } from "react"
import Toggle from "./Toggle"

function Navbar() {

  const [menu, setMenu] = useState<boolean>(false)
  const handleMenu = () => {

    setMenu(prev => !prev)

  }

  return (
    <nav
      className="  dark:bg-gray-800   bg-[#b7b7a4] h-15 flex justify-between items-center"
    >
      {/* Logo */}
      <a href="#">
        <div
          className="ml-8"
        >
          <img className="h-12 w-14 rounded-full" src="/ironman1.png" alt="" />
        </div>
      </a>

      {/* Nav items */}
      <div
        className="sm:flex flex items-center  "
      >

        {/* Dark mode toggle   */}
        <Toggle />



        <ul
          className={`sm:mr-28 sm:flex sm:absolute sm:right-0 sm:items-center  sm:h-15 sm:justify-center fixed top-0 mr-0  w-[60%] overflow-y-hidden  transform transition-all duration-200 ease-in-out  h-screen  ${menu ? '  right-0 z-50 dark:bg-gray-800  bg-[#b7b7a4]' : '-right-[60%]  '}     `}
        >

          <li
            className="dark:text-slate-50 text-3xl list-none translate-x-full sm:my-auto mt-4 sm:w-auto mx-auto w-[20%] sm:hidden  text-gray-900 sm:mx-2 font-semibold rounded border border-white sm:py-1 text-center"
            onClick={handleMenu}
          >
            <a className="sm:px-3  ">X</a>
          </li>

          <li
            className="dark:text-slate-50  text-gray-900 sm:mx-2  sm:my-auto mt-9 w-[80%]  sm:w-auto mx-auto    font-semibold rounded border border-white  text-center"
          >
            <a href='/Talha.pdf' download='Talha_Rajput_CV.pdf' className="sm:px-3 block w-full mx-auto  py-3 sm:py-2">Download CV </a>
          </li>

          <li
            className="dark:text-slate-50  text-gray-900 sm:mx-2  sm:my-auto mt-9 w-[80%]  sm:w-auto mx-auto    font-semibold rounded border border-white  text-center"
          >
            <a href="#projects" className="sm:px-3 block w-full mx-auto  py-3 sm:py-2">Projects </a>
          </li>

          <li
            className="dark:text-slate-50  text-gray-900 sm:mx-2  sm:my-auto mt-9 w-[80%]  sm:w-auto mx-auto    font-semibold rounded border border-white  text-center"
          >
            <a href="#contact" className="sm:px-3 block w-full mx-auto  py-3 sm:py-2">Hire Me </a>
          </li>

        </ul>


        <li
          className="dark:text-slate-50 text-2xl list-none  sm:hidden   text-gray-900 mx-2 font-semibold rounded border border-white py-1 text-center"
          onClick={handleMenu}
        >
          <a className="px-3">☰</a>
        </li>

      </div>
    </nav>
  )
}

export default Navbar
