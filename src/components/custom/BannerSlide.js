import { Box, Stack, Heading, Text } from "@chakra-ui/react";
import { lazy } from "react";

const CustomButton = lazy(() => import("./CustomButton"));

const BannerSlide = ({ heading, text, button, bgImage }) => {
  return (
    <>
      {/* Banner */}
      <Box
        bgImage={`url(${bgImage})`}
        bgSize="cover"
        bgRepeat="no-repeat"
        bgPos={{ base: "center", lg: "initial" }}
        w="full"
        display="flex"
        alignItems="center"
        justifyContent="start"
        position="relative"
        height={{ base: "100vh", md: "70vh", lg: "100vh" }}
        px={{ base: 0, md: 5 }}
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
          h={{ base: "full", md: "full", lg: "auto" }}
          justifyContent={{ base: "end", md: "space-around" }}
          pb={{ base: 40, md: 0 }}
          color="text.ivory"
          position="relative"
          w={{ base: "sm", md: "2xl", lg: "2xl", xl: "5xl" }}
          alignItems={{ base: "center", md: "flex-start" }}
        >
          <Stack gap="10" textAlign={{ base: "center", md: "left" }}>
            <Heading
              fontSize={{ base: "h5", md: "h1" }}
              fontWeight="500"
              lineHeight="shorter"
              textTransform="uppercase"
            >
              {heading}
            </Heading>

            <Text
              w={{ base: "full", md: "md", lg: "lg", xl: "md" }}
              fontSize={{ base: "text6", md: "text1" }}
            >
              {text}
            </Text>
          </Stack>

          <CustomButton>{button}</CustomButton>
        </Stack>
      </Box>
    </>
  );
};

export default BannerSlide;
