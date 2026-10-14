
import JSLogo from "./JSLogo"
import ReactLogo from "./ReactLogo"
import GitHub from "./GitHub"
import Tailwind from "./Tailwind"
import Express from './Express'
import NodeJs from "./NodeJs"
import MongoDB from "./MongoDB"
import Redux from "./Redux"
import { NextJs } from "./NextJs"
import { TypeScript } from "./TypeScript"
import { Git } from "./Git"
import Vercel from "./Vercel"
import Docker from "./Docker"
import PostMan from "./PostMan"
import ShadCn from "./ShadCn"
import Hostinger from "./Hostinger"

function SkillTile({ Icon }: { Icon: React.FC<{ className: string }> }) {
  return (
    <div className="flex items-center justify-center border border-border rounded w-18 max-w-19 ">
      <Icon className="w-8" />
    </div>
  )
}

function Skills() {

  return (

    <section id="skills" className="py-20 px-6  mx-auto border-t border-border/50">
      <div className="text-center max-w-2xl mx-auto mb-16">
        {/* <div className="text-primary text-sm font-bold tracking-wider uppercase mb-2">
          Technical Arsenal
        </div> */}

        <h2 className="text-4xl font-extrabold text-foreground leading-tight">
          <span className="text-transparent bg-clip-text bg-primary">SKILLS & TOOLS</span>
        </h2>
        <p className="text-text-secondary leading-relaxed text-foreground">
          My primary stack across frontend development, backend logic, and deployment tools.
        </p>
      </div>

      <div className="  flex flex-wrap grid grid-cols-1 sm:grid-cols-3 gap-4  ">
        <div className="h-60 bg-surface border border-border rounded-xl overflow-hidden border-primary/50 p-4">
          <h3 className="text-2xl font-bold text-foreground mb-2 text-center">Frontend</h3>
          <div className="flex flex-wrap gap-3  items-center justify-center">
            <SkillTile Icon={JSLogo} />
            <abbr title="TypeScript">
              <SkillTile Icon={TypeScript} />
            </abbr>

            <abbr title="React">
              <SkillTile Icon={ReactLogo} />
            </abbr>

            <abbr title="Next.js">
              <SkillTile Icon={NextJs} />
            </abbr>

            <abbr title="Redux">
              <SkillTile Icon={Redux} />
            </abbr>

            <abbr title="Tailwind CSS">
              <SkillTile Icon={Tailwind} />
            </abbr>

            <abbr title="ShadCn">
              <SkillTile Icon={ShadCn} />
            </abbr>
          </div>
        </div>

        <div className="h-60 bg-surface border border-border rounded-xl overflow-hidden border-primary/50 p-4">
          <h3 className="text-2xl font-bold text-foreground mb-2 text-center">Backend</h3>
          <div className="flex flex-wrap gap-3  items-center justify-center">
            <abbr title="Express.js">
              <SkillTile Icon={Express} />
            </abbr>

            <abbr title="Node.js">
              <SkillTile Icon={NodeJs} />
            </abbr>

            <abbr title="MongoDB">
              <SkillTile Icon={MongoDB} />
            </abbr>
          </div>
        </div>


        <div className="h-60 bg-surface border border-border rounded-xl overflow-hidden border-primary/50 p-4">
          <h3 className="text-2xl font-bold text-foreground mb-2 text-center">Tools & Infrastructure</h3>
          <div className="flex flex-wrap gap-3 items-center justify-center ">
            <abbr title="Git">
              <SkillTile Icon={Git} />
            </abbr>

            <abbr title="GitHub">
              <SkillTile Icon={GitHub} />
            </abbr>

            <abbr title="Vercel">
              <SkillTile Icon={Vercel} />
            </abbr>

            <abbr title="Docker">
              <SkillTile Icon={Docker} />
            </abbr>

            <abbr title="PostMan">
              <SkillTile Icon={PostMan} />
            </abbr>

            <abbr title="Hostinger">
              <SkillTile Icon={Hostinger} />
            </abbr>
          </div>
        </div>

      </div>
    </section>

  )
}

export default Skills
