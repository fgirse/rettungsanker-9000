"use client";

import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface DataItem {
  key: number;
  src: string;
  alt: string;
  href: string;
  width: number;
  height: number;
}

const DATA: DataItem[] = [
  {
    key: 1,
    src: "/Assets/Svg/AstraLogo.svg",
    alt: "Astra",
    href: "#",
    width: 64,
    height: 64,
  },
  {
    key: 2,
    src: "/Assets/Svg/LogoFlens.svg",
    alt: "Flens",
    href: "#",
    width: 64,
    height: 64,
  },
  {
    key: 3,
    src: "/Assets/Svg/LogoNeu.svg",
    alt: "LogoNeu",
    href: "#",
    width: 64,
    height: 64,
  },
  {
    key: 4,
    src: "/Assets/Svg/AstraLogo.svg",
    alt: "Astra",
    href: "#",
    width: 64,
    height: 64,
  },
  {
    key: 5,
    src: "/Assets/Svg/LogoFlens.svg",
    alt: "Flens",
    href: "#",
    width: 64,
    height: 64,
  },
  {
    key: 6,
    src: "/Assets/Svg/LogoNeu.svg",
    alt: "LogoNeu",
    href: "#",
    width: 64,
    height: 64,
  },
  {
    key: 7,
    src: "/Assets/Svg/AstraLogo.svg",
    alt: "Astra",
    href: "#",
    width: 64,
    height: 64,
  },
  {
    key: 8,
    src: "/Assets/Svg/LogoFlens.svg",
    alt: "Flens",
    href: "#",
    width: 64,
    height: 64,
  },
  {
    key: 9,
    src: "/Assets/Svg/LogoNeu.svg",
    alt: "LogoNeu",
    href: "#",
    width: 64,
    height: 64,
  },
  
  {
    key: 10,
    src: "/Assets/Svg/AstraLogo.svg",
    alt: "Astra",
    href: "#",
    width: 64,
    height: 64,
  },
  {
    key: 11,
    src: "/Assets/Svg/LogoFlens.svg",
    alt: "Flens",
    href: "#",
    width: 64,
    height: 64,
  },
  {
    key: 12,
    src: "/Assets/Svg/LogoNeu.svg",
    alt: "LogoNeu",
    href: "#",
    width: 64,
    height: 64,
  },
];

interface Integration2Props {
  className?: string;
}

const Integration2 = ({ className }: Integration2Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
       

        {/* Marquee Section */}
        <div className="relative my-20 overflow-hidden">
          <div className="flex w-full">
            {/* First marquee group */}
            <div className="flex shrink-0 animate-marquee items-center gap-4">
              {DATA.map((logo) => (
                <a
                  href={logo.href}
                  target="_blank"
                  key={logo.key}
                  className="p-4"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="object-contain transition-opacity hover:opacity-70"
                  />
                </a>
              ))}
            </div>
            {/* Second marquee group */}
            <div className="flex shrink-0 animate-marquee items-center gap-4">
              {DATA.map((logo) => (
                <a
                  href={logo.href}
                  target="_blank"
                  key={logo.key}
                  className="p-4"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="object-contain transition-opacity hover:opacity-70"
                  />
                </a>
              ))}
            </div>
          </div>
          {/* Gradient overlays */}
          <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-background to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-background to-transparent"></div>
        </div>

       
      </div>
    </section>
  );
};

export { Integration2 };



