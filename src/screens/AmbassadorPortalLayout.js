// File: src/screens/AmbassadorPortalLayout.js
import { Box, Button, Flex, Grid, Heading, Stack, Text } from "@chakra-ui/react";
import { Link as RouterLink, NavLink, Outlet } from "react-router-dom";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const navItems = [
  ["General information", "/ambassador/general-information"],
  ["My information", "/ambassador/my-information"],
  ["Social accounts", "/ambassador/social-accounts"],
  ["Ambassador dashboard", "/ambassador/dashboard"],
  ["My orders", "/ambassador/orders"],
  ["Media library", "/ambassador/media-library"],
];

// Shared shell for the ambassador portal: section nav + the active screen.
const AmbassadorPortalLayout = () => (
  <Stack
    bg="background.default"
    color="text.primary"
    minH="75vh"
    px={{ base: 4, md: 8, lg: 16 }}
    pt={{ base: 24, md: 32 }}
    pb={20}
    gap={8}
  >
    <Flex
      justify="space-between"
      align={{ base: "start", md: "end" }}
      gap={5}
      wrap="wrap"
    >
      <Stack gap={2}>
        <Text fontSize="text8" textTransform="uppercase">
          Tovlo community
        </Text>
        <Heading
          as="h1"
          fontFamily="heading"
          fontSize={{ base: "h4", md: "h2" }}
          fontWeight="500"
        >
          Ambassador program
        </Heading>
      </Stack>
      <Button
        as={RouterLink}
        to="/ambassador"
        variant="ghost"
        color="text.primary"
        _hover={{ bg: "custom.green12" }}
      >
        <FiArrowLeft /> Program overview
      </Button>
    </Flex>
    <Grid
      templateColumns={{ base: "1fr", lg: "250px minmax(0, 1fr)" }}
      gap={{ base: 6, lg: 12 }}
      alignItems="start"
    >
      <Stack
        as="nav"
        aria-label="Ambassador sections"
        gap={1}
        direction={{ base: "row", lg: "column" }}
        overflowX="auto"
        pb={{ base: 2, lg: 0 }}
        minW={0}
      >
        {navItems.map(([label, to]) => (
          <Button
            key={to}
            as={NavLink}
            to={to}
            end
            flexShrink={0}
            justifyContent="space-between"
            textAlign="left"
            whiteSpace="nowrap"
            variant="ghost"
            color="text.primary"
            borderRadius="sm"
            px={4}
            _hover={{ bg: "custom.green12", color: "text.primary" }}
            _currentPage={{ bg: "text.primary", color: "text.ivory" }}
          >
            {label}
            <FiArrowRight />
          </Button>
        ))}
        <Box
          mt={{ lg: 6 }}
          p={5}
          bg="custom.lightOrange"
          display={{ base: "none", lg: "block" }}
        >
          <Text fontFamily="heading" fontSize="h6" mb={2}>
            Need a hand?
          </Text>
          <Text fontSize="text8" mb={4}>
            Our team can help with your profile, links, or orders.
          </Text>
          <Button
            as={RouterLink}
            to="/contact"
            variant="outline"
            size="sm"
            color="text.primary"
            borderColor="text.primary"
          >
            Contact Tovlo
          </Button>
        </Box>
      </Stack>
      <Box minW={0}>
        <Outlet />
      </Box>
    </Grid>
  </Stack>
);

export default AmbassadorPortalLayout;
