"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { AlignJustify, X } from 'lucide-react'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from './ui/dropdown-menu'
import { Button } from './ui/button'
import { AnimatePresence, motion } from 'framer-motion'

export default function Navbar() {
  const [mobile, setMobile] = useState<boolean>(false)

  return (
    <nav className='absolute top-0 h-[67px] w-full px-6 text-white'>
      <div className="h-full flex justify-between items-center w-full max-w-screen-xl mx-auto">
        <h2 className='font-bold text-2xl'>
          <Link href="/">
            Cyber<span className='text-green-500'>AI</span>
          </Link>
        </h2>
        <ul className='hidden md:flex gap-6 items-center'>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger>Services</DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/">Advanced Threat Detection</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/">Intelligent Data Encryption</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/">Security Monitoring</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/">Cybersecurity Consulting</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
          <li>
            <Button id="contact" className='bg-blue-600 hover:bg-blue-600/80'>
              <Link href="/">
                Contact
              </Link>
            </Button>
          </li>
        </ul>
        <Button onClick={() => setMobile(!mobile)} size="icon" variant="ghost" className='md:hidden'>
          <AlignJustify />
        </Button>
      </div>

      <Mobile isOpened={mobile} close={() => setMobile(false)} />
    </nav>
  )
}

function Mobile({ isOpened, close }: { isOpened: boolean, close: () => void }) {
  return (
    <AnimatePresence>
      {isOpened && (
        <motion.div
          className='h-screen w-full flex flex-col justify-center top-0 fixed left-0 bg-slate-800 p-6'
          initial={{ x: '-100vw ' }}
          animate={{ x: 0, transition: { type: 'just' } }}
          exit={{ x: '-100vw', transition: { type: "just" } }}>
          <button onClick={close} className='absolute top-6 right-6'>
            <X size={30} />
          </button>
          <h2 className='font-bold text-2xl text-center'>
            <Link href="/">
              Cyber<span className='text-green-500'>AI</span>
            </Link>
          </h2>
          <ul className='flex flex-col justify-center mt-8 gap-6 items-center'>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger>Services</DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href="/">Advanced Threat Detection</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/">Intelligent Data Encryption</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/">Security Monitoring</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/">Cybersecurity Consulting</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li>
              <Button id="contact" className='bg-blue-600 hover:bg-blue-600/80'>
                <Link href="/">
                  Contact
                </Link>
              </Button>
            </li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  )
}