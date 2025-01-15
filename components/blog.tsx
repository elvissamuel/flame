import { BlogCard } from './blog-card'

export function Blog() {
  return (
    <div className="py-20 bg-[#FFF8F3]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#FF9F00] font-medium mb-2 block">LOREM IPSUM</span>
          <h2 className="text-3xl font-bold">LOREM IPSUM</h2>
          <div className="w-24 h-1 bg-[#FF9F00] mx-auto mt-2" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <BlogCard title="Lorem ipsum" />
          <BlogCard title="Lorem ipsum" />
          <BlogCard title="Lorem ipsum" />
        </div>

        <div className="flex justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#FF9F00]" />
          <div className="w-2 h-2 rounded-full bg-gray-300" />
          <div className="w-2 h-2 rounded-full bg-gray-300" />
        </div>
      </div>
    </div>
  )
}

