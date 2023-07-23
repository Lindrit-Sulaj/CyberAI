import React from 'react'

export default function Benefit({ title, icon, description }: { title: string, icon: React.ReactNode, description: string }) {
  return (
    <div className='px-6 pt-6 pb-4 border-solid border-[1px] border-zinc-200'>
      <div>
        {icon}
      </div>
      <h3 className='font-semibold mt-3 text-[17px]'>{title}</h3>
      <p className='text-zinc-600 mt-1'>{description}</p>
    </div>
  )
}
