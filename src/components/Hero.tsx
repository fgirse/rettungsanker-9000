import React from 'react'
import Image from 'next/image'
import LogoNeu from '../../public/Assets/Img/LogoAlt.png';
import Marquee from '@/components/MarqueeCooperateComp';
import ProductOfTheMonth from '@/components/productOfTheMonth';

function Hero() {
  return (
    <section className='-mt-[5vh] bg-[url("/Assets/Img/lighthouse.png")] bg-contain bg-no-repeat bg-center lg:mt-0 lg:bg-[url("/Assets/Svg/5555.svg")] lg:bg-contain lg:bg-no-repeat lg:bg-center h-screen w-full flex flex-col items-center justify-center'>
      <div className='flex flex-col items-center'>
        <div className=' lg:hidden'>
        <Image src={LogoNeu} alt='LogoAlt' className='w-80 mt-[-2vh] md:w-[70vw] md:mt-[-5vh]' />
        </div>
        <p className='mb-8 text-[40vw] headingE text-white text-center lg:text-[22vw]'>die</p>
         <p className='relative text-[11vw] -top-[18vw] headingA text-red-800 text-center lg:text-[6vw] lg:top-[-11vw]'>kiezkneipe</p>
      </div>
      <div className=' flex flex-col items-center justify-center'>
        <ProductOfTheMonth/>
      </div>
      <div className="relative flex flex-col items-center justify-center top-[55vw] md:top-[46vw] lg:top-[10vw]">
      <Marquee />
      </div>
    </section>
  )
}

export default Hero