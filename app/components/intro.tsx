'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa'
import { useSectionInView } from '../hooks/useSectionView'
import { mainSkills } from '../lib/data'

export function Intro() {
  const { ref } = useSectionInView('Home', 0.5)

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 text-center sm:mb-0 scroll-mt-[100rem] h-screen flex flex-col items-center justify-center"
    >
      <div className="sm:flex sm:items-center sm:justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.2,
            }}
          >
            <Image
              src="/coffee.svg"
              alt="Cartoon Jairo"
              quality="95"
              width={800}
              height={800}
              priority={true}
            />
          </motion.div>
        </div>
        <div>
          <motion.h1
            className="mb-10 mt-4 px-4 text-4xl font-bold leading-[1.5] sm:text-6xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div>
              Hello, I'm <span className="text-[#FF6161]">Jairas.</span>
            </div>
            <div className="w-full h-[0.1rem] bg-red-100 my-2 rounded-full"></div>
            <div className="text-2xl sm:text-4xl">
              <div>full-stack developer with</div>
              <div>
                <span className="text-[#FF6161]">5 years</span>
                <span> of experience</span>
              </div>
            </div>
          </motion.h1>

          <motion.div
            className="text-gray-700 text-2xl sm:text-1xl font-medium"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Main <span className="text-[#FF6161]">{'<techs />'}</span>
            <ul className="flex items-center justify-center gap-5 mt-4">
              {mainSkills.map((skill) => (
                <div key={skill.name}>
                  <li className="bg-white p-4 w-14 h-14 text-gray-700 rounded-full flex items-center border border-black/10">
                    {<skill.icon />}
                  </li>
                  <span className="text-sm">{skill.name}</span>
                </div>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="flex flex-row items-center justify-center gap-2 px-4 text-lg font-medium mt-10"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          className="group bg-white p-4 text-gray-400 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110
          active:scale-105 transition border border-black/10"
          href="/CV.pdf"
          download
        >
          Download CV{' '}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 w-14 h-14 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15]
          hover:text-gray-950 hover:scale-[1.15] active:scale-105 transition border border-black/10 cursor-pointer"
          href="https://linkedin.com/in/jjairo"
          target="_blank"
        >
          <BsLinkedin size={21} />
        </a>

        <a
          className="bg-white p-4 w-14 h-14 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15]
          hover:text-gray-950 hover:scale-[1.15] active:scale-105 transition border border-black/10 cursor-pointer"
          href="https://github.com/jjairojr"
          target="_blank"
        >
          <FaGithubSquare size={25} />
        </a>
      </motion.div>
    </section>
  )
}
