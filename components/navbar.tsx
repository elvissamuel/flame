'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "#", label: "HOME" },
    { href: "#", label: "ABOUT" },
    { href: "#", label: "SERVICES" },
    { href: "#", label: "BLOG" },
    { href: "#", label: "FAQ" },
    { href: "#", label: "CONTACT US" },
  ]

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-4 py-6">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-white text-2xl font-bold">
          <Image src={"/flame-logo.png"} alt='flame-logo' width={100} height={100} />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-white hover:text-amber-400"
            >
              {link.label}
            </Link>
          ))}
          <Button className="bg-[#FF9F00] text-white hover:bg-amber-600">
            DONATE
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" className="text-white hover:bg-white/10">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-gray-900/95 border-gray-800">
            <div className="flex flex-col gap-6 mt-10">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-white hover:text-amber-400 text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button className="bg-[#FF9F00] text-white hover:bg-amber-600 w-full">
                DONATE
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}

