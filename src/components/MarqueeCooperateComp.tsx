'use client'

import { Marquee } from '@devnomic/marquee'
import '@devnomic/marquee/dist/index.css'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import type { Media } from '@/payload-types'

interface Partner {
  name?: string
  logo: string | Media
  width?: number
  height?: number
}

export default function MarqueeCooperateComp() {
  const [partners, setPartners] = useState<Partner[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await fetch('/api/partners')
        if (response.ok) {
          const data = await response.json()
          setPartners(data.partners || [])
        }
      } catch (error) {
        console.error('Failed to fetch partners:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPartners()
  }, [])

  // Don't render on server to avoid hydration issues
  if (!mounted || isLoading) {
    return (
      <div className="w-full overflow-hidden flex flex-col items-center">
        <div className="py-8 opacity-0">
          <div className="mr-36">
            <div style={{ width: 240, height: 80 }} />
          </div>
        </div>
      </div>
    )
  }

  // Fallback to static images if no partners in CMS
  if (partners.length === 0) {
    return (
      <div className="w-full overflow-hidden flex flex-col items-center">
        <Marquee fade={true} pauseOnHover={true} className="py-8">
          <div className="mr-36">
            <Image src="/Assets/Img/LogoNeu.png" alt="LogoNeu" width={240} height={80} />
          </div>
          <div className="mr-36">
            <Image src="/Assets/Svg/LogoFlens2.svg" alt="LogoFlens" width={240} height={80} />
          </div>
          <div className="mr-36">
            <Image src="/Assets/Img/Astra.webp" alt="LogoAstra" width={240} height={80} />
          </div>
        </Marquee>
      </div>
    )
  }

  return (
    <div className=" w-full overflow-hidden">
      <Marquee fade={true} pauseOnHover={true} className="py-8">
        {partners.map((partner, index) => {
          const logo = partner.logo as Media
          const logoUrl = typeof partner.logo === 'string' ? `/media/${partner.logo}` : logo?.url

          if (!logoUrl) return null

          return (
            <div key={index} className="mr-36">
              <Image
                src={logoUrl}
                alt={partner.name || 'Partner logo'}
                width={partner.width || 240}
                height={partner.height || 80}
              />
            </div>
          )
        })}
      </Marquee>
    </div>
  )
}
