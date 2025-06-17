import {
  Grid,
  Flex,
  Stack,
  Text,
  Image,
  Box,
  Heading,
  Icon,
  Tabs,
  Wrap,
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

  const tabContent = [
    {
      image: "../assets/real_carabeef.png",
      title: "Real carabeef",
      description:
        "A novel protein option, ideal for sensitive stomachs and packed with essential nutrients for a strong and healthy dog",
    },
    {
      image: "../assets/real_chicken.png",
      title: "Real chicken",
      description:
        "A highly digestible and lean protein source, packed with essential amino acids to support muscle development and overall vitality.",
    },
    {
      image: "../assets/lamb.png",
      title: "Lamb",
      description:
        "A highly palatable and nutritious protein source, rich in essential amino acids for muscle development and repair.",
    },
    {
      image: "../assets/shrimp.png",
      title: "Shrimp",
      description:
        "A delicious and nutritious source of protein and antioxidants, supporting a healthy immune system.",
    },
    {
      image: "../assets/real_fish.png",
      title: "Real fish",
      description:
        "Rich in Omega-3 fatty acids for healthy skin and coat, and an excellent source of protein for sustained energy.",
    },
  ];

  const whyChooseTovlo = [
    {
      image: "../assets/card1.png",
      title: "Fuel their joy",
      description:
        "Watch your dog thrive with balanced, nutrient-rich meals that power every playful moment and happy wag",
    },
    {
      image: "../assets/card2.png",
      title: "Kind to every tummy",
      description:
        "Crafted for easy digestion with light, nourishing ingredients — because a happy tummy means a happy dog",
    },
    {
      image: "../assets/card3.png",
      title: "Fresh for every adventure",
      description:
        "Our naturally air-dried recipes retain all their goodness, so you and your best friend can enjoy them anywhere",
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
          borderColor="text.lightGreen50"
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

      {/* Ingredients TAB */}
      <Box px={5} py={20}>
        <Stack
          bgColor="text.primary"
          borderRadius="4xl"
          alignItems="center"
          p={10}
          gap={10}
        >
          <RichText text="Our Ingredients" color="text.ivory" />
          <Tabs.Root
            defaultValue={tabContent[0].title}
            variant="plain"
            w="80%"
            justifyItems="center"
          >
            <Tabs.List bgColor="transparent" p="1">
              <Wrap gap={5} p={1} justifyContent="center">
                {tabContent.map((item, index) => (
                  <Tabs.Trigger
                    key={index}
                    value={item.title}
                    border="2px solid"
                    borderColor="text.ivory"
                    borderRadius="lg"
                    fontFamily="heading"
                    fontSize="h5"
                    px={20}
                    py={6}
                    color="text.ivory"
                    _selected={{ bg: "text.ivory", color: "text.primary" }}
                  >
                    {item.title}
                  </Tabs.Trigger>
                ))}
              </Wrap>
            </Tabs.List>

            {tabContent.map((item, index) => (
              <Tabs.Content
                color="text.ivory"
                key={index}
                value={item.title}
                w="md"
                textAlign="center"
              >
                <Stack gap={5} alignItems="center">
                  <Flex
                    bgImage="url('../assets/tab_bubble.png')"
                    bgSize="100% 100%"
                    bgRepeat="no-repeat"
                    w="550px"
                    h="500px"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Image
                      src={item.image}
                      boxSize="350px"
                      objectFit="contain"
                    />
                  </Flex>
                  <Heading fontSize="h3">{item.title}</Heading>
                  <Text fontSize="text1">{item.description}</Text>
                </Stack>
              </Tabs.Content>
            ))}
          </Tabs.Root>
        </Stack>
      </Box>

      {/* WHY PET PARENTS CHOOSE TOVLO */}
      <Box p={5} py={10}>
        <Stack
          gap={10}
          py={10}
          px={5}
          bgColor="background.ivory"
          border="1px solid "
          borderColor="text.lightGreen50"
          borderRadius="4xl"
          alignItems="center"
        >
          <RichText text="Why Pet Parents Choose Tovlo" width="full" />
          <Grid templateColumns="repeat(3, 1fr)" gap={10}>
            {whyChooseTovlo.map((item, index) => (
              <Stack gap={5} key={index}>
                <Image
                  src={item.image}
                  borderRadius="lg"
                  boxShadow="4px 4px 8px 0px rgba(0, 0, 0, 0.10)"
                  h="350px"
                />
                <Stack gap={2} textAlign="center" w="90%">
                  <Heading fontSize="h6" fontWeight="bold">
                    {item.title}
                  </Heading>
                  <Text fontSize="text6">{item.description}</Text>
                </Stack>
              </Stack>
            ))}
          </Grid>
        </Stack>
      </Box>

      {/* BECOME PART OF TOVLO FAMILY */}
      <Box p={5} py={20}>
        <Stack
          gap={5}
          py={10}
          px={5}
          bgColor="background.ivory"
          border="1px solid "
          borderColor="text.lightGreen50"
          borderRadius="4xl"
          alignItems="center"
        >
          <RichText text="Become a Part of the Tovlo Family" width="full" />
          <Stack gap={5} textAlign="center" w="lg">
            <Heading fontSize="h4" fontWeight="bold">
              Ready to share the love?
            </Heading>
            <Text fontSize="text1">
              Join a movement of passionate pet parents. We’re building more
              than a brand — we’re building a community.
            </Text>
          </Stack>
          <CustomButton>Let's do this</CustomButton>
        </Stack>
      </Box>

      {/* REVIEWS */}
      <Box p={5} py={10}>
        <Stack
          gap={5}
          py={10}
          px={5}
          bgColor="background.ivory"
          border="1px solid "
          borderColor="text.lightGreen50"
          borderRadius="4xl"
          alignItems="center"
        >
          <RichText
            text="What those who have already chosen us are saying"
            width="3xl"
          />
        </Stack>
      </Box>

      {/* Marquee 2 */}
      <CustomMarquee data={marquee2} />
    </>
  );
};

export default HomeScreen;
