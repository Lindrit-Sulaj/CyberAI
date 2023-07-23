import React from 'react'
import Benefit from '@/components/Benefit'
import { Shield, Target, Lock } from 'lucide-react';

const containers: { title: string; icon: React.ReactNode; description: string }[] = [
  {
    title: "Enhanced Security Efficiency",
    icon: <Shield className='text-green-500' size={30} />,
    description:
      "Our AI-powered solutions offer security processes, efficiency and protection against cyber threats.",
  },
  {
    title: "Proactive Threat Mitigation",
    icon: <Target className='text-green-500' size={30} />,
    description:
      "We proactively identify and neutralize potential risks, preventing breaches before they occur.",
  },
  {
    title: "Peace of Mind Cyber Defense",
    icon: <Lock className='text-green-500' size={30} />,
    description:
      "Partner with us for 24/7 expert monitoring and management, providing peace of mind.",
  },
];

export default function Benefits() {
  return (
    <section className="benefits px-4">
      <div className="w-full mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 -mt-14 bg-white rounded-md overflow-hidden">
        {containers.map(container => (
          <Benefit {...container} key={container.title} />
        ))}
      </div>
    </section>
  )
}
