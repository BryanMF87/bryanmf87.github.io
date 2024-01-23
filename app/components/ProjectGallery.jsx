
"use client";
import { useState, useEffect } from "react";
import {projectData} from '../data';
import Link from 'next/link';
import { MotionDiv, MotionP } from "../lib/motion";
import Image from "next/image";

const fadeInAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: (index)=> ({ 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.35, delay: 0.1 * index }
  }),
}

const  ProjectGallery = () => {
  const [subject, setSubject] = useState('development');
  const [displayProjects, setDisplayProjects] = useState([])

  useEffect(() => {
    const filteredProjects = projectData.filter(
      (project) => project.category === subject
    );
    setDisplayProjects(filteredProjects);
  }, [subject]);

  return (
      <section id="work" className="bg-ccGray3">
        <div className="relative py-28 px-6 sm:px-12 md:px-20 lg:px-40 lg:max-w-8xl lg:mx-auto">
          <MotionP
            initial={{ opacity: 0, x: -20, rotate: 90 }}
            whileInView={{ opacity: 1, x:0, rotate: 90 }}
            transition={{ duration: 0.35 }}
            viewport={{ once: true }}
            className="absolute top-1/2 -left-8 shrink-0 text-ccGray2 font-bold tracking-tight hidden md:block md:text-4xl lg:text-5xl lg:-left-12"
          >
            Portfolio
          </MotionP>
          {/* project category selector */}
          <div className="text-center md:flex md:text-left md:justify-between md:mb-10">
            <h2 className="font-medium text-3xl text-ccOffWhite">Featured Projects</h2>
            <div className="flex justify-center gap-6 mt-5 mb-10 md:m-0">
              <button onClick={() => setSubject('development')} className={`font-medium text-xl ${subject === 'development' ? 'text-ccHighlight' : 'text-ccGray'} hover:text-ccOffWhite`}>
                Development
              </button>
              <button onClick={() => setSubject('design')} className={`font-medium text-xl  ${subject === 'design' ? 'text-ccHighlight' : 'text-ccGray'} hover:text-ccOffWhite`}>
                Design
              </button>
            </div>
          </div>

          {/* projects displayed */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-6 md:grid-cols-3 sm:gap-6">
            {displayProjects.map((project, index) => (
              <MotionDiv
                key={index}
                variants={fadeInAnimation}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={index}
              >
                <Link
                  href={`/projects/${project.id}`}
                  className="w-full mx-auto rounded-xl group hover:shadow-xl"
                >
                  <Image
                    src={project.media.cardImage.url}
                    alt={project.media.cardImage.alt}
                    className="h-48 w-full sm:h-48 object-cover rounded-t-xl"
                  />
                  <div className="flex flex-col w-full p-4 text-ccOffBlack bg-ccOffWhite rounded-b-xl">
                    <span className="text-ccGray text-sm font-medium leading-4 group-hover:text-ccHighlight">{project.subtitle}</span>
                    <h3 className="text-lg font-bold leading-5 mt-1 sm:text-base sm:leading-6  md:leading-[1.25rem]">{project.title}</h3>
                  </div>  
                </Link>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>
  );
}

export default ProjectGallery;
