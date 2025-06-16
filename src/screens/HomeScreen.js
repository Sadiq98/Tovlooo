import {
  Grid,
  Flex,
  Stack,
  Text,
  Image,
  Box,
  Heading,
  Icon,
} from "@chakra-ui/react";

import { Suspense, lazy } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

import { MdBlock } from "react-icons/md";
import { PiPottedPlantFill } from "react-icons/pi";
import { BsClipboardCheckFill } from "react-icons/bs";
import { LuBicepsFlexed } from "react-icons/lu";
import { TbMeat } from "react-icons/tb";
import { IoPaw } from "react-icons/io5";

const CustomMarquee = lazy(() => import("../components/custom/Marquee"));
const RichText = lazy(() => import("../components/custom/RichText"));
const BannerSlide = lazy(() => import("../components/custom/BannerSlide"));
const CustomButton = lazy(() => import("../components/custom/CustomButton"));
const CustomTimeline = lazy(() => import("../components/custom/Timeline"));
const ComparisonTable = lazy(() =>
  import("../components/custom/ComparisonTable")
);

const HomeScreen = () => {
  const bannerContent = [
    {
      image: "../assets/home_bg_1.jpg",
      title: "Tovlo crafts high-quality air-dried food...",
    },
    {
      image: "../assets/home_bg_2.png",
      title: "...made from 100% natural ingredients",
    },
    {
      image: "../assets/home_bg_3.jpg",
      title: "...so your dog gets the health they deserve",
    },
    {
      image: "../assets/home_bg_4.png",
      title: "...in every bite",
    },
  ];

  const bowlData = [
    {
      image: "../assets/Icons/nutrient-dense.png",
      title: "Nutrient-dense",
    },
    {
      image: "../assets/Icons/no-refrigeration.png",
      title: "No refrigeration",
    },
    {
      image: "../assets/Icons/flavor-packed.png",
      title: "Flavor-packed",
    },
    {
      image: "../assets/Icons/travel-ready.png",
      title: "Travel-ready",
    },
  ];

  const advantages = [
    { icon: PiPottedPlantFill, text: "100% Natural" },
    { icon: MdBlock, text: "No Fillers" },
    { icon: BsClipboardCheckFill, text: "Vet-Approved" },
    { icon: LuBicepsFlexed, text: "75% Protein" },
    { icon: TbMeat, text: "80-100% Meat" },
  ];

  const marquee2 = [
    { icon: IoPaw, text: "Air-Dried Dog Food" },
    { icon: IoPaw, text: "100% Natural" },
    { icon: IoPaw, text: "Loved by Dogs" },
    { icon: IoPaw, text: "Vet Approved" },
    { icon: IoPaw, text: "Healthy Ingredients" },
    { icon: IoPaw, text: "Tovlo" },
  ];

  return (
    <>
      {/* Banner */}
      <Box w="full">
        <Swiper
          loop={true}
          lazy={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {bannerContent.map((item, index) => (
            <SwiperSlide key={index}>
              <BannerSlide
                heading={item.title}
                text="Formulated by pet nutrition experts with nature's finest ingredients and gently air-dried to seal health and taste like no other"
                button="Create my Dog's pack"
                bgImage={item.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {/* Marquee */}
      <CustomMarquee data={advantages} />

      {/* Scientifically Designed */}
      <Stack px={5} py={20}>
        <Stack
          bgColor="custom.green"
          borderRadius="xl"
          alignItems="center"
          p={5}
          position="relative"
        >
          <RichText
            text="Scientifically Designed Loved by Dogs"
            color="text.ivory"
            width="xl"
          />
          <Image
            src="../assets/foodBowl.png"
            alt="foodBowl"
            boxSize="500px"
            zIndex={1}
          />
          <Grid
            templateColumns={"repeat(2, 1fr)"}
            position="absolute"
            w={"80%"}
            gap={40}
            top="30%"
          >
            {bowlData.map((item, index) => (
              <Stack
                color="text.ivory"
                alignItems="center"
                justifySelf={index % 2 === 0 ? "start" : "end"}
              >
                <Image src={item.image} boxSize={10} />
                <Heading fontWeight="normal" fontSize="h6">
                  {item.title}
                </Heading>
              </Stack>
            ))}
          </Grid>
          <Grid
            templateColumns={"repeat(2, 1fr)"}
            position="absolute"
            gap={50}
            w={"full"}
            top="20%"
          >
            <Image justifySelf="end" src="../assets/Icons/line1.svg" w="60%" />
            <Image
              justifySelf="start"
              src="../assets/Icons/line2.svg"
              w="60%"
            />
          </Grid>
          <Grid
            templateColumns={"repeat(2, 1fr)"}
            position="absolute"
            gap={50}
            w={"full"}
            bottom="10%"
          >
            <Image justifySelf="end" src="../assets/Icons/line3.svg" w="60%" />
            <Image
              justifySelf="start"
              src="../assets/Icons/line4.svg"
              w="60%"
            />
          </Grid>
        </Stack>
      </Stack>

      {/* Table */}
      <Stack alignItems="center" px={5} gap={10}>
        <RichText
          text="Why settle for less? Discover the real difference with Tovlo"
          width="3xl"
        />
        <ComparisonTable />
      </Stack>

      {/* Timeline */}
      <Stack alignItems="center" px={5} gap={10} py={20}>
        <RichText text="The journey of every meal from farm to bowl" />
        <CustomTimeline />
      </Stack>

      {/* Starter Box */}
      <Box p={5}>
        <Stack
          gap={10}
          py={10}
          px={5}
          bgColor="background.ivory"
          border="1px solid "
          borderColor="background.lightGreen50"
          borderRadius="4xl"
          alignItems="center"
        >
          <RichText text="Start Their Journey to Better Health" />

          {/* Packages */}
          <Flex alignItems="center" gap={3}>
            <Stack alignItems="center">
              <Image
                src="../assets/starter_box.png"
                bgColor="text.darkIvory"
                borderRadius="2xl"
                p={5}
                boxSize="500px"
              />
              <Heading fontSize="h6">Beautiful Starter Box</Heading>
            </Stack>

            <Heading fontSize="h3">=</Heading>

            <Stack alignItems="center">
              <Image
                src="../assets/chicken_choice.png"
                bgColor="text.darkIvory"
                borderRadius="2xl"
                p={5}
                h="400px"
                w="300px"
              />
              <Heading fontSize="h6">Chicken choice- 70g</Heading>
            </Stack>

            <Heading fontSize="h3">+</Heading>

            <Stack alignItems="center">
              <Image
                src="../assets/fish_fantasy.png"
                bgColor="text.darkIvory"
                borderRadius="2xl"
                p={5}
                h="400px"
                w="300px"
              />
              <Heading fontSize="h6">Fish fantasy- 70g</Heading>
            </Stack>

            <Heading fontSize="h3">+</Heading>

            <Stack alignItems="center">
              <Image
                src="../assets/meaty_marvel.png"
                bgColor="text.darkIvory"
                borderRadius="2xl"
                p={5}
                h="400px"
                w="300px"
              />
              <Heading fontSize="h6">Meaty marvel-70g</Heading>
            </Stack>
          </Flex>

          <RichText
            text="The perfect introduction to the Tovlo way — your Starter Pack awaits"
            width="4xl"
            textTransform="none"
          />
          <CustomButton>Try the starter pack</CustomButton>
        </Stack>
      </Box>

      {/* Marquee 2 */}
      <CustomMarquee data={marquee2} />
    </>
  );
};

export default HomeScreen;
