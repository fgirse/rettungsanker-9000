'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import styles from '@/styles'
import { fadeIn, staggerContainer } from '../utils/motion'
import { TypingText } from './CustomTexts'
import { RichText } from '@payloadcms/richtext-lexical/react'
import type { About as AboutType } from '@/payload-types'

interface AboutClientProps {
  about: AboutType
}

export default function AboutClient({ about }: AboutClientProps) {
  return (
    <section id="section-about" className={`${styles.paddings} relative z-10 mt-12`}>
      <div className="gradient-02 z-0"></div>
      <motion.div
        variants={staggerContainer() as any}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <TypingText
          title="| about us"
          textStyles="text-yellow-500 text-center mt-[7vh] lg:mt-[0vh]"
        />

        <motion.div
          variants={fadeIn('up', 'tween', 0.2, 1) as any}
          className="mt-2 font-normal sm:text-[32px] text-[20px] text-center text-gray-500"
        >
          <p className="font-sans text-[2.5rem] md:text-[3rem] lg:text-[7.0rem] font-extrabold text-yellow-500 text-center">
            {about.title_about}
          </p>
          {about.image__title_about &&
            typeof about.image__title_about !== 'string' &&
            about.image__title_about.url && (
              <div className="w-36 h-36 md:w-[20vw] lg:w[20vh]">
                <Image
                  src={about.image__title_about.url}
                  height={320}
                  width={230}
                  alt={about.image__title_about.alt || 'Leuchtturm'}
                  className="shape-lighthouse h-54 w-60"
                  unoptimized={about.image__title_about.url.endsWith('.svg')}
                  onError={(e) => {
                    console.error('Title image failed to load:', about.image__title_about.url, e)
                  }}
                />
              </div>
            )}

          <div className="w-[90vw] -mt-12 text-[1rem] md:text-[1.66rem] px-5 text-gray-300  lg:leading-12 lg:text-[3.0rem] font-sans text-justify">
            <RichText data={about.content_about} />
          </div>

          {about.image_about && typeof about.image_about !== 'string' && about.image_about.url && (
            <div className="flex flex-row justify-center items-center gap-x-5">
              <Image
                src={about.image_about.url}
                height={80}
                width={60}
                alt={about.image_about.alt || 'Portrait Michael Schreck'}
                className="mt-5 rounded-full portraitMick"
                unoptimized={about.image_about.url.endsWith('.svg')}
                onError={(e) => {
                  console.error('Portrait image failed to load:', about.image_about.url, e)
                }}
              />
              <p className=" font-sans text-gray-300 text-[1.2rem] md:text-[1.66rem] lg:text-[3.00rem]">
                Michael Schreck <br />
                und
                <br /> das Team des Rettungsankers
              </p>
            </div>
          )}
        </motion.div>
        <div className="flex flex-col items-center justify-center">
          <button
            className="lg-justify-between relative mx-auto mb-5 mt-6 flex w-52 flex-row items-center justify-center gap-x-3 rounded-lg border border-white bg-yellow-500 px-4 py-2 font-sans text-2xl font-medium  text-gray-200 transition delay-150 duration-300 ease-in-out hover:-translate-y-1  hover:scale-110 hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 md:text-3xl lg:mb-20 lg:flex lg:w-80 lg:flex-row lg:items-center lg:text-2xl xl:mt-2"
            type="button"
          >
            <svg
              className="w-20 lg:w-24 "
              fill="#ffdd50"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <a className="ui btn" href="mailto:rettungsanker-freiburg@gmx.de?">
              email
            </a>{' '}
          </button>
        </div>
        <p className="text-yellow-500 text-center">scrolling down</p>
        <motion.img
          variants={fadeIn('up', 'tween', 0.3, 1) as any}
          src="/Assets/Img/arrow-down.svg"
          alt="arrow down"
          className="w-4.5 h-7 object-contain mt-7"
        />
      </motion.div>
    </section>
  )
}
