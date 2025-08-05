import {
  Box,
  Field,
  Fieldset,
  Grid,
  Heading,
  HStack,
  Image,
  RadioGroup,
  Select,
  Spacer,
  Stack,
  Text,
  Portal,
} from "@chakra-ui/react";
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

  const iconData = [
    "100% Real ingredient",
    "No fillers or by-products",
    "Vet-approved recipes",
    "Air-dried for maximum nutrition",
  ];

  const breeds = [
    { label: "React.js", value: "react" },
    { label: "Vue.js", value: "vue" },
    { label: "Angular", value: "angular" },
    { label: "Svelte", value: "svelte" },
  ];

  return (
    <>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
        justifyContent="center"
        alignItems="center"
        pt={{ base: 20, md: 32, lg: 0 }}
        h={{ base: "100vh", md: "100vh", lg: "100vh" }}
      >
        <Stack alignItems="center" justifyContent="center" gap={5}>
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
        py={{ base: 20, md: 32 }}
      >
        <RichText text="Know What You’re Feeding" />
        <Text textAlign={"center"} w={{ base: "100%", md: "40%", lg: "20%" }}>
          Tovlo’s ingredients are handpicked and gently air-dried to retain
          their natural goodness.
        </Text>
        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
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
              p={{ base: 3, md: 5 }}
              py={5}
            >
              <Image
                src={item.image}
                borderRadius={"full"}
                boxSize={{ base: "full", md: "200px", lg: "200px" }}
              />
              <Heading fontSize={{ base: "text1", md: "h6", lg: "h6" }}>
                {item.heading}
              </Heading>
              <Text
                fontSize={{ base: "text8", md: "text6", lg: "text6" }}
                textAlign={"center"}
              >
                {item.text}
              </Text>
            </Stack>
          ))}
        </Grid>
      </Stack>

      {/* Section 4 - Form */}
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        gap={5}
        py={20}
        px={40}
      >
        <RichText
          text="Every Dog Is Different. So should be their food"
          width={{ base: "full", md: "full", lg: "4xl" }}
        />
        <Text w={{ base: "100%", md: "40%", lg: "40%" }} textAlign={"center"}>
          Just like us, dogs have different needs based on age, size, and
          lifestyle. We help you build the perfect bowl.
        </Text>
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          gap={10}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Image
            src="../assets/ingredients/form_img.png"
            w={"full"}
            borderRadius={"xl"}
            objectPosition="bottom"
            h={{ base: "250px", md: "600px" }}
          />
          <form style={{ width: "100%" }}>
            <Fieldset.Root>
              {/* Name */}
              <Field.Root id="name" required>
                <Fieldset.Content>
                  <Field.Label
                    fontFamily={"heading"}
                    fontSize={{ base: "text1", md: "h6", lg: "h6" }}
                  >
                    Age
                  </Field.Label>
                  <HStack>
                    <RadioGroup.Root size="sm">
                      <RadioGroup.Item value="puppy">
                        <RadioGroup.ItemHiddenInput />
                        <RadioGroup.ItemIndicator />
                        <RadioGroup.ItemText>Puppy</RadioGroup.ItemText>
                      </RadioGroup.Item>
                    </RadioGroup.Root>
                    <RadioGroup.Root size="sm">
                      <RadioGroup.Item value="adult">
                        <RadioGroup.ItemHiddenInput />
                        <RadioGroup.ItemIndicator />
                        <RadioGroup.ItemText>Adult</RadioGroup.ItemText>
                      </RadioGroup.Item>
                    </RadioGroup.Root>
                    <RadioGroup.Root size="sm">
                      <RadioGroup.Item value="senior">
                        <RadioGroup.ItemHiddenInput />
                        <RadioGroup.ItemIndicator />
                        <RadioGroup.ItemText>Senior</RadioGroup.ItemText>
                      </RadioGroup.Item>
                    </RadioGroup.Root>
                  </HStack>
                </Fieldset.Content>
              </Field.Root>
              <Spacer h="10" />

              <Field.Root id="name" required>
                <Fieldset.Content>
                  <Field.Label
                    fontFamily={"heading"}
                    fontSize={{ base: "text1", md: "h6", lg: "h6" }}
                  >
                    Size
                  </Field.Label>
                  <HStack>
                    <RadioGroup.Root size="sm">
                      <RadioGroup.Item value="react">
                        <RadioGroup.ItemHiddenInput />
                        <RadioGroup.ItemIndicator />
                        <RadioGroup.ItemText>Small</RadioGroup.ItemText>
                      </RadioGroup.Item>
                    </RadioGroup.Root>
                    <RadioGroup.Root size="sm">
                      <RadioGroup.Item value="react">
                        <RadioGroup.ItemHiddenInput />
                        <RadioGroup.ItemIndicator />
                        <RadioGroup.ItemText>Medium</RadioGroup.ItemText>
                      </RadioGroup.Item>
                    </RadioGroup.Root>
                    <RadioGroup.Root size="sm">
                      <RadioGroup.Item value="react">
                        <RadioGroup.ItemHiddenInput />
                        <RadioGroup.ItemIndicator />
                        <RadioGroup.ItemText>Large</RadioGroup.ItemText>
                      </RadioGroup.Item>
                    </RadioGroup.Root>
                  </HStack>
                </Fieldset.Content>
              </Field.Root>
              <Spacer h="10" />

              <Field.Root id="name" required>
                <Select.Root size="sm" width="320px">
                  <Select.HiddenSelect />
                  <Select.Label>Select framework</Select.Label>
                  <Select.Control>
                    <Select.Trigger
                      border="none"
                      borderBottom="1px solid"
                      borderColor="text.lightGreen50"
                    >
                      <Select.ValueText placeholder="Select a breed from the list" />
                    </Select.Trigger>
                    <Select.IndicatorGroup>
                      <Select.Indicator />
                    </Select.IndicatorGroup>
                  </Select.Control>
                  <Portal>
                    <Select.Positioner>
                      <Select.Content bgColor={"text.primary"}>
                        {breeds.map((breed) => (
                          <Select.Item item={breed} key={breed.value}>
                            {breed.label}
                            <Select.ItemIndicator />
                          </Select.Item>
                        ))}
                      </Select.Content>
                    </Select.Positioner>
                  </Portal>
                </Select.Root>
              </Field.Root>
              <Spacer h="10" />

              {/* Submit Button */}
              <GreenButton>Try our custom bowl quiz</GreenButton>
            </Fieldset.Root>
          </form>
        </Grid>
      </Stack>

      {/* Section 5 - Icon Data */}
      <Stack
        px={{ base: 2, md: 5 }}
        py={{ base: 10, md: 20 }}
        alignItems={"center"}
        gap={10}
        justifyContent={"center"}
      >
        <RichText text="Our Ingredient Promise" />
        <Box w="full">
          <Swiper
            loop={true}
            breakpoints={{
              0: {
                centeredSlides: true,
                slidesPerView: 2.8,
                spaceBetween: 10,
              },
              640: {
                centeredSlides: true,
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 5,
              },
              1920: {
                slidesPerView: 4,
                spaceBetween: 5,
              },
            }}
            className="testimonialSwiper"
          >
            {iconData.map((data, index) => (
              <SwiperSlide key={index}>
                <Stack alignItems={"center"} justifyContent={"center"} gap={5}>
                  <Image
                    src="../assets/icons/check_green.svg"
                    boxSize="60px"
                    w={"auto"}
                  />
                  <Heading
                    textAlign={"center"}
                    lineHeight={"heading2"}
                    fontWeight="500"
                    fontSize={{ base: "text8", md: "text1", lg: "h5" }}
                    w="80%"
                  >
                    {data}
                  </Heading>
                </Stack>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
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
          width={{ base: "full", md: "full", lg: "4xl" }}
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
          width={{ base: "full", md: "full", lg: "4xl" }}
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
