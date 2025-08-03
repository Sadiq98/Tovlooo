import { lazy } from "react";
import {
  Flex,
  Grid,
  Heading,
  Icon,
  Input,
  InputGroup,
  Link,
  List,
  Stack,
  Text,
} from "@chakra-ui/react";

import {
  FaFacebookF,
  FaPhone,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";
import { marquee2 } from "../../data/homescreenData";

const SingleLink = lazy(() => import("./SingleLink"));
const Logo = lazy(() => import("../../data/Logo"));
const FooterBar = lazy(() => import("./FooterBar"));
const CustomMarquee = lazy(() => import("./Marquee"));

const Footer = () => {
  const navigation = [
    {
      label: "About us",
      link: "/about",
    },
    {
      label: "Catalog",
      link: "/catalog",
    },
    {
      label: "Ingredients",
      link: "/ingredients",
    },
    {
      label: "Blog",
      link: "/blog",
    },
    {
      label: "Contacts",
      link: "/contact",
    },
  ];

  const socials = [
    {
      icon: FaInstagram,
      url: "https://instagram.com/",
    },
    {
      icon: FaFacebookF,
      url: "https://facebook.com/",
    },
    {
      icon: FaLinkedinIn,
      url: "https://facebook.com/",
    },
    {
      icon: FaTwitter,
      url: "https://facebook.com/",
    },
  ];

  return (
    <>
      <CustomMarquee data={marquee2} />
      <Stack
        px={5}
        py={10}
        bgColor="text.primary"
        gap={10}
        alignItems={{ base: "start", lg: "center" }}
      >
        <Logo fill="#FBFFDC" width="250" height="auto" />
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          w="full"
          gap={{ base: 10, md: 40, lg: 52 }}
        >
          {/* 1st Column */}
          <Stack gap={10}>
            <Stack gap={3} display={{ base: "flex", lg: "none" }}>
              <Heading
                fontSize="text1"
                color="text.ivory"
                fontWeight="normal"
                textTransform="uppercase"
              >
                Get The Tovlo Paper
              </Heading>
              <InputGroup
                endElement={<GoArrowUpRight size={32} />}
                _icon={{ color: "text.ivory" }}
              >
                <Input
                  borderRadius="lg"
                  size="xl"
                  border="2px solid"
                  borderColor="text.ivory"
                  placeholder="Email address"
                  _placeholder={{ color: "text.ivory" }}
                  color="text.ivory"
                />
              </InputGroup>
            </Stack>
            <Stack gap={2}>
              <Heading
                fontSize="text1"
                color="text.ivory"
                fontWeight="normal"
                textTransform="uppercase"
              >
                Navigation
              </Heading>
              <List.Root
                variant="plain"
                gap={2}
                flexWrap="wrap"
                h={{ base: "150px", lg: "auto" }}
              >
                {navigation.map((item, index) => (
                  <List.Item key={index}>
                    <SingleLink
                      label={item.label}
                      url={item.link}
                      fontSize="text3"
                    />
                  </List.Item>
                ))}
              </List.Root>
            </Stack>
          </Stack>

          {/* 2nd Column */}
          <Stack
            alignItems="center"
            justifyContent="space-between"
            gap={3}
            display={{ base: "none", lg: "flex" }}
          >
            <Stack gap={3} alignItems="center">
              <Heading
                fontSize="text1"
                color="text.ivory"
                fontWeight="normal"
                textTransform="uppercase"
              >
                Get The Tovlo Paper
              </Heading>
              <InputGroup
                endElement={<GoArrowUpRight size={32} />}
                _icon={{ color: "text.ivory" }}
              >
                <Input
                  borderRadius="lg"
                  size="xl"
                  border="2px solid"
                  borderColor="text.ivory"
                  placeholder="Email address"
                  _placeholder={{ color: "text.ivory" }}
                  color="text.ivory"
                />
              </InputGroup>
            </Stack>
            <Flex gap={5}>
              {socials.map((item, index) => (
                <Link
                  href={item.url}
                  bgColor="text.ivory"
                  key={index}
                  borderRadius="full"
                  p={2}
                >
                  <Icon
                    as={item.icon}
                    color="text.primary"
                    boxSize={6}
                    key={index}
                  />
                </Link>
              ))}
            </Flex>
          </Stack>

          {/* 3nd Column */}
          <Stack gap={5}>
            <Heading
              fontSize="text1"
              color="text.ivory"
              fontWeight="normal"
              textTransform="uppercase"
            >
              Contact Us
            </Heading>
            <Stack
              bgColor="text.ivory"
              color="text.primary"
              borderRadius="xl"
              p={5}
              gap={2}
              fontSize="text6"
            >
              <Text>We’re here to help!</Text>
              <Flex align="center" gap={2}>
                <FaPhone />
                +9 725 457 75 76 5
              </Flex>
              <Flex align="center" gap={2}>
                <MdEmail />
                support@tovlopets.com
              </Flex>
              <Text>
                Our team is available Monday–Friday, 9am–5pm ET. We’ll get back
                to you as soon as possible!
              </Text>
              <Text>Phone support coming soon!</Text>
            </Stack>

            <Flex gap={5} display={{ base: "flex", lg: "none" }}>
              {socials.map((item, index) => (
                <Link
                  href={item.url}
                  bgColor="text.ivory"
                  key={index}
                  borderRadius="full"
                  p={2}
                >
                  <Icon
                    as={item.icon}
                    color="text.primary"
                    boxSize={6}
                    key={index}
                  />
                </Link>
              ))}
            </Flex>
          </Stack>
        </Grid>
      </Stack>
      <Flex
        bgColor="text.primary"
        px={5}
        justifyContent="space-between"
        display={{ base: "flex", md: "none" }}
      >
        <SingleLink
          fontSize="sm"
          label="Privacy Policy"
          textDecoration="underline"
          color="text.ivory"
        />
        <SingleLink
          fontSize="sm"
          label="Delivery & return"
          textDecoration="underline"
          color="text.ivory"
        />
        <SingleLink
          fontSize="sm"
          label="Terms of use"
          textDecoration="underline"
          color="text.ivory"
        />
      </Flex>
      <FooterBar />
    </>
  );
};

export default Footer;
