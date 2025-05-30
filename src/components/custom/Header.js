import {
  Box,
  Button,
  useCheckboxGroup,
  Flex,
  Icon,
  Menu,
  Portal,
} from "@chakra-ui/react";
import { IoChevronDown } from "react-icons/io5";

import { FaGlobe, FaHandshake, FaUserAlt } from "react-icons/fa";
import { RiShoppingBasketFill } from "react-icons/ri";
import SingleLink from "./SingleLink";
import Logo from "../../data/Logo";
import { languages } from "../../data/language";

const Header = () => {
  const group = useCheckboxGroup({ defaultValue: "English" });
  const selectedLanguage = group.value;

  return (
    <>
      <Flex
        as="header"
        position="fixed"
        top="0"
        p={5}
        zIndex="10"
        w="full"
        justifyContent="center"
      >
        <Flex
          bg="background.default"
          w="full"
          justify="space-between"
          align="center"
          py={3}
          px={5}
          borderRadius="lg"
          border="2px solid"
          borderColor="text.primary"
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
              bg="text.primary"
              color="white"
              borderRadius="md"
              _hover={{ bg: "#046B57" }}
            >
              Get a custom plugin
            </Button>

            <Menu.Root>
              <Menu.Trigger asChild>
                <Button variant="ghost" color="text.primary" size="sm">
                  <FaGlobe /> {selectedLanguage || "Select Language"}{" "}
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

            <Icon as={FaHandshake} color="text.primary" boxSize={8} />
            <Icon as={FaUserAlt} color="text.primary" boxSize={6} />
            <Icon as={RiShoppingBasketFill} color="text.primary" boxSize={8} />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Header;
