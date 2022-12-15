
// create a amber chip with a tailwind 

import React from 'react'

interface Props {
  children: React.ReactNode
  className?: string
}

export const Chip = ({ children, className }: Props) => {
  return (
    <span className={"inline-flex items-center mx-1 my-[4px] justify-center text-white text-sm font-medium px-2 py-1 rounded-full hover:animate-grow hover:animate-raise cursor-pointer " + className}> 
      {children}
    </span>
  )
}
