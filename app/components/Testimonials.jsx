"use client";
import React from 'react';
import Image from 'next/image';
import { testimonialData } from '../data';
import { Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { MotionDiv, MotionP } from '../lib/motion';


const Testimonials = () => {

    return (
        <div id="Testimonials" className="relative px-6 py-40 sm:px-12 md:px-20 lg:max-w-9xl lg:mx-auto">
             <MotionP
                initial={{ opacity: 0, x: -20, rotate: 90 }}
                whileInView={{ opacity: 1, x:0, rotate: 90 }}
                transition={{ duration: 0.35 }}
                viewport={{ once: true }}
                className="absolute top-36 -left-14 shrink-0 text-ccGray2 font-bold tracking-tight hidden md:block md:text-4xl md:top-1/2 lg:text-5xl lg:-left-[5.25rem]">
                    Testimonials
            </MotionP>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                modules={[Pagination]}
                pagination={{ clickable: true }}
            >
                {testimonialData.map((testimonial,index) => (
                    <SwiperSlide key={index}>
                        <div className="md:flex md:items-start md:gap-8 md:w-[40rem] md:mx-auto">
                            <div className="relative shrink-0 flex justify-center items-end md:w-3/12 lg:w-4/12">
                                <MotionDiv
                                    initial={{ opacity: 0, y:10 }}
                                    whileInView={{ opacity: 1, y:0 }}
                                    transition={{ duration: 0.15, delay:0.05}}
                                >
                                    <Image
                                        src={testimonial.image} 
                                        alt={testimonial.alt} 
                                        width="100"
                                        height="100"
                                        className="w-56 h-72 object-cover object-top md:w-full md:h-56 lg:h-72"
                                    />
                                </MotionDiv>

                                {/* pink box */}
                                <MotionDiv
                                    initial={{ opacity: 0, y:20 }}
                                    whileInView={{ opacity: 1, y:0 }}
                                    transition={{ duration: 0.15}}
                                    className="absolute bottom-1 z-[-2] bg-ccHighlight w-[13.95rem] h-24 mx-auto rounded-xl md:w-[99.5%] lg:h-28"
                                ></MotionDiv>

                            </div>
                            <div className="text-center mt-3 mb-14 sm:px-12 md:text-left md:mt-14 md:px-0 md:w-9/12 lg:w-8/12 lg:mt-20">
                                <h2 className="text-ccOffWhite font-medium text-3xl">{testimonial.name}</h2>
                                <p className="text-ccHighlight text-2xl mt-1 mb-4">{testimonial.company}</p>
                                <p className="text-ccGray text-lg">{testimonial.description}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Testimonials;