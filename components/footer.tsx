import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12">
          {/* About Column */}
          <div>
            <h3 className="text-[#FF9F00] font-bold mb-6">ABOUT FLAME</h3>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed quis lectus turpis.
            </p>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="text-[#FF9F00] font-bold mb-6">LOREM IPSUM</h3>
            <ul className="space-y-3 text-gray-300">
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
            </ul>
          </div>

          {/* Recent Posts Column */}
          <div>
            <h3 className="text-[#FF9F00] font-bold mb-6">LOREM IPSUM</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12">
                  <Image
                    src="/GMs0g.png"
                    alt="Profile"
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <div>
                  <p className="font-medium">Lorem Ipsum</p>
                  <p className="text-sm text-gray-400">5th January 2025</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12">
                  <Image
                    src="/GMs0g.png"
                    alt="Profile"
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <div>
                  <p className="font-medium">Lorem Ipsum</p>
                  <p className="text-sm text-gray-400">8th January 2025</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="text-[#FF9F00] font-bold mb-6">LOREM IPSUM</h3>
            <p className="text-gray-300 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed quis lectus turpis.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 px-4 py-2 rounded bg-white/10 border border-gray-700 focus:outline-none focus:border-[#FF9F00]"
              />
              <Button className="bg-[#FF9F00] text-white hover:bg-amber-600">
                Signup
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

