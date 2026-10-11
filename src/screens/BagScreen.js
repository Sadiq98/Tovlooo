// File: src/screens/BagScreen.js
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Button,
  Grid,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FiArrowRight, FiMinus, FiPlus } from "react-icons/fi";
import { products } from "../data/products";
import {
  FREE_DELIVERY_FROM,
  OrderSummary,
  PageShell,
  formatPrice,
} from "../components/custom/CommerceScreenComponents";

// TODO: replace with the cart from the store once cart actions are wired up.
// Looked up by id because other screens sort the shared products array.
const bagProduct = products.find((product) => product.id === 1);

const BagScreen = () => {
  const [quantity, setQuantity] = useState(1);
  const items = [
    { name: bagProduct.name, price: bagProduct.price, quantity },
  ];

  return (
    <PageShell
      eyebrow="Your bag"
      title="Good choices, ready to go."
      description="Review your dog's new favourites before checkout."
    >
      <Grid templateColumns={{ base: "1fr", lg: "1.2fr 0.8fr" }} gap={10}>
        <Stack gap={4}>
          <HStack justify="space-between">
            <Text fontSize="text8" textTransform="uppercase">
              {quantity} {quantity === 1 ? "item" : "items"}
            </Text>
            <Text fontSize="text8">
              Free delivery over {FREE_DELIVERY_FROM}₪
            </Text>
          </HStack>
          <Stack
            direction={{ base: "column", md: "row" }}
            align={{ md: "center" }}
            gap={5}
            bg="whiteAlpha.600"
            p={5}
            borderRadius="2xl"
          >
            <Image
              src={bagProduct.image}
              alt={bagProduct.name}
              boxSize="140px"
              objectFit="contain"
              bg="background.lightGreen"
              borderRadius="xl"
            />
            <Stack flex="1" gap={2}>
              <Heading as="h2" fontSize="h5" fontWeight="500">
                {bagProduct.name}
              </Heading>
              <Text>{bagProduct.description}</Text>
              <Text fontWeight="600">{formatPrice(bagProduct.price)}</Text>
            </Stack>
            <HStack
              border="1px solid"
              borderColor="text.lightGreen30"
              borderRadius="full"
              p={1}
              alignSelf={{ base: "start", md: "center" }}
            >
              <Button
                variant="plain"
                color="text.primary"
                aria-label="Decrease quantity"
                disabled={quantity === 1}
                onClick={() => setQuantity((current) => Math.max(1, current - 1))}
              >
                <FiMinus />
              </Button>
              <Text aria-live="polite">{quantity}</Text>
              <Button
                variant="plain"
                color="text.primary"
                aria-label="Increase quantity"
                onClick={() => setQuantity((current) => current + 1)}
              >
                <FiPlus />
              </Button>
            </HStack>
          </Stack>
        </Stack>
        <OrderSummary items={items}>
          <Button
            as={RouterLink}
            to="/payment"
            state={{ items }}
            size="lg"
            borderRadius="full"
            bg="text.orange"
            color="white"
            _hover={{ bg: "text.darkOrange" }}
          >
            Checkout <FiArrowRight />
          </Button>
        </OrderSummary>
      </Grid>
    </PageShell>
  );
};

export default BagScreen;
