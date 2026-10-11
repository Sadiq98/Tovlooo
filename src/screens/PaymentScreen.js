// File: src/screens/PaymentScreen.js
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Button, Grid, Heading, Separator, Stack, Text } from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";
import { products } from "../data/products";
import {
  Field,
  OrderSummary,
  PageShell,
} from "../components/custom/CommerceScreenComponents";

// "Buy now" lands here without going through the bag, so fall back to a
// single item until the cart is read from the store.
const defaultProduct = products.find((product) => product.id === 1);
const defaultItems = [
  { name: defaultProduct.name, price: defaultProduct.price, quantity: 1 },
];

const PaymentScreen = () => {
  const location = useLocation();
  const items = location.state?.items || defaultItems;

  // TODO: submit to the payment provider / order API once it is available.
  const submit = (event) => event.preventDefault();

  return (
    <PageShell
      eyebrow="Checkout / 02"
      title="Almost home."
      description="Secure payment for your Tovlo order."
    >
      <Grid templateColumns={{ base: "1fr", lg: "1.2fr 0.8fr" }} gap={10}>
        <Stack
          as="form"
          onSubmit={submit}
          gap={5}
          bg="whiteAlpha.600"
          p={{ base: 5, md: 10 }}
          borderRadius="2xl"
        >
          <Heading as="h2" fontSize="h5" fontWeight="500">
            Payment details
          </Heading>
          <Field
            label="Card number"
            name="cardNumber"
            placeholder="1234 1234 1234 1234"
            inputMode="numeric"
            autoComplete="cc-number"
            required
          />
          <Grid templateColumns="1fr 1fr" gap={5}>
            <Field
              label="Expiry"
              name="expiry"
              placeholder="MM / YY"
              autoComplete="cc-exp"
              required
            />
            <Field
              label="CVC"
              name="cvc"
              placeholder="123"
              inputMode="numeric"
              autoComplete="cc-csc"
              required
            />
          </Grid>
          <Separator borderColor="text.lightGreen30" />
          <Heading as="h2" fontSize="h5" fontWeight="500">
            Delivery address
          </Heading>
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={5}>
            <Field
              label="Full name"
              name="fullName"
              placeholder="Your name"
              autoComplete="name"
              required
            />
            <Field
              label="Phone"
              name="phone"
              type="tel"
              placeholder="+972"
              autoComplete="tel"
              required
            />
          </Grid>
          <Field
            label="Address"
            name="address"
            placeholder="Street and house number"
            autoComplete="street-address"
            required
          />
          <Grid templateColumns="1fr 1fr" gap={5}>
            <Field
              label="City"
              name="city"
              placeholder="City"
              autoComplete="address-level2"
              required
            />
            <Field
              label="Postal code"
              name="postalCode"
              placeholder="Postal code"
              autoComplete="postal-code"
              required
            />
          </Grid>
          <Button
            type="submit"
            size="lg"
            borderRadius="full"
            bg="text.orange"
            color="white"
            _hover={{ bg: "text.darkOrange" }}
          >
            Pay securely <FiArrowRight />
          </Button>
          <Text fontSize="text8" textAlign="center">
            Need to change something?{" "}
            <Button
              as={RouterLink}
              to="/cart"
              variant="plain"
              p={0}
              h="auto"
              color="text.orange"
            >
              Back to bag
            </Button>
          </Text>
        </Stack>
        <OrderSummary items={items} />
      </Grid>
    </PageShell>
  );
};

export default PaymentScreen;
