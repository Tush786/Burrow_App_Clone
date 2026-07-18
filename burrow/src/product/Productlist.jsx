import React, { useEffect, useState, useRef, useCallback } from 'react';
import Productcard from './Productcard';
import { Box, Skeleton, Stack } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getproducts } from '../redux/User/actions';
import { PAGES } from '../redux/User/actionType';
import { useLocation } from 'react-router-dom';

function Productlist() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.data.products);
  const loading = useSelector((state) => state.data.loading);
  const currentPage = useSelector((state) => state.data.currentPage);
  const totalPages = useSelector((state) => state.data.totalPages);
  const Page = useSelector((state) => state.data.Page);
  const [page, setPage] = useState(Page);
  const observer = useRef();
  const location = useLocation();

  // Extract search query from URL
  const searchQuery = new URLSearchParams(location.search).get('search') || "";

  useEffect(() => {
    dispatch(getproducts(page, searchQuery)); // Fetch products based on search query
    dispatch({
      type: PAGES,
      payload: page
    });
  }, [dispatch, page, searchQuery]);

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
      <Box className="bg-[#ffffff] mt-6">
        {/* <h1 className="pb-2 text-[36px] font-[600]">Nomad</h1> */}
        <Box
          display="grid"
          gridTemplateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={6}
          className='w-[90%] m-auto'
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
