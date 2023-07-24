import React from 'react'
import { Button } from '@/components/ui/button'
import { UserCheck, BrainCircuit, FolderLock, MessagesSquare } from 'lucide-react'

export default function WhyUs() {
  return (
    <section className="why__us px-4 py-20 lg:py-36 my-10 bg-slate-800 text-white">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-y-8">
        <div className="w-full lg:w-1/2">
          <p className='font-medium lg:text-[17px] text-green-300'>Why choose us</p>
          <h2 className='font-bold text-2xl md:text-3xl lg:text-4xl mt-2'>What sets us apart?</h2>
          <p className='max-w-xl mt-2'>We distinguish ourselves with a team of cybersecurity experts committed to safeguarding your digital assets. Our cutting-edge AI-driven security solutions stay ahead of evolving threats, providing you with the peace of mind you deserve.</p>
          <Button variant="outline" className='mt-4'>Get Started</Button>
        </div>
        <div className="w-full lg:w-1/2 grid grid-cols-2 place-content-center gap-y-8 gap-x-2">
          <div>
            <UserCheck size={38} className='bg-blue-500 rounded-md p-2' />
            <h4 className='font-medium lg:text-lg mt-2'>Client first approach</h4>
          </div>
          <div>
            <BrainCircuit size={38} className='bg-blue-500 rounded-md p-2' />
            <h4 className='font-medium lg:text-lg mt-2'>AI-Driven Security</h4>
          </div>
          <div>
            <FolderLock size={38} className='bg-blue-500 rounded-md p-2' />
            <h4 className='font-medium lg:text-lg mt-2'>Trusted Cybersecurity Experts</h4>
          </div>
          <div>
            <MessagesSquare size={38} className='bg-blue-500 rounded-md p-2' />
            <h4 className='font-medium lg:text-lg mt-2'>Exceptional Support</h4>
          </div>
        </div>
      </div>
    </section>
  )
}
