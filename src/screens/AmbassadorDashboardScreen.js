// File: src/screens/AmbassadorDashboardScreen.js
import { useState } from "react";
import { Badge, Button, Flex, Grid, Heading, HStack, Input, Stack, Text } from "@chakra-ui/react";
import { FiCopy } from "react-icons/fi";

const periods = [
  { title: "Last 30 days", dates: "May 23, 2025 – June 22, 2025", amount: "0₪", change: "0%" },
  { title: "Previous month", dates: "May 1, 2025 – May 31, 2025", amount: "0₪", change: "0%" },
];
const chartValues = [84, 72, 59, 74, 60, 87, 73, 93, 68, 82, 62, 75];
const chartMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const AmbassadorDashboardScreen = () => {
  const [copied, setCopied] = useState(false);
  const referralLink = "https://tovlo.com/r/your-link";
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <Stack gap={{ base: 6, md: 8 }}>
      <Flex justify="space-between" align="center" gap={4} wrap="wrap">
        <Stack gap={1}><Text fontSize="text8" textTransform="uppercase">Your activity</Text><Heading fontFamily="heading" fontSize={{ base: "h5", md: "h3" }} fontWeight="500">Ambassador dashboard</Heading></Stack>
        <Badge colorPalette="green" px={3} py={1}>Account active</Badge>
      </Flex>
      <Grid templateColumns={{ base: "1fr", md: "repeat(2, minmax(0, 1fr))" }} gap={4}>
        {periods.map((period) => (
          <Stack key={period.title} bg="white" border="1px solid" borderColor="text.lightGreen30" p={{ base: 5, md: 7 }} gap={3}>
            <Text fontFamily="heading" fontSize="h6">{period.title}</Text>
            <Text fontSize="text8" color="text.darkGrey">{period.dates}</Text>
            <HStack align="end" gap={3}><Text fontFamily="heading" fontSize="h3" lineHeight="1">{period.amount}</Text><Text fontSize="text8" color="text.darkGreen1">▲ {period.change} from previous period</Text></HStack>
          </Stack>
        ))}
      </Grid>
      <Stack bg="white" border="1px solid" borderColor="text.lightGreen30" p={{ base: 5, md: 8 }} gap={6}>
        <Stack gap={1}><Heading fontFamily="heading" fontSize="h5" fontWeight="500">Profit</Heading><Text fontSize="text8" color="text.darkGrey">Referral earnings by month</Text></Stack>
        <Flex align="end" gap={{ base: 2, md: 4 }} h={{ base: "220px", md: "300px" }} role="img" aria-label="Monthly referral earnings chart">
          {chartValues.map((value, index) => (
            <Stack key={chartMonths[index]} flex="1" h="100%" justify="end" align="center" gap={2}>
              <Stack bg="custom.lightOrange" w="100%" minH="8px" h={`${value}%`} borderTop="2px solid" borderColor="text.orange" />
              <Text fontSize="text8" color="text.darkGreen1">{chartMonths[index]}</Text>
            </Stack>
          ))}
        </Flex>
      </Stack>
      <Stack bg="custom.lightGreen" p={{ base: 5, md: 7 }} gap={4}>
        <Flex justify="space-between" align="center" gap={4} wrap="wrap"><Stack gap={1}><Heading fontFamily="heading" fontSize="h6" fontWeight="500">Your referral link</Heading><Text fontSize="text8">Share this link with your community.</Text></Stack><Badge colorPalette="green">Ready to share</Badge></Flex>
        <Flex gap={3} direction={{ base: "column", sm: "row" }}>
          <Input value={referralLink} readOnly bg="white" aria-label="Your referral link" />
          <Button onClick={copyLink} bg="text.primary" color="white" minW="130px"><FiCopy /> {copied ? "Copied" : "Copy link"}</Button>
        </Flex>
      </Stack>
      <Text fontSize="text8" color="text.darkGrey">Earnings and referral totals will appear when ambassador tracking is connected.</Text>
    </Stack>
  );
};

export default AmbassadorDashboardScreen;
