import {
  Button,
  useCheckboxGroup,
  Flex,
  Icon,
  Menu,
  Portal,
  Link,
  Drawer,
  CloseButton,
  IconButton,
  Stack,
} from "@chakra-ui/react";
import { Link as RouterLink, useLocation, matchPath } from "react-router-dom";

import { IoChevronDown } from "react-icons/io5";
import { FaGlobe, FaHandshake, FaUserAlt } from "react-icons/fa";
import { RiShoppingBasketFill } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

import { languages } from "../../data/language";
import { lazy } from "react";

const SingleLink = lazy(() => import("./SingleLink"));
const Logo = lazy(() => import("../../data/Logo"));

const Header = () => {
  const location = useLocation();
  const staticPaths = ["/ingredients", "/starterpack", "/blog"];
  const dynamicPatterns = ["/catalog/:id"];

  const header2 =
    staticPaths.includes(location.pathname) ||
    dynamicPatterns.some((pattern) => matchPath(pattern, location.pathname));
  const defaultNav = [
    { label: "About us", url: "/about" },
    { label: "Catalog", url: "/catalog" },
    { label: "Ingredients", url: "/ingredients" },
    { label: "Blog", url: "/blog" },
    { label: "Contact Us", url: "/contact" },
  ];

  const drawerNav = [
    { label: "About us", url: "/about" },
    { label: "Catalog", url: "/catalog" },
    { label: "Ingredients", url: "/ingredients" },
    { label: "Blog", url: "/blog" },
    { label: "Contacts", url: "/contact" },
    { label: "Account", url: "/contact" },
    { label: "Get a custom plan", url: "/contact" },
    { label: "Ambassador", url: "/contact" },
    { label: "program", url: "/contact" },
  ];

  const socials = [
    {
      icon: RiInstagramFill,
      url: "https://instagram.com/",
    },
    {
      icon: FaFacebookF,
      url: "https://facebook.com/",
    },
  ];

  const group = useCheckboxGroup({ defaultValue: "English" });
  const selectedLanguage = group.value;

  return (
    <>
      <Flex
        as="header"
        position="absolute"
        top="0"
        p={{ base: 3, md: 5 }}
        zIndex="10"
        w="full"
        justifyContent="center"
      >
        <Flex
          bg={header2 ? "#FAFCEB" : "transparent"}
          w="full"
          justify="space-between"
          align="center"
          py={3}
          px={{ base: 3, md: 5 }}
          borderRadius="lg"
          border="2px solid"
          borderColor={header2 ? "text.primary" : "text.ivory"}
        >
          {/* Left Nav */}
          <Flex
            align="center"
            gap={{ lg: 5, xl: 6 }}
            display={{ base: "none", lg: "flex" }}
          >
            {defaultNav.map(({ label, url }) => (
              <SingleLink
                key={label}
                label={label}
                url={url}
                color={header2 ? "text.primary" : "text.ivory"}
                _hover={{
                  color: header2 ? "text.darkGreen1" : "text.darkIvory",
                }}
              />
            ))}
          </Flex>

          {/* Center Logo */}
          <Link
            as={RouterLink}
            to="/"
            onClick={() => {
              window.scrollTo({ top: "0", behavior: "smooth" });
            }}
            _focus={{ outline: "none" }}
          >
            <Logo
              fill={header2 ? "#017D65" : "#FBFFDC"}
              display={{ base: "none", xl: "block" }}
            />
            <Logo
              fill={header2 ? "#017D65" : "#FBFFDC"}
              width="120"
              height="20"
              display={{ base: "block", xl: "none" }}
            />
          </Link>

          {/* Right Side */}
          <Flex align="center" gap={5} display={{ base: "none", lg: "flex" }}>
            <Button
              size="xs"
              bg={header2 ? "text.primary" : "text.ivory"}
              color={header2 ? "text.ivory" : "text.primary"}
              borderRadius="md"
              _hover={{ bg: header2 ? "text.darkGreen1" : "text.darkIvory" }}
            >
              Get a custom plugin
            </Button>

            <Menu.Root>
              <Menu.Trigger asChild>
                <Button
                  variant="plain "
                  _hover={{
                    color: header2 ? "text.darkGreen1" : "text.darkIvory",
                  }}
                  color={header2 ? "text.primary" : "text.ivory"}
                  size="sm"
                >
                  <FaGlobe /> {selectedLanguage || "Select Language"}{" "}
                  <IoChevronDown />
                </Button>
              </Menu.Trigger>
              <Portal>
                <Menu.Positioner>
                  <Menu.Content>
                    <Menu.ItemGroup
                      color={header2 ? "text.primary" : "text.ivory"}
                    >
                      {languages.map(({ language }) => (
                        <Menu.CheckboxItem
                          key={language}
                          value={language}
                          // checked={group.isChecked(language)}
                          onCheckedChange={() => group.toggleValue(language)}
                        >
                          {language}
                          <Menu.ItemIndicator />
                        </Menu.CheckboxItem>
                      ))}
                    </Menu.ItemGroup>
                  </Menu.Content>
                </Menu.Positioner>
              </Portal>
            </Menu.Root>

            <Link as={RouterLink} to="/contact">
              <Icon
                as={FaHandshake}
                color={header2 ? "text.primary" : "text.ivory"}
                _hover={{
                  color: header2 ? "text.darkGreen1" : "text.darkIvory",
                }}
                boxSize={8}
              />
            </Link>
            <Icon
              as={FaUserAlt}
              color={header2 ? "text.primary" : "text.ivory"}
              _hover={{ color: header2 ? "text.darkGreen1" : "text.darkIvory" }}
              boxSize={6}
            />
            <Icon
              as={RiShoppingBasketFill}
              color={header2 ? "text.primary" : "text.ivory"}
              _hover={{ color: header2 ? "text.darkGreen1" : "text.darkIvory" }}
              boxSize={8}
            />
          </Flex>

          {/* Mobile Drawer */}
          <Flex
            align="center"
            gap={{ base: 3, md: 5 }}
            display={{ base: "flex", lg: "none" }}
          >
            <Icon
              as={RiShoppingBasketFill}
              color={header2 ? "text.primary" : "text.ivory"}
              _hover={{ color: header2 ? "text.darkGreen1" : "text.darkIvory" }}
              boxSize={{ base: "6", md: "12" }}
            />

            <Drawer.Root size="md">
              <Drawer.Trigger asChild>
                <IconButton bgColor="transparent">
                  <Icon
                    as={IoMenu}
                    color={header2 ? "text.primary" : "text.ivory"}
                    boxSize={{ base: "6", md: "12" }}
                  />
                </IconButton>
              </Drawer.Trigger>
              <Drawer.Positioner>
                <Drawer.Content bgColor="background.default">
                  <Drawer.Body mt={28}>
                    <Stack justifyContent="space-between" h="full">
                      <Stack gap={{ base: 8, md: 14 }}>
                        {drawerNav.map(({ label, url }, index) => (
                          <Drawer.ActionTrigger key={index}>
                            <SingleLink
                              fontFamily="heading"
                              fontSize={{ base: "h5", md: "h3" }}
                              fontWeight="500"
                              textAlign="left"
                              color="text.primary"
                              _hover={{ color: "text.primary" }}
                              label={label}
                              url={url}
                            />
                          </Drawer.ActionTrigger>
                        ))}
                      </Stack>

                      <Flex w="full" justifyContent="space-between">
                        <Flex gap={5}>
                          {socials.map((item, index) => (
                            <Link
                              href={item.url}
                              bgColor="text.primary"
                              key={index}
                              borderRadius="full"
                              p={2}
                            >
                              <Icon
                                as={item.icon}
                                color="text.ivory"
                                boxSize={6}
                                key={index}
                              />
                            </Link>
                          ))}
                        </Flex>
                        <Menu.Root>
                          <Menu.Trigger asChild>
                            <Button
                              variant="plain"
                              _hover={{ color: "text.primary" }}
                              color="text.primary"
                              fontSize="lg"
                            >
                              <FaGlobe />{" "}
                              {selectedLanguage || "Select Language"}{" "}
                              <IoChevronDown />
                            </Button>
                          </Menu.Trigger>
                          <Portal>
                            <Menu.Positioner>
                              <Menu.Content>
                                <Menu.ItemGroup color="text.primary">
                                  {languages.map(({ language }) => (
                                    <Menu.CheckboxItem
                                      key={language}
                                      value={language}
                                      // checked={group.isChecked(language)}
                                      onCheckedChange={() =>
                                        group.toggleValue(language)
                                      }
                                    >
                                      {language}
                                      <Menu.ItemIndicator />
                                    </Menu.CheckboxItem>
                                  ))}
                                </Menu.ItemGroup>
                              </Menu.Content>
                            </Menu.Positioner>
                          </Portal>
                        </Menu.Root>
                      </Flex>
                    </Stack>
                  </Drawer.Body>
                  <Drawer.CloseTrigger asChild>
                    <CloseButton
                      color="text.primary"
                      _hover={{ bgColor: "transparent" }}
                      size="2xl"
                    />
                  </Drawer.CloseTrigger>
                </Drawer.Content>
              </Drawer.Positioner>
            </Drawer.Root>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Header;
