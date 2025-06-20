import { Box, Stack, Heading, Text } from "@chakra-ui/react";
import { Suspense, lazy } from "react";

const CustomButton = lazy(() => import("./CustomButton"));

const BannerSlide = ({ heading, text, button, bgImage }) => {
  return (
    <>
      {/* Banner */}
      <Box
        bgImage={`url(${bgImage})`}
        bgSize="cover"
        bgRepeat="no-repeat"
        bgPosition="center"
        w="full"
        display="flex"
        alignItems="center"
        justifyContent="start"
        position="relative"
        height={{ base: "800px", md: "100vh" }}
        px={5}
        py={8}
      >
        {/* Black Overlay */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="rgba(0, 0, 0, 0.3)"
        />

        {/* Text */}
        <Stack
          gap="10"
          color="text.ivory"
          position="relative"
          w={{ base: "lg", md: "2xl", lg: "2xl", xl: "4xl" }}
        >
          <Heading
            fontSize="h1"
            fontWeight="500"
            lineHeight="shorter"
            textTransform="uppercase"
          >
            {heading}
          </Heading>

          <Text w={{ lg: "lg", xl: "md" }} fontSize="text1">
            {text}
          </Text>

          <CustomButton>{button}</CustomButton>
        </Stack>
      </Box>
    </>
  );
};

export default BannerSlide;
