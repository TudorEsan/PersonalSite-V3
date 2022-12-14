
import React from 'react'

interface Props {
  children: React.ReactNode
}

export const Card = ({children}: Props) => {
  return (
    <div
      // style={{boxShadow}}
    className='bg-indigo-600/30 shadow-border  backdrop-saturate-120 backdrop-brightness-100 backdrop-blur-md p-10 max-w-xl rounded-2xl '>
      {children}
    </div>
  )
}
  