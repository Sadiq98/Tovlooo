import { Grid, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Rating from "./Rating";

const Testimonial = ({ image, name, review, rating }) => {
  return (
    <>
      <Grid
        templateColumns="repeat(2, 1fr)"
        position="relative"
        overflow="visible"
      >
        <Image
          src={image}
          h="400px"
          w="full"
          objectFit="cover"
          borderRadius="xl"
          border="2px solid"
          borderColor="text.primary"
        />
        <Stack
          justifyContent="space-between"
          p={10}
          h="full"
          bgColor="text.primary"
          color="text.ivory"
          borderRadius="xl"
        >
          <Stack>
            <Rating value={rating} />
            <Heading fontSize="h5">{name}</Heading>
          </Stack>
          <Text fontSize="text6">{review}</Text>
        </Stack>
        <Image
          src="../assets/testimonial_star.png"
          boxSize="100px"
          position="absolute"
          top="50%"
          left="-70px"
          transform="translateY(-50%)"
        />
      </Grid>
    </>
  );
};

export default Testimonial;
