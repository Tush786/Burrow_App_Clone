import React, { useState, forwardRef } from 'react';
import { Link } from "react-router-dom";
import { Box, Text, Image, Button } from '@chakra-ui/react';

const Productcard = forwardRef(({ elem }, ref) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box ref={ref} borderRadius="lg" overflow="hidden" className='flex flex-col gap-2'>
      <Link to={`/product/${elem._id}`}>
        <Box
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          width="100%"
        >
          <Image
            src={isHovered ? elem.imagesurl[1] : elem.imagesurl[0]}
            alt={elem.productName}
            height="300px"
            objectFit="cover"
            width="100%"
          />
        </Box>
      </Link>
      <Box display="flex" mt="4" gap={1}>
        {elem.colorShema.map((color, index) => (
          <Button
            key={index}
            backgroundColor={color}
            borderRadius="full"
            height="20px"
            width="20px"
            _hover={{ opacity: 0.8 }}
          />
        ))}
      </Box>
      <Box>
        <Text fontSize="xl">{elem.productName}</Text>
        <Text fontSize="lg" color="gray.600">${elem.sellingPrice}</Text>
      </Box>
    </Box>
  );
});

export default Productcard;
