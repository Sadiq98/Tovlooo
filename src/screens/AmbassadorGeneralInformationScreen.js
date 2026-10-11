// File: src/screens/AmbassadorGeneralInformationScreen.js
import { Button, Heading, HStack, Separator, Stack, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const information = [
  ["How does the program work?", "Share your personal Tovlo link with your community. When someone orders through your link, the referral is recorded in your dashboard."],
  ["When are referrals counted?", "Eligible orders appear after checkout is complete. Returns and cancelled orders are removed from your referral totals."],
  ["When are rewards paid?", "Your dashboard shows the current reward balance and referral activity. The team will confirm payout eligibility and timing with you."],
  ["Who can join?", "Pet parents, trainers, creators, and animal-care professionals who care about better everyday nutrition are welcome to apply."],
];

const AmbassadorGeneralInformationScreen = () => (
  <Stack gap={7}>
    <Stack gap={2}>
      <Text fontSize="text8" textTransform="uppercase">Program guide</Text>
      <Heading fontFamily="heading" fontSize={{ base: "h5", md: "h3" }} fontWeight="500">General information</Heading>
      <Text maxW="680px">Everything you need to know about sharing Tovlo and keeping your ambassador profile in good shape.</Text>
    </Stack>
    <Separator borderColor="text.lightGreen30" />
    <Stack gap={0}>
      {information.map(([question, answer]) => (
        <Stack key={question} py={5} gap={2} borderBottom="1px solid" borderColor="text.lightGreen30">
          <Heading fontSize="h6" fontWeight="500">{question}</Heading>
          <Text maxW="760px" lineHeight="text2">{answer}</Text>
        </Stack>
      ))}
    </Stack>
    <HStack gap={4} wrap="wrap">
      <Button as={RouterLink} to="/ambassador/register" bg="text.orange" color="white" _hover={{ bg: "text.darkOrange" }}>Apply to the program <FiArrowRight /></Button>
      <Button as={RouterLink} to="/ambassador/login" variant="outline" borderColor="text.primary">Already a member? Sign in</Button>
    </HStack>
  </Stack>
);

export default AmbassadorGeneralInformationScreen;
