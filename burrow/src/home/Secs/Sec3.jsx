import React from 'react';

// Array of content for the component
const content = [
  {
    imgSrc: "https://media.graphassets.com/output=f:webp/output=c:true/output=t:true/NJPyKF0OS7WAk9Yr3lOX",
    imgAlt: "Fast & free shipping",
    title: "Fast & free shipping",
    description: "Every single order ships for free. No minimums, no tiers, no fine print whatsoever."
  },
  {
    imgSrc: "https://media.graphassets.com/output=f:webp/output=c:true/output=t:true/bPEFQj2QSO2mlLHY2SWV",
    imgAlt: "Modular, easy-to-move design",
    title: "Modular, easy-to-move design",
    description: "Our innovative modular design is driven by the belief that furniture should fit this home, and the next one."
  },
  {
    imgSrc: "https://media.graphassets.com/output=f:webp/output=c:true/output=t:true/LIvhIMY4SZyvBqFCwspI",
    imgAlt: "Durable, premium materials",
    title: "Durable, premium materials",
    description: "We use materials like sustainably-forested wood, strengthened steel hardware, and top-grain Italian leather."
  }
];

const Sec3 = () => {
  return (
    <div className="2xl:mt-12 xl:mt-14 sm:mt-4 mt-8 bg-orange-100 2xl:py-10 xl:py-10 sm:py-2 md:py-4">
    <div className='w-[90%] m-auto'>
      <div className="flex justify-center pt-10">
        <h2 className="text-3xl font-semibold text-center px-4">
          We’re solving the biggest problems in furniture
        </h2>
      </div>
      <div className="flex  flex-wrap py-9 justify-evenly">
        {content.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-4 md:flex-row md:w-1/3 mb-6 md:mb-0 px-4">
            <div className="mb-4 md:mb-0">
              <img
                src={item.imgSrc}
                alt={item.imgAlt}
                className="w-24 h-24 object-cover"
              />
            </div>
            <div className="w-52 text-center md:text-left">
              <p className="font-mono font-bold text-sm">
                {item.title}
              </p>
              <p className="subpixel-antialiased text-sm">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Sec3;
