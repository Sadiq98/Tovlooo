import { Flex, Icon, Link, Text } from "@chakra-ui/react";
import SingleLink from "./SingleLink";

import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";

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
        <Flex fontSize="xs" gap={20}>
          <Text>© {new Date().getFullYear()} TOVLO</Text>
          <SingleLink
            fontSize="xs"
            label="Privacy Policy"
            textDecoration="underline"
          />
          <SingleLink
            fontSize="xs"
            label="Delivery & return"
            textDecoration="underline"
          />
          <SingleLink
            fontSize="xs"
            label="Terms of use"
            textDecoration="underline"
          />
        </Flex>
        <Flex gap={3}>
          {socials.map(({ icon, link }, index) => (
            <Link href={link} bgColor="text.primary" p={1} borderRadius="full">
              <Icon color="white" as={icon} boxSize={4} />
            </Link>
          ))}
        </Flex>
      </Flex>
    </>
  );
};

export default FooterBar;
