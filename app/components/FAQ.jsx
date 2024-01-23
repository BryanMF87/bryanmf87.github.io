'use client';
import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { FAQData } from '../data';
import { MotionDiv } from '../lib/motion';

const FAQ = () => {

  const [openItem, setOpenItem] = useState(null);

  const toggleAccordion = (index) => {
    setOpenItem((prevOpenItem) => (prevOpenItem === index ? null : index));
  };

  return (
    <MotionDiv 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.15 }}
      className="md:order-2 md:w-1/2"
    >
        <h2 className="font-medium text-3xl text-ccOffWhite">Frequently Asked Questions</h2>
        <ul className="mt-4 divide-y divide-solid divide-ccGray">
          {FAQData.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer py-4 group"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex justify-between items-center">
                <p className="font-medium text-ccOffWhitegroup-hover:text-ccHighlight">{item.question}</p>
                <div
                  className={`transition-transform transform ${
                    openItem === index ? 'rotate-180 text-ccHighlight' : 'rotate-0'
                  }`}
                >
               <IoIosArrowDown />
                </div>
              </div>
              <div
                className={`overflow-hidden transition-max-height ${
                  openItem === index ? 'max-h-screen' : 'max-h-0'
                }`}
              >
                <p className="text-ccGray pt-6 pb-4">{item.answer}</p>
              </div>
            </li>
          ))}
        </ul>
    </MotionDiv>
  );
}

export default FAQ;
