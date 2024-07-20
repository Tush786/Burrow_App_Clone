import React, { useEffect, useState, useRef, useCallback } from 'react';
import Productcard from './Productcard';
import { Box, Button, Select, Skeleton, Stack } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getproducts } from '../redux/User/actions';

function Productlist() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.data.products);
  const loading = useSelector((state) => state.data.loading);
  const currentPage = useSelector((state) => state.data.currentPage);
  const totalPages = useSelector((state) => state.data.totalPages);
  const [page, setPage] = useState(1);
  const observer = useRef();

  useEffect(() => {
    dispatch(getproducts(page));
  }, [dispatch, page]);

  const lastProductElementRef = useCallback(node => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && currentPage < totalPages) {
        setPage(prevPage => prevPage + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, [loading, currentPage, totalPages]);

  return (
    <div className="">
      <div className="flex justify-between w-[95%] m-auto">
        <Box>
          <Button colorScheme='teal' variant='ghost'>Namad</Button>
          <Button colorScheme='teal' variant='ghost'>Range</Button>
          <Button colorScheme='teal' variant='ghost'>Mambo</Button>
          <Button colorScheme='teal' variant='ghost'>Storage</Button>
          <Button colorScheme='teal' variant='ghost'>Bedroom</Button>
          <Button colorScheme='teal' variant='ghost'>Accent Chairs</Button>
        </Box>
        <div>
          <Select placeholder="Select option">
            <option value="option1">Most Popular</option>
            <option value="option2">Most Recent</option>
            <option value="option3">Price: High to Low</option>
            <option value="option3">Price: Low to High</option>
          </Select>
        </div>
      </div>
      <Box className="bg-[#ffffff] mt-2 px-10">
        <h1 className="pb-2 text-[36px] font-[600]">Nomad</h1>
        <Box
          display="grid"
          gridTemplateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={6}
        >
          {products?.map((elem, idx) => {
            if (products.length === idx + 1) {
              return <Productcard key={idx} ref={lastProductElementRef} elem={elem} />;
            } else {
              return <Productcard key={idx} elem={elem} />;
            }
          })}
        </Box>
        {loading && (
          <Stack spacing={6} mt={6}>
            {[...Array(6)].map((_, idx) => (
              <Skeleton key={idx} height="300px" />
            ))}
          </Stack>
        )}
      </Box>
    </div>
  );
}

export default Productlist;
