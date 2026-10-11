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
  Button,
} from "@chakra-ui/react";

import { lazy, useRef, useState } from "react";
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
import { products } from "../data/products";

import { GreenButton, OrangeButton } from "../components/custom/CustomButton";

const ProductCard = lazy(() => import("../components/custom/ProductCard"));
const CustomMarquee = lazy(() => import("../components/custom/Marquee"));
const RichText = lazy(() => import("../components/custom/RichText"));
const BannerSlide = lazy(() => import("../components/custom/BannerSlide"));
const CustomTimeline = lazy(() => import("../components/custom/Timeline"));
const Video = lazy(() => import("../components/custom/Video"));
const Testimonial = lazy(() => import("../components/custom/Testimonial"));
const ComparisonTable = lazy(() =>
  import("../components/custom/ComparisonTable")
);

const HomeScreen = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      {/* Banner */}
      <Box w="full">
        <Swiper
          loop={true}
          lazy={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
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
      <Stack px={{ base: 0, lg: 5 }} py={{ base: 10, md: 20 }}>
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
        gap={{ base: 5, md: 10 }}
      >
        <RichText
          text="Why settle for less? Discover the real difference with Tovlo"
          width={{ base: "full", md: "3xl" }}
        />
        <ComparisonTable />
      </Stack>

      {/* Products */}
      <Stack
        alignItems="center"
        py={20}
        px={{ base: 2, md: 5, lg: 5 }}
        gap={10}
        position="relative"
      >
        <RichText
          text="Handpicked meals your dog will absolutely love"
          width={{ base: "full", md: "3xl" }}
        />
        <Text
          fontSize={{ base: "text6", md: "text1" }}
          w={{ base: "full", md: "md" }}
          textAlign="center"
        >
          Crafted with real ingredients and real care, because they deserve only
          the best
        </Text>

        <Grid
          templateColumns={{ md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
          gap={{ md: 10, lg: 5 }}
          display={{ base: "none", md: "grid" }}
        >
          {products
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 4)
            .map((product, index) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
        </Grid>
        <Box w="full" zIndex={2} display={{ base: "block", md: "none" }}>
          <Swiper
            loop={true}
            spaceBetween={20}
            breakpoints={{
              0: {
                slidesPerView: 1.1,
                spaceBetween: 10, // for mobile
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20, // tablet
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20, // desktop
              },
            }}
            className="testimonialSwiper"
          >
            {products.map((product, index) => (
              <SwiperSlide>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
        <OrangeButton
          url="/catalog"
          position={{ base: "initial", lg: "absolute" }}
          right={5}
          top="20%"
        >
          View All Products
        </OrangeButton>
      </Stack>

      {/* Timeline */}
      <Stack alignItems="center" px={5} gap={10} py={10}>
        <RichText text="The journey of every meal from farm to bowl" />
        <CustomTimeline />
      </Stack>

      {/* Starter Box */}
      <Box p={{ base: 0, lg: 5 }}>
        <Stack
          gap={10}
          py={10}
          px={{ base: 0, lg: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <RichText text="Start Their Journey to Better Health" />

          {/* Packages */}
          <Flex
            alignItems="center"
            justifyContent="center"
            gap={{ base: 1, md: 3 }}
            wrap={{ base: "wrap", lg: "nowrap" }}
          >
            <Stack alignItems="center" w={{ base: "100%", lg: "auto" }}>
              <Image
                src="../assets/starter_box.png"
                bgColor="text.darkIvory"
                borderRadius="2xl"
                p={5}
                w={{ base: "300px", md: "500px", lg: "500px" }}
                h={{ base: "300px", md: "500px", lg: "500px" }}
              />
              <Heading fontSize={{ base: "text6", md: "h6" }}>
                Beautiful Starter Box
              </Heading>
            </Stack>

            <Heading
              fontSize="h3"
              textAlign="center"
              w={{ base: "100%", lg: "auto" }}
            >
              =
            </Heading>

            <Flex w={{ base: "sm", md: "auto" }}>
              <Swiper
                style={{ margin: "0" }}
                breakpoints={{
                  0: {
                    slidesPerView: 2,
                    initialSlide: 1,
                    centeredSlides: true,
                  },
                  640: {
                    slidesPerView: 3,
                  },
                }}
              >
                <SwiperSlide>
                  <Flex alignItems="center" gap={{ base: 2, lg: 0 }}>
                    <Stack alignItems="center">
                      <Image
                        src="../assets/chicken_choice.png"
                        bgColor="text.darkIvory"
                        borderRadius="2xl"
                        p={5}
                        h={{ base: "300px", md: "400px", lg: "400px" }}
                        w={{ base: "200px", md: "300px", lg: "300px" }}
                      />
                      <Heading fontSize={{ base: "xs", md: "h6" }}>
                        Chicken choice- 70g
                      </Heading>
                    </Stack>

                    <Heading fontSize={{ base: "h6", md: "h3" }}>+</Heading>
                  </Flex>
                </SwiperSlide>

                <SwiperSlide>
                  <Flex alignItems="center" gap={{ base: 2, lg: 0 }}>
                    <Stack alignItems="center">
                      <Image
                        src="../assets/fish_fantasy.png"
                        bgColor="text.darkIvory"
                        borderRadius="2xl"
                        p={5}
                        h={{ base: "300px", md: "400px", lg: "400px" }}
                        w={{ base: "200px", md: "300px", lg: "300px" }}
                      />
                      <Heading fontSize={{ base: "xs", md: "h6" }}>
                        Fish fantasy- 70g
                      </Heading>
                    </Stack>

                    <Heading fontSize={{ base: "h6", md: "h3" }}>+</Heading>
                  </Flex>
                </SwiperSlide>

                <SwiperSlide>
                  <Flex alignItems="center">
                    <Stack alignItems="center">
                      <Image
                        src="../assets/meaty_marvel.png"
                        bgColor="text.darkIvory"
                        borderRadius="2xl"
                        p={5}
                        h={{ base: "300px", md: "400px", lg: "400px" }}
                        w={{ base: "200px", md: "300px", lg: "300px" }}
                      />
                      <Heading fontSize={{ base: "xs", md: "h6" }}>
                        Meaty marvel-70g
                      </Heading>
                    </Stack>
                  </Flex>
                </SwiperSlide>
              </Swiper>
            </Flex>
          </Flex>

          <RichText
            text="The perfect introduction to the Tovlo way — your Starter Pack awaits"
            width={{ base: "full", md: "3xl", lg: "4xl" }}
            textTransform="none"
            fontSize={{ base: "text1", md: "h4" }}
          />
          <GreenButton url="/starterpack">Try the starter pack</GreenButton>
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
          <GreenButton>See our meals</GreenButton>
        </Stack>
      </Box>

      {/* BECOME PART OF TOVLO FAMILY */}
      <Box p={{ base: 0, lg: 5 }} py={{ base: 0, md: 20 }}>
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
          <GreenButton>Let's do this</GreenButton>

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

          <Flex
            gap={{ base: 3, lg: 5 }}
            wrap="wrap"
            justifyContent="center"
            w={"full"}
          >
            {reviews.map((review, index) => (
              <Button
                size="xl"
                w={{ base: "45%", md: "45%", lg: "auto" }}
                fontSize={{
                  base: "buttonSecondaryOval",
                  md: "buttonPrimary",
                  lg: "20px",
                }}
                key={index}
                fontFamily="heading"
                border="2px solid"
                bgColor={activeIndex === index ? "text.orange" : "transparent"}
                borderColor="text.orange"
                borderRadius="2xl"
                color={activeIndex === index ? "text.ivory" : "text.orange"}
                onClick={() => {
                  swiperRef.current?.slideToLoop(index);
                  setActiveIndex(index);
                }}
              >
                {review.title}
              </Button>
            ))}
          </Flex>

          <Box w="full">
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              loop={true}
              modules={[Autoplay]}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1.05,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 1.2,
                  spaceBetween: 15,
                },
                1024: {
                  slidesPerView: 1.3,
                  spaceBetween: 20,
                },
                1920: {
                  slidesPerView: 1.7,
                  spaceBetween: 20,
                },
              }}
              className="testimonialSwiper"
            >
              {reviews.map((review, index) => (
                <SwiperSlide key={index}>
                  <Testimonial {...review} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default HomeScreen;
