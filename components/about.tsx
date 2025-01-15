import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function About() {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[600px]">
            <Image
              src="/about-img.png"
              alt="About us"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div>
            <span className="text-[#FF9F00] font-medium mb-2 block">ABOUT US</span>
            <h2 className="text-3xl font-bold mb-6">
              LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.
            </h2>
            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lectus turpis. Nunc
              aliquam mauris quam, et malesuada velit aliquet eu. Phasellus pulvinar elit ac leo
              pharetra convallis. Aliquam venenatis enim vel dolor laoreet convallis.
            </p>
            <Button className="bg-[#FF9F00] text-white hover:bg-amber-600">
              MORE
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

