import {
  Clipboard,
  Flex,
  Heading,
  IconButton,
  Input,
  InputGroup,
  Stack,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";
import RichText from "../components/custom/RichText";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";

import { VscArrowRight } from "react-icons/vsc";

const MyAccountScreen = () => {
  const tabs = [
    {
      name: "My Information",
      value: "myInfo",
      component: "myInfo",
      url: "/my-account/my-info",
    },
    {
      name: "Pet Profile",
      value: "pet",
      component: "myInfo",
      url: "/my-account/pet",
    },
    {
      name: "My Orders",
      value: "orders",
      component: "myInfo",
      url: "/my-account/orders",
    },
    {
      name: "Auto Order",
      value: "autoOrder",
      component: "myInfo",
      url: "/my-account/auto-order",
    },
    {
      name: "Payments",
      value: "payments",
      component: "myInfo",
      url: "/my-account/payments",
    },
    {
      name: "Promo Codes",
      value: "promoCodes",
      component: "myInfo",
      url: "/my-account/promo-codes",
    },
  ];
  return (
    <>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        py={{ base: 32, md: 40 }}
        px={5}
        gap={{ base: 10, md: 20 }}
      >
        <RichText
          text="My Account"
          fontSize={{ base: "h2", md: "h2", lg: "100px" }}
          textTransform="none"
        />
        {/*  Tabs */}
        <Tabs.Root
          variant="plain"
          defaultValue={tabs[0].value}
          orientation={"vertical"}
          width={"full"}
          gap={10}
          display={{ base: "none", md: "flex" }}
        >
          <Stack gap={10}>
            <Tabs.List gap={5}>
              {tabs.map((tab, index) => (
                <Tabs.Trigger
                  key={index}
                  value={tab.value}
                  fontFamily="heading"
                  fontSize={"h5"}
                  _selected={{ color: "text.primary" }}
                  color={"text.lightGreen50"}
                >
                  {tab.name}
                </Tabs.Trigger>
              ))}
            </Tabs.List>
            {/* Referral */}
            <Referral />
          </Stack>

          {tabs.map((tab, index) => (
            <Tabs.Content
              key={index}
              value={tab.value}
              inset="0"
              _open={{
                animationName: "fade-in, scale-in",
                animationDuration: "300ms",
              }}
              _closed={{
                animationName: "fade-out, scale-out",
                animationDuration: "120ms",
              }}
            >
              {tab.component}
            </Tabs.Content>
          ))}
        </Tabs.Root>

        {/* Mobile */}
        <Stack display={{ base: "flex", md: "none" }} gap={10}>
          <Stack gap={3}>
            {tabs.map((tab, index) => (
              <Link
                as={RouterLink}
                to={tabs.url}
                color="text.primary"
                fontSize="h5"
                fontWeight="semibold"
                fontFamily={"heading"}
                alignItems="center"
                textDecoration="none"
                _hover={{ textDecoration: "none", color: "text.orange" }}
                _focus={{ outline: "none" }}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "auto" });
                }}
              >
                <Flex
                  width={"full"}
                  justifyContent={"space-between"}
                  alignItems="center"
                >
                  {tab.name} <VscArrowRight size={30} />
                </Flex>
              </Link>
            ))}
          </Stack>
          <Referral />
        </Stack>
      </Stack>
    </>
  );
};

const Referral = () => {
  return (
    <>
      {/* Referral */}
      <Stack
        color={"text.orange"}
        bgColor={"#FE6B4014"}
        p={5}
        borderRadius="xl"
        textAlign={{ base: "center", md: "left" }}
        width={{ base: "full", md: "250px", lg: "300px" }}
        gap={{ base: 3, md: 2 }}
      >
        <Heading fontSize={{ base: "h6", md: "text2", lg: "h6" }}>
          Referral program
        </Heading>
        <Text fontSize={{ base: "text6", md: "text8", lg: "text6" }}>
          Share with friends → they get 15%, you get 5% credit
        </Text>
        <Clipboard.Root value="https://example.com/">
          <InputGroup
            endElement={
              <Clipboard.Trigger asChild>
                <IconButton
                  overlay={"none"}
                  color={"text.orange"}
                  bgColor={"transparent"}
                  borderRadius={"none"}
                  variant="surface"
                  size="xs"
                  me="-2"
                  borderColor={"text.orange"}
                  borderWidth="1px"
                >
                  <Clipboard.Indicator />
                </IconButton>
              </Clipboard.Trigger>
            }
          >
            <Clipboard.Input
              asChild
              borderWidth="1px"
              borderColor="#FE6B4014"
              borderRadius={"none"}
            >
              <Input
                borderColor={"text.orange"}
                textAlign={"center"}
                borderWidth="1px"
                fontSize={{ base: "text6", md: "text8" }}
              />
            </Clipboard.Input>
          </InputGroup>
        </Clipboard.Root>
      </Stack>
    </>
  );
};

export default MyAccountScreen;
