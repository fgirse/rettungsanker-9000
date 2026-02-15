import React from 'react'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import { getMarqueeLogos } from '@/collections/marquee/queries'

const MarqueeComponent = async () => {
  const marqueeData = await getMarqueeLogos()

  // Fallback logos if no data from CMS
  const fallbackLogos = [
    { src: '/Assets/Svg/faviconLogoNeu.svg', alt: 'Logo Neu' },
    { src: '/Assets/Svg/AstraLogo.svg', alt: 'Astra Logo' },
    { src: '/Assets/Svg/LogoFlens.svg', alt: 'Flens Logo' },
  ]

  // Extract logos from Payload CMS data
  const logos = []

  if (marqueeData?.marquee) {
    const { LogoNeu, LogoAstra, LogoFlens } = marqueeData.marquee

    if (LogoNeu && typeof LogoNeu !== 'string') {
      logos.push({
        src: LogoNeu.url || `/media/${LogoNeu.filename}`,
        alt: LogoNeu.alt || 'Logo Neu',
      })
    }

    if (LogoAstra && typeof LogoAstra !== 'string') {
      logos.push({
        src: LogoAstra.url || `/media/${LogoAstra.filename}`,
        alt: LogoAstra.alt || 'Astra Logo',
      })
    }

    if (LogoFlens && typeof LogoFlens !== 'string') {
      logos.push({
        src: LogoFlens.url || `/media/${LogoFlens.filename}`,
        alt: LogoFlens.alt || 'Flens Logo',
      })
    }
     if (LogoNeu && typeof LogoNeu !== 'string') {
      logos.push({
        src: LogoNeu.url || `/media/${LogoNeu.filename}`,
        alt: LogoNeu.alt || 'Logo Neu',
      })
    }

    if (LogoAstra && typeof LogoAstra !== 'string') {
      logos.push({
        src: LogoAstra.url || `/media/${LogoAstra.filename}`,
        alt: LogoAstra.alt || 'Astra Logo',
      })
    }

    if (LogoFlens && typeof LogoFlens !== 'string') {
      logos.push({
        src: LogoFlens.url || `/media/${LogoFlens.filename}`,
        alt: LogoFlens.alt || 'Flens Logo',
      })
    }
  }

  // Use fallback if no CMS data
  const displayLogos = logos.length > 0 ? logos : fallbackLogos

  return (
    <Marquee>
      <div className="flex items-center gap-32">
        {/* Repeat logos twice for seamless scrolling */}
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
        {displayLogos.map((logo, index) => (
          <Image
            key={`logo-repeat-${index}`}
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
