import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/hero-bg.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative container mx-auto h-full flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl mb-6">
          FEMI LAZARUS MINISTRIES
          <br />
          APOSTOLIC MINISTRIES ECUMENICAL
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8 text-gray-200">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed quis lectus turpis. Nunc aliquam mauris quam, 
          et malesuada velit aliquet eu.
        </p>
        <Button className="bg-[#FF9F00] text-white hover:bg-amber-600 text-lg px-8 py-6">
          GET STARTED
        </Button>
      </div>
    </div>
  )
}

