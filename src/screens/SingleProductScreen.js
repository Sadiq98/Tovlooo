import { useEffect, useState } from "react";
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
  Icon,
  Image,
  Input,
  InputGroup,
  List,
  Progress,
  Separator,
  Stack,
  Table,
  Tabs,
  Text,
  Wrap,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { products } from "../data/products";
import { GreenButton, OrangeButton } from "../components/custom/CustomButton";
import RichText from "./../components/custom/RichText";
import ProductCard from "../components/custom/ProductCard";
import { FaPaw } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
import Newsletter from "../components/custom/Newsletter";
import TAccordian from "../components/custom/TAccordian";

const SingleProductScreen = () => {
  const badge = ["Complete Nutrition", "AAFCO Approved", "Expert Formulated"];
  const trustTovlo = [
    {
      icon: "../assets/Icons/Meat.svg",
      heading: "High meat content",
      text: "80% animal protein fuels your dog’s strength & vitality.",
    },
    {
      icon: "../assets/Icons/gluten.svg",
      heading: "Grain-free & Gluten-free",
      text: "Hypoallergenic, gentle on sensitive stomachs.",
    },
    {
      icon: "../assets/Icons/leaf.svg",
      heading: "All-natural ingredients",
      text: "Zero fillers, zero nasties. Just clean nutrition.",
    },
  ];

  const ingredients = [
    {
      image: "../assets/real_chicken.png",
      heading: "Real chicken (72,8%)",
      text: "With bones, liver, skin & legs gently air-dried for max flavor.",
    },
    {
      image: "../assets/blueberries.png",
      heading: "Veggies, eggs & fruits",
      text: "Sweet potato, pumpkin, broccoli, berries, nature's multivitamins.",
    },
    {
      image: "../assets/superseeds.png",
      heading: "Super seeds",
      text: "Chia, flax, pumpkin for gut, coat & joint support.",
    },
    {
      image: "../assets/herbs.png",
      heading: "Herbs & vitamins",
      text: "Clean, bioavailable nutrients for daily wellness.",
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

  const tabContent = [
    {
      weight: "5kg",
      perDay: "50g",
      scoops: "1",
    },
    {
      weight: "10kg",
      perDay: "100g",
      scoops: "2",
    },
    {
      weight: "20kg",
      perDay: "150g",
      scoops: "3",
    },
    {
      weight: "30kg",
      perDay: "200g",
      scoops: "4",
    },
    {
      weight: "40kg",
      perDay: "250g",
      scoops: "5",
    },
    {
      weight: "50kg",
      perDay: "300g",
      scoops: "6",
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
              Crafted for Canine Wellness. Loved at First Bite
            </Heading>
            <Text
              fontSize={{ base: "text8", md: "text8", lg: "text2" }}
              w={{ base: "100%", lg: "80%" }}
            >
              Air-dried chicken, powered by superfoods designed to fuel your
              dog’s health naturally, every day.{" "}
            </Text>
            <Heading
              fontSize={{ base: "h4", md: "h3", lg: "h3" }}
              lineHeight={"heading1"}
              fontWeight={"400"}
            >
              159.90₪
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
                  bgColor="text.orange"
                  color="text.ivory"
                  borderRadius="md"
                  justifyContent={"center"}
                  w="80px"
                >
                  1.4 kg
                </Badge>
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
              Ships in 24h • No subscription
            </Text>
          </Stack>
          <Stack
            justifyContent={"center"}
            alignItems={"center"}
            bgColor={"text.ivory"}
            border={"2px solid"}
            borderColor="text.lightGreen50"
            borderRadius="xl"
            w={"full"}
            order={{ base: 1, md: 2 }}
          >
            <Image
              boxSize={{ base: "80%", lg: "60%" }}
              src={product1.image}
              objectFit={`contain`}
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
        <RichText text="Why Pet Parents Trust Tovlo" w="full" />
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
        justifyContent={"center"}
        alignItems={"center"}
        gap={5}
        px={{ base: 2, md: 5, lg: 5 }}
        py={10}
      >
        <RichText text="What Goes Into Every Bowl of Tovlo?" width={"full"} />
        <RichText
          text="Crafted with intention. Backed by science. Loved by dogs."
          textTransform="initial"
          width={{ base: "full", md: "2xl", lg: "2xl" }}
          fontSize={{ base: "h6", md: "h5", lg: "h5" }}
        />
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
            gap={10}
            display={{ base: "none", md: "grid" }}
          >
            {switchTovlo.map((item) => (
              <Stack justifyContent={"center"} alignItems={"center"} gap={5}>
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
                <Text fontSize={{ base: "text6", md: "text8", lg: "text6" }}>
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
          <Box
            position="relative"
            w={{ base: "full", lg: "full", xl: "65%" }}
            orientation="vertical"
          >
            <Progress.Root
              value={30}
              min={0}
              max={100}
              w={"full"}
              colorPalette={"teal"}
            >
              <Progress.Track
                bgColor={"text.lightGreen50"}
                borderRadius="lg"
                p={1}
              >
                <Progress.Range orientation="vertical" h={"2px"} />
              </Progress.Track>
            </Progress.Root>

            <Icon
              as={FaPaw}
              color={"text.primary"}
              boxSize={8}
              position={"absolute"}
              top={"50%"}
              left={"30%"}
              transform="translate(-50%, -50%)"
            />
          </Box>
        </Stack>
      </Stack>

      {/* Section - 6 */}
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
        justifyItems={"center"}
        p={{ base: 5, md: 10, lg: 20 }}
        background=" linear-gradient(180.15deg, #FAFCEB 0.13%, #FBFFDC 49.52%, #FAFCEB 99.87%);"
      >
        <Stack justifyContent={"center"} alignItems={"center"}>
          <RichText
            text={"How Much Should You Feed?"}
            width={{ base: "full", md: "xl" }}
          />
          <Text fontSize={{ base: "text6", md: "text8", lg: "text6" }}>
            Select weight. We’ll do the math.
          </Text>
          <Tabs.Root
            defaultValue={tabContent[0].weight}
            variant="plain"
            justifyItems="center"
            flexWrap={"wrap"}
          >
            <Tabs.List
              bgColor="transparent"
              p="1"
              gap={5}
              as={Grid}
              templateColumns="repeat(3, 1fr)"
            >
              {tabContent.map((item, index) => (
                <Tabs.Trigger
                  key={index}
                  value={item.weight}
                  border="2px solid"
                  borderColor="text.orange"
                  lineHeight={"heading2"}
                  borderRadius="lg"
                  fontFamily="body"
                  fontSize={{ base: "text8", md: "h6" }}
                  color="text.orange"
                  _selected={{ bg: "text.orange", color: "text.ivory" }}
                  w={{ base: "100px", md: "150px" }}
                  justifyContent={"center"}
                  py={3}
                >
                  {item.weight}
                </Tabs.Trigger>
              ))}
            </Tabs.List>

            {tabContent.map((item, index) => (
              <Tabs.Content key={index} value={item.weight} gap={5}>
                <Flex
                  w={"full"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  py={{ base: 5, md: 10 }}
                  gap={10}
                  direction={"column"}
                >
                  <Image
                    src="../assets/home_dog.png"
                    boxSize={"300px"}
                    display={{ base: "block", md: "none" }}
                  />
                  <Flex
                    bgColor={"text.orange"}
                    alignItems={"center"}
                    w={"fit-content"}
                    p={2}
                    gap={5}
                    borderRadius={"full"}
                  >
                    <Image src="../assets/scoop.png" w={"80px"} />
                    <Stack
                      alignItems={"center"}
                      justifyContent={"center"}
                      gap={2}
                      px={5}
                      py={1}
                      bgColor={"text.ivory"}
                      borderRadius={"full"}
                    >
                      <Heading
                        fontSize={{ base: "h5", md: "h5", lg: "h5" }}
                        fontWeight={"400"}
                      >
                        {item.perDay}/day
                      </Heading>
                      <Text
                        fontSize={{ base: "text6", md: "text8", lg: "text8" }}
                      >
                        ( {item.scoops} scoops)
                      </Text>
                    </Stack>
                  </Flex>
                </Flex>
              </Tabs.Content>
            ))}
          </Tabs.Root>
        </Stack>
        <Image
          src="../assets/home_dog.png"
          boxSize={"300px"}
          display={{ base: "none", md: "block" }}
        />
      </Grid>

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

      {/* Last Section - Newsletter */}
      <Newsletter />
    </>
  );
};

export default SingleProductScreen;
