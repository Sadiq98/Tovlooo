import { Button, useStyleConfig } from "@chakra-ui/react";
import React from "react";

const CustomButton = ({ children, onClick, ...props }) => {
  return (
    <Button
      onClick={onClick}
      size="xl"
      width="fit-content"
      borderRadius="8px"
      px={10}
      py={5}
      fontWeight="500"
      lineHeight="button"
      textAlign="center"
      verticalAlign="middle"
      bg="text.primary"
      color="white"
      boxShadow="10px 10px 0 0 #fff, 10px 10px 0 2px teal"
      _hover={{
        boxShadow: "7px 7px 0 0 #fff, 7px 7px 0 2px teal",
      }}
      _active={{
        boxShadow: "5px 5px 0 0 #fff, 5px 5px 0 2px teal",
        transform: "translate(3px, 3px)",
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
