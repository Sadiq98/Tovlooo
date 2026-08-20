import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink, useNavigate, useParams } from "react-router-dom";
import {
  createProductReview,
  listProductDetails,
} from "../actions/productActions";
import Rating from "../components/custom/Rating";
import { PRODUCT_REVIEW_CREATE_RESET } from "../constants/productConstants";
import {
  Accordion,
  Badge,
  Box,
  Field,
  Flex,
  Grid,
  Heading,
  HStack,
  Icon,
  Image,
  Input,
  InputGroup,
  List,
  Progress,
  Separator,
  Slider,
  Stack,
  Table,
  Tabs,
  Text,
  Wrap,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { products } from "../data/products";
import { GreenButton, OrangeButton } from "../components/custom/CustomButton";
import RichText from "./../components/custom/RichText";
import ProductCard from "../components/custom/ProductCard";
import { FaPaw } from "react-icons/fa";
import { BsArrowUpRight, BsPlusCircle } from "react-icons/bs";
import Newsletter from "../components/custom/Newsletter";
import { TAccordian } from "../components/custom/TAccordian";
import { MdGraphicEq } from "react-icons/md";

const SupplementScreen = () => {
  const badge = ["Chicken feet 100%", "Single protein", "No additives"];

  const images = [
    "/assets/products/supplement.png",
    "/assets/products/supplement.png",
    "/assets/products/supplement.png",
    "/assets/products/supplement.png",
  ];

  const ingredients = [
    {
      image: "../assets/real_chicken.png",
      heading: "Chicken",
      text: "With feet and liver — natural source of collagen, protein, and minerals",
    },
    {
      image: "../assets/coconut.png",
      heading: "Coconut",
      text: "Rich in healthy fats and medium-chain triglycerides for energy and coat health",
    },
    {
      image: "../assets/superseeds.png",
      heading: "Chickpeas",
      text: "Gentle source of plant-based fiber and protein for steady digestion",
    },
    {
      image: "../assets/pumpkin.png",
      heading: "Pumpkin & Botanicals",
      text: "Ginger, fennel, and papaya powder to soothe digestion and support gut health",
    },
  ];

  const table = [
    {
      weight: "1–10 kg",
      amount: "Less than half",
      weeks: "8",
    },
    {
      weight: "11–25 kg",
      amount: "1",
      weeks: "4",
    },
    {
      weight: "25+ kg",
      amount: "2",
      weeks: "2",
    },
    {
      weight: "46+ kg and above",
      amount: "3",
      weeks: "Less than 2",
    },
  ];

  const iconData = [
    {
      icon: "../assets/Icons/Muscle.svg",
      label: "Stronger Muscles",
    },
    {
      icon: "../assets/Icons/Dog.svg",
      label: "Shiny Skin & Coat",
    },
    {
      icon: "../assets/Icons/Bone.svg",
      label: "Healthier Joints",
    },
    {
      icon: "../assets/Icons/Brain.svg",
      label: "Sharper Brain",
    },
    {
      icon: "../assets/Icons/paw+.svg",
      label: "Better Immunity",
    },
    {
      icon: "../assets/Icons/kidneyD.svg",
      label: "Easier Digestion",
    },
  ];

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  const product1 = products[id - 1];

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState();
  const [comment, setComment] = useState("");
  return (
    <>
      <Box
        px={{ base: 2, md: 5 }}
        py={{ base: 10, md: 20 }}
        pt={{ base: 28, md: 32 }}
      >
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          gap={5}
        >
          <Stack gap={5} order={{ base: 2, md: 1 }}>
            <Flex gap={{ base: 2, lg: 5 }}>
              {badge.map((item) => (
                <Badge
                  size={{ base: "sm", lg: "lg" }}
                  variant="subtle"
                  borderRadius="md"
                  bgColor="custom.lightGreen"
                  color="text.lightGreen50"
                >
                  {item}
                </Badge>
              ))}
            </Flex>
            <Heading
              fontSize={{ base: "h6", md: "h5", lg: "h3" }}
              lineHeight={"heading1"}
              textTransform={"uppercase"}
            >
              Pre + probiotics & gut health - Stronger From the Inside Out{" "}
            </Heading>
            <Text
              fontSize={{ base: "text8", md: "text8", lg: "text2" }}
              w={{ base: "100%", lg: "80%" }}
            >
              Boost digestion, immunity, joints, and skin health — one scoop at
              a time.{" "}
            </Text>
            <Heading
              fontSize={{ base: "h4", md: "h3", lg: "h3" }}
              lineHeight={"heading1"}
              fontWeight={"400"}
            >
              37.00₪
            </Heading>

            <Stack>
              <Heading
                fontSize={{ base: "h6", md: "h6", lg: "text1" }}
                fontWeight="400"
              >
                PACKAGE
              </Heading>
              <Flex gap={5}>
                <Badge
                  size="lg"
                  fontSize="text6"
                  color="text.orange"
                  borderRadius="md"
                  boxShadowColor={"text.orange"}
                  justifyContent={"center"}
                  w="80px"
                  variant="outline"
                >
                  240 g
                </Badge>
              </Flex>
            </Stack>
            <Grid
              templateColumns={{ base: "repeat(1, 1fr)", lg: "3fr 1fr" }}
              gap={3}
            >
              <OrangeButton w="full">Add to Cart</OrangeButton>
              <OrangeButton
                w="full"
                color={"text.orange"}
                bgColor="transparent"
                borderColor={"text.orange"}
                _hover={{
                  color: "text.darkOrange",
                  borderColor: "text.darkOrange",
                }}
              >
                Buy Now
              </OrangeButton>
            </Grid>
            <Text fontSize={{ base: "text6", md: "text8", lg: "text8" }}>
              14-day money-back • Fast delivery • Secure checkout{" "}
            </Text>
          </Stack>
          <Stack
            justifyContent="center"
            alignItems="center"
            bgColor={{ base: "transparent", md: "text.ivory" }}
            border="2px solid"
            borderColor={{ base: "transparent", md: "text.lightGreen50" }}
            borderRadius="xl"
            w="full"
            order={{ base: 1, md: 2 }}
            p={{ base: 2, md: 5 }}
          >
            {/* Desktop Swiper */}
            <Flex
              alignItems={"center"}
              gap={5}
              justifyContent={"center"}
              display={{ base: "none", lg: "flex" }}
            >
              {/* Main Image Swiper */}
              <Swiper
                loop
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Thumbs]}
                style={{ width: "500px", height: "500px" }}
              >
                {images.map((src, index) => (
                  <SwiperSlide key={index}>
                    <Flex
                      justifyContent={"center"}
                      alignItems={"center"}
                      w={"100%"}
                    >
                      <Image
                        src={src}
                        alt={`Image ${index}`}
                        boxSize="60%"
                        objectFit={"contain"}
                      />
                    </Flex>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Thumbnail Swiper (Vertical on Right) */}
              <Swiper
                loop
                onSwiper={setThumbsSwiper}
                direction="vertical"
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Thumbs]}
                style={{ width: "100px", height: "500px" }}
                breakpoints={{}}
              >
                {images.map((src, index) => (
                  <SwiperSlide key={index}>
                    <Flex
                      justifyContent={"center"}
                      alignItems={"center"}
                      w={"100%"}
                      border={"2px solid"}
                      borderColor="background.lightGreen"
                      borderRadius={"md"}
                      p={2}
                      className="thumb-slide"
                    >
                      <Image
                        src={src}
                        alt={`Image ${index}`}
                        boxSize="60%"
                        objectFit={"contain"}
                      />
                    </Flex>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Flex>

            {/* Tablet Swiper */}
            <Stack
              alignItems={"center"}
              gap={10}
              justifyContent={"space-between"}
              display={{ base: "none", md: "flex", lg: "none" }}
            >
              {/* Main Image Swiper */}
              <Swiper
                loop
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Thumbs]}
                style={{ width: "300px", height: "300px" }}
              >
                {images.map((src, index) => (
                  <SwiperSlide key={index}>
                    <Flex
                      justifyContent={"center"}
                      alignItems={"center"}
                      w={"100%"}
                    >
                      <Image
                        src={src}
                        alt={`Image ${index}`}
                        boxSize="60%"
                        objectFit={"contain"}
                      />
                    </Flex>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Thumbnail Swiper (Vertical on Right) */}
              <Swiper
                loop
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Thumbs]}
                style={{ width: "300px" }}
                breakpoints={{}}
              >
                {images.map((src, index) => (
                  <SwiperSlide key={index}>
                    <Flex
                      justifyContent={"center"}
                      alignItems={"center"}
                      w={"100%"}
                      border={"2px solid"}
                      borderColor="background.lightGreen"
                      borderRadius={"md"}
                      p={2}
                      className="thumb-slide"
                    >
                      <Image
                        src={src}
                        alt={`Image ${index}`}
                        boxSize="60%"
                        objectFit={"contain"}
                      />
                    </Flex>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Stack>

            <Box w={"350px"} display={{ base: "block", md: "none" }}>
              <Swiper
                loop={true}
                breakpoints={{
                  0: {
                    slidesPerView: 1.05,
                    spaceBetween: 10, // for mobile
                  },
                }}
                className="testimonialSwiper"
              >
                {images.map((src) => (
                  <SwiperSlide>
                    <Flex
                      bgColor={"text.ivory"}
                      border={"2px solid"}
                      borderColor={"text.lightGreen50"}
                      borderRadius={"xl"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      p={5}
                    >
                      <Image src={src} boxSize={"70%"} />
                    </Flex>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
          </Stack>
        </Grid>
      </Box>

      {/* Section - 2 */}
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        gap={5}
        px={{ base: 2, md: 5, lg: 5 }}
        py={10}
      >
        <RichText text="Every Scoop, Packed With Purpose" width={"full"} />
        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(2, 1fr)" }}
          gap={{ base: 2, md: 5 }}
        >
          {ingredients.map((item, index) => {
            const isIvory = index === 0 || index === 3;
            return (
              <Stack
                gap={3}
                alignItems={"center"}
                p={5}
                textAlign={"center"}
                w={{ base: "full", md: "full", lg: "lg" }}
                borderRadius={"xl"}
                bgColor={isIvory ? "text.ivory" : "text.primary"}
                color={isIvory ? "text.primary" : "text.ivory"}
              >
                <Image
                  src={item.image}
                  boxSize={"200px"}
                  objectFit={`contain`}
                />
                <Heading
                  fontWeight={"400"}
                  fontSize={{ base: "h6", md: "h6", lg: "h5" }}
                >
                  {item.heading}
                </Heading>
                <Separator
                  w={"full"}
                  h={"2px"}
                  borderColor={isIvory ? "text.primary" : "text.ivory"}
                />
                <Text
                  fontSize={{ base: "text6", md: "text8", lg: "text6" }}
                  w={{ base: "full", md: "full", lg: "xs" }}
                >
                  {item.text}
                </Text>
              </Stack>
            );
          })}
        </Grid>
      </Stack>

      <Grid templateColumns={{ base: "1fr", lg: "1fr 2fr" }} gap={5} py={5}>
        <Image
          src="../assets/Supplement/hand_bowl.png"
          height="700px"
          display={{ base: "none", lg: "block" }}
        />
        <Stack gap={{ base: 5, md: 20, lg: 32 }}>
          <RichText
            text="Simple to Serve, Easy to Love"
            width={{ base: "full", md: "full", lg: "xl" }}
            textAlign={"center"}
          />
          <Flex
            width={"full"}
            justifyContent={{ base: "center", md: "end" }}
            px={5}
          >
            <Table.Root
              variant="line"
              size={{ base: "sm", md: "md", lg: "lg" }}
              w={{ base: "100%", lg: "100%" }}
            >
              <Table.Header
                bgColor={"background.lightGreen"}
                fontFamily={"heading"}
                fontSize={{ base: "text6", md: "text1", lg: "text3" }}
              >
                <Table.Row bgColor={"transparent"}>
                  <Table.ColumnHeader color={"text.primary"}>
                    Nutrients
                  </Table.ColumnHeader>
                  <Table.ColumnHeader color={"text.primary"}>
                    Daily Amount
                  </Table.ColumnHeader>
                  <Table.ColumnHeader color={"text.primary"}>
                    250g Lasts for
                  </Table.ColumnHeader>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {table.map((item, index) => (
                  <Table.Row
                    key={index}
                    bgColor={"transparent"}
                    fontFamily={"heading"}
                  >
                    <Table.Cell>{item.weight}</Table.Cell>
                    <Table.Cell>{item.amount} scoop</Table.Cell>
                    <Table.Cell>{item.weeks} weeks</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Root>
          </Flex>
        </Stack>
      </Grid>

      {/* Section  4 - Icons */}
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        gap={5}
        px={{ base: 2, md: 5, lg: 5 }}
        py={10}
      >
        <RichText
          text="Why Pet Parents Choose TOVLO Supplements"
          width={{ base: "full", md: "full", lg: "2xl" }}
        />
        <Box w="full" px={{ base: 2, md: 5 }} py={10}>
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
                slidesPerView: 4,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 20,
              },
              1920: {
                slidesPerView: 6,
                spaceBetween: 20,
              },
            }}
            className="testimonialSwiper"
          >
            {iconData.map(({ icon, label }, index) => (
              <SwiperSlide key={index}>
                <Stack alignItems={"center"} justifyContent={"center"} gap={5}>
                  <Image src={icon} boxSize="60px" alt={label} w={"auto"} />
                  <Heading
                    textAlign={"center"}
                    lineHeight={"heading2"}
                    fontWeight="500"
                    fontSize={{ base: "text6", md: "h6", lg: "h5" }}
                  >
                    {label}
                  </Heading>
                </Stack>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Stack>

      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        gap={5}
        px={{ base: 2, md: 5, lg: 5 }}
        py={10}
      >
        <RichText
          text="Backed by Science, Loved by Dogs"
          width={{ base: "full", md: "full", lg: "2xl" }}
        />
        <Text
          fontSize={{ base: "text6", md: "text1" }}
          w={{ base: "full", md: "md" }}
          textAlign="center"
        >
          Developed with vets and nutritionists to ensure balanced, safe, and
          effective nutrition
        </Text>
        <Image
          src="../assets/Supplement/Dog.png"
          width={{ md: "90%", lg: "60%" }}
          display={{ base: "none", md: "block" }}
        />
        <Image
          src="../assets/Supplement/Dog_mob.png"
          width="100%"
          display={{ base: "block", md: "none" }}
        />
      </Stack>

      {/* Testimoniasl */}
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        py={10}
        gap={10}
        px={{ base: 2, md: 5, lg: 5 }}
      >
        <RichText text="What Real Dog Parents Are Saying" />
        <Grid
          bgImage="url(../assets/products/paw_banner.svg)"
          bgSize="cover"
          bgPos="center"
          bgRepeat="no-repeat"
          templateColumns={{ base: "repeat(1, 1fr)", md: "3fr 2fr" }}
          bgColor={"text.primary"}
          alignItems={"center"}
          justifyItems={"end"}
          p={5}
          gap={5}
          borderRadius={"xl"}
          w={{ base: "100%", lg: "70%" }}
          color={"text.ivory"}
        >
          {/* Mobile Image */}
          <Image
            src="../assets/card_image.png"
            boxSize={"300px"}
            objectFit={`contain`}
            display={{ base: "block", md: "none" }}
          />
          <Stack textAlign={"center"} alignContent={"center"} gap={5}>
            <Heading
              fontWeight={{ base: "500", md: "700" }}
              lineHeight={"heading2"}
              fontSize={{ base: "h6", md: "h5", lg: "h4" }}
            >
              "Bella’s digestion improved, and she actually looks forward to
              mealtime"
            </Heading>
            <Heading
              fontWeight={"500"}
              fontSize={{ base: "h6", md: "h6", lg: "h6" }}
            >
              Michael, Bella’s human
            </Heading>
          </Stack>

          {/* Desktop Image */}
          <Image
            src="../assets/card_image.png"
            boxSize={"300px"}
            objectFit={`contain`}
            display={{ base: "none", md: "block" }}
          />
        </Grid>
      </Stack>

      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        gap={5}
        py={20}
        px={{ base: 2, md: 5, lg: 5 }}
        textAlign={"center"}
        background=" linear-gradient(180deg, #FAFCEB -6.17%, #D5E9D7 48.37%, #FAFCEB 103.97%);"
      >
        <RichText
          text="Your Dog Deserves the Best Start Today"
          textTransform={"none"}
          fontSize={{ base: "h6", md: "h5", lg: "h5" }}
        />
        <Text w={"60%"} fontSize={{ base: "text8", md: "text8", lg: "text6" }}>
          One scoop. A lifetime of benefits.
        </Text>
        <GreenButton w={{ base: "full", md: "initial" }}>
          Shop Supplements Now
        </GreenButton>
      </Stack>
    </>
  );
};

export default SupplementScreen;
