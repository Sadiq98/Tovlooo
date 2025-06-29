import {
  Grid,
  Flex,
  Stack,
  Text,
  Image,
  Box,
  Heading,
  Tabs,
  Wrap,
  Icon,
} from "@chakra-ui/react";

import { lazy } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

import {
  bannerContent,
  tabContent,
  whyChooseTovlo,
  bonuses,
  bowlData,
  marquee1,
  marquee2,
  reviews,
} from "../data/homescreenData";

const CustomMarquee = lazy(() => import("../components/custom/Marquee"));
const RichText = lazy(() => import("../components/custom/RichText"));
const BannerSlide = lazy(() => import("../components/custom/BannerSlide"));
const CustomButton = lazy(() => import("../components/custom/CustomButton"));
const CustomTimeline = lazy(() => import("../components/custom/Timeline"));
const Video = lazy(() => import("../components/custom/Video"));
const Testimonial = lazy(() => import("../components/custom/Testimonial"));
const ComparisonTable = lazy(() =>
  import("../components/custom/ComparisonTable")
);

const HomeScreen = () => {
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
      <CustomMarquee data={marquee1} />

      {/* Scientifically Designed */}
      <Stack px={{ base: 0, lg: 5 }} py={20}>
        <Stack
          borderRadius={{ base: "none", lg: "xl" }}
          alignItems="center"
          p={{ base: 5, md: 10, lg: 5 }}
          position="relative"
        >
          <RichText
            text="Scientifically Designed Loved by Dogs"
            width={{ base: "full", md: "xl" }}
          />
          <Image
            src="../assets/foodBowl.png"
            alt="foodBowl"
            boxSize={{ base: "300px", md: "500px" }}
            zIndex={1}
          />
          <Grid
            templateColumns={"repeat(2, 1fr)"}
            position={{ base: "none", lg: "absolute" }}
            w={{ base: "auto", lg: "80%" }}
            gap={{ base: 10, md: 20, lg: 40 }}
            top="25%"
          >
            {bowlData.map((item, index) => (
              <Stack
                alignItems="center"
                justifySelf={index % 2 === 0 ? "start" : "end"}
              >
                <Image
                  src={item.image}
                  boxSize={{ base: 14, md: 20, lg: 12 }}
                />
                <Heading
                  fontWeight="normal"
                  fontSize={{ base: "lg", md: "h5", lg: "h6" }}
                >
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
            display={{ base: "none", lg: "grid" }}
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
            display={{ base: "none", lg: "grid" }}
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
      <Stack
        alignItems="center"
        px={{ base: 2, md: 5, lg: 5, xl: 20 }}
        gap={10}
      >
        <RichText
          text="Why settle for less? Discover the real difference with Tovlo"
          width={{ base: "full", md: "3xl" }}
        />
        <ComparisonTable />
      </Stack>

      {/* Timeline */}
      <Stack alignItems="center" px={5} gap={10} py={20}>
        <RichText text="The journey of every meal from farm to bowl" />
        <CustomTimeline />
      </Stack>

      {/* Starter Box */}
      <Box p={{ base: 0, lg: 5 }}>
        <Stack gap={10} py={10} px={{ base: 0, lg: 5 }} alignItems="center">
          <RichText text="Start Their Journey to Better Health" />

          {/* Packages */}
          <Flex
            alignItems="center"
            justifyContent="center"
            gap={{ base: 1, md: 3 }}
            wrap={{ base: "wrap", lg: "nowrap" }}
          >
            <Stack alignItems="center" w={{ base: "100vw", lg: "auto" }}>
              <Image
                src="../assets/starter_box.png"
                bgColor="text.darkIvory"
                borderRadius="2xl"
                p={5}
                boxSize={{ base: "300px", md: "500px" }}
              />
              <Heading fontSize={{ base: "text6", md: "h6" }}>
                Beautiful Starter Box
              </Heading>
            </Stack>

            <Heading
              fontSize="h3"
              textAlign="center"
              w={{ base: "100vw", lg: "auto" }}
            >
              =
            </Heading>

            <Stack alignItems="center">
              <Image
                src="../assets/chicken_choice.png"
                bgColor="text.darkIvory"
                borderRadius="2xl"
                p={5}
                h={{ base: "200px", md: "300px", lg: "400px" }}
                w={{ base: "100px", md: "200px", lg: "300px" }}
              />
              <Heading fontSize={{ base: "xs", md: "h6" }}>
                Chicken choice- 70g
              </Heading>
            </Stack>

            <Heading fontSize={{ base: "h6", md: "h3" }}>+</Heading>

            <Stack alignItems="center">
              <Image
                src="../assets/fish_fantasy.png"
                bgColor="text.darkIvory"
                borderRadius="2xl"
                p={5}
                h={{ base: "200px", md: "300px", lg: "400px" }}
                w={{ base: "100px", md: "200px", lg: "300px" }}
              />
              <Heading fontSize={{ base: "xs", md: "h6" }}>
                Fish fantasy- 70g
              </Heading>
            </Stack>

            <Heading fontSize={{ base: "h6", md: "h3" }}>+</Heading>

            <Stack alignItems="center">
              <Image
                src="../assets/meaty_marvel.png"
                bgColor="text.darkIvory"
                borderRadius="2xl"
                p={5}
                h={{ base: "200px", md: "300px", lg: "400px" }}
                w={{ base: "100px", md: "200px", lg: "300px" }}
              />
              <Heading fontSize={{ base: "xs", md: "h6" }}>
                Meaty marvel-70g
              </Heading>
            </Stack>
          </Flex>

          <RichText
            text="The perfect introduction to the Tovlo way — your Starter Pack awaits"
            width={{ base: "full", md: "3xl", lg: "4xl" }}
            textTransform="none"
            fontSize={{ base: "text1", md: "h4" }}
          />
          <CustomButton>Try the starter pack</CustomButton>
        </Stack>
      </Box>

      {/* Ingredients TAB */}
      <Box px={{ base: 0, lg: 5 }} py={{ base: 10, md: 20 }}>
        <Stack
          borderRadius={{ base: "none", lg: "4xl" }}
          alignItems="center"
          p={{ base: 2, md: 5, lg: 10 }}
          py={5}
          gap={10}
        >
          <RichText text="Our Ingredients" />
          <Tabs.Root
            defaultValue={tabContent[0].title}
            variant="plain"
            w={{ base: "100%", lg: "80%" }}
            justifyItems="center"
          >
            <Tabs.List bgColor="transparent" p="1">
              <Wrap gap={{ base: 3, md: 5 }} p={1} justifyContent="center">
                {tabContent.map((item, index) => (
                  <Tabs.Trigger
                    key={index}
                    value={item.title}
                    border="2px solid"
                    borderColor="text.primary"
                    borderRadius="lg"
                    fontFamily="heading"
                    fontSize={{ base: "text8", md: "h5" }}
                    px={{ base: 3, md: 10, lg: 20 }}
                    py={{ base: 4, md: 6 }}
                    color="text.primary "
                    _selected={{ bg: "text.primary", color: "text.ivory" }}
                  >
                    {item.title}
                  </Tabs.Trigger>
                ))}
              </Wrap>
            </Tabs.List>

            {tabContent.map((item, index) => (
              <Tabs.Content
                color="text.primary"
                key={index}
                value={item.title}
                w={{ base: "xs", md: "md" }}
                textAlign="center"
              >
                <Stack gap={5} alignItems="center">
                  <Flex
                    bgImage="url('../assets/tab_bubble.png')"
                    bgSize="100% 100%"
                    bgRepeat="no-repeat"
                    w={{ base: "350px", md: "550px" }}
                    h={{ base: "300px", md: "500px" }}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Image
                      src={item.image}
                      boxSize={{ base: "200px", md: "350px" }}
                      objectFit="contain"
                    />
                  </Flex>
                  <Heading fontSize={{ base: "h5", md: "h3" }}>
                    {item.title}
                  </Heading>
                  <Text fontSize={{ base: "text8", md: "text1" }}>
                    {item.description}
                  </Text>
                </Stack>
              </Tabs.Content>
            ))}
          </Tabs.Root>
        </Stack>
      </Box>

      {/* WHY PET PARENTS CHOOSE TOVLO */}
      <Box p={{ base: 0, lg: 5 }} py={10}>
        <Stack
          gap={10}
          py={10}
          px={{ base: 3, lg: 5 }}
          bgColor="background.ivory"
          border="1px solid "
          borderColor="text.lightGreen50"
          borderRadius={{ base: "none", lg: "4xl" }}
          alignItems="center"
          bgImage="url('../assets/paw-background.png')"
          bgRepeat="no-repeat"
          bgSize="cover"
        >
          <RichText text="Why Pet Parents Choose Tovlo" width="full" />
          {/* <Grid templateColumns="repeat(3, 1fr)" gap={{ base: 5, lg: 10 }}> */}
          <Box w="full" zIndex={2}>
            <Swiper
              loop={true}
              spaceBetween={20}
              breakpoints={{
                0: {
                  slidesPerView: 1.05,
                  spaceBetween: 10, // for mobile
                },
                640: {
                  slidesPerView: 3,
                  spaceBetween: 10, // tablet
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20, // desktop
                },
              }}
              className="testimonialSwiper"
            >
              {whyChooseTovlo.map((item, index) => (
                <SwiperSlide>
                  <Stack gap={5} key={index}>
                    <Image
                      src={item.image}
                      borderRadius="lg"
                      boxShadow="4px 4px 8px 0px rgba(0, 0, 0, 0.10)"
                      h={{ base: "300px", lg: "350px" }}
                    />
                    <Stack
                      gap={2}
                      textAlign="center"
                      w={{ base: "95%", lg: "90%" }}
                    >
                      <Heading fontSize="h6" fontWeight="bold">
                        {item.title}
                      </Heading>
                      <Text fontSize="text6">{item.description}</Text>
                    </Stack>
                  </Stack>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
          {/* </Grid> */}
          <CustomButton>See our meals</CustomButton>
        </Stack>
      </Box>

      {/* BECOME PART OF TOVLO FAMILY */}
      <Box p={{ base: 0, lg: 5 }} py={{ base: 10, md: 20 }}>
        <Stack gap={5} py={10} px={{ base: 2, lg: 5 }} alignItems="center">
          <RichText
            text="Become a Part of the Tovlo Family"
            width={{ base: "full", md: "xl", lg: "full" }}
          />
          <Stack
            gap={5}
            textAlign="center"
            w={{ base: "full", md: "md", lg: "lg" }}
          >
            <Heading
              fontSize={{ base: "h6", md: "h5", lg: "h4" }}
              fontWeight="bold"
            >
              Ready to share the love?
            </Heading>
            <Text fontSize={{ base: "text8", md: "text6", lg: "text1" }}>
              Join a movement of passionate pet parents. We’re building more
              than a brand — we’re building a community.
            </Text>
          </Stack>
          <CustomButton>Let's do this</CustomButton>

          <Flex
            gap={3}
            w={{ base: "full", md: "lg" }}
            wrap="wrap"
            justifyContent="center"
          >
            {bonuses.map((item, index) => (
              <Flex gap={2} alignItems="center" key={index}>
                <Icon as={item.icon} />
                <Text fontSize={{ base: "xs", md: "text8" }}>{item.text}</Text>
              </Flex>
            ))}
          </Flex>
          <Video />
        </Stack>
      </Box>

      {/* REVIEWS */}
      <Box p={{ base: 0, lg: 5 }} py={10}>
        <Stack gap={5} py={10} px={{ base: 2, lg: 5 }} alignItems="center">
          <RichText
            text="What those who have already chosen us are saying"
            width={{ base: "full", md: "3xl" }}
          />

          <Box w="full">
            <Swiper
              loop={true}
              slidesPerView={1.5}
              modules={[Autoplay]}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              spaceBetween={20}
              breakpoints={{
                0: {
                  slidesPerView: 1.05,
                  spaceBetween: 10, // for mobile
                },
                640: {
                  slidesPerView: 1.2,
                  spaceBetween: 15, // tablet
                },
                1024: {
                  slidesPerView: 1.3,
                  spaceBetween: 20, // desktop
                },
                1920: {
                  slidesPerView: 1.7,
                  spaceBetween: 20, // desktop
                },
              }}
              className="testimonialSwiper"
            >
              {reviews.map((review, index) => (
                <SwiperSlide>
                  <Testimonial {...review} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Stack>
      </Box>

      {/* Marquee 2 */}
      <CustomMarquee data={marquee2} />
    </>
  );
};

export default HomeScreen;
