import React from 'react'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className='hero pt-28 pb-24 w-full text-white px-6'>
      <div className="mx-auto max-w-screen-xl">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-[54px] lg:leading-[60px] max-w-screen-md">Empowering Cybersecurity with AI</h1>
        <p className='text-[17px] text-zinc-300 max-w-lg my-3'>Defend Your Digital Frontiers and Safeguard Your Tomorrow with Cutting-Edge AI-Powered Security Solutions.</p>
        <Button size="lg" className='bg-green-600 hover:bg-green-700 mt-3'>Start now</Button>
      </div>
    </section>
  )
}
