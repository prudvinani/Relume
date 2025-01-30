"use client"
import Image from "next/image"
import { useState } from "react"
import guest from "@/public/guest.png"
export default function page() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setPosition({ x, y })
  }

  return (
    <div className="flex min-h-[400px] w-full items-center justify-center">
      <div
        className="relative flex h-64 w-64 items-center justify-center overflow-hidden rounded-lg bg-gray-100 transition-colors hover:bg-gray-200"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        style={{ cursor: "none" }} // Hide the default cursor
      >
        {isHovering && (
          <Image
            src={guest}
            alt="Custom cursor"
            className="pointer-events-none absolute "
            style={{
              transform: `translate(${position.x}px, ${position.y}px)`,
              transition: "transform 0.05s ease",
            }}
          />
        )}
        
      </div>
    </div>
  )
}

