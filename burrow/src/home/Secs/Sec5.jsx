import React from 'react';

const Sec5 = () => {
 const images = [
  {
    src: "https://res.cloudinary.com/dz2hoghhp/image/upload/v1783265149/e60e2e3e683652c2ac7e56bfd22c0f9d18cc7b94-902x678_1_dbecy8.avif",
    alt: 'Nomad img'
  },
  {
    src: "https://res.cloudinary.com/dz2hoghhp/image/upload/v1783265151/c5819f582e10bb5b2d27d5f49a77316239946a2d-1373x1026_hpny0l.avif",
    alt: 'Feild img'
  },
  {
    src: "https://res.cloudinary.com/dz2hoghhp/image/upload/v1783265151/18289d43915bfce8b13106c47bed1bba8833024e-459x345_u3u9ye.avif",
    alt: 'Union img'
  },
  {
    src: "https://res.cloudinary.com/dz2hoghhp/image/upload/v1783265151/c38ccc3b4d722d585ad073ea3fee7dc24e5261f0-909x682_gjmgm2.avif",
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
  
    <div className="xs:px-4 sm:px-4 md:px-16 2xl:px-[2px]">
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
