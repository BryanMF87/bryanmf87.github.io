import React from 'react';
import { GrLinkedinOption } from 'react-icons/gr';
import { FaInstagram, FaGithub } from 'react-icons/fa';
import FAQ from '../components/FAQ';
import { MotionP } from '../lib/motion';

const Footer = () => {
  return (
      <section className="bg-ccOffBlack text-ccOffWhite">
        <div className="relative px-6 sm:px-12 md:px-20 lg:px-40 lg:max-w-9xl lg:mx-auto">
        <MotionP
          initial={{ opacity: 0, x: -20, rotate: 90 }}
          whileInView={{ opacity: 1, x:0, rotate: 90 }}
          transition={{ duration: 0.35 }} 
          viewport={{ once: true }}
          className="absolute top-80 -left-5 shrink-0 text-ccGray2 font-bold tracking-tight hidden md:block md:top-[15rem] md:text-4xl lg:text-5xl lg:-left-[2.25rem]"
        >
          Contact
        </MotionP>
          <div className="py-20 md:flex md:gap-10 xl:gap-14">
            <FAQ />
            <div id="Contact" className="mt-20 text-ccOffWhite text-center md:text-left md:mt-0 md:order-1 md:w-1/2">
              <h2 className="font-bold text-6xl leading-tight lg:text-7xl">Ready? Set, <span className="text-ccHighlight">Go!</span></h2>
                <p className="text-ccGray mt-4 mb-8">Thanks for visiting my website. I am currently open to freelance projects and full-time work. Please use the button below to reach me. I will respond back ASAP!</p>
                <div className="flex flex-col gap-6 md:flex-row">
                  <a 
                    href="mailto:bmfink87@gmail.com" 
                    target='_blank' 
                    rel='noopener' 
                    className="bg-ccHighlight text-white text-center font-medium p-5 bg-ccHighlight1 text-xl rounded-lg md:py-3 md:px-6"
                  >
                    <span>Contact Me</span>
                  </a>
                </div>
            </div>
          </div>
        </div>

          <footer className="text-center text-lg text-ccOffWhite border-t border-solid border-ccGray py-5">
            <div className="flex flex-col gap-2 px-6 sm:px-12 md:px-20 md:flex-row md:justify-between md:items-center lg:px-40 lg:max-w-9xl lg:mx-auto">
              <p className="text-white text-base">©2024, built with love by <span className="text-pink-600">Bryan Fink</span></p>
              <div className="flex gap-10 mx-auto text-3xl py-4 px-6 rounded-lg md:mx-0 md:py-2 md:px-0 md:gap-6 md:text-xl">
                <a href="https://www.instagram.com/thebryanfink/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a href="https://www.linkedin.com/in/bfink777" target="_blank" rel="noopener noreferrer"><GrLinkedinOption /></a>
                <a href="https://github.com/BryanMF87" target="_blank" rel="noopener noreferrer"><FaGithub /></a>       
              </div>
            </div>
          </footer>

        </section>
  )
}

export default Footer