import React from 'react'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className='hero pt-32 pb-36 w-full text-white px-4'>
      <div className="mx-auto max-w-screen-xl">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-[54px] lg:leading-[60px] max-w-screen-md">Empowering Cybersecurity with AI</h1>
        <p className='text-[17px] text-zinc-300 max-w-lg my-3'>With the brilliance of technology, we engineer innovative solutions. With unmatched proficiency and precision, we shape ideas into reality, empowering progress step by step.</p>
        <Button size="lg" className='bg-green-600 hover:bg-green-700 mt-3'>Start now</Button>
      </div>
    </section>
  )
}
