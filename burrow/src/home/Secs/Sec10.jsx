import React, { useEffect, useRef } from 'react';

const Sec10 = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handlePlay = () => {
      if (videoElement) {
        videoElement.play().catch(error => {
          // Autoplay was prevented
          console.error('Autoplay was prevented:', error);
        });
      }
    };

    // Event listener for user interaction (e.g., click)
    const handleInteraction = () => {
      document.removeEventListener('click', handleInteraction);
      handlePlay();
    };

    // Attach the click event listener
    document.addEventListener('click', handleInteraction);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('click', handleInteraction);
    };
  }, []);

  return (
    <div className='2xl:pb-20 xl:pb-20 px-4 md:px-16 xs:pb-4 sm:pb-4'>
      <div className='flex justify-center 2xl:mb-6 sm:mb-2'>
        <h2 className='font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-6 2xl:text-center xl:text-center xs:text-left md:text-left'>
          Modular, easy-to-move design
        </h2>
      </div>
      <div className='relative w-full h-64 md:h-[500px] lg:h-[600px]'>
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          loop
          controls={false}
          className='absolute inset-0 w-full h-full object-cover'
        >
          <source src="https://media.graphassets.com/okjMYiS3eRh9cULy7cDg" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default Sec10;
