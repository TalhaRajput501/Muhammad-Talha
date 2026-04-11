
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
import { NextJs } from "./NextJs"
import { TypeScript } from "./TypeScript"
import { Git } from "./Git"


function Skills() {
  const skills = [
    ReactLogo,
    NextJs,
    NodeJs,
    MongoDB,
    Express,
    JSLogo,
    TypeScript,
    Redux,
    HTML,
    CSS,
    Tailwind,
    GitHub,
    Git

  ]
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
        className='sm:mx-9 flex my-5 items-center justify-center flex-wrap'
      >
        {/* All Logos of Skills */}

        {
          skills.map((Skill, index) => {
            return <Skill className="sm:mx-4 mx-1 my-4 sm:basis-[10%] basis-[40%] flex-grow-0 flex-shrink-0 hover:-translate-y-4 duration-300 " key={index} />
          })
        }

      </div> 

    </div>
  )
}

export default Skills
