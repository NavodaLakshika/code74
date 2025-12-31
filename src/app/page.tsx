import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Industries from '@/components/sections/Industries'
import Process from '@/components/sections/Process'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'
import About from '@/components/sections/About'
import Videosection from '@/components/sections/Videosection'
import HolidayPlanner from '@/components/sections/HolidayPlanner'

export default function Home() {
  return (
    <>
      <Hero />
      <About/>
      <Services />
      <HolidayPlanner />
      <Videosection />
      <Industries />
      <Process />
      <Testimonials />
      <Contact />
    </>
  )
}