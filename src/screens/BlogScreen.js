import { Box, Stack, Image, Heading, Text, Button } from "@chakra-ui/react";
import React, { lazy } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

import { TAccordian2 } from "../components/custom/TAccordian";
import { OrangeButton } from "../components/custom/CustomButton";
import { RiArrowLeftLine } from "react-icons/ri";

const RichText = lazy(() => import("./../components/custom/RichText"));

const BlogScreen = () => {
  const faqs = [
    {
      question: "What makes Tovlo different from other dog foods in Israel?",
      answer:
        "Tovlo uses a unique air-dried process preserving natural nutrients with no fillers or chemicals, backed by veterinary science and locally made in Israel.",
    },
    {
      question: "Is Tovlo suitable for dogs with sensitive stomachs?",
      answer:
        "Yes! Tovlo’s formulas are designed to be gentle on digestion and support gastrointestinal health.",
    },
    {
      question: "Where is Tovlo made?",
      answer:
        "All Tovlo dog food is proudly crafted in Israel, ensuring freshness and quality.",
    },
    {
      question: "Can I transition my dog gradually to Tovlo?",
      answer:
        "Absolutely. We recommend mixing Tovlo with your dog’s current food and slowly increasing the amount over a week.",
    },
    {
      question: "Does Tovlo use any artificial preservatives or fillers?",
      answer:
        "No. Tovlo contains only natural, premium ingredients with no artificial additives.",
    },
    {
      question: "How does Tovlo ensure the quality of its ingredients?",
      answer:
        "Tovlo partners with trusted local suppliers and vets to source only premium, natural ingredients. Every batch undergoes strict quality checks to maintain freshness and nutritional value.",
    },
    {
      question: "Is Tovlo suitable for all dog breeds and life stages?",
      answer:
        "Yes, Tovlo’s recipes are formulated to meet the nutritional needs of dogs across different breeds, sizes, and ages, including puppies, adults, and senior dogs.",
    },
    {
      question: "How should I store Tovlo dog food to keep it fresh?",
      answer:
        "Store Tovlo in a cool, dry place, preferably in an airtight container after opening to preserve its natural freshness and nutrients.",
    },
    {
      question:
        "Can Tovlo dog food help with common digestive problems like diarrhea or constipation?",
      answer:
        "Yes, many of our customers have seen improvements in digestive health thanks to Tovlo’s gentle air-dried formulas, which support gut health and nutrient absorption.",
    },
    {
      question: "Does Tovlo offer any subscription or delivery services?",
      answer:
        "We are currently working on launching a convenient subscription service to ensure your dog never runs out of their favorite nutritious meals, with reliable delivery across Israel.",
    },
    {
      question: "Is Tovlo approved or recommended by veterinarians?",
      answer:
        "Yes. Tovlo’s formulas are developed in consultation with veterinarians and canine nutrition experts, ensuring they meet high standards of safety, digestibility, and nutritional balance.",
    },
    {
      question: "How much Tovlo should I feed my dog daily?",
      answer:
        "Feeding amounts vary based on your dog’s age, size, weight, and activity level. Each Tovlo pack includes a detailed feeding guide, and our website offers a custom portion calculator to help you serve the perfect amount.",
    },
    {
      question: "Can Tovlo be used as a treat or training reward?",
      answer:
        "Absolutely! Thanks to its air-dried texture and natural ingredients, Tovlo is often used by pet parents as a healthy, high-value treat during training or daily rewards.",
    },
    {
      question: "What if my dog is allergic to chicken or beef?",
      answer:
        "Tovlo understands that food allergies are common. That’s why we’re working on expanding our range to include single-protein and hypoallergenic options like lamb and fish, specially designed for dogs with dietary sensitivities.",
    },
    {
      question:
        "Is Tovlo suitable for overweight dogs or dogs on a weight-loss plan?",
      answer:
        "Yes. Because Tovlo is nutrient-dense and portion-controlled, it helps support healthy weight management. Our vet-developed feeding plans can also be customized for dogs who need to shed or maintain weight.",
    },
    {
      question: "Is Tovlo environmentally sustainable?",
      answer:
        "Tovlo believes in sustainability and local impact. Our ingredients are locally sourced whenever possible, and we’re committed to reducing our carbon footprint with minimal packaging and ethical sourcing.",
    },
    {
      question: "Can I feed Tovlo as a topper or mix it with wet food?",
      answer:
        "Yes! Tovlo is very versatile. You can serve it as a complete meal, use it as a topper for added nutrition, or mix it with wet food or homemade meals for extra flavor and texture.",
    },
    {
      question: "How is Tovlo different from freeze-dried or raw food?",
      answer:
        "Unlike raw or freeze-dried food, Tovlo is gently air-dried, locking in nutrients without needing refrigeration or special handling. It offers raw-like benefits with greater convenience and safety—no mess, no bacteria, and longer shelf life.",
    },
    {
      question: "Is Tovlo expensive compared to other dog food?",
      answer:
        "While Tovlo may cost more upfront than supermarket kibble, its nutrient-rich, filler-free formula means you feed less per serving, making it more cost-effective in the long run—especially with fewer vet visits and health issues.",
    },
    {
      question: "How can I get in touch if I have questions or feedback?",
      answer:
        "We’re always here to help. You can contact our customer support team via WhatsApp, phone, email, or our website contact form. We love hearing from fellow dog lovers and are happy to answer any questions.",
    },
  ];

  const relatedArticles = [
    {
      image: "../assets/about/Itay_with_dog.png",
      text: "How one man’s passion for dogs sparked the creation of Tovlo – Israel’s trusted pet nutrition brand",
    },
    {
      image: "../assets/about/Itay_with_dog.png",
      text: "How one man’s passion for dogs sparked the creation of Tovlo – Israel’s trusted pet nutrition brand",
    },
    {
      image: "../assets/about/Itay_with_dog.png",
      text: "How one man’s passion for dogs sparked the creation of Tovlo – Israel’s trusted pet nutrition brand",
    },
    {
      image: "../assets/about/Itay_with_dog.png",
      text: "How one man’s passion for dogs sparked the creation of Tovlo – Israel’s trusted pet nutrition brand",
    },
    {
      image: "../assets/about/Itay_with_dog.png",
      text: "How one man’s passion for dogs sparked the creation of Tovlo – Israel’s trusted pet nutrition brand",
    },
  ];

  return (
    <>
      {/* Blog */}
      <Stack
        px={{ base: 2, md: 5, lg: 5 }}
        pt={{ base: 28, md: 28, lg: 24 }}
        alignItems={"flex-start"}
      >
        <Button
          textAlign={"left"}
          color={"text.primary"}
          variant="plain"
          textTransform="uppercase"
        >
          <RiArrowLeftLine /> BACK
        </Button>
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          w={"100%"}
          gap={5}
        >
          <RichText text="How to Choose Dog Food: Veterinarian’s Advice" />
          <Image
            src="../assets/about/Itay_with_dog.png"
            borderRadius={"2xl"}
            h={{ base: "300px", md: "400px", lg: "400px" }}
            w={{ base: "100%", lg: "55vw" }}
          />
          <Stack w={{ base: "100%", md: "80vw", lg: "50vw" }} gap={5}>
            <Heading
              fontSize={{ base: "text2", md: "h5", lg: "h5" }}
              fontWeight={500}
              lineHeight={"heading2"}
            >
              A personal mission to revolutionize dog food in Israel
            </Heading>
            <Text>
              It all started with a simple yet powerful question: Why are our
              dogs being fed food that we wouldn’t dare put on our own plates?
              This question haunted Itay Adri, an unwavering animal lover and
              visionary, leading to the birth of Tovlo in late 2023, a
              revolutionary dog food startup dedicated to creating natural dog
              food made with the utmost care and premium ingredients right here
              in Israel. Tovlo’s mission is clear: to provide premium pet food
              in Israel that truly nourishes dogs from the inside out,
              especially those with sensitive stomachs or digestive issues. But
              this is no ordinary business venture , this is a deeply personal
              journey fueled by love, loss, and hope.
            </Text>
          </Stack>
        </Stack>
      </Stack>

      {/* FAQs */}
      <Stack
        pt={20}
        px={{ base: 2, md: 5, lg: 5 }}
        justifyContent={"center"}
        alignItems={"center"}
        gap={8}
      >
        <RichText text="FAQs about Tovlo dog food" />
        <Stack
          w={{ base: "100%", lg: "60%" }}
          justifyContent={"center"}
          alignItems={"center"}
          gap={3}
        >
          {faqs.map((faq, index) => (
            <TAccordian2
              heading={faq.question}
              content={faq.answer}
              index={index}
            />
          ))}
        </Stack>
      </Stack>

      {/* Related Articles */}
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        py={20}
        gap={8}
        pl={{ base: 2, md: 5, lg: 5 }}
      >
        <RichText text="More related articles" />
        <Box w="full">
          <Swiper
            loop={true}
            spaceBetween={20}
            breakpoints={{
              0: {
                slidesPerView: 1.1,
                spaceBetween: 10, // for mobile
              },
              640: {
                slidesPerView: 2.1,
                spaceBetween: 10, // tablet
              },
              1024: {
                slidesPerView: 4.1,
                spaceBetween: 20, // desktop
              },
            }}
            className="testimonialSwiper"
          >
            {relatedArticles.map((blog, index) => (
              <SwiperSlide>
                <Stack key={index}>
                  <Image
                    objectFit={"cover"}
                    borderColor={"text.lightGreen50"}
                    border={"2px solid"}
                    borderRadius={"2xl"}
                    src={blog.image}
                    h={
                      index % 2 === 0
                        ? { base: "350px", md: "400px", lg: "300px" }
                        : { base: "350px", md: "400px", lg: "350px" }
                    }
                  />
                  <Heading
                    lineClamp={2}
                    fontWeight={"500"}
                    fontSize={{ base: "text1", md: "h6" }}
                  >
                    {blog.text}
                  </Heading>
                </Stack>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Stack>
    </>
  );
};

export default BlogScreen;
