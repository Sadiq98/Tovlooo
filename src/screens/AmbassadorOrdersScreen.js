// File: src/screens/AmbassadorOrdersScreen.js
import { Badge, Flex, Heading, Separator, Stack, Text } from "@chakra-ui/react";

const orders = [
  { id: "TV-1048", date: "12 Sep 2026", product: "Chicken Choice", amount: "159.90₪", status: "Approved" },
  { id: "TV-0992", date: "21 Aug 2026", product: "Joint Support Supplement", amount: "79.90₪", status: "Approved" },
];

const AmbassadorOrdersScreen = () => (
  <Stack gap={7}>
    <Stack gap={2}>
      <Text fontSize="text8" textTransform="uppercase">Referral activity</Text>
      <Heading fontFamily="heading" fontSize={{ base: "h5", md: "h3" }} fontWeight="500">My orders</Heading>
      <Text>Orders placed through your ambassador link.</Text>
    </Stack>
    <Stack gap={0}>
      {orders.map((order) => (
        <Stack key={order.id} py={5} gap={4} borderBottom="1px solid" borderColor="text.lightGreen30">
          <Flex justify="space-between" align="start" gap={4} wrap="wrap">
            <Stack gap={1}><Text fontSize="text8">{order.id} · {order.date}</Text><Heading fontSize="h6" fontWeight="500">{order.product}</Heading></Stack>
            <Stack align="end" gap={2}><Badge colorPalette="green">{order.status}</Badge><Text fontWeight="600">{order.amount}</Text></Stack>
          </Flex>
        </Stack>
      ))}
    </Stack>
    <Separator borderColor="text.lightGreen30" />
    <Text fontSize="text8">Order information shown here is sample data until referral tracking is connected.</Text>
  </Stack>
);

export default AmbassadorOrdersScreen;
