import React from 'react'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import { getMarqueeLogos } from '@/collections/marquee/queries'
import type { Media } from '@/payload-types'

const MarqueeComponent = async () => {
  const marqueeData = await getMarqueeLogos()

  console.log('=== MARQUEE DEBUG ===')
  console.log('Full data:', JSON.stringify(marqueeData, null, 2))

  // Fallback logos
  const fallbackLogos = [
    { src: '/Assets/Svg/faviconLogoNeu.svg', alt: 'Logo Neu', width: 144, height: 32 },
    { src: '/Assets/Svg/AstraLogo.svg', alt: 'Astra Logo', width: 144, height: 32 },
    { src: '/Assets/Svg/LogoFlens.svg', alt: 'Flens Logo', width: 144, height: 32 },
  ]

  let displayLogos = [...fallbackLogos]

  // Extract logos from CMS if available
  if (marqueeData?.marquee) {
    const { LogoNeu, LogoAstra, LogoFlens } = marqueeData.marquee
    const cmsLogos = []

    const extractMedia = (media: string | Media | null | undefined, defaultAlt: string) => {
      if (!media || typeof media === 'string') return null

      const url = media.url || (media.filename ? `/api/media/file/${media.filename}` : null)
      if (!url) return null

      return {
        src: url,
        alt: media.alt || defaultAlt,
        width: media.width || 100,
        height: media.height || 25,
      }
    }

    const neu = extractMedia(LogoNeu, 'Logo Neu')
    const astra = extractMedia(LogoAstra, 'Astra Logo')
    const flens = extractMedia(LogoFlens, 'Flens Logo')

    if (neu) cmsLogos.push(neu)
    if (astra) cmsLogos.push(astra)
    if (flens) cmsLogos.push(flens)

    if (cmsLogos.length > 0) {
      // Duplicate for smooth scrolling
      displayLogos = [...cmsLogos, ...cmsLogos]
      console.log('Using CMS logos:', cmsLogos)
    } else {
      console.log('No valid CMS logos found, using fallback')
    }
  } else {
    console.log('No marquee data found, using fallback')
  }

  return (
    <Marquee speed={50} gradient={false}>
      <div className="flex items-center gap-32">
        {displayLogos.map((logo, index) => (
          <div
            key={`logo-${index}`}
            className="relative"
            style={{ width: logo.width, height: logo.height }}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="object-contain"
              unoptimized={logo.src.endsWith('.svg')}
            />
          </div>
        ))}
      </div>
    </Marquee>
  )
}

export default MarqueeComponent
