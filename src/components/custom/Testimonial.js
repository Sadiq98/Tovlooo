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
          h={{ base: "250px", md: "400px" }}
          w="full"
          objectFit="cover"
          borderRadius="xl"
          border="2px solid"
          borderColor="text.primary"
        />
        <Stack
          justifyContent="space-between"
          p={{ base: 3, md: 5, lg: 10 }}
          h="full"
          bgColor="text.primary"
          color="text.ivory"
          borderRadius="xl"
        >
          <Stack>
            <Rating value={rating} />
            <Heading
              fontWeight="normal"
              fontSize={{ base: "xs", md: "text1", lg: "h5" }}
            >
              {name}
            </Heading>
          </Stack>
          <Text fontSize={{ base: "2xs", md: "text6", lg: "text6" }}>
            {review}
          </Text>
        </Stack>
        <Image
          display={{ base: "none", lg: "block" }}
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
