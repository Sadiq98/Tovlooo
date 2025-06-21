import { Button } from "@chakra-ui/react";
import React from "react";

const CustomButton = ({ children, onClick, ...props }) => {
  return (
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
  );
};

export default CustomButton;
