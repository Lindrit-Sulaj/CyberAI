import React from 'react'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function AboutUs() {
  return (
    <section className="aboutus px-4 my-12">
      <div className="max-w-screen-xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-6">
        <div className="grid grid-cols-2 gap-4 w-full lg:w-[45%]">
          <img className='h-[300px] md:h-[450px] w-full object-cover rounded-md' src="https://img.freepik.com/free-photo/back-view-dangerous-team-hackers-working-new-malware_482257-22976.jpg?w=1380&t=st=1690124352~exp=1690124952~hmac=efffb378597fb5b8b2dc420d4db4ddd9708e93e9bb96bcfa4bf166111cc20fde" alt="" />
          <img className='h-[300px] md:h-[450px] w-full object-cover rounded-md mt-8' src="https://img.freepik.com/free-photo/team-working-animation-project_23-2149269901.jpg?w=740&t=st=1690124569~exp=1690125169~hmac=a7e0a5410ba19ddb19572830e87933a223051e145c9bfe462aa6b8952adc573f" alt="" />
        </div>
        <div className='w-full lg:w-[55%]'>
          <p className='font-medium lg:text-[17px] text-green-600'>About Us</p>
          <h2 className='font-bold text-2xl lg:text-3xl'>Creating a cyber secure future</h2>
          <p className='mt-3 mb-2 max-w-xl text-neutral-700'>At CyberAI, we're on a mission to protect your digital world. With cutting-edge AI-powered cybersecurity solutions, we defend against threats and ensure your data stays safe. Partner with us for a secure future.</p>
          <ul className='flex flex-col gap-2 mt-4'>
            <li className='flex gap-2 itmes-center'>
              <Check className="text-green-500" /> Enhanced Security Efficiency
            </li>
            <li className='flex gap-2 itmes-center'>
              <Check className="text-green-500" /> Proactive Threat Mitigation
            </li>
            <li className='flex gap-2 itmes-center'>
              <Check className="text-green-500" /> 24/7 Cyber Defense
            </li>
          </ul>
          <Button className='bg-blue-600 mt-5 hover:bg-blue-600/80'>
            Learn more
          </Button>
        </div>
      </div>
    </section>
  )
}
