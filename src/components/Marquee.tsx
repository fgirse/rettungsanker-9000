import React from 'react'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import { getMarqueeLogos } from '@/collections/marquee/queries'

const MarqueeComponent = async () => {
  const marqueeData = await getMarqueeLogos()

  console.log('Marquee component - data received:', marqueeData)

  // Fallback logos if no data from CMS
  const fallbackLogos = [
    { src: '/Assets/Svg/faviconLogoNeu.svg', alt: 'Logo Neu' },
    { src: '/Assets/Svg/AstraLogo.svg', alt: 'Astra Logo' },
    { src: '/Assets/Svg/LogoFlens.svg', alt: 'Flens Logo' },
  ]

  // Extract logos from Payload CMS data
  const logos: Array<{ src: string; alt: string }> = []

  if (marqueeData?.marquee) {
    const { LogoNeu, LogoAstra, LogoFlens } = marqueeData.marquee

    console.log('Logo data:', { LogoNeu, LogoAstra, LogoFlens })

    // Helper to extract image URL
    const getImageUrl = (media: unknown) => {
      if (!media) return null
      if (typeof media === 'string') return null
      const mediaObj = media as { url?: string; filename?: string }
      return mediaObj.url || (mediaObj.filename ? `/media/${mediaObj.filename}` : null)
    }

    const logoNeuUrl = getImageUrl(LogoNeu)
    const logoAstraUrl = getImageUrl(LogoAstra)
    const logoFlensUrl = getImageUrl(LogoFlens)

    if (logoNeuUrl) {
      logos.push({
        src: logoNeuUrl,
        alt: (typeof LogoNeu !== 'string' && LogoNeu?.alt) || 'Logo Neu',
      })
    }

    if (logoAstraUrl) {
      logos.push({
        src: logoAstraUrl,
        alt: (typeof LogoAstra !== 'string' && LogoAstra?.alt) || 'Astra Logo',
      })
    }

    if (logoFlensUrl) {
      logos.push({
        src: logoFlensUrl,
        alt: (typeof LogoFlens !== 'string' && LogoFlens?.alt) || 'Flens Logo',
      })
    }

    // Repeat logos for continuous scroll effect
    const baseLogos = [...logos]
    logos.push(...baseLogos)
  }

  // Use fallback if no CMS data
  const displayLogos = logos.length > 0 ? logos : fallbackLogos

  console.log('Display logos:', displayLogos)

  return (
    <Marquee>
      <div className="flex items-center gap-32">
        {displayLogos.map((logo, index) => (
          <Image
            key={`logo-${index}`}
            src={logo.src}
            alt={logo.alt}
            width={144}
            height={32}
            className="object-contain"
          />
        ))}
      </div>
    </Marquee>
  )
}

export default MarqueeComponent
