import { Box, Flex, Grid, Heading, Image, Stack, Text } from "@chakra-ui/react";
import CustomMarquee from "../components/custom/Marquee";
import { marquee1 } from "../data/homescreenData";
import RichText from "../components/custom/RichText";
import { GreenButton } from "../components/custom/CustomButton";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { products } from "./../data/products";
import { time } from "framer-motion";

const AboutScreen = () => {
  const mission = [
    {
      image: "../assets/about/card1.jpg",
      text: "Striving for the highest standard in every aspect of dog care",
      label: "Excellence",
    },
    {
      image: "../assets/about/card2.jpg",
      text: "Constantly evolving to provide better solutions for pet health",
      label: "Innovation",
    },
    {
      image: "../assets/about/card3.jpg",
      text: "Honesty and transparency guide every decision we make",
      label: "Integrity",
    },
    {
      image: "../assets/about/card4.jpg",
      text: "Making a difference in the world with every meal",
      label: "Social responsibility",
    },
  ];

  const whyOurFood = [
    {
      value: "90%",
      label: "Meat Content",
      descripton: "Packed with 90% premium meat to fuel your dog's active life",
    },
    {
      value: "75%",
      label: "Protein",
      descripton: "High protein for building strong muscles and energy",
    },
    {
      value: "0%",
      label: "Harmful Chemicals",
      descripton: "No artificial additives – only the purest ingredients",
    },
    {
      value: "100%",
      label: "Natural Ingredients",
      descripton: "Completely natural ingredients to support your dog’s health",
    },
  ];

  const certificates = [
    "../assets/about/HACCP_certificate.png",
    "../assets/about/GMP_certificate.png",
    "../assets/about/GOI_certificate.png",
    "../assets/about/ISO_certificate.png",
  ];

  const products = [
    {
      image: "../assets/about/product2.png",
      text: "Dog treats: carefully formulated with high-quality ingredients to support your dog’s overall health.",
    },
    {
      image: "../assets/about/product1.png",
      text: "Air-dried food recipes: Expertly crafted meals that retain nutrients and deliver exceptional taste.",
    },
    {
      image: "../assets/about/product3.png",
      text: "Supplements: nutritional supplements that target specific health needs, ensuring optimal well-being for your pet.",
    },
  ];

  const timeline = [
    {
      image: "../assets/about/timeline1.jpg",
      heading: "Week 1-2",
      text: "More energy, better digestion",
    },
    {
      image: "../assets/about/timeline2.jpg",
      heading: "Week 4",
      text: "Less itching, healthier skin",
    },
    {
      image: "../assets/about/timeline3.jpg",
      heading: "Week 12",
      text: "Shinier coat, better breath",
    },
    {
      image: "../assets/about/timeline4.jpg",
      heading: "Week 24+",
      text: "Stronger bones, fewer vet visits",
    },
  ];

  return (
    <>
      <Box
        bgColor="text.primary"
        color="text.ivory"
        w="full"
        // height={{ base: "100vh", md: "50vh", lg: "80vh" }}
        px={{ base: 5, md: 5 }}
        py={8}
        pt={{ base: 28, md: 32, lg: 20 }}
      >
        <Stack
          bgImage="url(../assets/about/about_bg.png)"
          bgSize="cover"
          bgPos="center"
          bgRepeat="no-repeat"
          h="full"
          alignItems="center"
          justifyContent="end"
          gap={10}
        >
          <Heading
            textTransform="uppercase"
            fontWeight="500"
            fontSize={{ base: "h3", md: "120px", lg: "190px" }}
            lineHeight="heading2"
          >
            Who we are
          </Heading>
          <Heading
            textTransform="uppercase"
            fontSize={{ base: "h6", md: "h5", lg: "h4" }}
            fontWeight="500"
            lineHeight="heading1"
            textAlign="center"
            w={{ base: "full", lg: "4xl" }}
          >
            Built with love. Backed by science. <br />
            Where care meets nutrition — <br />
            that’s the Tovlo promise
          </Heading>
        </Stack>
      </Box>

      <CustomMarquee data={marquee1} />

      {/* Section 2 */}
      <Stack
        py={{ base: 20, md: 40 }}
        px={{ base: 2, md: 5 }}
        gap={8}
        alignItems="center"
        justifyContent="center"
        background="linear-gradient(180deg, #FAFCEB 0.13%, #FBFFDC 49.52%, #FAFCEB 99.87%)"
      >
        <Stack
          textTransform="uppercase"
          textAlign="center"
          w={{ base: "full", lg: "5xl" }}
        >
          <Heading fontSize={{ base: "h6", md: "h4" }} lineHeight="100%">
            Founded from a place of love.
          </Heading>
          <Heading fontSize={{ base: "h6", md: "h4" }} lineHeight="130%">
            Our journey began with one mission to give dogs the food they truly
            deserve
          </Heading>
        </Stack>

        <Stack
          gap={4}
          alignItems="center"
          display={{ base: "flex", md: "none" }}
        >
          <Image
            src="../assets/about/Itay_with_dog.png"
            alt="Itay Edri"
            w={{ base: "100vw", lg: "3xl" }}
            h={{ base: "300px", md: "500px" }}
            objectFit="cover"
            borderRadius="lg"
          />
          <Heading fontWeight="500" fontSize="h6" lineHeight="100%">
            (Founder Itay with his dog)
          </Heading>
        </Stack>

        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          w={{ base: "full", lg: "3xl" }}
          gap={{ base: 5, md: 8 }}
          textAlign="center"
          fontSize="text6"
        >
          <Text>
            Tovlo was established in late 2023 by Itay Edri, a passionate animal
            lover. After years of seeing mass-produced dog food fail our furry
            companions, Itay decided to create something better
          </Text>
          <Text>
            Tovlo was born built on real nutrition, no fillers, and the belief
            that dogs are family. Today, we craft air-dried meals made with
            premium ingredients, science-backed recipes, and a whole lot of love
          </Text>
        </Grid>
        <Stack
          gap={4}
          alignItems="center"
          display={{ base: "none", md: "flex" }}
        >
          <Image
            src="../assets/about/Itay_with_dog.png"
            alt="Itay Edri"
            w={{ base: "100vw", lg: "3xl" }}
            h={{ base: "300px", md: "500px" }}
            objectFit="cover"
            borderRadius="lg"
          />
          <Heading fontWeight="500" fontSize="h6" lineHeight="100%">
            (Founder Itay with his dog)
          </Heading>
        </Stack>
      </Stack>

      {/*Section 3  Our Mission */}
      <Stack
        px={{ base: 2, md: 5 }}
        py={5}
        alignItems="center"
        gap={8}
        background=" linear-gradient(180deg, #FAFCEB -6.17%, #D5E9D7 48.37%, #FAFCEB 103.97%);"
      >
        <RichText text="our mission" />
        <Text
          fontSize={{ base: "text8", md: "text1" }}
          w={{ base: "full", md: "lg" }}
          textAlign="center"
        >
          To help every pup live a longer, happier, healthier life with every
          meal. At Tovlo, we believe every dog deserves the highest standards of
          care, and we’re committed to offering the finest, natural ingredients
          to nourish them
        </Text>
        {/* CARDS */}
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          display={{ base: "none", md: "grid" }}
          gap={4}
        >
          {mission.map((item, index) => (
            <Stack position="relative" key={index}>
              <Heading
                fontSize="h6"
                fontWeight="500"
                borderRightRadius="md"
                color="text.primary"
                bgColor="custom.white"
                position="absolute"
                top={0}
                p={2}
                left={0}
              >
                {item.label}
              </Heading>
              <Image
                src={item.image}
                w="full"
                h="300px"
                objectFit="cover"
                borderRadius="lg"
              />
              <Text fontSize="text6">{item.text}</Text>
            </Stack>
          ))}
        </Grid>
        {/* MOBILE CARDS */}
        <Box w="full" display={{ base: "block", md: "none" }}>
          <Swiper
            loop={true}
            lazy={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            slidesPerView={1.05}
            spaceBetween={10}
            modules={[Pagination, Autoplay]}
          >
            {mission.map((item, index) => (
              <SwiperSlide key={index}>
                <Stack position="relative" key={index}>
                  <Heading
                    fontSize="h6"
                    fontWeight="500"
                    borderRightRadius="md"
                    color="text.primary"
                    bgColor="custom.white"
                    position="absolute"
                    top={0}
                    p={2}
                    left={0}
                  >
                    {item.label}
                  </Heading>
                  <Image
                    src={item.image}
                    w="full"
                    h="300px"
                    objectFit="cover"
                    borderRadius="lg"
                  />
                  <Text fontSize="text6">{item.text}</Text>
                </Stack>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Stack>

      {/* Section 4 - Why We Exist */}
      <Stack
        alignItems="center"
        py={{ base: 20, md: 40 }}
        gap={5}
        px={2}
        background=" linear-gradient(180.15deg, #FAFCEB 0.13%, #FBFFDC 49.52%, #FAFCEB 99.87%);"
      >
        <RichText text="why we exist" />
        <Text
          fontSize={{ base: "text6", md: "text1" }}
          w={{ base: "full", md: "md" }}
          textAlign="center"
        >
          At Tovlo, we aim to provide the best food and care to dogs, using only
          natural ingredients to help them live their healthiest, happiest
          lives. Every product we create is driven by our mission to give dogs
          the nutrition they deserve
        </Text>
      </Stack>

      {/* Section 5 - HAPPY DOGS */}

      <Stack
        alignItems="center"
        py={10}
        px={{ base: 2, md: 5 }}
        gap={{ base: 10, lg: 5 }}
      >
        <RichText
          text="Happy dogs start with Tovlo. Here's why our food is the top choice for pet parents"
          width={{ base: "xs", md: "full", lg: "5xl" }}
        />
        <Grid
          templateColumns={{ md: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
          gap={{ base: 10, lg: 5 }}
          display={{ base: "none", md: "grid" }}
        >
          <Image
            src="../assets/about/happyDog.png"
            w="full"
            h="400px"
            objectFit="cover"
            objectPosition="bottom"
            borderRadius="210px"
            order={{ md: 2, lg: 1 }}
          />

          <Grid
            templateColumns="repeat(2, 1fr)"
            gap={5}
            order={{ md: 1, lg: 2 }}
          >
            {whyOurFood.map((data, index) => (
              <Stack
                key={index}
                bgColor="background.lightGreen"
                justifyContent="center"
                alignItems="center"
                p={5}
                gap={5}
                textAlign="center"
                borderRadius="100px"
              >
                <Flex gap={2} alignItems="center" w="2xs">
                  <Heading
                    fontSize="h1"
                    fontStyle="italic"
                    fontWeight="400"
                    lineHeight="100%"
                  >
                    {data.value}
                  </Heading>
                  <Heading
                    textAlign="left"
                    fontSize="number7"
                    textTransform="uppercase"
                  >
                    {data.label}
                  </Heading>
                </Flex>
                <Text>{data.descripton}</Text>
              </Stack>
            ))}
          </Grid>
        </Grid>
        <Box w="full" display={{ base: "block", md: "none" }}>
          <Swiper
            loop={true}
            lazy={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            slidesPerView={1.05}
            spaceBetween={10}
            modules={[Pagination, Autoplay]}
          >
            {whyOurFood.map((data, index) => (
              <SwiperSlide key={index}>
                <Stack
                  key={index}
                  bgColor="background.lightGreen"
                  justifyContent="center"
                  alignItems="center"
                  p={5}
                  gap={5}
                  textAlign="center"
                  borderRadius="100px"
                >
                  <Flex gap={2} alignItems="center" w="2xs">
                    <Heading
                      fontSize="h1"
                      fontStyle="italic"
                      fontWeight="400"
                      lineHeight="100%"
                    >
                      {data.value}
                    </Heading>
                    <Heading
                      textAlign="left"
                      fontSize="number7"
                      textTransform="uppercase"
                    >
                      {data.label}
                    </Heading>
                  </Flex>
                  <Text>{data.descripton}</Text>
                </Stack>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Stack>

      {/* Section 6  */}
      <Stack
        alignItems="center"
        mx={{ base: 5, md: 5, lg: 40 }}
        my={20}
        gap={10}
        position="relative"
      >
        <RichText
          width={{ base: "full", md: "full", lg: "5xl" }}
          text="At Tovlo, we get it—your dog is family. That’s why we’re committed to providing food that meets the highest standards of nutrition"
        />
        <Text
          fontSize={{ base: "text8", md: "text1", lg: "text2" }}
          w={{ base: "full", md: "sm", lg: "lg" }}
          textAlign="center"
        >
          We are committed to excellence in the pet care industry, consistently
          enhancing our product range to meet the evolving needs of pets and
          their owners. Our goal is to become a leading name, recognized for
          quality and customer satisfaction
        </Text>
        <Flex
          position={{ base: "relative", md: "absolute" }}
          bottom={0}
          w="full"
          justifyContent="space-between"
          alignItems="center"
        >
          <Image
            src="../assets/about/leftCircle.jpg"
            borderRadius="full"
            boxSize={{ base: "130px", md: "150px", lg: "200px" }}
            position={{ base: "relative", md: "absolute" }}
            bottom={0}
            left={0}
          />
          <Stack
            position={{ base: "relative", md: "absolute" }}
            bottom={-10}
            right={0}
          >
            <Box position="relative">
              <Image
                src="../assets/about/rightCircle1.jpg"
                borderRadius="full"
                boxSize={{ base: "150px", md: "130px", lg: "200px" }}
              />
              <Image
                position="absolute"
                left={{ base: "-40%", lg: "-40%" }}
                top={{ base: "-40%", lg: "-40%" }}
                src="../assets/about/rightCircle2.jpg"
                borderRadius="full"
                boxSize={{ base: "120px", md: "100px", lg: "150px" }}
                border="10px solid"
                borderColor="background.default"
              />
            </Box>
          </Stack>
        </Flex>
      </Stack>

      {/* Section 7 */}
      <Stack
        justifyContent="center"
        alignItems="center"
        py={{ base: 10, md: 20 }}
        gap={8}
      >
        <RichText text="What you can expect: the Tovlo transformation" />
        <Text
          fontSize={{ base: "text8", md: "text1", lg: "text1" }}
          w={{ base: "full", md: "sm", lg: "lg" }}
          textAlign="center"
        >
          When you make the switch to Tovlo, you’ll notice significant
          improvements in your dog’s health over time. Here's a breakdown of
          what to expect as your dog enjoys the benefits of fresh, high-quality
          food:
        </Text>
        <Stack
          gap={10}
          my={20}
          bgImage="url('../assets/about/Line.svg')"
          bgSize="100% 100%"
          bgRepeat="no-repeat"
        >
          {timeline.map((data, index) => (
            <Flex
              alignItems="center"
              gap={{ base: 5, md: 10, lg: 20 }}
              direction={index % 2 === 0 ? "row" : "row-reverse"}
            >
              <Box position="relative">
                <Box
                  bgColor={
                    index % 2 === 0
                      ? "background.lightGreen"
                      : "background.lightOrange"
                  }
                  boxSize={{ base: "100px", md: "200px" }}
                  borderRadius="full"
                  position="absolute"
                  top={-50}
                  left={index % 2 === 0 ? -50 : null}
                  right={index % 2 === 0 ? null : -50}
                />
                <Image
                  src={data.image}
                  boxSize={{ base: "140px", md: "300px", lg: "400px" }}
                  borderRadius="full"
                />
              </Box>
              <Stack gap={{ base: 2, md: 5 }}>
                <Heading
                  fontSize={{ base: "text6", md: "h5", lg: "h4" }}
                  lineHeight="heading2"
                >
                  {data.heading}
                </Heading>
                <Text
                  fontSize={{ base: "text8", md: "text1", lg: "text1" }}
                  fontWeight="normal"
                  lineHeight="text1"
                  w={{ base: "120px", md: "full" }}
                >
                  {data.text}
                </Text>
              </Stack>
            </Flex>
          ))}
        </Stack>
      </Stack>

      {/* Section 8 - OUR PRODUCTS */}

      <Stack justifyContent="center" alignItems="center" py={20} gap={8}>
        <RichText text="OUR PRODUCTS" />
        <Heading
          fontWeight="500"
          fontSize={{ base: "h6", md: "h6", lg: "h6" }}
          w={{ base: "full", md: "lg", lg: "lg" }}
          textAlign="center"
        >
          Crafted with care, our air-dried recipes lock in flavor and
          nutrients—so every meal is both delicious and deeply nourishing
        </Heading>
        <Box w="full">
          <Swiper
            style={{ margin: "0" }}
            loop={true}
            initialSlide={1}
            centeredSlides={true}
            breakpoints={{
              0: {
                slidesPerView: 1.1,
                spaceBetween: 5,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
          >
            {products.map((product, index) => (
              <SwiperSlide>
                <Stack gap={5}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    w={{ base: "full", md: "full" }}
                    h={{ base: "150px", md: "200px", lg: "300px" }}
                    objectFit="cover"
                    borderRadius="200px"
                  />
                  <Flex w="full" justifyContent="end" px={{ base: 5, lg: 20 }}>
                    <Text
                      textAlign={{ base: "center", md: "left" }}
                      w={{ base: "full", md: "3xs", lg: "xs" }}
                      fontSize={{ base: "text8", md: "text8", lg: "text8" }}
                    >
                      {product.text}
                    </Text>
                  </Flex>
                </Stack>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>

        <GreenButton>View all products</GreenButton>
      </Stack>

      {/* Section 9 - Certifications*/}
      <Box w="full" p={{ base: 5, lg: 10 }} py={10}>
        <Swiper
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 2.1,
              spaceBetween: 5, // for mobile
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 10, // tablet
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20, // desktop
            },
          }}
          className="testimonialSwiper"
        >
          {certificates.map((certificate, index) => (
            <SwiperSlide>
              <Image
                src={certificate}
                boxSize={{ base: "180px", md: "200px", lg: "300px" }}
                objectFit="contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {/* Section 10 - LAST CTA */}
      <Stack
        alignItems="center"
        py={{ base: 20, md: 40 }}
        gap={{ base: 2, md: 8 }}
        background=" linear-gradient(180.15deg, #FAFCEB 0.13%, #FBFFDC 49.52%, #FAFCEB 99.87%);"
      >
        <RichText text="Give your dog the fresh food they deserve. Get a custom plan now!" />
        <GreenButton px={5} display={{ base: "none", md: "block" }}>
          Take the quiz to personalize your dog’s meals
        </GreenButton>
        {/* MOBILE BUTTON */}
        <GreenButton display={{ base: "block", md: "none" }}>
          Take the quiz
        </GreenButton>
      </Stack>
    </>
  );
};

export default AboutScreen;
