import { Layers, Lightbulb, MonitorSmartphone, User } from 'lucide-react'
import React from 'react'

export default function AboutMe() {
  return (
    // About Section 
    <section id="about" className="py-20  px-6  mx-auto border-t border-border/50 " >
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <div className="text-primary text-sm font-bold tracking-wider uppercase mb-2">About Me</div>
          <h2 className="text-4xl font-extrabold text-foreground leading-tight">
            Building solutions with <span className="text-transparent bg-clip-text bg-primary">code</span> & <span className="text-transparent bg-clip-text bg-primary">creativity.</span>
          </h2>
          <p className="text-text-secondary leading-relaxed text-foreground">
            I'm a passionate full-stack developer who loves turning ideas into real-world applications. From building SaaS products to complex web systems, I focus on clean code, great user experience, and scalable architecture.
          </p>
          {/* <button className="inline-flex items-center gap-2 px-5 py-2.5 border border-border rounded-lg text-foreground font-medium hover:bg-surface-hover transition-colors">
            More About Me
            <User className="w-4 h-4" />
          </button> */}
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { icon: <Layers className="text-primary" />, title: 'Full-Stack Development', desc: 'End-to-end web application development with modern technologies.' },
            { icon: <MonitorSmartphone className="text-secondary-light" />, title: 'SaaS Development', desc: 'Building scalable SaaS products from idea to deployment.' },
            { icon: <Lightbulb className="text-success" />, title: 'Problem Solving', desc: 'Solving complex problems with efficient and innovative solutions.' },
          ].map((item, i) => (
            <div key={i} className={`p-6 bg-surface border border-border rounded-xl hover:border-border-hover transition-colors ${i === 0 ? 'sm:col-span-2' : ''}`}>
              <div className="w-12 h-12 bg-background-secondary rounded-lg flex items-center justify-center mb-4 border border-border">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground">{item.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
