
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
import { Blocks, Code2, Cpu, Database, FileJson, Github, Layout, Server, Terminal } from "lucide-react"


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


    <section id="skills" className="py-20 px-6  mx-auto border-t border-border/50">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="text-primary text-sm font-bold tracking-wider uppercase mb-2">
          Technical Arsenal
        </div>

        <h2 className="text-4xl font-extrabold text-foreground leading-tight">
          Tools of the  <span className="text-transparent bg-clip-text bg-primary">Trade</span>
        </h2>
        <p className="text-text-secondary leading-relaxed text-foreground">
          My go-to stack for turning ideas into fast, scalable web applications.
        </p>
      </div>

      {/* <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4"> */}
      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 ">
        {[
          { name: 'React', icon: ReactLogo },
          { name: 'Next.js', icon: NextJs },
          { name: 'Node.js', icon: NodeJs },
          { name: 'Express.js', icon: Express },
          { name: 'MongoDB', icon: MongoDB },
          { name: 'TypeScript', icon: TypeScript },
          { name: 'JavaScript', icon: JSLogo },
          { name: 'Tailwind', icon: Tailwind },
          { name: 'Git', icon: Git },
          { name: 'GitHub', icon: GitHub },
          // { name: 'PostgreSQL', icon: Database },
          // { name: 'Clerk', icon: Cpu },
        ].map((skill) => {
          const IconComponent = skill.icon;
          return (
            <div key={skill.name} className="flex flex-col items-center justify-center p-6 bg-surface border border-border rounded-xl hover:border-primary/50 hover:bg-surface-hover transition-all group basis-[40%] sm:basis-[20%] md:basis-[15%] lg:basis-[12%]">
              {/* Logo */}
              <div className="w-12 h-12 flex items-center justify-center text-text-secondary group-hover:text-primary transition-colors mb-3">
                <IconComponent className="" />
              </div>
              {/* Text */}
              <span className="text-sm font-medium text-text-secondary group-hover:text-foreground transition-colors">
                {skill.name}
              </span>
            </div>
          )
        })}
      </div>
    </section>

  )
}

export default Skills
