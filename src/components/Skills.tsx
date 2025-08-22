// import React from 'react'

import JSLogo from "./JSLogo"
import ReactLogo from "./ReactLogo"
import GitHub from "./GitHub"
import Tailwind from "./Tailwind"
import Express from './Express'
import NodeJs from "./NodeJs"
import MongoDB from "./MongoDB"
import CSS from './CSS'
import HTML from './HTML'
import Redux from "./Redux"


function Skills() {
  return (
    <div
      className='   mx-auto '
    >
      <h1
        className='text-6xl text-center pt-5 font-permanent-marker text-[#cb997e] dark:text-white'
      >
        Skills
      </h1>

      <div
        className='sm:mx-9 flex my-5 items-center justify-center flex-wrap '
      >
        {/* All Logos of Skills */}

        <ReactLogo className=" sm:mx-4 mx-1  my-4 sm:basis-[15%] basis-[40%] flex-grow-0 flex-shrink-0 hover:-translate-y-4 duration-300  "  />

        <NodeJs className=" sm:mx-4 mx-1  my-4 sm:basis-[15%] basis-[40%] flex-grow-0 flex-shrink-0 hover:-translate-y-4 duration-300  " />

        <MongoDB className=" sm:mx-4 mx-1  my-4 sm:basis-[15%] basis-[40%] flex-grow-0 flex-shrink-0 hover:-translate-y-4 duration-300  " />

        <Express className=" sm:mx-4 mx-1  my-4 sm:basis-[15%] basis-[40%] flex-grow-0 flex-shrink-0 hover:-translate-y-4 duration-300  " />

        <Redux className=" sm:mx-4 mx-1  my-4 sm:basis-[15%] basis-[40%] flex-grow-0 flex-shrink-0 hover:-translate-y-4 duration-300  " />

        <HTML className=" sm:mx-4 mx-1  my-4 sm:basis-[15%] basis-[40%] flex-grow-0 flex-shrink-0 hover:-translate-y-4 duration-300  " />

        <CSS className=" sm:mx-4 mx-1  my-4 sm:basis-[15%] basis-[40%] flex-grow-0 flex-shrink-0 hover:-translate-y-4 duration-300  " />

        <Tailwind className=" sm:mx-4 mx-1  my-4 sm:basis-[15%] basis-[40%] flex-grow-0 flex-shrink-0 hover:-translate-y-4 duration-300  " />

        <JSLogo className=" sm:mx-4 mx-1  my-4 sm:basis-[15%] basis-[40%] flex-grow-0 flex-shrink-0 hover:-translate-y-4 duration-300  " />

        <GitHub className=" sm:mx-4 mx-1  my-4 sm:basis-[15%] basis-[40%] flex-grow-0 flex-shrink-0 hover:-translate-y-4 duration-300  " />


      </div>

 




    </div>
  )
}

export default Skills
