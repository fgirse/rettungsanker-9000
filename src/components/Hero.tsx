import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'

import config from '@/payload.config'
import type { Media, Page } from '@/payload-types'
import '@/app/(frontend)/styles.css'
import ProductOfTheMonth from '@/components/productOfTheMonth'
import Marquee from '@/components/MarqueeCooperateComp'

export default async function HeroSection() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  // Fetch the page data
  const { docs: pages } = await payload.find({
    collection: 'pages',
    where: {
      slug: { equals: 'home' },
    },
    depth: 2,
  })

  const page = pages[0] as Page | undefined
  const hero = page?.home

  if (!hero) {
    return (
      <div className="hero-section" style={{ padding: '40px', textAlign: 'center' }}>
        <h1>Hero content not found</h1>
        <p>Please create a page with slug home in the Payload admin panel</p>
      </div>
    )
  }

  const backgroundImageDesktop = hero?.backgroundImageDesktop as Media | undefined
  const backgroundImageMobile = hero?.backgroundImageMobile as Media | undefined
  const logoAlt = hero?.LogoAlt as Media | undefined

  return (
    <>
      <div className="hero-section">
        {/* Background Images */}
        {backgroundImageDesktop?.url && (
          <div className="hero-background hero-background-desktop">
            <Image
              src={backgroundImageDesktop.url}
              alt={backgroundImageDesktop.alt || 'Hero background'}
              fill
              style={{ objectFit: 'contain', objectPosition: 'center' }}
              priority
              quality={100}
            />
          </div>
        )}
        {backgroundImageMobile?.url && (
          <div className="hero-background hero-background-mobile">
            <Image
              src={backgroundImageMobile.url}
              alt={backgroundImageMobile.alt || 'Hero background mobile'}
              fill
              style={{ objectFit: 'contain', objectPosition: 'center' }}
              priority
              quality={100}
            />
          </div>
        )}

        {/* Hero Content */}
        <div className="hero-content ">
          {logoAlt?.url && (
            <div className="mt-[-52vh] md:mt-[-45vh] fade-in lg:hidden ">
              <Image
                alt={logoAlt.alt || 'Logo'}
                height={logoAlt.height || 100}
                src={logoAlt.url}
                width={logoAlt.width || 100}
                className="lg:hidden"
              />
            </div>
          )}
          {hero.Header_1 && (
            <p className=" relative top-0 text-[28vw] lg:text-[24vw] text-amber-50 headingE  fade-in lg:top-5">
              {hero.Header_1}
            </p>
          )}
          {hero.Header_2 && (
            <p className="relative -top-12 md:-top-20 text-[7.33vw] headingA text-shadow-black text-red-700 fade-in lg:top-[-22vh]">
              {hero.Header_2}
            </p>
          )}
        </div>
        <div className="mt-[40vh] lg:mt-[40vh]">
          <ProductOfTheMonth />
        </div>
      </div>
      <Marquee />
    </>
  )
}
