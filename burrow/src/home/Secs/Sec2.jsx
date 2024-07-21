import React from "react";

const Sec2 = () => {
  const images = [
    {
      src: "https://media.graphassets.com/resize=w:884,fit:crop/output=format:webp/compress/knVL0JgvS8WjEOWp86SA",
      alt: "Nomad img",
    },
    {
      src: "https://media.graphassets.com/resize=w:884,fit:crop/output=format:webp/compress/nGvyQWjoSmZz0b6NbbA2",
      alt: "Range img",
    },
    {
      src: "https://media.graphassets.com/resize=w:884,fit:crop/output=format:webp/compress/oYdM53vlROAeRATXkPAl",
      alt: "Mambo img",
    },
    {
      src: "https://media.graphassets.com/resize=w:884,fit:crop/output=format:webp/compress/ZmJC9LETcSOSUv6GG7R8",
      alt: "Mambo img",
    },
    {
      src: "https://media.graphassets.com/resize=w:884,fit:crop/output=format:webp/compress/Ob0gfLcyT3SnlM8isIxj",
      alt: "Mambo img",
    },
    {
      src: "https://media.graphassets.com/resize=w:884,fit:crop/output=format:webp/compress/jAx58yPIT8euFVzLgkaD",
      alt: "Mambo img",
    },
  ];

  return (
    <div className='2xl:pb-20 xl:pb-20 px-4 md:px-16 xs:pb-4 sm:pb-4'>
    <div className='flex justify-center 2xl:mb-6 sm:mb-2'>
      <h2 className='font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-6 2xl:text-center xl:text-center xs:text-left md:text-left'>
          Design deals, delivered free
        </h2>
      </div>

      <div className="xs:px-4 md:px-16 2xl:px-16 xl:px-16">
        {/* Grid layout for larger screens */}

        <div className="hidden md:grid md:grid-cols-3 gap-4 md:gap-5">
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
              <div key={index} className="flex-none w-80 h-auto snap-start">
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

export default Sec2;
