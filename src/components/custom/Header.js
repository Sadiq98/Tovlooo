import {
  Box,
  Button,
  useCheckboxGroup,
  Flex,
  Icon,
  Menu,
  Portal,
  Link,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

import { IoChevronDown } from "react-icons/io5";
import { FaGlobe, FaHandshake, FaUserAlt } from "react-icons/fa";
import { RiShoppingBasketFill } from "react-icons/ri";
import { languages } from "../../data/language";
import { lazy } from "react";

const SingleLink = lazy(() => import("./SingleLink"));
const Logo = lazy(() => import("../../data/Logo"));

const Header = () => {
  const group = useCheckboxGroup({ defaultValue: "English" });
  const selectedLanguage = group.value;

  return (
    <>
      <Flex
        as="header"
        position="absolute"
        top="0"
        p={5}
        zIndex="10"
        w="full"
        justifyContent="center"
      >
        <Flex
          bg="transparent"
          w="full"
          justify="space-between"
          align="center"
          py={3}
          px={5}
          borderRadius="lg"
          border="2px solid"
          borderColor="text.ivory"
        >
          {/* Left Nav */}
          <Flex align="center" gap={4}>
            <SingleLink label="About us" />
            <SingleLink label="Catalog" />
            <SingleLink label="Ingredients" />
            <SingleLink label="Blog" />
            <SingleLink label="Contact us" />
          </Flex>

          {/* Center Logo */}
          <Logo />

          {/* Right Side */}
          <Flex align="center" gap={5}>
            <Button
              size="xs"
              bg="text.ivory"
              color="text.primary"
              borderRadius="md"
              _hover={{ bg: "text.darkIvory" }}
            >
              Get a custom plugin
            </Button>

            <Menu.Root>
              <Menu.Trigger asChild>
                <Button
                  variant="plain "
                  _hover={{ color: "text.darkIvory" }}
                  color="text.ivory"
                  size="sm"
                >
                  <FaGlobe /> {selectedLanguage || "Select Language"}{" "}
                  <IoChevronDown />
                </Button>
              </Menu.Trigger>
              <Portal>
                <Menu.Positioner>
                  <Menu.Content>
                    <Menu.ItemGroup color="text.ivory">
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
                color="text.ivory"
                _hover={{ color: "text.darkIvory" }}
                boxSize={8}
              />
            </Link>
            <Icon
              as={FaUserAlt}
              color="text.ivory"
              _hover={{ color: "text.darkIvory" }}
              boxSize={6}
            />
            <Icon
              as={RiShoppingBasketFill}
              color="text.ivory"
              _hover={{ color: "text.darkIvory" }}
              boxSize={8}
            />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Header;
