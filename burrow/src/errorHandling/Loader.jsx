import React from "react";
import { Box, Spinner, Text } from "@chakra-ui/react";

const Loader = () => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    height="200px"
    width="100%"
  >
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
    />
    <Text mt="4" fontSize="lg" color="gray.500">Loading...</Text>
  </Box>
);

export default Loader;
