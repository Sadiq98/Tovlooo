import { Box, Grid, Heading, Image, Stack, Text } from "@chakra-ui/react";
import CustomMarquee from "../components/custom/Marquee";
import { marquee1 } from "../data/homescreenData";
import RichText from "../components/custom/RichText";
import { GreenButton } from "../components/custom/CustomButton";

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
        py={40}
        px={{ base: 0, md: 5 }}
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
          <Heading fontSize="h4" lineHeight="100%">
            Founded from a place of love.
          </Heading>
          <Heading fontSize="h4" lineHeight="130%">
            Our journey began with one mission to give dogs the food they truly
            deserve
          </Heading>
        </Stack>

        <Grid
          templateColumns="repeat(2, 1fr)"
          w={{ base: "full", lg: "3xl" }}
          gap={8}
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
        <Stack gap={4} alignItems="center">
          <Image
            src="../assets/about/Itay_with_dog.png"
            alt="Itay Edri"
            w={{ base: "100vw", lg: "3xl" }}
            h="500px"
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
        px={5}
        py={5}
        alignItems="center"
        gap={8}
        background=" linear-gradient(180deg, #FAFCEB -6.17%, #D5E9D7 48.37%, #FAFCEB 103.97%);"
      >
        <RichText text="our mission" />
        <Text fontSize="text1" w="lg" textAlign="center">
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
      </Stack>

      {/* Section 4 - Why We Exist */}
      <Stack
        alignItems="center"
        py={40}
        gap={5}
        background=" linear-gradient(180.15deg, #FAFCEB 0.13%, #FBFFDC 49.52%, #FAFCEB 99.87%);"
      >
        <RichText text="why we exist" />
        <Text fontSize="text1" w="md" textAlign="center">
          At Tovlo, we aim to provide the best food and care to dogs, using only
          natural ingredients to help them live their healthiest, happiest
          lives. Every product we create is driven by our mission to give dogs
          the nutrition they deserve
        </Text>
      </Stack>

      {/* Section 4 - LAST CTA */}
      <Stack
        alignItems="center"
        py={40}
        gap={8}
        background=" linear-gradient(180.15deg, #FAFCEB 0.13%, #FBFFDC 49.52%, #FAFCEB 99.87%);"
      >
        <RichText text="Give your dog the fresh food they deserve. Get a custom plan now!" />
        <GreenButton px={5}>
          Take the quiz to personalize your dog’s meals
        </GreenButton>
      </Stack>
    </>
  );
};

export default AboutScreen;
