import { Link as RouterLink } from "react-router-dom";
import { Button, Heading, HStack, Input, Separator, Stack, Text } from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";

export const PageShell = ({ eyebrow, title, description, children, dark = false }) => (
  <Stack
    bg={dark ? "text.primary" : "background.default"}
    color={dark ? "text.ivory" : "text.primary"}
    px={{ base: 4, md: 10, lg: 20 }}
    pt={{ base: 28, md: 36 }}
    pb={{ base: 16, md: 24 }}
    gap={{ base: 10, md: 16 }}
  >
    <Stack maxW="900px" gap={4}>
      {eyebrow && <Text textTransform="uppercase" letterSpacing="0.12em" fontSize="text8">{eyebrow}</Text>}
      <Heading fontSize={{ base: "h4", md: "h2", lg: "h1" }} lineHeight="heading2" fontWeight="500">{title}</Heading>
      {description && <Text maxW="620px" fontSize={{ base: "text6", md: "text2" }}>{description}</Text>}
    </Stack>
    {children}
  </Stack>
);

export const Field = ({ label, placeholder, type = "text" }) => (
  <Stack gap={2}>
    <Text fontSize="text8" textTransform="uppercase" letterSpacing="0.08em">{label}</Text>
    <Input type={type} placeholder={placeholder} size="lg" bg="whiteAlpha.500" borderColor="text.lightGreen30" _focus={{ borderColor: "text.orange" }} />
  </Stack>
);

export const OutlineButton = ({ children, to, onClick }) => (
  <Button as={to ? RouterLink : "button"} to={to} onClick={onClick} variant="outline" borderColor="text.primary" color="text.primary" size="lg" borderRadius="full" px={8}>
    {children}
  </Button>
);

export const OrderSummary = () => (
  <Stack gap={5} bg="text.primary" color="text.ivory" p={{ base: 5, md: 8 }} borderRadius="2xl" h="fit-content">
    <Heading fontSize="h5" fontWeight="500">Your order</Heading>
    <HStack justify="space-between"><Text>Chicken Choice × 1</Text><Text>159.90₪</Text></HStack>
    <HStack justify="space-between"><Text>Delivery</Text><Text>Free</Text></HStack>
    <Separator borderColor="text.ivory" opacity={0.3} />
    <HStack justify="space-between" fontSize="h6"><Text>Total</Text><Text>159.90₪</Text></HStack>
    <Text fontSize="text8" opacity={0.75}>Your order is packed fresh and shipped with care.</Text>
  </Stack>
);

export const AccountNav = () => (
  <Stack gap={2}>
    {["Personal details", "My orders", "Pet profile", "Payments", "Ambassador programme"].map((item, index) => (
      <Button key={item} as={RouterLink} to={["/account", "/my-orders", "/account", "/payment", "/ambassador"][index]} justifyContent="space-between" variant={index === 0 ? "solid" : "ghost"} bg={index === 0 ? "text.primary" : "transparent"} color={index === 0 ? "text.ivory" : "text.primary"} size="lg">
        {item}<FiArrowRight />
      </Button>
    ))}
  </Stack>
);