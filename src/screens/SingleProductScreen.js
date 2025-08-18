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
  Badge,
  Box,
  Flex,
  Grid,
  Heading,
  Icon,
  Image,
  Progress,
  Separator,
  Stack,
  Tabs,
  Text,
  Wrap,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { products } from "../data/products";
import { OrangeButton } from "../components/custom/CustomButton";
import RichText from "./../components/custom/RichText";
import ProductCard from "../components/custom/ProductCard";
import { FaPaw } from "react-icons/fa";

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

  const product1 = products[0];

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

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
        py={{ base: 5, md: 10, lg: 20 }}
        pt={{ base: 5, md: 20, lg: 32 }}
      >
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          gap={5}
        >
          <Stack gap={5}>
            <Flex gap={5}>
              {badge.map((item) => (
                <Badge
                  size="lg"
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
              fontSize={{ base: "h3", md: "h3", lg: "h3" }}
              lineHeight={"heading1"}
              textTransform={"uppercase"}
            >
              Crafted for Canine Wellness. Loved at First Bite
            </Heading>
            <Text
              fontSize={{ base: "text8", md: "text8", lg: "text2" }}
              w="80%"
            >
              Air-dried chicken, powered by superfoods designed to fuel your
              dog’s health naturally, every day.{" "}
            </Text>
            <Heading
              fontSize={{ base: "h3", md: "h3", lg: "h3" }}
              lineHeight={"heading1"}
              fontWeight={"400"}
            >
              159.90₪
            </Heading>

            <Stack>
              <Heading
                fontSize={{ base: "h3", md: "h6", lg: "text1" }}
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
              templateColumns={{ base: "repeat(1, 1fr)", md: "3fr 1fr" }}
              gap={3}
            >
              <OrangeButton w="full">Add to Cart</OrangeButton>
              <OrangeButton
                w="full"
                color={"text.orange"}
                bgColor="transparent"
                borderColor={"text.orange"}
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
          >
            <Image boxSize={"60%"} src={product1.image} objectFit={`contain`} />
          </Stack>
        </Grid>
      </Box>
      {/* Section - 2 */}
      <Stack justifyContent={"center"} alignItems={"center"} gap={10} py={10}>
        <RichText text="Why Pet Parents Trust Tovlo" w="full" />
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
          gap={5}
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
              <Heading fontSize={{ base: "h3", md: "h6", lg: "h6" }}>
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
          ))}
        </Grid>
      </Stack>
      {/* Section - 3 */}
      <Stack justifyContent={"center"} alignItems={"center"} gap={5} py={10}>
        <RichText text="What Goes Into Every Bowl of Tovlo?" width={"full"} />
        <RichText
          text="Crafted with intention. Backed by science. Loved by dogs."
          textTransform="initial"
          width={{ base: "full", md: "2xl", lg: "2xl" }}
          fontSize={{ base: "h6", md: "h5", lg: "h5" }}
        />
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          gap={5}
        >
          {ingredients.map((item, index) => {
            const isIvory = index === 0 || index === 3;
            return (
              <Stack
                gap={3}
                alignItems={"center"}
                p={5}
                textAlign={"center"}
                w={{ base: "full", md: "2xl", lg: "lg" }}
                borderRadius={"xl"}
                bgColor={isIvory ? "text.ivory" : "text.primary"}
                color={isIvory ? "text.primary" : "text.ivory"}
              >
                <Image
                  src={item.image}
                  boxSize={"200px"}
                  objectFit={`contain`}
                />
                <Heading fontSize={{ base: "h3", md: "h6", lg: "h5" }}>
                  {item.heading}
                </Heading>
                <Separator
                  w={"full"}
                  h={"2px"}
                  borderColor={isIvory ? "text.primary" : "text.ivory"}
                />
                <Text
                  fontSize={{ base: "text6", md: "text8", lg: "text6" }}
                  w={{ base: "full", md: "2xl", lg: "xs" }}
                >
                  {item.text}
                </Text>
              </Stack>
            );
          })}
        </Grid>
      </Stack>

      {/* Section - 5 */}
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        gap={5}
        py={10}
        background=" linear-gradient(180deg, #FAFCEB -6.17%, #D5E9D7 48.37%, #FAFCEB 103.97%);"
      >
        <RichText text="Switching to Tovlo? Here's How" width={"full"} />
        <Stack justifyContent={"center"} alignItems={"center"} gap={8}>
          <Text>Gradual transitions = happy digestion.</Text>
          <Grid
            templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(4, 1fr)" }}
            gap={10}
          >
            {switchTovlo.map((item) => (
              <Stack justifyContent={"center"} alignItems={"center"} gap={5}>
                <Heading
                  fontSize={{ base: "h3", md: "h6", lg: "h6" }}
                  lineHeight={"heading2"}
                >
                  {item.days}
                </Heading>
                <Image src={item.image} boxSize={"200px"} />
                <Text fontSize={{ base: "text6", md: "text8", lg: "text6" }}>
                  {item.text}
                </Text>
              </Stack>
            ))}
          </Grid>
          <Box position="relative" w="100%">
            <Progress.Root
              value={40}
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
                <Progress.Range h={"2px"} />
              </Progress.Track>
            </Progress.Root>

            <Icon
              as={FaPaw}
              color={"text.primary"}
              boxSize={8}
              position={"absolute"}
              top={"50%"}
              left={"40%"}
              transform="translate(-50%, -50%)"
            />
          </Box>
        </Stack>
      </Stack>

      {/* Section - 6 */}
      <Grid
        templateColumns={"repeat(2, 1fr)"}
        justifyItems={"center"}
        p={10}
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
            w={{ base: "full", md: "70%" }}
          >
            <Tabs.List bgColor="transparent" p="1" gap={5} flexWrap={"wrap"}>
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
                  w={{ base: "xs", md: "150px" }}
                  justifyContent={"center"}
                  py={3}
                >
                  {item.weight}
                </Tabs.Trigger>
              ))}
            </Tabs.List>

            {tabContent.map((item, index) => (
              <Tabs.Content key={index} value={item.weight}>
                <Flex w={"full"} justifyContent={"center"} py={10}>
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
                      bgColor={"text.ivory"}
                      borderRadius={"full"}
                    >
                      <Heading
                        fontSize={{ base: "h3", md: "h5", lg: "h5" }}
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
        <Image src="../assets/home_dog.png" boxSize={"300px"} />
      </Grid>

      {/* Section - 7 */}
      <Stack justifyContent={"center"} alignItems={"center"} py={10} gap={10}>
        <RichText text="What Real Dog Parents Are Saying" />
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "3fr 2fr" }}
          bgColor={"text.primary"}
          alignItems={"center"}
          justifyItems={"end"}
          p={5}
          borderRadius={"xl"}
          w="70%"
          color={"text.ivory"}
        >
          <Stack textAlign={"center"} alignContent={"center"} gap={5}>
            <Heading
              fontWeight={"700"}
              lineHeight={"heading2"}
              fontSize={{ base: "h3", md: "h5", lg: "h4" }}
            >
              "Bella’s digestion improved, and she actually looks forward to
              mealtime"
            </Heading>
            <Heading
              fontWeight={"500"}
              fontSize={{ base: "h5", md: "h6", lg: "h6" }}
            >
              Michael, Bella’s human
            </Heading>
          </Stack>
          <Image
            src="../assets/card_image.png"
            boxSize={"300px"}
            objectFit={`contain`}
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

export default SingleProductScreen;
