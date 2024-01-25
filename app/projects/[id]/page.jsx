"use client";
import React, { useState, useEffect } from 'react';
import {projectData} from '../../data';
import MediaItem from '../../components/MediaItem';
import Link from 'next/link';
import Image from 'next/image';
import ProjectGallery from '@/app/components/ProjectGallery';
import { MotionDiv} from '@/app/lib/motion';

const Project = ({ params }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true);

    useEffect(()=> {
      const fetchData = () => {
        const data = projectData.find(project => project.id === params.id);
        setSelectedProject(data);
        setLoading(false);
      };

      fetchData();
    }, [params]);



  if (loading) {
    return (
      <div className="h-96 w-full flex flex-col gap-2 justify-center items-center text-ccOffWhite bg-ccOffBlack sm:flex-row max-w-8xl mx-auto">
        <p className="text-4xl font-semibold md:text-5xl">Project loading</p>
        <div className="rotate grid grid-cols-2 gap-3 p-4 bg-ccGray3 rounded-full">
          <div className="w-2 h-2 bg-ccOffWhite rounded-full"></div>
          <div className="w-2 h-2 bg-ccOffWhite rounded-full"></div>
          <div className="w-2 h-2 bg-ccOffWhite rounded-full"></div>
          <div className="w-2 h-2 bg-ccOffWhite rounded-full"></div>
        </div>
      </div>
    )
  }

  if (!selectedProject) {
    return  (
      <div className="h-screen w-full flex flex-col gap-8 justify-center items-center text-ccOffWhite bg-ccOffBlack max-w-8xl mx-auto">
        <p className="text-5xl font-semibold"> Woops! Project not found.</p>
        <Link 
          href="/#work"
          className='text-2xl bg-ccHighlight rounded-lg w-fit py-2 px-6'
        >
          Exit
        </Link>
      </div>
    )
  }

  if (selectedProject) {
    return (
    <div>
      <Image
        src={selectedProject.media.headerImage.url}
        alt={selectedProject.media.headerImage.alt}
        width={800}
        height={500}
        className="h-56 w-full bg-ccGray3 mt-11 object-cover lg:h-64 xl:h-80"
      />
    
      <div className='text-ccOffWhite bg-ccOffBlack max-w-8xl mx-auto'>
        <div className="mt-12 pb-28 px-6 sm:px-12 md:px-20 lg:px-20 xl:px-40 max-w-screen-8xl mx-auto">
          <div className="flex flex-col md:flex-row">
            <div className="flex-col md:w-1/2">
              <p className="text-ccHighlight text-lg">{selectedProject.subtitle}</p>
              <h1 className="text-6xl font-bold lg:text-7xl">{selectedProject.title}</h1>
            </div>
            <div className="flex mt-6 gap-6 md:justify-end md:items-end md:flex-col md:mt-0 md:w-1/2">
              {selectedProject.demo && (<Link href={`/${selectedProject.id}`} className="flex gap-2 items-center w-fit rounded-lg py-3 px-4 font-semibold bg-ccHighlight">View Online</Link>)}
              {selectedProject.github && (<Link href={`https://github.com/${selectedProject.id}`} className="flex gap-2 items-center w-fit rounded-lg py-3 px-4 font-semibold bg-ccHighlight">See Code</Link>)}
            </div>
          </div>

          <p className="mt-8 text-4xl leading-[140%] max-w-3xl">{selectedProject.description}</p>


          <div className="flex flex-col gap-14 max-w-8xl mx-auto md:gap-20 lg:gap-40">
            {selectedProject.media.firstMedia && (
              <MotionDiv
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duraction: 0.35 }}
                viewport={{ once: true }}
                className="flex justify-center items-center mt-20"
              >
                <MediaItem media={selectedProject.media.firstMedia} type="full" />
              </MotionDiv>
            )}

            <div className="flex flex-col gap-10 max-w-8xl mx-auto md:flex-row lg:gap-14">
              <div className="md:w-7/12">
                <h2 className="text-ccHighlight text-2xl mb-3">The Idea</h2>
                <p className="leading-relaxed lg:text-2xl lg:leading-normal">{selectedProject.summary}</p>
              </div>
              <div className="md:w-5/12">
                <h2 className="text-ccHighlight text-2xl mb-3">Deliverables</h2>
                <div className="flex flex-wrap gap-y-2 text-base list-none">
                  {selectedProject.deliverables.map((deliverable, index) => (
                    <li key={index}>
                      {deliverable}
                      {index < selectedProject.deliverables.length - 1 && <span className="text-ccHighlight px-4">/</span>} {/* / between each item */}
                    </li>
                  ))}
                </div>
              </div>
            </div>




            <div className="flex flex-col text-center gap-6 max-w-2xl mx-auto py-40">
              <p className="text-3xl leading-relaxed">&quot;{selectedProject.quote.quote}&quot;</p>
              <p className="text-2xl text-ccHighlight">{selectedProject.quote.author}</p>
            </div>




            {/* second media is ALWAYS accompanied by third media */}

            {selectedProject.media.secondMedia && (
              <div className="flex flex-col justify-center items-center gap-10 sm:flex-row lg:gap-14">
                <MotionDiv
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duraction: 0.25 }}
                  viewport={{ once: true }}
                  className="w-full"
                >
                  <MediaItem media={selectedProject.media.secondMedia} type="inline" />
                </MotionDiv>
                <MotionDiv
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duraction: 0.25}}
                  viewport={{ once: true }}
                  className="w-full"
                >
                  <MediaItem media={selectedProject.media.thirdMedia} type="inline" />
                </MotionDiv>
              </div>
            )}

            <div className="flex flex-col gap-10 max-w-8xl mx-auto md:flex-row lg:gap-14">
              <div className="md:w-7/12">
                  <h2 className="text-ccHighlight text-2xl mb-3">The Outcome</h2>
                  <p className="leading-relaxed lg:text-2xl lg:leading-normal">{selectedProject.outcome}</p>
              </div>
              <div className="md:w-5/12">
                  <h2 className="text-ccHighlight text-2xl mb-3">Tools Used</h2>
                  <div className="flex flex-wrap gap-y-2 text-base list-none">
                      {selectedProject.tools.map((tool, index) => (
                          <li key={index}>
                              {tool}
                              {index < selectedProject.tools.length - 1 && <span className="text-ccHighlight px-4">/</span>} {/* / between each item */}
                          </li>
                      ))}
                  </div>
              </div>
            </div>

            {selectedProject.media.fourthMedia && (
              <MotionDiv
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duraction: 0.35 }}
                viewport={{ once: true }}
                className="flex justify-center items-center"
              >
                <MediaItem media={selectedProject.media.fourthMedia} type="full" />
              </MotionDiv>
            )}

            {/* fifth media is ALWAYS accompanied by sixth media */}

            {selectedProject.media.fifthMedia && (
              <div className="flex flex-col justify-center items-center gap-14 sm:flex-row">
                <MotionDiv
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duraction: 0.25 }}
                  viewport={{ once: true }}
                  className="w-full"
                >
                  <MediaItem media={selectedProject.media.fifthMedia} type="inline" />
                </MotionDiv>
                <MotionDiv
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duraction: 0.25 }}
                  viewport={{ once: true }}
                  className="w-full"
                >
                  <MediaItem media={selectedProject.media.sixthMedia} type="inline" />
                </MotionDiv>
              </div>
            )}

            {selectedProject.media.seventhMedia && (
              <MotionDiv
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duraction: 0.35 }} 
                viewport={{ once: true }}
                className="flex justify-center items-center"
              >
                <MediaItem media={selectedProject.media.seventhMedia} type="full" />
              </MotionDiv>
            )}
          </div>

        </div>

        <ProjectGallery/>
      </div>
    </div>
    )
  }
}

export default Project