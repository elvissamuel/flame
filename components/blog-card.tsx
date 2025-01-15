import Image from 'next/image'
import Link from 'next/link'

interface BlogCardProps {
  title: string;
}

export function BlogCard({ title }: BlogCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="relative h-48">
        <Image
          src="/last-img.png"
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-medium mb-4">{title}</h3>
        <Link 
          href="#" 
          className="text-[#FF9F00] hover:text-amber-600"
        >
          Link
        </Link>
      </div>
    </div>
  )
}

