import React from 'react'
import { Hero, Benefits, AboutUs, Services, WhyUs, Cta, Testimonials } from '@/containers'

export default function Home() {
  return (
    <main>
      <Hero />
      <Benefits />
      <AboutUs />
      <Services />
      <WhyUs />
      <Testimonials />
      <Cta />
    </main>
  )
}
