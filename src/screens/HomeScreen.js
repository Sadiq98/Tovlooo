import { Grid, Flex, Stack, Text, Image, Box, Heading } from "@chakra-ui/react";
import CustomButton from "../components/custom/CustomButton";
import CustomMarquee from "../components/custom/Marquee";
import RichText from "../components/custom/RichText";
import OrangeFlower from "../components/custom/OrangeFlower";
import GreenFlower from "../components/custom/GreenFlower";
import SingleLink from "../components/custom/SingleLink";

import { MdBlock } from "react-icons/md";
import { PiPottedPlantFill } from "react-icons/pi";
import { BsFillClipboard2CheckFill } from "react-icons/bs";
import { LuBicepsFlexed } from "react-icons/lu";
import { TbMeat } from "react-icons/tb";
import { IoPaw } from "react-icons/io5";
import { IoGiftSharp } from "react-icons/io5";
import { FaCamera } from "react-icons/fa";
import { MdCelebration } from "react-icons/md";

const HomeScreen = () => {
  const advantages = [
    { icon: PiPottedPlantFill, text: "100% Natural" },
    { icon: MdBlock, text: "No Fillers" },
    { icon: BsFillClipboard2CheckFill, text: "Vet-Approved" },
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
      <Grid
        templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)" }}
        px={5}
        py={8}
      >
        {/* Text */}
        <Stack position="relative">
          <Stack spacing={20} gap="20" justifyContent="space-around" h="full">
            <Heading
              color="text.primary"
              fontSize="h4"
              fontWeight="bold"
              lineHeight="shorter"
            >
              Tovlo crafts high-quality air-dried food made from{" "}
              <span style={{ fontStyle: "italic" }}>
                100% natural ingredients
              </span>
              , so your dog gets the health they deserve in every bite
            </Heading>

            <Image
              src="../assets/bone.png"
              alt="Bone"
              width="150px"
              position="absolute"
              bottom="5%"
              right={0}
            />

            <CustomButton>Shop Now</CustomButton>
          </Stack>
        </Stack>

        {/* Dog Image */}
        <Flex alignItems="end" justifyContent="start" position="relative">
          <Stack justifyContent="end">
            <Image
              position="relative"
              src="../assets/home_dog.png"
              alt="Dog"
              maxW="450px"
              bottom={-10}
            />
            <Image
              src="../assets/Cloud.png"
              alt="Cloud"
              width="200px"
              position="absolute"
              top={-8}
              left={0}
            />
          </Stack>

          {/* Star */}
          <Box position="absolute" top={0} right={0} w="180px">
            <Image src="../assets/Star.png" alt="Star" w="full" />
            <Text
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%) rotate(30deg)"
              color="white"
              fontSize="xs"
              textAlign="center"
              pointerEvents="none"
            >
              Click to view our vet-backed promise
            </Text>
          </Box>
        </Flex>
      </Grid>

      {/* Marquee */}
      <CustomMarquee data={advantages} />

      {/* Why Choose Us */}
      <Stack w="full" alignItems="center" gap={8} px={5} py={10}>
        <RichText
          text="Why thousands of dog parents are switching to TOVLO?"
          italicWords={["thousands", "switching"]}
        />

        <Grid templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)" }}>
          <Image
            src="../assets/WhyChoose.png"
            alt="Why choose us"
            borderRadius="xl"
            objectFit="cover"
            boxSize="full"
          />

          <Stack
            position="relative"
            borderRadius="xl"
            textAlign="center"
            justify="center"
            align="center"
            p={20}
            gap={4}
            boxSize="full"
            border="2px solid"
            borderColor="text.primary"
          >
            <RichText
              fontSize="h5"
              width="full"
              text="Because it’s more than just food — it’s love in every bite"
              italicWords="Because it’s more than just food — it’s love in every bite"
            />
            <Text maxW="md" fontSize="sm" lineHeight="tall">
              At TOVLO, we keep it simple: real food, no shortcuts. We use only
              premium meats like chicken and beef — no by-products, no
              artificial fillers. Just whole vegetables, super grains, and
              healthy fats that nourish your dog from the inside out.
              <br />
              You’ll notice the difference in just a few meals — more energy, a
              shinier coat, better digestion, and a tail that just won’t stop
              wagging. Make the switch today. Your dog deserves better than dry,
              bland pellets. One real meal is all it takes to see the TOVLO
              difference.
            </Text>
            <Image
              position="absolute"
              bottom="10"
              right="40"
              src="../assets/Paw.png"
              alt="Why choose us"
              boxSize="50px"
            />
            <Image
              position="absolute"
              bottom="-10"
              right="20"
              src="../assets/Paw.png"
              alt="Why choose us"
              boxSize="80px"
            />
          </Stack>
        </Grid>
      </Stack>

      {/* Flowers */}
      <Box h="500px" my={10}>
        <Flex justifyContent="center" position="relative">
          <RichText
            text="A better life for your dog starts with better food"
            fontSize="h1"
            width="2xl"
          />
          <OrangeFlower position="absolute" top="55%" left="10%" />
          <GreenFlower position="absolute" top="55%" right="10%" />
        </Flex>
      </Box>

      {/* Why Air Dried is Better */}
      <Stack alignItems="center" gap={8} px={5} py={10}>
        <RichText text="Why air-dried is simply Better" italicWords="simply" />
        <Stack
          borderY="1px solid"
          borderColor="text.primary"
          w="full"
          alignItems="center"
          py={3}
          gap={6}
        >
          {/* Benefit 1 */}
          <Flex>
            <RichText width="fit-content" text="Easy Digestion" fontSize="h5" />
            <Text fontSize="md">(01)</Text>
          </Flex>

          {/* Benefit 2 */}
          <Stack
            alignItems="center"
            position="relative"
            textAlign="center"
            gap={2}
            w="full"
          >
            <Flex>
              <RichText
                width="fit-content"
                text="Boosted Energy"
                fontSize="h5"
              />
              <Text fontSize="md">(02)</Text>
            </Flex>
            <Text w="xs" fontSize="sm">
              Balanced nutrients fuel more playful days, longer walks, and
              bigger smiles
            </Text>
            <Image
              src="../assets/WhyBetterDog.png"
              boxSize="200px"
              borderRadius="full"
            />

            {/* Left Side */}
            <Image
              src="../assets/Bone.png"
              position="absolute"
              w="100px"
              top="0"
              right="0"
            />
            <Image
              src="../assets/Bone.png"
              position="absolute"
              w="80px"
              top="25%"
              right="20%"
              transform="rotate(100deg)"
            />
            <Image
              src="../assets/Bone.png"
              position="absolute"
              w="50px"
              bottom="0"
              right="30%"
              transform="rotate(45deg)"
            />

            {/* Right Side */}
            <Image
              src="../assets/Bone.png"
              position="absolute"
              w="90px"
              top="0"
              left="30%"
              transform="rotate(75deg)"
            />
            <Image
              src="../assets/Bone.png"
              position="absolute"
              w="70px"
              bottom="20%"
              left="15%"
              transform="rotate(45deg)"
            />
            <Image
              src="../assets/Bone.png"
              position="absolute"
              w="40px"
              bottom="0"
              left="0"
            />
          </Stack>

          {/* Benefit 3 */}
          <Flex>
            <RichText
              width="fit-content"
              text="Long-lasting Freshness"
              fontSize="h5"
            />
            <Text fontSize="md">(03)</Text>
          </Flex>
        </Stack>
      </Stack>

      {/* Ready to Share */}
      <Stack w="full" alignItems="center" gap={8} py={10}>
        <RichText text="Ready to share the love?" />

        <Grid
          templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)" }}
          border="2px solid"
          borderColor="text.primary"
          gap={5}
        >
          <Image
            src="../assets/ShareLove.png"
            alt="Why choose us"
            objectFit="cover"
            boxSize="full"
          />

          <Stack
            bgColor="background.ivory"
            textAlign="center"
            alignItems="center"
            justifyContent="center"
            p={20}
            gap={4}
            boxSize="full"
          >
            <RichText
              width="full"
              text="Become part of the Tovlo family"
              italicWords="Become part of the Tovlo family"
            />
            <Text fontSize="md" lineHeight="tall">
              Love your dog like family? So do we. <br />
               Join a community of real pet lovers who believe in better food,
              better lives, and a little more wag in every day. <br />
               As a Tovlo Ambassador, you'll get special perks, early access to
              new goodies, and the joy of sharing your dog's journey with others
              who get it
            </Text>
            <CustomButton children="Let's do this" width="sm" />
            <Flex gap={2} wrap="wrap" justifyContent="center">
              <SingleLink
                fontSize="sm"
                icon={<IoGiftSharp />}
                label="Get free sample & goodies"
              />
              <SingleLink
                fontSize="sm"
                icon={<FaCamera />}
                label="Be featured on our page"
              />
              <SingleLink
                icon={<MdCelebration />}
                fontSize="sm"
                label="Early access to launches"
              />
            </Flex>
          </Stack>
        </Grid>
      </Stack>

      <CustomMarquee data={marquee2} />
    </>
  );
};

export default HomeScreen;
