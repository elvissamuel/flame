import Image from 'next/image'
import { Button } from '@/components/ui/button'

interface ServiceCardProps {
  title: string;
  description: string;
}

export function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <div className="relative h-48 mb-4">
        <Image
          src="/about-img2.png"
          alt={title}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Button 
        variant="link" 
        className="text-[#FF9F00] hover:text-amber-600 px-0"
      >
        MORE
      </Button>
    </div>
  )
}

