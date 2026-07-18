import React from 'react';

// Array of content for the component
const content = [
  {
    imgSrc: "https://cdn.sanity.io/images/gan92b2a/burrow-production/3c0934a5abbc6077876f6de5c703614c157559ac-294x294.png?auto=format&fit=max&q=75&w=294",
    imgAlt: "Fast & free shipping",
    title: "Fast & free shipping",
    description: "Every single order ships for free. No minimums, no tiers, no fine print whatsoever."
  },
  {
    imgSrc: "https://cdn.sanity.io/images/gan92b2a/burrow-production/0cd3807625136fa92484f1fb07f9defd47663b6c-294x294.png?auto=format&fit=max&q=75&w=294",
    imgAlt: "Modular, easy-to-move design",
    title: "Modular, easy-to-move design",
    description: "Our innovative modular design is driven by the belief that furniture should fit this home, and the next one."
  },
  {
    imgSrc: "https://cdn.sanity.io/images/gan92b2a/burrow-production/e996d627bfe5a35f177fbcf9189f98509474e5ce-294x294.png?auto=format&fit=max&q=75&w=294",
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
