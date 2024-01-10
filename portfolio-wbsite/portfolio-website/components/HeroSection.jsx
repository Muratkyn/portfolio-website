"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import Link from 'next/link';
import {motion} from 'framer-motion';


const HeroSection = () => {

  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-12 lg:mt-16'>
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='col-span-7 place-self-center text-center sm:text-left'>
          <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-cyan-700  to-cyan-900'>Hello! I'm{""}</span>
            <br></br>
            <TypeAnimation
                sequence={[
                  'Murat Koyun 👽',
                  1000,
                  'Frontend Developer 💻',
                  1000,
                ]}
                wrapper="span"
                speed={20}
                repeat={Infinity}
             />
            </h1>
          <p className='text-[#ADB7BE] mb-6 text-base sm:text-lg lg:text-xl'>
            Self-motivated and passionate Front-end React Developer based in Milan, Italy. 📍
          </p>

          <div>
            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-800 via-cyan-600 to-cyan-900 hover:bg-slate-200 text-white'>
            <Link href="https://www.linkedin.com/in/murat-koyun-69129727b/" >Hire me</Link>
            </button>
            <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br  from-blue-800 via-cyan-600 to-cyan-900 hover hover:bg-slate-800 text-white mt-3'>
              <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
                  <Link href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=muratk1845@gmail.com" download='download' >Contact</Link>
              </span>
            </button>
          </div>

        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }} 
          className='col-span-5 place-self-center mt-4 lg:mt-0'>
          <div className="rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] relative">
            <Image 
            src="/images/mk.png" 
            alt='murat'
            className=" rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            width={400} 
            height={400} 
            objectFit='fill'
            />
          </div>
        </motion.div>
        
      </div>
      <motion.div 
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      align="center" > 
        <ul className='block md:flex md:flex-row flex-flow mt-16 md:mt-24 items-center justify-center gap-2 cursor-pointer'>
          <h1 className='mr-4 text-xl md:text-xl justify-center items-center flex mb-4 md:mb-0'>
            Tech Stack:  
          </h1>
          <div className='flex mt-4 sm:mt-0 justify-center items-center '>
            <li className='px-3 md:px-0 md:mr-4'><img src="https://skillicons.dev/icons?i=react,next" /></li>
            <li className='px-3 md:px-0 md:mr-4'><img src="https://skillicons.dev/icons?i=javascript,typescript" /></li>
            <li className='px-3 md:px-0 md:mr-4'><img src="https://skillicons.dev/icons?i=html,css" /></li>
            <li className='px-3 md:px-0 md:mr-4'><img src="https://skillicons.dev/icons?i=tailwind,sass" /></li>
          </div>
       </ul>
      </motion.div>
    </section>
  )
}

export default HeroSection