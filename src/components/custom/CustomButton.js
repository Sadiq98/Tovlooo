import { Button, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export const GreenButton = ({ children, onClick, url, ...props }) => {
  return (
    <Link
      as={RouterLink}
      to={url}
      _focus={{ outline: "none" }}
      _hover={{ textDecoration: "none" }}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "auto" });
      }}
    >
      <Button
        onClick={onClick}
        position="relative"
        fontSize={{
          base: "buttonSecondaryOval",
          md: "buttonPrimary",
          lg: "buttonMenuItem",
        }}
        size="5xl"
        width="fit-content"
        borderRadius="8px"
        px={{ base: 20, md: 40 }}
        py={5}
        fontWeight="500"
        lineHeight="button"
        textAlign="center"
        verticalAlign="middle"
        bgColor="text.primary"
        color="text.ivory"
        _hover={{
          bgColor: "text.darkGreen1",
          "&::after": {
            borderColor: "text.darkGreen1",
            transform: "translate(7px, 7px)",
          },
        }}
        _active={{
          "&::after": {
            transform: "translate(2px, 2px)",
          },
        }}
        _after={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: "2px solid #017D65",
          borderRadius: "8px",
          transform: "translate(10px, 10px)",
          transition: "transform 0.2s ease-out",
        }}
        {...props}
      >
        {children}
      </Button>
    </Link>
  );
};

export const OrangeButton = ({ children, onClick, url, ...props }) => {
  return (
    <Link
      as={RouterLink}
      to={url}
      _focus={{ outline: "none" }}
      _hover={{ textDecoration: "none" }}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "auto" });
      }}
      width="full"
    >
      <Button
        onClick={onClick}
        position="relative"
        fontSize={{
          base: "buttonSecondaryOval",
          md: "buttonPrimary",
          lg: "20px",
        }}
        size="5xl"
        width="fit-content"
        px={{ base: 20, lg: 5 }}
        py={3}
        fontWeight="500"
        lineHeight="button"
        textAlign="center"
        verticalAlign="middle"
        textTransform="uppercase"
        bgColor="text.orange"
        color="text.ivory"
        _hover={{
          bgColor: "text.darkOrange",
        }}
        {...props}
      >
        {children}
      </Button>
    </Link>
  );
};
