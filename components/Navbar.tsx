'use client'
import { useState } from 'react';
import { Github, Linkedin, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';


export default function Navbar() {
  const [currentHash, setcurrentHash] = useState('')

  const homeUrl = process.env.NEXT_PUBLIC_SITE_URL || '';
  const navItems = [
    { name: 'Home', href: homeUrl, active: currentHash === homeUrl || currentHash === '' },
    { name: 'About', href: '/#about', active: currentHash === '/#about' },
    { name: 'Skills', href: '/#skills', active: currentHash === '/#skills' },
    { name: 'Projects', href: '/#projects', active: currentHash === '/#projects' },
    { name: 'Contact', href: '/#contact', active: currentHash === '/#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Brand / Logo */}
        <Link onClick={() => setcurrentHash(homeUrl)} href={homeUrl} className="flex items-center gap-3 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-purple-500/80 bg-purple-950/40 text-lg font-bold text-purple-300 shadow-[0_0_12px_rgba(168,85,247,0.3)] transition-all group-hover:border-purple-400 group-hover:shadow-[0_0_18px_rgba(168,85,247,0.5)] hidden sm:flex">
            T
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            Talha
          </span>
          {/* <Image src="/logo2.png" alt="Logo" width={66} height={36} /> */}
        </Link>

        {/* Center Navigation Links */}
        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              onClick={() => setcurrentHash(item.href)}
              href={item.href}
              className={`px-4 py-1.5 text-sm font-medium transition-all duration-200 rounded-xl ${item.active
                ? 'bg-purple-600/30 text-white border border-purple-500/40 shadow-[0_0_15px_rgba(147,51,234,0.35)]'
                : 'text-gray-300 hover:text-white hover:bg-white/5 border border-transparent  '
                }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right Section: Socials & CTA */}
        <div className="flex items-center gap-5">
          <Link
            href="https://github.com/TalhaRajput501"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-gray-300 hover:text-white transition-colors"
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/m-talha-dev/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-gray-300 hover:text-white transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </Link>



          <Link className="group flex items-center gap-2 rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-white  transition-all hover:bg-primary-hover " href="/#contact">
            Let's Connect
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>

        </div>

      </div>
    </header >
  );
}