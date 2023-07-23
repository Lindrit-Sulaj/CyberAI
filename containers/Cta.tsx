import React from 'react'
import { Button } from '@/components/ui/button'

export default function Cta() {
  return (
    <section className='bg-green-600 py-14 my-8 px-4'>
      <div className="flex justify-between items-center max-w-screen-xl flex-col md:flex-row gap-y-4 mx-auto">
        <div>
          <h2 className='font-bold text-2xl md:text-3xl text-white text-center md:text-left'>Start Protecting Your Business Today</h2>
          <p className='text-zinc-100 max-w-lg mt-2 text-center md:text-left'>Secure your digital assets from evolving threats from our AI powered services</p>
        </div>
        <Button size="lg" className='bg-white text-green-600 shadow-sm shadow-green-700 hover:bg-white/90'>
          Start now
        </Button>
      </div>
    </section>
  )
}
