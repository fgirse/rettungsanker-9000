import React from 'react'
import Image from 'next/image'
import LogoNeu from '../../public/Assets/Img/LogoAlt.png';
//import Marquee from '@/components/MarqueeCooperateComp';
import ProductOfTheMonth from '@/components/productOfTheMonth';

function Hero() {
  return (
    <section className='-mt-[5vh] bg-[url("/Assets/Img/lighthouse.png")] bg-contain bg-no-repeat bg-center lg:mt-0 lg:bg-[url("/Assets/Svg/5555.svg")] lg:bg-contain lg:bg-no-repeat lg:bg-center h-screen w-full flex flex-col items-center justify-center'>
      <div className='flex flex-col items-center'>
        <div className='relative top-[-30vh] w-[74vw] lg:hidden'>
        <Image src={LogoNeu} alt='LogoAlt' className=' ' />
        </div>
        <p className='mb-5 relative text-[45vw] headingE text-white text-center top-[-35vw] md:text-[13vw] lg:top-[1vw] lg:text-[22vw]'>die</p>
         <p className='relative text-[12vw] top-[-18vw] headingA text-red-800 text-center lg:text-[6vw] lg:top-[8vw]'>kiezkneipe</p>
      </div>
      <div className=' flex flex-col items-center justify-center'>
        <ProductOfTheMonth/>
      </div>
    
    </section>
  )
}

export default Hero