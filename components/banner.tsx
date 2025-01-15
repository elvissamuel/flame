import { Button } from '@/components/ui/button'

export function Banner() {
  return (
    <div className="bg-cover bg-center text-white h-[420px] flex items-center justify-center" style={{
      backgroundImage: `url('/about-img.png')`,
    }}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          
          <div className='flex flex-col items-center justify-center'>
            <h2 className="text-4xl font-bold mb-2 md:w-[700px] text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h2>
            
            <Button className="bg-[#FF9F00] text-white hover:bg-amber-600">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

