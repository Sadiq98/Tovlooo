// File: src/screens/OrdersScreen.js
import {
  Badge,
  Flex,
  Grid,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  AccountNav,
  PageShell,
} from "../components/custom/CommerceScreenComponents";

// TODO: sample data until the orders API is connected.
const orders = [
  {
    id: "TV-1048",
    date: "12 Sep 2026",
    status: "Delivered",
    total: "159.90₪",
    item: "Chicken Choice",
  },
  {
    id: "TV-0992",
    date: "21 Aug 2026",
    status: "Delivered",
    total: "37.00₪",
    item: "Pre + Probiotics Supplement",
  },
];

const OrdersScreen = () => (
  <PageShell
    eyebrow="My Tovlo / orders"
    title="Your order history."
    description="Everything your dog has loved, all in one place."
  >
    <Grid templateColumns={{ base: "1fr", lg: "260px 1fr" }} gap={10}>
      <AccountNav />
      <Stack gap={4}>
        {orders.map((order) => (
          <Flex
            key={order.id}
            justify="space-between"
            wrap="wrap"
            gap={3}
            bg="whiteAlpha.600"
            p={{ base: 5, md: 7 }}
            borderRadius="2xl"
          >
            <Stack gap={1}>
              <Text fontSize="text8" textTransform="uppercase">
                Order {order.id}
              </Text>
              <Heading as="h2" fontSize="h6" fontWeight="500">
                {order.item}
              </Heading>
              <Text fontSize="text8">{order.date}</Text>
            </Stack>
            <Stack align={{ md: "end" }} gap={2}>
              <Badge colorPalette="green">{order.status}</Badge>
              <Text fontWeight="600">{order.total}</Text>
            </Stack>
          </Flex>
        ))}
      </Stack>
    </Grid>
  </PageShell>
);

export default OrdersScreen;
