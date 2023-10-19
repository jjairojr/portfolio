'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from './section-heading'
import { useSectionInView } from '../hooks/useSectionView'
import Image from 'next/image'

export function About() {
  const { ref } = useSectionInView('About')

  return (
    <motion.section
      ref={ref}
      id="about"
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-56 scroll-mt-28 relative"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.2,
      }}
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-3 text-justify">
        Seasoned <span className="font-medium">full-stack developer</span> with
        over 5 years of dedicated experience in{' '}
        <span className="font-medium">
          web development and software engineering.
        </span>{' '}
        Proficient in crafting management solutions for{' '}
        <span className="font-medium">scalable and resilient </span>
        applications, I specialize in utilizing a diverse range of technologies,
        including{' '}
        <span className="font-medium text-[#FF6161]">
          React, React Native, Next.js, NodeJS, and Electron
        </span>
        , among others. My expertise spans across various domains, rigorous
        testing methodologies, and the development of both{' '}
        <span>backend and frontend systems,</span>
        as well as mobile applications. I thrive on tackling complex challenges
        head-on, consistently delivering effective solutions.
      </p>

      <Image
        src="/me.svg"
        alt="figure about me"
        width={200}
        height={200}
        className="hidden sm:absolute right-0"
      />
    </motion.section>
  )
}
