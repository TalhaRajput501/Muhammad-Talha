import Link from 'next/link'
import React from 'react'

export default function notfound() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center gap-4'>
      <h1 className='text-foreground '>
        The page you are looking for does not exist.
      </h1>
      <Link className="group flex items-center gap-2 rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-white  transition-all hover:bg-primary-hover w-shrink" href="/">
        Go back to Home
      </Link>
    </div>
  )
}
