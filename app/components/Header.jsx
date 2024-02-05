"use client";

import React, { useEffect, useState } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';

const Header = () => {

  const navItems = ["About", "Work", "Testimonials", "Contact"];

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    window.innerWidth < 768 ? setIsNavOpen(false) : setIsNavOpen(true);
  };

  useEffect(() => {
    toggleNav();
  
    window.addEventListener('resize', toggleNav);
  }, []);

  return (
    <header className='fixed z-50 top-0 left-0 w-full bg-ccOffBlack'>
      <div className="flex justify-between items-center px-6 sm:px-12 md:px-10
      ">
        <div className="flex items-center justify-between w-full">
          <a
            href={"/"}
            className="flex items-center gap-2 py-2 w-fit"
          >
            <div className="flex flex-col justify-between w-5 h-4">
              <div className="bg-ccHighlight w-9/12 h-0.5 rounded-xl"></div>
              <div className="bg-ccOffWhite w-9/12 h-0.5 rounded-xl ml-1"></div>
              <div className="bg-ccHighlight w-9/12 h-0.5 rounded-xl"></div>
            </div>
            <p className="text-xl tracking-tight text-ccOffWhite font-medium md:text-lg">Bryan Fink</p>
          </a>

          <button 
            className="flex justify-center text-ccOffWhite hover:text-ccHighlight hover:scale-110 md:hidden" 
            onClick={()=> setIsNavOpen(!isNavOpen)} 
            aria-label="Toggle Navigation"
          >
              <span className='flex justify-end text-2xl'>
                {isNavOpen ? <FaTimes /> : <FaBars />}
              </span>
          </button>
          </div>


          {isNavOpen && (
            <nav className="fixed top-11 right-0 bottom-0 left-0 z-50 w-full h-full flex flex-col gap-10 pt-10 p-6 bg-ccOffBlack sm:px-12 md:flex-row md:gap-8 md:static md:h-auto md:w-auto md:p-0">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={`/#${item}`}  
                  onClick={()=> toggleNav()} 
                  className="flex justify-between items-center w-full text-xl text-ccOffWhite font-semibold md:text-sm"
                >
                  {item}
                  <IoIosArrowForward className="md:hidden"/>
                </a>
              ))}
              <a href={"#contact"}  onClick={() => toggleNav()} className="flex w-full h-16 justify-center items-center bg-ccHighlight text-white rounded-md text-xl text-ccOffWhite font-semibold md:text-sm md:px-3 md:h-8">
                Contact
              </a>
            </nav>
          )}

      </div>
    </header>
  )
}

export default Header