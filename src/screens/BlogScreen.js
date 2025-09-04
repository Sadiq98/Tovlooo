import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import RichText from "../components/custom/RichText";
import { TAccordian2 } from "../components/custom/TAccordian";

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

  return (
    <>
      <Stack
        py={20}
        px={{ base: 2, md: 5, lg: 5 }}
        justifyContent={"center"}
        alignItems={"center"}
        gap={8}
      >
        <RichText text="FAQs about Tovlo dog food" />
        <Stack
          w={{ base: "100%", lg: "50%" }}
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
    </>
  );
};

export default BlogScreen;
