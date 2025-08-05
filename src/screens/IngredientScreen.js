import { Box, Grid, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import RichText from "../components/custom/RichText";
import { GreenButton } from "../components/custom/CustomButton";

const IngredientScreen = () => {
  const ingredients = [
    {
      image: "../assets/ingredients/fish.png",
      heading: "Real fish",
      text: "Rich in Omega-3 for shiny coats",
    },
    {
      image: "../assets/ingredients/chicken.png",
      heading: "Chicken",
      text: "Lean protein for strong muscles",
    },
    {
      image: "../assets/ingredients/brocoli.png",
      heading: "Broccoli",
      text: "Fiber & antioxidants",
    },
    {
      image: "../assets/ingredients/rice.png",
      heading: "Brown rice",
      text: "Sustained energy",
    },
  ];

  const swiperData = [
    {
      image: "../assets/ingredients/chicken_swiper.png",
      heading: "Chicken",
    },
    {
      image: "../assets/ingredients/lamb_swiper.png",
      heading: "Lamb",
    },
    {
      image: "../assets/ingredients/turmeric_swiper.png",
      heading: "Turmeric",
    },
    {
      image: "../assets/ingredients/blueberries_swiper.png",
      heading: "Blueberries",
    },
    {
      image: "../assets/ingredients/oats_swiper.png",
      heading: "Oats",
    },
    {
      image: "../assets/ingredients/flax_swiper.png",
      heading: "Flax",
    },
  ];

  return (
    <>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
        justifyContent={"center"}
        alignItems={"center"}
        pt={{ base: 28, md: 32, lg: 0 }}
        h={{ base: "auto", md: "auto", lg: "100vh" }}
      >
        <Stack alignItems={"center"} justifyContent={"center"} gap={5}>
          <RichText
            fontWeight="500"
            text="Every Bowl Begins With Nature"
            width={{ base: "2xs", md: "md", lg: "2xl" }}
          />
          <Heading
            textAlign={"center"}
            fontWeight="600"
            lineHeight={"heading1"}
            fontSize={{ base: "h6", md: "h6", lg: "h5" }}
          >
            Real Ingredients. Real Nutrition. Real Love.
          </Heading>
          <Text w={{ base: "80%", md: "40%" }} textAlign={"center"}>
            We don’t cut corners. Every ingredient in your dog’s bowl has a
            purpose — and a story.
          </Text>
        </Stack>
        <Image src="../assets/ingredients/banner.png" w={"full"} h={"full"} />
      </Grid>

      {/* Section 2 */}
      <Stack
        alignItems={"center"}
        justifyContent={"center"}
        gap={5}
        px={{ base: 2, md: 5 }}
        py={{ base: 10, md: 32 }}
      >
        <RichText text="Know What You’re Feeding" />
        <Text textAlign={"center"} w={{ base: "80%", md: "20%" }}>
          Tovlo’s ingredients are handpicked and gently air-dried to retain
          their natural goodness.
        </Text>
        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
          gap={5}
          w={"full"}
        >
          {ingredients.map((item, index) => (
            <Stack
              alignItems={"center"}
              justifyContent={"center"}
              gap={3}
              bgColor={"text.ivory"}
              borderColor={"text.lightGreen50"}
              border={"1px solid"}
              borderRadius={"xl"}
              p={{ base: 2, md: 5 }}
            >
              <Image src={item.image} borderRadius={"full"} boxSize={"200px"} />
              <Heading fontSize={{ base: "text6", md: "h6", lg: "h6" }}>
                {item.heading}
              </Heading>
              <Text fontSize={{ base: "text8", md: "text6", lg: "text6" }}>
                {item.text}
              </Text>
            </Stack>
          ))}
        </Grid>
      </Stack>

      {/* Section 6 - Image Swiper */}
      <Stack
        alignItems="center"
        justifyContent="center"
        px={{ base: 2, md: 5 }}
        py={{ base: 10, md: 20 }}
        gap={8}
      >
        <RichText
          text="From Farm to Bowl: Ingredient Gallery"
          width={{ base: "2xs", md: "md", lg: "4xl" }}
        />
        <Box w="full">
          <Swiper
            loop={true}
            breakpoints={{
              0: {
                slidesPerView: 1.8,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2.2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 2.9,
                spaceBetween: 20,
              },
              1920: {
                slidesPerView: 2.9,
                spaceBetween: 20,
              },
            }}
            className="testimonialSwiper"
          >
            {swiperData.map((data, index) => (
              <SwiperSlide key={index}>
                <Box position="relative" width="100%" aspectRatio={1}>
                  <Image
                    src={data.image}
                    alt="Image"
                    w="full"
                    h="full"
                    objectFit="cover"
                    borderRadius="lg"
                  />

                  {/* Overlay */}
                  <Box
                    position="absolute"
                    top="0"
                    left="0"
                    width="100%"
                    height="100%"
                    bg="rgba(0, 0, 0, 0.3)"
                    zIndex="1"
                    borderRadius="lg"
                  />

                  {/* Centered Heading */}
                  <Heading
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    zIndex="2"
                    color="white"
                    fontWeight={"400"}
                    letterSpacing={"wide"}
                    fontSize={{ base: "text6", md: "h6", lg: "h6" }}
                  >
                    {data.heading}
                  </Heading>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Stack>

      {/* Section 7 - LAST CTA */}
      <Stack
        alignItems="center"
        py={{ base: 20, md: 40 }}
        gap={{ base: 2, md: 8 }}
        background=" linear-gradient(180.15deg, #FAFCEB 0.13%, #FBFFDC 49.52%, #FAFCEB 99.87%);"
      >
        <RichText
          text="Your Dog Deserves Food That Heals, Not Just Fills"
          width={{ base: "2xs", md: "md", lg: "4xl" }}
        />
        <GreenButton px={20} display={{ base: "none", md: "block" }}>
          Start their Tovlo journey
        </GreenButton>
        {/* MOBILE BUTTON */}
        <GreenButton display={{ base: "block", md: "none" }}>
          Start their Tovlo journey
        </GreenButton>
      </Stack>
    </>
  );
};

export default IngredientScreen;
