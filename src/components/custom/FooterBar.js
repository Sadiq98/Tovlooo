import { Flex, Icon, Link, Text } from "@chakra-ui/react";

import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { lazy } from "react";

const SingleLink = lazy(() => import("./SingleLink"));

const FooterBar = () => {
  const socials = [
    {
      icon: IoLogoWhatsapp,
      link: "https://wa.me/2348123456789",
    },
    {
      icon: RiInstagramFill,
      link: "https://instagram.com/",
    },
    {
      icon: FaFacebookF,
      link: "https://facebook.com/",
    },
  ];

  return (
    <>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        color="text.primary"
        px={5}
        py={2}
      >
        <Flex gap={10}>
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
