'use client'

import { Marquee } from '@devnomic/marquee'
import '@devnomic/marquee/dist/index.css'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import type { Media } from '@/payload-types'
import LogoFlens from '../../public/Assets/Svg/LogoFlens.svg'
import LogoNeu from '../../public/Assets/Img/LogoNeu.png'
import LogoAstra from '../../public/Assets/Svg/AstraLogo.svg'

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
          const text = await response.text()
          if (text) {
            const data = JSON.parse(text)
            console.log('Fetched partners:', data.partners)
            setPartners(data.partners || [])
          }
        } else {
          console.error('Failed to fetch partners, status:', response.status)
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
        <Marquee fade={true}>
          <section className="mt-[64vh] md:mt-[40vh] lg:mt-[19vh] flex items-center justify-center opacity-0">
            <div className="mr-36 py-32">
              <div style={{ width: 150, height: 80 }} />
            </div>
          </section>
        </Marquee>
      </div>
    )
  }

  // Fallback to static images if no partners in CMS
  if (partners.length === 0) {
    return (
      <Marquee fade={true}>
        <section className="mt-[64vh] md:mt-[40vh] lg:mt-[19vh] flex items-center justify-center">
          <div className="mr-36 py-32 ">
            <Image src={LogoNeu} alt="LogoNeu" width={150} height={80} />
          </div>
          <div className="mr-36 mt-2 ">
            <Image src={LogoFlens} alt="LogoFlens" width={250} height={100} />
          </div>
          <div className="mr-36 ">
            <Image src={LogoAstra} alt="LogoAstra" width={150} height={80} />
          </div>
        </section>
      </Marquee>
    )
  }

  // Render partners from Payload CMS
  return (
    <Marquee fade={true}>
      <section className="mt-[64vh] md:mt-[40vh] lg:mt-[19vh] flex items-center justify-center">
        {partners.map((partner, index) => {
          const logo = partner.logo as Media
          let logoUrl: string

          if (typeof partner.logo === 'string') {
            logoUrl = partner.logo.startsWith('/') ? partner.logo : `/media/${partner.logo}`
          } else if (logo?.url) {
            // Extract just the path from full URL if needed
            try {
              const url = new URL(logo.url, window.location.origin)
              logoUrl = url.pathname
            } catch {
              logoUrl = logo.url
            }
          } else {
            console.warn('No logo URL for partner:', partner.name)
            return null
          }

          console.log('Rendering partner:', partner.name, 'URL:', logoUrl)

          return (
            <div key={index} className="mr-36 py-32">
              <Image
                src={logoUrl}
                alt={partner.name || 'Partner logo'}
                width={partner.width || 150}
                height={partner.height || 80}
                style={{ width: 'auto', height: '80px' }}
                unoptimized={logoUrl.endsWith('.svg')}
                onError={(e) => {
                  console.error('Image failed to load for', partner.name, ':', logoUrl, e)
                }}
              />
            </div>
          )
        })}
      </section>
    </Marquee>
  )
}
