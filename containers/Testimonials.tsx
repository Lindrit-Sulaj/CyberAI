"use client"
import React, { useState } from 'react'
import { Quote, ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Testimonial {
  name: string;
  text: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "John Doe",
    text: "CyberAI's AI-powered solutions have given us the confidence to protect our data. Their team's expertise is unmatched, and their support is top-notch.",
    image: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=2000",
  },
  {
    name: "Jane Smith",
    text: "Choosing CyberAI was one of the best decisions for our business. Their real-time threat detection has saved us from potential cyberattacks multiple times.",
    image: "https://media.istockphoto.com/id/1200677760/photo/portrait-of-handsome-smiling-young-man-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=g_ZmKDpK9VEEzWw4vJ6O577ENGLTOcrvYeiLxi8mVuo=",
  },
  {
    name: "Mike Johnson",
    text: "We trust CyberAI to secure our sensitive information. Their data encryption solutions have been instrumental in safeguarding our clients' data.",
    image: "https://media.istockphoto.com/id/471947590/photo/its-time-to-get-serious.jpg?s=170667a&w=0&k=20&c=tMH2jGGvhgC42UgApE7-R7cGl83GIt8ylHXQh7PRnWQ=",
  },
];


export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const testimonial = testimonials[currentIndex]

  function handleNext() {
    if (currentIndex === testimonials.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1)
    }
  }

  function handlePrev() {
    if (currentIndex === 0) {
      setCurrentIndex(testimonials.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1)
    }
  }

  return (
    <section className="testimonials px-4 my-14">
      <div className="max-w-screen-xl mx-auto">
        <p className="font-medium text-green-600 text-center lg:text-lg">Testimonials</p>
        <h2 className='font-bold text-2xl md:text-3xl mt-1 text-center'>What they say about us</h2>
        <div className="testimonial mt-6">
          <div className="flex justify-center text-blue-600"><Quote /></div>
          <p className='text-center max-w-xl mx-auto mt-2 mb-2 md:text-[17px] lg:text-lg'>{testimonial.text}</p>
          <div className='flex gap-4 justify-center items-center'>
            <img className='w-14 h-14 rounded-full object-cover' src={testimonial.image} alt={testimonial.name} />
            <p className='font-medium text-[17px]'>{testimonial.name}</p>
          </div>
        </div>
        <div className="flex gap-2 justify-center mt-4">
          <Button onClick={handlePrev} size="icon" className='text-zinc-500 bg-zinc-200 hover:text-zinc-200 hover:bg-blue-500'>
            <ArrowLeft />
          </Button>
          <Button onClick={handleNext} size="icon" className='text-zinc-500 bg-zinc-200 hover:text-zinc-200 hover:bg-blue-500'>
            <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  )
}
