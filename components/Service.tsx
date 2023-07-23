import React from 'react';
import type { Service } from '@/containers/Services';
import Link from 'next/link';
import { Button } from './ui/button';

export default function Service({ service, description, icon, index }: Service & { index: number }) {
  return (
    <div className={`border border-solid border-zinc-200 flex flex-col items-start lg:h-[260px] p-6 ${index === 0 ? "mt-0" : (index === 1) ? "lg:mt-4" : "lg:mt-8"}`}>
      {icon}
      <h4 className='font-semibold text-[19px] mt-4'>{service}</h4>
      <p className='text-neutral-600 mt-2'>{description}</p>
      <Button variant="link" className='mt-auto px-0'>
        <Link href={'/'}>Learn more</Link>
      </Button>
    </div>
  )
}
