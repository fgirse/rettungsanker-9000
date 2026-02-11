import HeroSection from '@/components/Hero'
import MarqueeCooperateComp from '@/components/MarqueeCooperateComp'
import About from '@/components/About'
import Photogallery from '@/components/PhotoGallery'
import Bento from "@/components/GridLayout3";

import Team from "@/components/Team";

export default function Home() {
  return (
    <>
      <HeroSection />
        <About />
        <Bento/>
        <Photogallery />
        <Team />
    </>
  )
}
