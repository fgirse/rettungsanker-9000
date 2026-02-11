import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Logo from '../../public/Assets/Img/LogoAlt.png'
import { cn } from '@/lib/utils'
import LogoNeu from '../../public/Assets/Img/LogoNeu.png'
import Lighthouse from '../../public/Assets/Img/Lighthouse3.png'
import Waves from '@/components/waves'

interface Footer12Props {
  className?: string
}

const Footer12 = ({ className }: Footer12Props) => {
  const navigation = [
    { name: 'Product', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Contact', href: '#' },
  ]

  const social = [
    { name: 'Twitter', href: '#' },
    { name: 'LinkedIn', href: '#' },
  ]

  const legal = [{ name: 'Privacy Policy', href: '#' }]

  return (
    <section className={cn('bg-stone-900 flex flex-col items-center gap-14 py-32', className)}>
      <nav className="container flex flex-col items-center gap-4">
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {navigation.map((item) => (
            <li key={item.name}>
              <a href={item.href} className="font-medium transition-opacity hover:opacity-75">
                {item.name}
              </a>
            </li>
          ))}
          {social.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="flex items-center gap-0.5 font-medium transition-opacity hover:opacity-75"
              >
                {item.name} <ArrowUpRight className="size-4" />
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {legal.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-sm text-muted-foreground transition-opacity hover:opacity-75"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-5 flex flex-col items-center justify-center">
        <Image src={LogoNeu} alt="Logo" width={128} height={128} priority className="mt-5 mb-12" />
        <div className="text-center text-[2rem] md:text-[4rem] lg:text-[10rem] headingA select-none pointer-events-none leading-none bg-gradient-to-br from-yellow-700/100 to-yellow-500/100 bg-clip-text text-transparent opacity-70 tracking-tighter">
          RETTUNGSANKER
        </div>
        <Image
          src={Lighthouse}
          alt="Lighthouse"
          width={50}
          height={50}
          priority
          className="mt-[4rem] relative right-36 z-10 mb-[-2rem] w-20 md:w-32 md:mb-[-3rem] md:right-60 lg:w-40 lg:mb-[-8rem] lg:right-[40vw]"
        />
        <div className="w-[100vw]">
          <Waves />
        </div>
      </div>
      <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
        <p
          className="text-center text-sm leading-loose text-muted-foreground"
          suppressHydrationWarning
        >
          &copy; {new Date().getFullYear()} MEDICUSDESIGN Basel 🇨🇭 All rights reserved.
        </p>
      </div>
    </section>
  )
}

export { Footer12 }
