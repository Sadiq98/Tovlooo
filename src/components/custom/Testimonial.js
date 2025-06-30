import { Grid, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Rating from "./Rating";

const Testimonial = ({ image, name, review, rating }) => {
  return (
    <>
      <Grid
        display={{ base: "block", md: "grid" }}
        templateColumns="repeat(2, 1fr)"
        position="relative"
        overflow="visible"
      >
        <Image
          display={{ base: "none", md: "block" }}
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
          gap={{ base: 10, md: 0 }}
          h="full"
          bgColor="text.primary"
          color="text.ivory"
          borderRadius="xl"
        >
          <Grid
            templateColumns="repeat(2, 1fr)"
            display={{ base: "grid", md: "block" }}
          >
            <Image
              display={{ base: "block", md: "none" }}
              src={image}
              boxSize="150px"
              objectFit="cover"
              borderRadius="xl"
              border="2px solid"
              borderColor="text.primary"
            />
            <Stack>
              <Rating value={rating} />
              <Heading
                fontWeight="normal"
                fontSize={{ base: "text1", md: "text3", lg: "h5" }}
                lineHeight="100%"
              >
                {name}
              </Heading>
            </Stack>
          </Grid>
          <Text fontSize={{ base: "md", md: "text6", lg: "text1" }}>
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
