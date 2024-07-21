import React from 'react';

const Sec5 = () => {
  const images = [
    {
      src: 'https://media.graphassets.com/resize=w:504,fit:crop/output=format:webp/compress/hrcXqkzYRKK1JUis6mc2',
      alt: 'Nomad img'
    },
    {
      src: 'https://media.graphassets.com/resize=w:504,fit:crop/output=format:webp/compress/jHqzvSHQoyK3KptoSnpP',
      alt: 'Feild img'
    },
    {
      src: 'https://media.graphassets.com/resize=w:504,fit:crop/output=format:webp/compress/ty1QjGGMTJOCWzLcaYtP',
      alt: 'Union img'
    },
    {
      src: 'https://media.graphassets.com/resize=w:504,fit:crop/output=format:webp/compress/J5xEdXE6SSWDQLrT1wyp',
      alt: 'Range img'
    }
  ];

  return (
    <div className='2xl:pb-20 xl:pb-20 px-4 md:px-16 xs:pb-4 sm:pb-4'>
    <div className='flex justify-center 2xl:mb-6 sm:mb-2'>
      <h2 className='font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-6 2xl:text-center xl:text-center xs:text-left md:text-left'>
        Explore each unique collection
        </h2>
    </div>
  
    <div className="xs:px-4 sm:px-4 md:px-16 2xl:px-16">
      {/* Grid layout for larger screens */}
      <div className="hidden md:grid md:grid-cols-4 gap-5">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        ))}
      </div>
      {/* Horizontal scroll for smaller screens */}
      <div className="md:hidden overflow-x-auto scrollbar-hide snap-x snap-mandatory">
        <div className="flex flex-nowrap gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-none w-72 h-auto snap-start"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Sec5;
