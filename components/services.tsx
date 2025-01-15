import { ServiceCard } from './service-card'

export function Services() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold">LOREM IPSUM</h2>
          <div className="w-24 h-1 bg-[#FF9F00] mx-auto mt-2" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            title="Lorem Ipsum"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam mauris quam, et malesuada velit aliquet eu."
          />
          <ServiceCard
            title="Lorem Ipsum"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam mauris quam, et malesuada velit aliquet eu."
          />
          <ServiceCard
            title="Lorem Ipsum"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam mauris quam, et malesuada velit aliquet eu."
          />
        </div>
      </div>
    </div>
  )
}

