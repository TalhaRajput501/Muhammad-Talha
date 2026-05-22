import { useState } from "react"
import Toggle from "./Toggle"

function Navbar() {

  const [menu, setMenu] = useState<boolean>(false)
  const handleMenu = () => {

    setMenu(prev => !prev)

  }

  return (
    <nav
      className="dark:bg-gray-800 bg-[#b7b7a4] h-[3.75rem] flex justify-between items-center"
    >
      {/* Logo */}
      <a href="#">
        <div
          className="ml-8"
        >
          <img className="h-12 w-14 rounded-full" src="/ironman1.webp" alt="HeaderIcon" />
        </div>
      </a>

      {/* Nav items */}
      <div
        className="  flex items-center  "
      >

        {/* Dark mode toggle   */}
        <Toggle />


        <li
          className={`dark:text-slate-50 text-2xl list-none  sm:hidden   ease-in-out z-51  text-gray-900 mx-2 font-semibold rounded border border-white py-1 text-center cursor-pointer ${menu ? ' fixed right-0.5' : ' '} `}
          onClick={handleMenu}
        >
          {
            menu ? (
              <a className="px-3  ">X</a>
            ) : (
              <a className="px-2.5 ">☰</a>
            )
          }
        </li>

        <ul
          className={`sm:w-full sm:flex sm:relative sm:right-0 sm:items-center sm:h-[3.75rem] sm:justify-center fixed top-0 mr-0 w-[60%] overflow-y-hidden transform transition-all duration-200 ease-in-out h-screen ${menu ? 'right-0 z-50 dark:bg-gray-800 bg-[#b7b7a4] pt-10' : '-right-[60%]'}     `}
        >

          {/* <li
            className="dark:text-slate-50 text-3xl list-none translate-x-full sm:my-auto mt-4 sm:w-auto mx-auto w-[20%] sm:hidden cursor-pointer text-gray-900 sm:mx-2 font-semibold rounded border border-white sm:py-1 text-center"
            onClick={handleMenu}
          >
            <a className="sm:px-3   ">X</a>
          </li> */}

          <li
            className="dark:text-slate-50  text-gray-900 sm:mx-2  sm:my-auto mt-9 w-[80%]  sm:w-auto mx-auto    font-semibold rounded border border-white  text-center dark:hover:text-[#e09f3e] dark:hover:border-[#e09f3e] duration-100 hover:text-white hover:border-[#cb997e] "
          >
            <a href='/Talha.pdf' download='Talha_MERN_CV.pdf' className="sm:px-3 block w-full mx-auto  py-3 sm:py-2">Download CV </a>
          </li>

          <li
            className="dark:text-slate-50  text-gray-900 sm:mx-2  sm:my-auto mt-9 w-[80%]  sm:w-auto mx-auto    font-semibold rounded border border-white  text-center dark:hover:text-[#e09f3e] dark:hover:border-[#e09f3e] duration-100 hover:text-white hover:border-[#cb997e] "
          >
            <a href="#projects" className="sm:px-3 block w-full mx-auto  py-3 sm:py-2">Projects </a>
          </li>

          <li
            className="dark:text-slate-50  text-gray-900 sm:mx-2  sm:my-auto mt-9 w-[80%]  sm:w-auto mx-auto    font-semibold rounded border border-white  text-center dark:hover:text-[#e09f3e] dark:hover:border-[#e09f3e] duration-100 hover:text-white hover:border-[#cb997e] "
          >
            <a href="#contact" className="sm:px-3 block w-full mx-auto  py-3 sm:py-2">Hire Me </a>
          </li>

        </ul>



      </div>
    </nav>
  )
}

export default Navbar
