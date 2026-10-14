interface ComponentProps {
  className?: string
}

function ShadCn({ className = "" }: ComponentProps) {
  return (
    <div className={`${className}`}>
      {/* 1. Correctly wrapped centering container */}
      <div className="flex items-center justify-center">
        <svg 
          id="Layer_1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 256 256"
          /* 2. Standardized sizing to match your layout */
          className="w-[4.75rem] h-[4.75rem] text-white/90" 
        >
          {/* 3. Replaced HTML comment with React JSX comment */}
          {/* Generator: Adobe Illustrator 29.0.1, SVG Export Plug-In . SVG Version: 2.1.0 Build 192) */}
          
          <rect fill="none" width="256" height="256" />
          
          {/* 4. Converted stroke utilities to camelCase and bound color to Tailwind via currentColor */}
          <line 
            fill="none"
            stroke="currentColor" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="32" 
            x1="208" 
            y1="128" 
            x2="128" 
            y2="208" 
          />
          <line 
            fill="none"
            stroke="currentColor" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="32" 
            x1="192" 
            y1="40" 
            x2="40" 
            y2="192" 
          />
        </svg>
      </div>
    </div>
  )
}

export default ShadCn
