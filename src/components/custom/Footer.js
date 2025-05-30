import React from "react";
import FooterBar from "./FooterBar";
import { Flex, Stack, Text } from "@chakra-ui/react";
import SingleLink from "./SingleLink";

import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Logo from "../../data/Logo";

const Footer = () => {
  return (
    <>
      <Stack px={5} bgColor="text.primary" py={5} gap={10}>
        <Flex justifyContent="space-between">
          <Flex gap={10}>
            <SingleLink color="white" label="About us" />
            <SingleLink color="white" label="Catalog" />
            <SingleLink color="white" label="Ingredients" />
            <SingleLink color="white" label="Blog" />
            <SingleLink color="white" label="Contact us" />
          </Flex>
          <Stack>
            <SingleLink
              fontSize="sm"
              color="white"
              label="+9 725 457 75 76 5"
              icon={<FaPhone />}
            />
            <SingleLink
              fontSize="sm"
              color="white"
              label="support@tovlopets.com"
              icon={<MdEmail />}
            />
          </Stack>
        </Flex>
        <Logo fill="white" width="full" height="full" />
      </Stack>
      <FooterBar />
    </>
  );
};

export default Footer;
