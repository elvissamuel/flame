import { Button } from '@/components/ui/button'
import { Phone } from 'lucide-react'

export function Contact() {
  return (
    <div className="bg-gray-900 text-white py-20 mt-10"
    style={{
      backgroundImage: `url('/contact-img.png')`,
    }}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-[#FF9F00] text-center p-8 rounded-lg h-[350px] w-[70%] -mt-32">
            <div className="flex flex-col items-center gap-4 mb-6">
              <Phone size={30} />
              <h3 className="text-2xl font-bold">LOREM IPSUM</h3>
            </div>
            <p className="text-lg font-bold mb-4">00 0987 7676</p>
            <p className="text-sm opacity-90">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nunc aliquam mauris quam, et malesuada velit aliquet eu.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-2">GET IN TOUCH</h2>
            <h3 className="text-xl mb-6">Don&apos;t hesitate to contact us</h3>
            <p className="text-gray-300 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed quis lectus turpis. Nunc aliquam mauris quam, 
              et malesuada velit aliquet eu.
            </p>
            <Button className="bg-[#FF9F00] text-white hover:bg-amber-600">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

