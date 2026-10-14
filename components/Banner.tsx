import { ArrowRight, Download } from 'lucide-react';
import Image from 'next/image';
import Button from './Button';
function Banner() {


  return (
    <section id="home" className="pt-14  pb-16 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          {/* <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface text-sm font-medium text-text-secondary">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
            Full-Stack Developer - Open to roles
          </div> */}

          <div className="space-y-2">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-foreground tracking-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-primary">Talha</span>
            </h1>
            {/* <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              a Full-stack engineer<br /><span className="text-transparent bg-clip-text bg-primary">who ships to production.</span>
            </h2> */}
          </div>

          <p className="text-lg text-text-secondary max-w-xl leading-relaxed">
            A <span className='font-bold '>full-stack developer </span> who loves coding, tech, and building cool stuff. I build clean, modern web applications using <span className='font-bold '>TypeScript</span>, <span className='font-bold '>React</span>, <span className='font-bold '>Next.js</span>, and <span className='font-bold '>Express.js</span>.
          </p>
          <p className="text-md text-text-secondary max-w-xl">I'm Open to <span className='font-bold '>freelance projects </span>, <span className='font-bold '>collaborations</span>, and <span className='font-bold '>full-time opportunities</span>.
          </p>

          <div className="flex flex-wrap items-center gap-4 w-full justify-center sm:justify-start">
            <Button
              link="/all-projects"
              fill={true}
            >
              View My Work
              <ArrowRight className="w-4 h-4" />
            </Button>

            <Button
              download="Talha_MERN.pdf"
              link="/Talha.pdf"
              fill={false}
            >
              Download CV
              <Download className="w-4 h-4" />
            </Button>
          </div>

        </div>

        {/* Right Content / Image */}
        <div className="relative flex justify-center lg:justify-end items-center   rounded-full bg-background">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-primary/20 blur-[120px]    rounded-full " />

          {/* Master Container */}
          <div className="relative w-full max-w-[600px]   aspect-square flex items-end justify-center rounded-3xl overflow-hidden     pb-">

            {/* 1. SVG Background */}
            <Image
              src="/bg.svg"
              alt="Tech Background"
              fill
              priority
              className="object-contain z-0 inset-0 "
            />

            {/* 2. Radial Vignette Layer */}
            {/* <div className="absolute inset-0 pointer-events-none z-[5] bg-[radial-gradient(ellipse_at_center,transparent_30%,#070b18_85%)]  flex" /> */}

            {/* 3. Portrait Image */}
            <div className="relative w-[85%] h-[95%] z-10  my-auto -mt-4 sm:-mt-9  ">
              <Image
                src="/talha.webp"
                alt="Talha"
                className="w-full h-full object-contain object-bottom "
                fill
              />
            </div>

          </div>

        </div>

      </div>
    </section>

  )
}

export default Banner

