// File: src/components/custom/CommerceScreenComponents.js
import { Link as RouterLink, NavLink } from "react-router-dom";
import {
  Button,
  Heading,
  HStack,
  Input,
  Separator,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";

export const FREE_DELIVERY_FROM = 99;
export const DELIVERY_FEE = 20;

export const formatPrice = (value) => `${value.toFixed(2)}₪`;

export const PageShell = ({
  eyebrow,
  title,
  description,
  children,
  dark = false,
}) => (
  <Stack
    bg={dark ? "text.primary" : "background.default"}
    color={dark ? "text.ivory" : "text.primary"}
    px={{ base: 4, md: 10, lg: 20 }}
    pt={{ base: 28, md: 36 }}
    pb={{ base: 16, md: 24 }}
    gap={{ base: 10, md: 16 }}
  >
    <Stack maxW="900px" gap={4}>
      {eyebrow && (
        <Text textTransform="uppercase" letterSpacing="0.12em" fontSize="text8">
          {eyebrow}
        </Text>
      )}
      <Heading
        as="h1"
        fontSize={{ base: "h4", md: "h2", lg: "h1" }}
        lineHeight="heading2"
        fontWeight="500"
      >
        {title}
      </Heading>
      {description && (
        <Text maxW="620px" fontSize={{ base: "text6", md: "text2" }}>
          {description}
        </Text>
      )}
    </Stack>
    {children}
  </Stack>
);

// Labelled input. Any extra props (name, value, onChange, required, ...)
// are forwarded to the input so the field can be controlled by a form.
export const Field = ({ label, type = "text", ...props }) => (
  <Stack as="label" gap={2}>
    <Text fontSize="text8" textTransform="uppercase" letterSpacing="0.08em">
      {label}
    </Text>
    <Input
      type={type}
      size="lg"
      bg="whiteAlpha.500"
      borderColor="text.lightGreen30"
      _focus={{ borderColor: "text.orange" }}
      {...props}
    />
  </Stack>
);

export const OutlineButton = ({ children, to, ...props }) => (
  <Button
    as={to ? RouterLink : "button"}
    to={to}
    variant="outline"
    borderColor="text.primary"
    color="text.primary"
    size="lg"
    borderRadius="full"
    px={8}
    {...props}
  >
    {children}
  </Button>
);

// items: [{ name, price, quantity }]
export const OrderSummary = ({ items = [], children }) => {
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const delivery =
    subtotal === 0 || subtotal >= FREE_DELIVERY_FROM ? 0 : DELIVERY_FEE;

  return (
    <Stack
      gap={5}
      bg="text.primary"
      color="text.ivory"
      p={{ base: 5, md: 8 }}
      borderRadius="2xl"
      h="fit-content"
    >
      <Heading as="h2" fontSize="h5" fontWeight="500">
        Your order
      </Heading>
      {items.length === 0 && <Text>Your bag is empty.</Text>}
      {items.map((item) => (
        <HStack key={item.name} justify="space-between">
          <Text>
            {item.name} × {item.quantity}
          </Text>
          <Text>{formatPrice(item.price * item.quantity)}</Text>
        </HStack>
      ))}
      <HStack justify="space-between">
        <Text>Delivery</Text>
        <Text>{delivery === 0 ? "Free" : formatPrice(delivery)}</Text>
      </HStack>
      <Separator borderColor="text.ivory" opacity={0.3} />
      <HStack justify="space-between" fontSize="h6">
        <Text>Total</Text>
        <Text>{formatPrice(subtotal + delivery)}</Text>
      </HStack>
      <Text fontSize="text8" opacity={0.75}>
        Your order is packed fresh and shipped with care.
      </Text>
      {children}
    </Stack>
  );
};

const accountLinks = [
  { label: "Account overview", to: "/account" },
  { label: "Personal details", to: "/my-account/my-info" },
  { label: "My orders", to: "/my-account/orders" },
  { label: "Ambassador programme", to: "/ambassador" },
];

export const AccountNav = () => (
  <Stack as="nav" aria-label="Account sections" gap={2}>
    {accountLinks.map(({ label, to }) => (
      <Button
        key={to}
        as={NavLink}
        to={to}
        end
        justifyContent="space-between"
        variant="ghost"
        color="text.primary"
        size="lg"
        _hover={{ bg: "custom.green12", color: "text.primary" }}
        _currentPage={{ bg: "text.primary", color: "text.ivory" }}
      >
        {label}
        <FiArrowRight />
      </Button>
    ))}
  </Stack>
);
