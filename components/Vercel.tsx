interface ComponentProp {
  className?: string
}

function Vercel({ className = "" }: ComponentProp) {
  return (
    <div className={`${className}`}>
      <div className="flex items-center justify-center">
        <svg
          xmlns="http://w3.org"
          viewBox="0 0 512 512"
          className="text-black/90 w-[4.75rem] h-[4.75rem]"
          fill="currentColor"
        > 
          <path d="M256 32L496 448H16L256 32Z" />
        </svg>
      </div>
    </div>
  )
}

export default Vercel
