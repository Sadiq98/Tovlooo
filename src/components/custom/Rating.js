import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";
import { PiStarFill, PiStarBold, PiStarHalfFill } from "react-icons/pi";

const Rating = ({
  value,
  text,
  color = "text.orange",
  gap = "2",
  ...props
}) => {
  return (
    <Flex align="flex-start">
      <Flex gap={gap}>
        <Icon
          color={color}
          as={
            value >= 1 ? PiStarFill : value >= 0.5 ? PiStarHalfFill : PiStarBold
          }
          boxSize={8}
          {...props}
        />
        <Icon
          color={color}
          as={
            value >= 2 ? PiStarFill : value >= 1.5 ? PiStarHalfFill : PiStarBold
          }
          boxSize={8}
          {...props}
        />
        <Icon
          color={color}
          as={
            value >= 3 ? PiStarFill : value >= 2.5 ? PiStarHalfFill : PiStarBold
          }
          boxSize={8}
          {...props}
        />
        <Icon
          color={color}
          as={
            value >= 4 ? PiStarFill : value >= 3.5 ? PiStarHalfFill : PiStarBold
          }
          boxSize={8}
          {...props}
        />
        <Icon
          color={color}
          as={
            value >= 5 ? PiStarFill : value >= 4.5 ? PiStarHalfFill : PiStarBold
          }
          boxSize={8}
          {...props}
        />
      </Flex>
      <Text mt="-2px">{text}</Text>
    </Flex>
  );
};

export default Rating;
