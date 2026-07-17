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

const JerkyScreen = () => {
  const badge = ["Chicken feet 100%", "Single protein", "No additives"];

  const images = [
    "/assets/products/jerky.png",
    "/assets/products/jerky.png",
    "/assets/products/jerky.png",
    "/assets/products/jerky.png",
  ];

  const whyChoose = [
    {
      icon: "../assets/Icons/Meat.png",
      heading: "Single protein source",
      text: "Only one meat, great for sensitive tummies.",
    },
    {
      icon: "../assets/Icons/leaf.svg",
      heading: "No additives or fillers",
      text: "No artificial flavors or extras.",
    },
    {
      icon: "../assets/Icons/Bone.svg",
      heading: "Natural source of collagen",
      text: "Supports joints, tendons, skin.",
    },
  ];

  const table = [
    {
      title: "Protein (min)",
      percent: "67.0",
      scoop: "40.2",
    },
    {
      title: "Fat (min)",
      percent: "11.0",
      scoop: "6.6",
    },
    {
      title: "Total Carbohydrate* (max)",
      percent: "1.0",
      scoop: "0.6",
    },
    {
      title: "Dietary Fibre (max)",
      percent: "1.0",
      scoop: "0.6",
    },
    {
      title: "Moisture (max)",
      percent: "6.0",
      scoop: "3.6",
    },
  ];

  const chickenFeetData = [
    {
      image: "/assets/Icons/tooth.svg",
      title: "Strengthens bones & teeth",
      description: "Natural calcium & phosphorus",
    },
    {
      image: "/assets/Icons/lightBone.svg",
      title: "Natural source of collagen",
      description: "Supports joints, tendons, skin",
    },
    {
      image: "/assets/Icons/kidney.svg",
      title: "Digestive support ",
      description: "Gelatin helps gut function",
    },
    {
      image: "/assets/Icons/fire.svg",
      title: "Oven-baked",
      description: "Low-temp preserved flavor & nutrition",
    },
  ];

  const accData = [
    {
      icon: "../assets/Icons/nutrient-dense.png",
      heading: "Nutrition info",
      content: (
        <Stack gap={3}>
          <Text>
            Calories per pack (60 gms): 235
            <br />
            From Protein 182, Fat 51, Carbohydrate 2
          </Text>

          {/* Table */}
          <Table.Root size="sm" w={{ base: "100%", md: "80%" }}>
            <Table.Header>
              <Table.Row bgColor={"transparent"}>
                <Table.ColumnHeader color={"text.primary"}>
                  Nutrients
                </Table.ColumnHeader>
                <Table.ColumnHeader color={"text.primary"}>
                  Guaranteed
                </Table.ColumnHeader>
                <Table.ColumnHeader textAlign="end" color={"text.primary"}>
                  Per Pack
                </Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {table.map((item, index) => (
                <Table.Row
                  key={index}
                  bgColor={
                    index % 2 === 0 ? "background.lightGreen" : "transparent"
                  }
                >
                  <Table.Cell border={"none"}>{item.title}</Table.Cell>
                  <Table.Cell border={"none"}>{item.percent}%</Table.Cell>
                  <Table.Cell border={"none"}>{item.scoop}g</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </Stack>
      ),
    },
    {
      icon: "../assets/Icons/spoon.svg",
      heading: "Serving instructions",
      content: (
        <List.Root variant="plain">
          <List.Item>
            Tovlo Air-Dried Chicken Feet Treats can be served as:
          </List.Item>
          <List.Item>Training treats </List.Item>
          <List.Item>Part of a balanced diet</List.Item>
          <List.Item>A fun snack</List.Item>
        </List.Root>
      ),
    },
    {
      icon: "../assets/Icons/box.svg",
      heading: "Storage",
      content: (
        <List.Root variant="marker">
          <List.Item>
            Store in a cool and dry place, away from direct heat and moisture.
          </List.Item>
          <List.Item>Clean hands, surfaces, and utensils after use.</List.Item>
          <List.Item>Keep out of reach of children.</List.Item>
        </List.Root>
      ),
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
              Chicken feet treats– clean, simple treats dogs love
            </Heading>
            <Text
              fontSize={{ base: "text8", md: "text8", lg: "text2" }}
              w={{ base: "100%", lg: "80%" }}
            >
              Treat your pet to a healthy and tasty treat! Chicken feet treats
              are 100% natural chicken feet, air dried to preserve maximum
              nutrients and natural flavor. Perfect for rewarding, cleaning
              teeth, and just for your dog's enjoyment!
            </Text>
            <Heading
              fontSize={{ base: "h4", md: "h3", lg: "h3" }}
              lineHeight={"heading1"}
              fontWeight={"400"}
            >
              29.90₪
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
                  70 g
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

            {/* Mobile Swiper */}
            {/* <Box w="full" display={{ base: "block", md: "none" }}>
              <Swiper loop={true} slidesPerView={1.1} spaceBetween={10}>
                {images.map((src, index) => (
                  <SwiperSlide>
                    <Stack
                      gap={5}
                      alignItems={"center"}
                      justifyContent={"center"}
                    >
                      <Image
                        src={src}
                        alt={`Image ${index}`}
                        boxSize={"80%"}
                        objectFit="contain"
                      />
                    </Stack>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box> */}
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
        gap={10}
        py={10}
        px={{ base: 2, md: 5, lg: 5 }}
      >
        <RichText text="Why Choose Our Treats?" w="full" />
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
          gap={5}
          display={{ base: "none", lg: "grid" }}
        >
          {whyChoose.map((item) => (
            <Stack
              maxW="sm"
              p={8}
              textAlign={"center"}
              gap={3}
              bgColor={"text.ivory"}
              borderColor="#fe6b4050"
              border="1px solid"
              borderRadius={"lg"}
              alignItems={"center"}
            >
              <Image src={item.icon} boxSize={"40px"} objectFit={`contain`} />
              <Heading fontSize={{ base: "text8", md: "h6", lg: "h6" }}>
                {item.heading}
              </Heading>
              <Separator w={"full"} h={"2px"} borderColor={"text.orange"} />
              <Flex
                h={"100px"}
                fontSize={{ base: "text8", md: "text8", lg: "text6" }}
                alignItems={"end"}
              >
                {item.text}
              </Flex>
            </Stack>
          ))}
        </Grid>

        {/* Tab & Mobile Layout */}
        <Box w={"full"} display={{ base: "block", lg: "none" }}>
          <Swiper
            loop={true}
            breakpoints={{
              0: {
                slidesPerView: 1.1,
                spaceBetween: 20, // for mobile
              },
              640: {
                slidesPerView: 2.1,
                spaceBetween: 20, // tablet
              },
            }}
            className="testimonialSwiper"
          >
            {whyChoose.map((item) => (
              <SwiperSlide>
                <Stack
                  maxW="sm"
                  p={8}
                  textAlign={"center"}
                  gap={3}
                  bgColor={"text.ivory"}
                  borderColor="#fe6b4050"
                  border="1px solid"
                  borderRadius={"lg"}
                  alignItems={"center"}
                >
                  <Image
                    src={item.icon}
                    boxSize={"40px"}
                    objectFit={`contain`}
                  />
                  <Heading fontSize={{ base: "text2", md: "h6", lg: "h6" }}>
                    {item.heading}
                  </Heading>
                  <Separator w={"full"} h={"2px"} borderColor={"text.orange"} />
                  <Flex
                    h={"100px"}
                    fontSize={{ base: "text6", md: "text8", lg: "text6" }}
                    alignItems={"end"}
                  >
                    {item.text}
                  </Flex>
                </Stack>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Stack>

      {/* Section 3 */}
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        gap={10}
        py={10}
        px={{ base: 2, md: 5, lg: 5 }}
        position={"relative"}
      >
        <RichText text="INSIDE EVERY PACK" />
        <RichText
          text="Chicken feet - 100% and nothing else"
          textTransform="initial"
          width={"100%"}
        />
        {/* top 2  */}
        <Flex
          display={{ base: "none", md: "flex" }}
          justifyContent={"space-between"}
          w={"full"}
          py={14}
        >
          {chickenFeetData.slice(0, 2).map((item, index) => (
            <Flex
              alignItems={"center"}
              position={"relative"}
              justifyContent={index % 2 === 0 ? "start" : "end"}
            >
              <Image
                src={item.image}
                boxSize={{ base: "40px", md: "80px", lg: "80px" }}
                objectFit={`contain`}
              />
              <Stack
                gap={{ base: 2, md: 3 }}
                ml={{ base: -5, lg: -5 }}
                w={{ base: "50%", lg: "full" }}
              >
                <Heading
                  fontSize={{ base: "text6", md: "text7", lg: "h6" }}
                  lineHeight="heading2"
                >
                  {item.title}
                </Heading>
                <Text
                  fontSize={{ base: "text8", md: "text6", lg: "text6" }}
                  fontWeight="normal"
                  lineHeight="text1"
                  w={{ base: "120px", md: "full" }}
                >
                  {item.description}
                </Text>
              </Stack>
            </Flex>
          ))}
        </Flex>
        {/* bottom 2  */}
        <Flex
          display={{ base: "none", md: "flex" }}
          justifyContent={"space-between"}
          w={{ base: "full", lg: "90%" }}
          py={14}
        >
          {chickenFeetData.slice(2, 4).map((item, index) => (
            <Flex
              alignItems={"center"}
              position={"relative"}
              justifyContent={index % 2 === 0 ? "start" : "end"}
            >
              <Image
                src={item.image}
                boxSize={{ base: "40px", md: "80px", lg: "80px" }}
                objectFit={`contain`}
              />
              <Stack
                gap={{ base: 2, md: 3 }}
                ml={{ base: -5, lg: -5 }}
                w={{ base: "50%", lg: "full" }}
              >
                <Heading
                  fontSize={{ base: "text6", md: "text7", lg: "h6" }}
                  lineHeight="heading2"
                >
                  {item.title}
                </Heading>
                <Text
                  fontSize={{ base: "text8", md: "text6", lg: "text6" }}
                  fontWeight="normal"
                  lineHeight="text1"
                  w={{ base: "120px", md: "full" }}
                >
                  {item.description}
                </Text>
              </Stack>
            </Flex>
          ))}
        </Flex>
        <Image
          src="/assets/ingredients/chickenleg.png"
          width={{ base: "300px", lg: "400px" }}
          position={{ md: "absolute" }}
          top={{ md: "60%", lg: "70%" }}
          left={{ md: "50%" }}
          transform={{ md: "translate(-50%, -50%)" }}
        />
        <Grid
          display={{ base: "grid", md: "none" }}
          templateColumns={{ base: "repeat(2,1fr)" }}
          gap={5}
        >
          {chickenFeetData.map((item, index) => (
            <Flex alignItems={"center"} position={"relative"}>
              <Image
                src={item.image}
                boxSize={{ base: "60px", md: "80px", lg: "80px" }}
                objectFit={`contain`}
              />
              <Stack gap={{ base: 2, md: 3 }} ml={{ base: -6, lg: -5 }}>
                <Heading
                  fontSize={{ base: "text6", md: "text7", lg: "h6" }}
                  lineHeight="heading2"
                >
                  {item.title}
                </Heading>
                <Text
                  fontSize={{ base: "12px", md: "text6", lg: "text6" }}
                  fontWeight="normal"
                  lineHeight="text1"
                  w={{ base: "120px", md: "full" }}
                >
                  {item.description}
                </Text>
              </Stack>
            </Flex>
          ))}
        </Grid>
      </Stack>

      {/* Section 4 - Accordion */}
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        py={20}
        px={{ base: 2, md: 5 }}
        gap={10}
      >
        <RichText text="NUTRITION & FEEDING" />
        <TAccordian
          data={accData}
          w={{ base: "full", md: "full", lg: "70%" }}
        />
      </Stack>

      {/* Section - 5 */}
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

      {/* You May Like */}
      <Stack
        alignItems="center"
        py={20}
        px={{ base: 2, md: 5, lg: 5 }}
        gap={10}
        position="relative"
      >
        <RichText text="You might also like" width="full" />

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
                <ProductCard hideFooter product={product} />
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
                <ProductCard hideFooter product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
        <OrangeButton
          position={{ base: "initial", lg: "absolute" }}
          right={5}
          top="10%"
        >
          View All Products
        </OrangeButton>
      </Stack>
    </>
  );
};

export default JerkyScreen;
