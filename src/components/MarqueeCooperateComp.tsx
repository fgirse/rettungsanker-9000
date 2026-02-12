'use client'

import { Marquee } from '@devnomic/marquee'
import '@devnomic/marquee/dist/index.css'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import type { Media } from '@/payload-types'
import LogoNeu from '../../public/Assets/Svg/image1.svg';
import LogoFlens from '../../public/Assets/Svg/LogoFlens2.svg';
import LogoAstra from '../../public/Assets/Svg/AstraLogo.svg';

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
        <div className="py-8 opacity-0">
          <div className="">
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
          <div className="mr-6">
            <Image src={LogoNeu} alt="LogoNeu" width={240} height={80} />
          </div>
          <div className="mr-6">
            <Image src={LogoFlens} alt="LogoFlens" width={240} height={80} />
          </div>
          <div className="mr-6">
            <Image src={LogoAstra} alt="LogoAstra" width={240} height={80} />
          </div>
        </Marquee>
      </div>
    )
  }

  return (
    <div className="mb-20 w-full overflow-hidden">
      <Marquee fade={true} pauseOnHover={true} className="py-8">
        {partners.map((partner, index) => {
          const logo = partner.logo as Media
          let logoUrl: string

          if (typeof partner.logo === 'string') {
            logoUrl = partner.logo.startsWith('/') ? partner.logo : `/media/${partner.logo}`
          } else if (logo?.url) {
            logoUrl = logo.url
          } else {
            console.warn('No logo URL for partner:', partner.name)
            return null
          }

          console.log('Rendering partner:', partner.name, 'URL:', logoUrl)

          return (
            <div key={index} className="mb-20 mx-8 flex items-center">
              <Image
                src={logoUrl}
                alt={partner.name || 'Partner logo'}
                width={partner.width || 240}
                height={partner.height || 80}
                style={{ width: 'auto', height: '80px' }}
                unoptimized={logoUrl.endsWith('.svg')}
              />
            </div>
          )
        })}
      </Marquee>
    </div>
  )
}
