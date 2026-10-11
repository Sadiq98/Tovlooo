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

const StarterPackScreen = () => {
  const badge = ["Real Chicken", "Real fish", "Real carabeef"];
  const trustTovlo = [
    {
      icon: "../assets/Icons/nutrient-dense.png",
      heading: "Human-grade ingredients",
      text: "Restaurant-quality nutrition for your dog.",
    },
    {
      icon: "../assets/Icons/vetapproved.svg",
      heading: "Vet-approved",
      text: "Crafted & checked by licensed veterinarians.",
    },
    {
      icon: "../assets/Icons/digestible.svg",
      heading: "Highly digestible",
      text: "Gentle on stomachs, perfect for transitioning.",
    },
  ];

  const insidePack = [
    {
      image: "../assets/about/product1.png",
      heading: "Chicken choice- 70g",
      text: "Muscle support",
    },
    {
      image: "../assets/about/product2.png",
      heading: "Fish fantasy- 70g",
      text: "Brain & coat health",
    },
    {
      image: "../assets/about/product1.png",
      heading: "Meaty marvel- 70g",
      text: "Energy",
    },
  ];

  const switchTovlo = [
    {
      days: "Day 1-2",
      image: "../assets/products/switch1.png",
      text: "25% Tovlo, 75% old feed",
    },
    {
      days: "Day 3-4",
      image: "../assets/products/switch2.png",
      text: "50% TOVLO + 50% old feed",
    },
    {
      days: "Day 5-6",
      image: "../assets/products/switch3.png",
      text: "75% TOVLO + 25% old feed",
    },
    {
      days: "Day 7+",
      image: "../assets/products/switch4.png",
      text: "100% TOVLO",
    },
  ];

  const iconData = [
    {
      icon: "../assets/Icons/gluten.svg",
      heading: "Grain-free & Gluten-free",
    },
    {
      icon: "../assets/Icons/leaf.svg",
      heading: "All-natural ingredients",
    },
    {
      icon: "../assets/Icons/Meat.svg",
      heading: "80% high-quality meat content",
    },
  ];

  const table1 = [
    {
      title: "From Protein:",
      value: "129",
    },
    {
      title: "Fat:",
      value: "44",
    },
    {
      title: "Carbohydrate:",
      value: "34",
    },
  ];
  const table2 = [
    {
      title: "Protein (min)",
      percent: "57.0",
      scoop: "28.5",
    },
    {
      title: "Fat (min)",
      percent: "11.0",
      scoop: "5.5",
    },
    {
      title: "Total Carbohydrate* (max)",
      percent: "15.0",
      scoop: "7.5",
    },
    {
      title: "Dietary Fibre (max)",
      percent: "1.0",
      scoop: "0.5",
    },
    {
      title: "Moisture (max)",
      percent: "10.0",
      scoop: "5.0",
    },
  ];

  const accData = [
    {
      icon: "../assets/Icons/nutrient-dense.png",
      heading: "Nutrition info",
      content: (
        <Stack gap={3}>
          <Text>
            1 scoop (provided inside) = 50 g <br />
            Calories per scoop*: 207
          </Text>
          <Table.Root size="sm" w={"fit-content"} bgColor={"transparent"}>
            <Table.Body>
              {table1.map((item, index) => (
                <Table.Row key={index} bgColor={"transparent"}>
                  <Table.Cell>{item.title}</Table.Cell>
                  <Table.Cell>{item.value}kcal</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>

          {/* Table2 */}
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
                  Per scoop
                </Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {table2.map((item, index) => (
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
            Step 1: Scoop out the right portion for your dog.
          </List.Item>
          <List.Item>
            Step 2: Rehydrate with warm water or bone broth.
          </List.Item>
          <List.Item>Step 3: Serve them their healthy Tovio meal!</List.Item>
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

  //   const productDetails = useSelector((state) => state.productDetails);
  //   const { loading, error, product } = productDetails;
  //   console.log(product);

  //   const userLogin = useSelector((state) => state.userLogin);
  //   const { userInfo } = userLogin;

  //   const productReviewCreate = useSelector((state) => state.productReviewCreate);
  //   const { success: successReviewCreate, error: errorReviewCreate } =
  //     productReviewCreate;

  useEffect(() => {
    // if (successReviewCreate) {
    //   alert("Review submitted");
    //   setRating(0);
    //   setComment("");
    //   dispatch({ type: PRODUCT_REVIEW_CREATE_RESET });
    // }
    dispatch(listProductDetails(id));
  }, [id, dispatch]);

  const addToCartHandler = () => {
    navigate(`/cart/${id}?qty=${qty}`);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createProductReview(id, { rating, comment }));
  };

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
              One Pack. Three Recipes. A Whole New Way to Feed with Love
            </Heading>
            <Text
              fontSize={{ base: "text8", md: "text8", lg: "text2" }}
              w={{ base: "100%", lg: "80%" }}
            >
              A gentle introduction to Tovlo: three chef-crafted recipes,
              thoughtfully portioned for your dog to taste and thrive.
            </Text>
            <Heading
              fontSize={{ base: "h4", md: "h3", lg: "h3" }}
              lineHeight={"heading1"}
              fontWeight={"400"}
            >
              79₪
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
                  210 g
                </Badge>
              </Flex>
            </Stack>
            <Grid
              templateColumns={{ base: "repeat(1, 1fr)", lg: "3fr 1fr" }}
              gap={3}
            >
              <OrangeButton url="/cart" w="full">
                Add to Cart
              </OrangeButton>
              <OrangeButton
                url="/payment"
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
              Ships in 24h • No subscription
            </Text>
          </Stack>
          <Stack
            justifyContent="center"
            alignItems="center"
            bgImage="url('../assets/products/Ellipse.svg')"
            bgRepeat="no-repeat"
            bgPos={"center"}
            bgSize="100% 100%"
            w="full"
            order={{ base: 1, md: 2 }}
            p={{ base: 2, md: 5 }}
          >
            <Image
              src="../assets/products/starterpack.png"
              alt="Starter Pack"
              h={{ base: "250px", md: "350px", lg: "600px" }}
              w="full"
              objectFit="cover"
              borderRadius="xl"
            />
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
        <RichText text="WHY THIS STARTER PACK IS DIFFERENT" w="full" />
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
          gap={5}
          display={{ base: "none", lg: "grid" }}
        >
          {trustTovlo.map((item) => (
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
            {trustTovlo.map((item) => (
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

      {/* Section - 3 */}
      <Stack
        justifyContent="center"
        alignItems="center"
        gap={5}
        px={{ base: 2, md: 5, lg: 5 }}
        py={10}
        position="relative"
      >
        <RichText text="Inside Your Starter Pack" width="full" />
        <Text
          fontSize={{ base: "text8", md: "text8", lg: "text6" }}
          textAlign={"center"}
        >
          One pouch of each recipe. Let your dog taste, explore, and choose
          their favorite.
        </Text>

        {/* Line behind */}
        <Box
          display={{ base: "none", md: "block" }}
          w={"3xl"}
          position="absolute"
          top="53%" // center vertically relative to images
          height="2px"
          bg="gray.400"
          zIndex={0}
        />

        <Flex
          justifyContent="center"
          alignItems="center"
          gap={20}
          zIndex={1}
          display={{ base: "none", lg: "flex" }}
        >
          {insidePack.map((data, index) => (
            <Flex key={index} alignItems={"center"}>
              <Stack gap={3} alignItems="center" textAlign="center">
                <Flex alignItems={"center"} gap={20}>
                  <Image src={data.image} borderRadius="full" boxSize="300px" />
                  {index !== insidePack.length - 1 && (
                    <Icon
                      as={BsPlusCircle}
                      color="text.primary"
                      boxSize={{ base: 5, md: 6, lg: 8 }}

                      // adjust -12px for half the icon size
                    />
                  )}
                </Flex>
                <Heading fontSize={{ base: "text8", md: "h6", lg: "h5" }}>
                  {data.heading}
                </Heading>
                <Text fontSize={{ base: "text8", md: "text8", lg: "text6" }}>
                  {data.text}
                </Text>
              </Stack>
            </Flex>
          ))}
        </Flex>
        <Box w={"full"} display={{ base: "block", lg: "none" }}>
          <Swiper
            breakpoints={{
              0: {
                slidesPerView: 2,
                initialSlide: 1,
                centeredSlides: true,
              },
              640: {
                slidesPerView: 2.5,
                initialSlide: 1,
                centeredSlides: true,
                spaceBetween: 20,
              },
            }}
          >
            {insidePack.map((data, index) => (
              <SwiperSlide>
                <Stack gap={3} alignItems="center" textAlign="center">
                  <Flex alignItems={"center"} gap={10}>
                    <Image
                      src={data.image}
                      borderRadius="full"
                      boxSize={{ base: "150px", md: "300px", lg: "300px" }}
                    />
                  </Flex>
                  <Heading fontSize={{ base: "text8", md: "h6", lg: "h5" }}>
                    {data.heading}
                  </Heading>
                  <Text fontSize={{ base: "text8", md: "text8", lg: "text6" }}>
                    {data.text}
                  </Text>
                </Stack>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
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
        gap={5}
        py={10}
        px={{ base: 2, md: 5, lg: 5 }}
        background=" linear-gradient(180deg, #FAFCEB -6.17%, #D5E9D7 48.37%, #FAFCEB 103.97%);"
      >
        <RichText
          text="Switching to Tovlo? Here's How"
          width={{ base: "xs", md: "full" }}
        />
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          gap={8}
          w={"full"}
        >
          <Text>Gradual transitions = happy digestion.</Text>
          <Grid
            templateColumns={{ base: "repeat(4, 1fr)", lg: "repeat(4, 1fr)" }}
            gap={{ base: 5, lg: 10 }}
            display={{ base: "none", lg: "grid" }}
          >
            {switchTovlo.map((item) => (
              <Stack
                justifyContent={"center"}
                textAlign={"center"}
                alignItems={"center"}
                gap={5}
              >
                <Heading
                  fontSize={{ base: "h3", md: "h6", lg: "h6" }}
                  lineHeight={"heading2"}
                >
                  {item.days}
                </Heading>
                <Image
                  src={item.image}
                  boxSize={{ base: "200px", md: "150px", lg: "200px" }}
                />
                <Text fontSize={{ base: "text6", md: "12px", lg: "text6" }}>
                  {item.text}
                </Text>
              </Stack>
            ))}
          </Grid>

          {/* Mobile Swiper */}
          <Box
            w="full"
            p={{ base: 2, md: 5, lg: 5 }}
            py={10}
            display={{ base: "block", md: "none" }}
          >
            <Swiper
              breakpoints={{
                0: {
                  slidesPerView: 1.4,
                  spaceBetween: 10, // for mobile
                },
              }}
              className="testimonialSwiper"
            >
              {switchTovlo.map((item) => (
                <SwiperSlide>
                  <Stack
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={5}
                  >
                    <Heading
                      fontSize={{ base: "h5", md: "h6", lg: "h6" }}
                      lineHeight={"heading2"}
                    >
                      {item.days}
                    </Heading>
                    <Image src={item.image} boxSize={"200px"} />
                    <Text
                      fontSize={{ base: "text8", md: "text8", lg: "text6" }}
                    >
                      {item.text}
                    </Text>
                  </Stack>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>

          {/* Slider */}
          <Slider.Root
            display={{ base: "block", md: "none", lg: "block" }}
            w={{ base: "full", md: "full", lg: "70%" }}
            step={33.33}
            defaultValue={[33.33]}
          >
            <Slider.Control>
              <Slider.Track bgColor={"text.lightGreen50"} py={1} h={"10px"}>
                <Slider.Range bgColor={"text.primary"} h={"3px"} />
              </Slider.Track>
              <Slider.Thumb
                index={0}
                bgColor="transparent"
                border={"none"}
                boxSize={8}
              >
                <Icon
                  borderRadius={"full"}
                  bgColor={"transparent"}
                  as={FaPaw}
                  color={"text.primary"}
                  boxSize={8}
                  position={"absolute"}
                  top={"50%"}
                  left={"30%"}
                  transform="translate(-50%, -50%)"
                />
              </Slider.Thumb>
            </Slider.Control>
          </Slider.Root>

          {/* Tab Layout */}
          <Grid
            templateColumns={"2fr 1fr"}
            justifyItems={"end"}
            display={{ base: "none", md: "grid", lg: "none" }}
          >
            <Stack>
              {switchTovlo.map((item) => (
                <HStack gap={10}>
                  <Image src={item.image} boxSize="200px" />
                  <Stack
                    w={"full"}
                    gap={2}
                    textAlign={"center"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Heading
                      fontSize={{ base: "h5", md: "h5", lg: "h6" }}
                      lineHeight={"heading2"}
                    >
                      {item.days}
                    </Heading>
                    <Text
                      fontSize={{ base: "text8", md: "text6", lg: "text6" }}
                    >
                      {item.text}
                    </Text>
                  </Stack>
                </HStack>
              ))}
            </Stack>
            {/* Slider */}

            <Slider.Root
              display={{ base: "none", md: "block", lg: "none" }}
              step={33.33}
              h={"full"}
              orientation="vertical"
              defaultValue={[33.33 * 2]}
            >
              <Slider.Control>
                <Slider.Track bgColor={"text.primary"}>
                  <Slider.Range bgColor={"background.default"} />
                </Slider.Track>
                <Slider.Thumb
                  index={0}
                  bgColor="transparent"
                  border={"none"}
                  boxSize={8}
                  _focus={{
                    boxShadow: "none !important",
                    outline: "none !important",
                  }}
                  _focusVisible={{
                    boxShadow: "none !important",
                    outline: "none !important",
                  }}
                >
                  <Icon
                    borderRadius={"full"}
                    bgColor={"transparent"}
                    as={FaPaw}
                    color={"text.primary"}
                    boxSize={8}
                    position={"absolute"}
                    top={"50%"}
                    left={"30%"}
                    transform="translate(-50%, -50%)"
                  />
                </Slider.Thumb>
              </Slider.Control>
            </Slider.Root>
          </Grid>
        </Stack>
      </Stack>

      {/* Section - 7 */}
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
            src="../assets/Card_image.png"
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
            src="../assets/Card_image.png"
            boxSize={"300px"}
            objectFit={`contain`}
            display={{ base: "none", md: "block" }}
          />
        </Grid>
      </Stack>

      {/* Icon - Text */}
      <Flex
        display={{ base: "none", md: "flex" }}
        w="full"
        justifyContent={"center"}
        py={20}
        gap={{ base: 5, md: 10 }}
      >
        {iconData.map((data, index) => (
          <Stack
            key={index}
            justifyContent={"center"}
            alignItems={"center"}
            gap={8}
            w={{ base: "full", md: "xs", lg: "2xs" }}
          >
            <Image
              boxSize={{ base: "40px", md: "50px", lg: "60px" }}
              objectFit={`contain`}
              src={data.icon}
            />
            <Heading
              textAlign={"center"}
              lineHeight={"heading2"}
              fontSize={{ base: "h6", md: "h5", lg: "h5" }}
            >
              {data.heading}
            </Heading>
          </Stack>
        ))}
      </Flex>
      <Box w={"full"} display={{ base: "block", md: "none" }}>
        <Swiper
          initialSlide={1}
          centeredSlides
          slidesPerView={2}
          spaceBetween={10}
        >
          {iconData.map((data, index) => (
            <SwiperSlide key={index}>
              <Stack
                key={index}
                justifyContent={"center"}
                alignItems={"center"}
                gap={8}
                w={"3xs"}
              >
                <Image
                  boxSize={{ base: "40px", md: "50px", lg: "60px" }}
                  objectFit={`contain`}
                  src={data.icon}
                />
                <Heading
                  textAlign={"center"}
                  lineHeight={"heading2"}
                  fontSize={{ base: "h6", md: "h5", lg: "h5" }}
                >
                  {data.heading}
                </Heading>
              </Stack>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {/* CTA */}
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        gap={8}
        py={20}
        px={{ base: 2, md: 5, lg: 5 }}
        templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
        background=" linear-gradient(180deg, #FAFCEB -6.17%, #D5E9D7 48.37%, #FAFCEB 103.97%);"
        justifyItems={"center"}
      >
        <RichText
          text="Ready to see your dog fall in love with mealtime?"
          textTransform={"none"}
        />
        <GreenButton>Get the Starter Pack</GreenButton>
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
          url="/catalog"
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

export default StarterPackScreen;
