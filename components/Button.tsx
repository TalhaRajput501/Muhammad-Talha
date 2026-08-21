import Link from 'next/link'
import React from 'react'

export default function Button({ children, link, fill = true, ...props }: { children: React.ReactNode, link: string, fill?: boolean, [key: string]: any }) {
  return (
    <Link
      href={link}
      className={`${fill ? 'inline-flex   gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-hover transition-colors' : 'inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-surface-hover transition-colors'} items-center w-full justify-center sm:w-fit`}
      {...props}
    >
      {children}
    </Link>
  )
}
