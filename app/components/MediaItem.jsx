import React from 'react';
import Image from 'next/image';

// type is either "full" or "inline" 

const MediaItem = ({media, type}) => {

    const heightClass = type === "full" ? "h-72 sm:h-auto" : "h-72 lg:h-96 2xl:h-[35rem]";


  if (media.type === 'video') {
    return (
    <video loop autoPlay width="300" height="200" className={`${heightClass} w-full rounded-lg object-cover flex-1`}>
        <source src={media.url} type="video/mp4" />
        Your browser does not support the video tag.
    </video>
    );
  } else {
    return (
    <Image
        src={media.url}
        alt={media.alt}
        width={800}
        height={500}
        className={`${heightClass} w-full rounded-lg object-cover flex-1 `}
    />
    );
  }
};

export default MediaItem;