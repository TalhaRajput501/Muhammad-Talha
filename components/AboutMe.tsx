import { Layers, Lightbulb, MonitorSmartphone, User } from 'lucide-react'
import React from 'react'

export default function AboutMe() {
  return (
    // About Section 
    <section id="about" className="py-20  px-6  mx-auto border-t border-border/50 " >
      <div className="  items-center max-w-3xl mx-auto">
        <div className=" justify-center text-center mb-1">
          <div className="text-primary text-sm font-bold tracking-wider uppercase mb-2">About Me</div>
          <h2 className="text-4xl font-extrabold text-foreground leading-tight mb-2">
            Self-taught, <span className="text-transparent bg-clip-text bg-primary">learning by shipping.</span>  
          </h2>
          <p className="text-text-secondary leading-relaxed text-foreground text-xl">
            I’m a self-taught full-stack developer. I’ve spent a year doing freelance work building web applications for International clients alongside senior engineers, and I build my own products on the MERN stack and Next.js, including <span className='font-bold '>HandoutAI</span> and <span className='font-bold '>completeMe</span>. I’m looking for a junior or associate full-stack role on a team that ships.
          </p>
          {/* <button className="inline-flex items-center gap-2 px-5 py-2.5 border border-border rounded-lg text-foreground font-medium hover:bg-surface-hover transition-colors">
            More About Me
            <User className="w-4 h-4" />
          </button> */}
        </div> 
      </div>
    </section>
  )
}
