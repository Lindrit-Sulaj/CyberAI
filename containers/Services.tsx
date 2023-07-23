import React from 'react'
import { AlertTriangle, Braces, MonitorCheck } from 'lucide-react';
import Service from '@/components/Service';

export interface Service {
  service: string;
  description: string;
  icon: React.ReactNode
}

const services: Service[] = [
  {
    service: "Comprehensive Threat Detection",
    description: "Utilizing advanced AI algorithms, we provide comprehensive threat detection services to identify and neutralize various cyber risks.",
    icon: <AlertTriangle className='text-green-500' size={34} />,
  },
  {
    service: "Data Protection and Encryption",
    description: "Our AI-powered encryption solutions ensure the protection of your valuable data, keeping it secure from potential unauthorized access.",
    icon: <Braces className='text-green-500' size={34} />,
  },
  {
    service: "Continuous Security Monitoring",
    description: "With our 24/7 security monitoring, we offer continuous surveillance and timely responses to potential security incidents.",
    icon: <MonitorCheck className='text-green-500' size={34} />,
  },
];

export default function Services() {
  return (
    <section className="services px-4 relative py-10 my-10">
      <div className="absolute top-0 left-0 w-full h-2/3 bg-zinc-100 opacity-60 -z-50"></div>
      <div className="max-w-screen-xl mx-auto z-50">
        <p className='font-medium lg:text-[17px] text-green-600 text-center'>Services</p>
        <h2 className='font-bold text-2xl md:text-3xl lg:text-4xl text-center'>Discover how we protect you</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-6">
          { services.map((service, index) => (
            <Service {...service} index={index} key={service.service} />
          ))}
        </div>
      </div>
    </section>
  )
}
