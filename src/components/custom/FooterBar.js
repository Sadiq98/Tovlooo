import { Flex, Text } from "@chakra-ui/react";

import { lazy } from "react";

const SingleLink = lazy(() => import("./SingleLink"));

const FooterBar = () => {
  return (
    <>
      <Flex
        direction={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        color="text.primary"
        px={5}
        py={2}
      >
        <Flex gap={10} display={{ base: "none", md: "flex" }}>
          <SingleLink
            fontSize="xs"
            label="Privacy Policy"
            textDecoration="underline"
            color="text.primary"
          />
          <SingleLink
            fontSize="xs"
            label="Delivery & return"
            textDecoration="underline"
            color="text.primary"
          />
          <SingleLink
            fontSize="xs"
            label="Terms of use"
            textDecoration="underline"
            color="text.primary"
          />
        </Flex>
        <Text fontSize="sm"> © {new Date().getFullYear()} TOVLO</Text>
      </Flex>
    </>
  );
};

export default FooterBar;
