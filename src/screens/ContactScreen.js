// File: src/screens/ContactScreen.js
import {
  Box,
  Button,
  Field,
  Flex,
  Grid,
  Heading,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { FaEnvelope, FaPhoneAlt, FaRegClock } from "react-icons/fa";

const contactDetails = [
  {
    icon: FaEnvelope,
    label: "Email us",
    value: "support@tovlopets.com",
    href: "mailto:support@tovlopets.com",
  },
  {
    icon: FaPhoneAlt,
    label: "Call us",
    value: "+972 54 577 5765",
    href: "tel:+972545775765",
  },
];

const ContactScreen = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Tovlo website enquiry: ${formData.get("subject")}`);
    const body = encodeURIComponent(
      `Name: ${formData.get("name")}\nEmail: ${formData.get("email")}\n\n${formData.get("message")}`,
    );

    window.location.href = `mailto:support@tovlopets.com?subject=${subject}&body=${body}`;
  };

  return (
    <Box bg="text.ivory" color="text.primary" px={{ base: 5, md: 10 }} pt={{ base: 28, md: 36 }} pb={{ base: 16, md: 24 }}>
      <Stack maxW="7xl" mx="auto" gap={{ base: 10, md: 16 }}>
        <Stack maxW="3xl" gap={4}>
          <Text textTransform="uppercase" fontSize="text8" fontWeight="bold">
            Contact Tovlo
          </Text>
          <Heading as="h1" fontSize={{ base: "h4", md: "h2" }} lineHeight="heading2" textTransform="uppercase">
            We’re here for you and your pup.
          </Heading>
          <Text fontSize={{ base: "text8", md: "text6" }} maxW="2xl" color="text.darkGrey">
            Questions about an order, our recipes, or finding the right food? Our team is happy to help.
          </Text>
        </Stack>

        <Grid templateColumns={{ base: "1fr", lg: "0.85fr 1.15fr" }} gap={{ base: 10, lg: 20 }}>
          <Stack gap={8}>
            <Stack gap={5}>
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <Flex key={label} align="center" gap={4}>
                  <Flex w="12" h="12" flexShrink={0} align="center" justify="center" bg="custom.lightGreen" borderRadius="md">
                    <Icon size={19} />
                  </Flex>
                  <Stack gap={1}>
                    <Text fontSize="text8" color="text.darkGrey">{label}</Text>
                    <Text as="a" href={href} fontSize={{ base: "text8", md: "text6" }} fontWeight="medium" _hover={{ textDecoration: "underline" }}>
                      {value}
                    </Text>
                  </Stack>
                </Flex>
              ))}
            </Stack>

            <Flex align="flex-start" gap={4} borderTop="1px solid" borderColor="custom.green30" pt={6}>
              <FaRegClock size={20} />
              <Stack gap={1}>
                <Text fontWeight="semibold">When we’re available</Text>
                <Text fontSize="text8" color="text.darkGrey">
                  Monday–Friday, 9am–5pm ET. We’ll get back to you as soon as possible.
                </Text>
              </Stack>
            </Flex>
          </Stack>

          <Box as="form" onSubmit={handleSubmit} bg="white" borderRadius="lg" p={{ base: 5, md: 8 }}>
            <Stack gap={5}>
              <Heading as="h2" fontSize="h6" textTransform="uppercase">Send us a message</Heading>
              <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
                <Field.Root required>
                  <Field.Label>Name</Field.Label>
                  <Input name="name" autoComplete="name" required borderColor="custom.green30" />
                </Field.Root>
                <Field.Root required>
                  <Field.Label>Email</Field.Label>
                  <Input name="email" type="email" autoComplete="email" required borderColor="custom.green30" />
                </Field.Root>
              </Grid>
              <Field.Root required>
                <Field.Label>Subject</Field.Label>
                <Input name="subject" required borderColor="custom.green30" />
              </Field.Root>
              <Field.Root required>
                <Field.Label>Message</Field.Label>
                <Textarea name="message" required rows={5} resize="vertical" borderColor="custom.green30" />
              </Field.Root>
              <Button type="submit" alignSelf="flex-start" bg="text.primary" color="text.ivory" borderRadius="md" px={8} _hover={{ bg: "text.darkGreen1" }}>
                Send message
              </Button>
            </Stack>
          </Box>
        </Grid>
      </Stack>
    </Box>
  );
};

export default ContactScreen;
