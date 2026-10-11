// File: src/screens/AmbassadorScreen.js
import { Box, Flex, Grid, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import RichText from "../components/custom/RichText";
import { GreenButton, OrangeButton } from "../components/custom/CustomButton";
import { TAccordian2 } from "../components/custom/TAccordian";

// Shared responsive tokens. Figma frames map to Chakra breakpoints as:
// 390 -> base, 768 -> md, 1440 -> lg, 1920 -> 2xl
const sectionGap = { base: "80px", md: "120px", lg: "170px", "2xl": "180px" };
const pagePadding = { base: "10px", md: "20px", lg: "40px" };
const sectionTitleSize = { base: "28px", md: "h4", lg: "51px", "2xl": "h2" };
const sectionTitleLineHeight = {
  base: "115%",
  md: "heading2",
  "2xl": "115%",
};
const tightSpacing = "-0.03em";

const steps = [
  {
    image: "../assets/ambassador/step_apply.png",
    label: "Apply",
    text: "Fill out a short application and tell us why you love Tovlo.",
    position: "center 40%",
  },
  {
    image: "../assets/ambassador/step_accepted.png",
    label: "Get accepted",
    text: "We’ll review your application and send you a welcome kit.",
    position: "left center",
  },
  {
    image: "../assets/ambassador/step_share.png",
    label: "Share products",
    text: "Share with your audience using your unique code.",
    position: "center 12%",
  },
  {
    image: "../assets/ambassador/step_earn.png",
    label: "Earn rewards",
    text: "Earn commissions & bonuses on every sale.",
    position: "35% center",
  },
];

const benefits = [
  {
    icon: "../assets/ambassador/icon_money_bag.svg",
    label: "Earn passive income",
  },
  { icon: "../assets/ambassador/icon_gift.svg", label: "Free starter pack" },
  {
    icon: "../assets/ambassador/icon_pricetag.svg",
    label: "Exclusive ambassador discounts",
    labelWidth: "300px",
  },
  {
    icon: "../assets/ambassador/icon_speech_bubbles.svg",
    label: "Social shoutouts",
  },
  {
    icon: "../assets/ambassador/icon_rocket.svg",
    label: "Early access to new products",
  },
  {
    icon: "../assets/ambassador/icon_vet_paw.svg",
    label: "Vet-approved credibility",
  },
];

const tiers = [
  {
    icon: "../assets/ambassador/tier_silver.svg",
    name: "Silver",
    commission: "5-10% commission",
    perks: "+ Starter kit",
  },
  {
    icon: "../assets/ambassador/tier_gold.svg",
    name: "Gold",
    commission: "10-15% commission",
    perks: "+ Starter kit + Branded box",
  },
  {
    icon: "../assets/ambassador/tier_platinum.svg",
    name: "Platinum",
    commission: "20-30% commission",
    perks: "+ Starter kit + Branded box + Premium kit",
  },
];

// TODO: the Figma file only contains answer copy for the first question
// (the other four are collapsed), so the same placeholder is used for all.
const faqPlaceholderAnswer =
  "Tovlo uses a unique air-dried process preserving natural nutrients with no fillers or chemicals, backed by veterinary science and locally made in Israel.";

const faqs = [
  { question: "Who can join?", answer: faqPlaceholderAnswer },
  { question: "Do I need to be an influencer?", answer: faqPlaceholderAnswer },
  { question: "How do I earn?", answer: faqPlaceholderAnswer },
  { question: "How are payments made?", answer: faqPlaceholderAnswer },
  { question: "What’s in the starter pack?", answer: faqPlaceholderAnswer },
];

// Decorative paws of the CTA band. Tablet and desktop use separate exports
// from Figma; the 1920 frame reuses the desktop set at its own size/offsets.
const pawsDesktop = [
  {
    src: "../assets/ambassador/paw_1.svg",
    size: { lg: "123px", "2xl": "139px" },
    top: { lg: "161px", "2xl": "211px" },
    left: "70px",
  },
  {
    src: "../assets/ambassador/paw_2.svg",
    size: { lg: "88px", "2xl": "100px" },
    top: "20px",
    left: { lg: "130px", "2xl": "180px" },
  },
  {
    src: "../assets/ambassador/paw_3.svg",
    size: { lg: "95px", "2xl": "108px" },
    top: { lg: "119px", "2xl": "162px" },
    left: { lg: "289px", "2xl": "450px" },
  },
  {
    src: "../assets/ambassador/paw_4.svg",
    size: { lg: "95px", "2xl": "108px" },
    top: { lg: "119px", "2xl": "162px" },
    right: { lg: "289px", "2xl": "450px" },
  },
  {
    src: "../assets/ambassador/paw_5.svg",
    size: { lg: "88px", "2xl": "100px" },
    top: "20px",
    right: { lg: "130px", "2xl": "180px" },
  },
  {
    src: "../assets/ambassador/paw_6.svg",
    size: { lg: "123px", "2xl": "139px" },
    top: { lg: "161px", "2xl": "211px" },
    right: "70px",
  },
];

const pawsTablet = [
  {
    src: "../assets/ambassador/paw_md_1.svg",
    w: "65px",
    h: "65px",
    top: "152px",
    left: "20px",
  },
  {
    src: "../assets/ambassador/paw_md_2.svg",
    w: "45px",
    h: "45px",
    top: "72px",
    left: "100px",
  },
  {
    src: "../assets/ambassador/paw_md_3.svg",
    w: "45px",
    h: "45px",
    top: "72px",
    right: "100px",
  },
  {
    src: "../assets/ambassador/paw_md_4.svg",
    w: "65px",
    h: "64px",
    top: "153px",
    right: "20px",
  },
];

const StepCard = ({ step }) => (
  <Stack gap={{ base: "10px", lg: "15px" }}>
    <Box
      position="relative"
      h={{ base: "380px", md: "354px", lg: "335px", "2xl": "390px" }}
      borderRadius="10px"
      overflow="hidden"
    >
      <Image
        src={step.image}
        alt={step.label}
        w="full"
        h="full"
        objectFit="cover"
        objectPosition={step.position}
      />
      <Heading
        position="absolute"
        top={0}
        left={0}
        p="10px"
        w={{ base: "137px", md: "auto" }}
        fontSize={{ base: "20px", md: "h6", lg: "h5" }}
        fontWeight="500"
        lineHeight={{ base: "100%", lg: "heading2" }}
        letterSpacing={tightSpacing}
        color="text.primary"
        bgColor="custom.white"
        borderRightRadius="10px"
      >
        {step.label}
      </Heading>
    </Box>
    <Text
      fontSize={{ base: "16px", lg: "text1", "2xl": "text2" }}
      lineHeight="text3"
      letterSpacing={tightSpacing}
    >
      {step.text}
    </Text>
  </Stack>
);

const BenefitItem = ({ benefit }) => (
  <Stack alignItems="center" gap="30px" textAlign="center">
    <Image src={benefit.icon} alt="" boxSize={{ base: "60px", md: "80px" }} />
    <Heading
      fontSize={{ base: "h6", md: "h5" }}
      fontWeight="500"
      lineHeight={{ base: "115%", md: "heading2" }}
      letterSpacing={tightSpacing}
      maxW={{ "2xl": benefit.labelWidth || "217px" }}
    >
      {benefit.label}
    </Heading>
  </Stack>
);

const TierCard = ({ tier }) => (
  <Stack
    h={{ base: "322px", lg: "362px", "2xl": "370px" }}
    justifyContent="space-between"
    alignItems="center"
    py="30px"
    px={{ base: "15px", lg: "20px", "2xl": "15px" }}
    bgColor="custom.ivory"
    border="1px solid"
    borderColor="#FE6B4080"
    borderRadius="10px"
  >
    <Stack w="full" alignItems="center" gap="20px">
      <Stack alignItems="center" gap="10px">
        <Image src={tier.icon} alt="" boxSize="40px" />
        <Heading
          fontSize={{ base: "28px", lg: "h5", "2xl": "38px" }}
          fontWeight="500"
          lineHeight={{ base: "100%", "2xl": "115%" }}
          letterSpacing={tightSpacing}
          textAlign="center"
        >
          {tier.name}
        </Heading>
      </Stack>
      <Image
        src="../assets/ambassador/tier_line.svg"
        alt=""
        w="full"
        h="1px"
      />
    </Stack>
    <Stack
      gap="10px"
      textAlign="center"
      fontSize={{ base: "16px", lg: "text1", "2xl": "text2" }}
      lineHeight="text3"
      letterSpacing={tightSpacing}
    >
      <Text>{tier.commission}</Text>
      <Text>{tier.perks}</Text>
    </Stack>
  </Stack>
);

// Tier carousel: centered layouts (tablet) start on the middle card.
const syncTierSlide = (swiper) =>
  swiper.slideTo(swiper.params.centeredSlides ? 1 : 0, 0);

const AmbassadorScreen = () => {
  return (
    <>
      {/* Section 1 - Cover */}
      <Flex
        direction={{ base: "column", lg: "row" }}
        bgColor="background.default"
        minH={{ lg: "1080px" }}
      >
        <Stack
          flex={1}
          alignItems="center"
          justifyContent="center"
          gap={0}
          px={pagePadding}
          pt={{ base: "105px", md: "161px", lg: "100px" }}
          pb={{ base: "30px", md: "40px", lg: 0 }}
        >
          <RichText
            as="h1"
            text="Join the TOVLO Ambassador Program"
            width={{ base: "full", lg: "670px", "2xl": "880px" }}
            maxW="full"
            fontSize={{ base: "28px", md: "h4", lg: "51px", "2xl": "h1" }}
            fontWeight="500"
            lineHeight={sectionTitleLineHeight}
          />
          <Text
            mt="20px"
            w={{ base: "full", md: "286px", lg: "378px" }}
            textAlign="center"
            fontSize={{ base: "16px", lg: "text1", "2xl": "text2" }}
            lineHeight="text3"
            letterSpacing={tightSpacing}
          >
            Earn rewards, share love, and grow with us — one wagging tail at a
            time
          </Text>
          <Flex
            mt={{ base: "30px", md: "40px" }}
            direction={{ base: "column", md: "row" }}
            gap={{ base: "10px", md: "20px" }}
            w={{ base: "full", lg: "445px" }}
          >
            <OrangeButton
              url="/ambassador/register"
              w="full"
              h="39px"
              px={0}
              py={0}
              fontSize="20px"
              fontWeight="600"
              letterSpacing={tightSpacing}
              borderRadius={0}
            >
              Apply Now
            </OrangeButton>
            <OrangeButton
              url="/ambassador/login"
              w="full"
              h="39px"
              px={0}
              py={0}
              fontSize="20px"
              fontWeight="600"
              letterSpacing={tightSpacing}
              borderRadius={0}
              color="text.orange"
              bgColor="transparent"
              borderWidth="2px"
              borderColor="text.orange"
              _hover={{
                color: "text.darkOrange",
                borderColor: "text.darkOrange",
              }}
            >
              Login
            </OrangeButton>
          </Flex>
        </Stack>
        <Image
          src="../assets/ambassador/cover.png"
          alt="Tovlo ambassador working next to a dog"
          w={{ base: "full", lg: "50%" }}
          h={{ base: "537px", md: "624px", lg: "1080px" }}
          objectFit="cover"
          objectPosition={{ base: "center", lg: "80% center" }}
        />
      </Flex>

      {/* Section 2 - How It Works */}
      <Stack
        mt={sectionGap}
        px={pagePadding}
        gap={{ base: "20px", md: "34px", lg: "40px" }}
        alignItems="center"
      >
        <RichText
          text="How It Works"
          width="full"
          fontSize={sectionTitleSize}
          fontWeight="500"
          lineHeight={sectionTitleLineHeight}
        />
        <Grid
          display={{ base: "none", md: "grid" }}
          templateColumns={{ md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
          gap="20px"
          w="full"
        >
          {steps.map((step, index) => (
            <StepCard key={index} step={step} />
          ))}
        </Grid>
        {/* MOBILE CARDS */}
        <Box w="full" display={{ base: "block", md: "none" }}>
          <Swiper slidesPerView={2.05} spaceBetween={10}>
            {steps.map((step, index) => (
              <SwiperSlide key={index}>
                <StepCard step={step} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Stack>

      {/* Section 3 - Benefits Strip */}
      <Stack
        mt={sectionGap}
        px={pagePadding}
        gap={{ base: "20px", md: "34px", lg: "40px" }}
        alignItems="center"
      >
        <RichText
          text="Benefits Strip"
          width="full"
          fontSize={sectionTitleSize}
          fontWeight="500"
          lineHeight={sectionTitleLineHeight}
        />
        <Grid
          display={{ base: "none", lg: "grid" }}
          templateColumns="repeat(6, 1fr)"
          gap="20px"
          w="full"
        >
          {benefits.map((benefit, index) => (
            <BenefitItem key={index} benefit={benefit} />
          ))}
        </Grid>
        {/* MOBILE & TABLET STRIP */}
        <Box w="full" display={{ base: "block", lg: "none" }}>
          <Swiper
            breakpoints={{
              0: { slidesPerView: 2.05, spaceBetween: 10 },
              768: { slidesPerView: 3.1, spaceBetween: 20 },
            }}
          >
            {benefits.map((benefit, index) => (
              <SwiperSlide key={index}>
                <BenefitItem benefit={benefit} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Stack>

      {/* Section 4 - Earn As You Grow */}
      <Stack
        mt={sectionGap}
        px={pagePadding}
        gap={{ base: "20px", md: "34px", lg: "40px" }}
        alignItems="center"
      >
        <RichText
          text="Earn As You Grow"
          width="full"
          fontSize={sectionTitleSize}
          fontWeight="500"
          lineHeight={sectionTitleLineHeight}
        />
        <Grid
          display={{ base: "none", lg: "grid" }}
          templateColumns="repeat(3, 1fr)"
          gap="20px"
          w="full"
          maxW={{ "2xl": "1414px" }}
        >
          {tiers.map((tier, index) => (
            <TierCard key={index} tier={tier} />
          ))}
        </Grid>
        {/* MOBILE & TABLET CARDS */}
        <Box w="full" display={{ base: "block", lg: "none" }}>
          {/* On tablet the middle tier is centered with its neighbours
              peeking in; on mobile the carousel starts from the first tier. */}
          <Swiper
            onAfterInit={syncTierSlide}
            onBreakpoint={syncTierSlide}
            breakpoints={{
              0: {
                slidesPerView: 1.08,
                spaceBetween: 20,
                centeredSlides: false,
              },
              768: {
                slidesPerView: 2.1,
                spaceBetween: 20,
                centeredSlides: true,
              },
            }}
          >
            {tiers.map((tier, index) => (
              <SwiperSlide key={index}>
                <TierCard tier={tier} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Stack>

      {/* Section 5 - FAQ */}
      <Stack
        mt={{ base: "80px", md: "110px", lg: "160px", "2xl": "180px" }}
        px={pagePadding}
        gap={{ base: "20px", md: "30px", lg: "40px" }}
        alignItems="center"
      >
        <RichText
          text="FAQ"
          width="full"
          fontSize={{ base: "28px", md: "h4", lg: "h2" }}
          fontWeight="500"
          lineHeight={{ base: "115%", md: "heading2", lg: "115%" }}
        />
        <Stack
          w={{ base: "full", lg: "950px" }}
          gap={{ base: "10px", md: "15px", lg: "20px" }}
        >
          {faqs.map((faq, index) => (
            <TAccordian2
              key={index}
              index={index}
              heading={faq.question}
              content={faq.answer}
              defaultValue={index === 0 ? [0] : []}
              borderRadius={{ base: "25px", md: "35px" }}
              overflow="hidden"
              triggerProps={{ py: { base: "7px", md: "10px", lg: "6px" } }}
              headingProps={{
                fontSize: { base: "text6", md: "19px", lg: "h6" },
                lineHeight: { base: "110%", md: "105%", lg: "115%" },
                letterSpacing: "-0.02em",
              }}
              bodyProps={{
                fontSize: { base: "16px", lg: "text2" },
                lineHeight: "text3",
                maxW: { lg: "774px" },
              }}
              iconSize={{ base: "35px", md: "40px", lg: "56px" }}
            />
          ))}
        </Stack>
      </Stack>

      {/* Section 6 - CTA */}
      <Stack
        position="relative"
        overflow="hidden"
        mt={{ base: "60px", md: "100px", lg: "150px", "2xl": "180px" }}
        mb={{ base: "60px", md: "100px", lg: "120px" }}
        px={pagePadding}
        py={{ base: "20px", lg: "32px", "2xl": "47px" }}
        gap={{ base: "20px", md: "30px", lg: "40px" }}
        alignItems="center"
        background="linear-gradient(180.03deg, #FAFCEB 0.13%, #FBFFDC 49.52%, #FAFCEB 99.87%)"
      >
        {pawsTablet.map((paw, index) => (
          <Image
            key={index}
            src={paw.src}
            alt=""
            display={{ base: "none", md: "block", lg: "none" }}
            position="absolute"
            w={paw.w}
            h={paw.h}
            top={paw.top}
            left={paw.left}
            right={paw.right}
          />
        ))}
        {pawsDesktop.map((paw, index) => (
          <Image
            key={index}
            src={paw.src}
            alt=""
            display={{ base: "none", lg: "block" }}
            position="absolute"
            boxSize={paw.size}
            top={paw.top}
            left={paw.left}
            right={paw.right}
          />
        ))}
        <RichText
          text="Ready to Make an Impact?"
          width={{ base: "295px", md: "492px", lg: "628px", "2xl": "774px" }}
          fontSize={sectionTitleSize}
          fontWeight="500"
          lineHeight={sectionTitleLineHeight}
          position="relative"
        />
        <GreenButton
          url="/ambassador/register"
          w={{ base: "calc(100vw - 33px)", md: "341px", lg: "530px" }}
          h={{ base: "47px", md: "63px", lg: "74px" }}
          px={0}
          mb={{ base: "9px", md: "12px", lg: "14px" }}
          fontSize={{ base: "20px", lg: "buttonPrimary" }}
          fontWeight="600"
        >
          Apply now
        </GreenButton>
      </Stack>
    </>
  );
};

export default AmbassadorScreen;
