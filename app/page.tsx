import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { EventsSlider } from '@/components/events-slider'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { Contact } from '@/components/contact'
import { Blog } from '@/components/blog'
import { Footer } from '@/components/footer'
import { Banner } from '@/components/banner'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <EventsSlider />
      <About />
      <Banner />
      <Services />
      <Contact />
      <Blog />
      <Footer />
    </main>
  )
}