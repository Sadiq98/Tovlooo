import { Flex, Text, Icon, Box, Heading } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";

const CustomMarquee = ({ data }) => {
  return (
    <Box py={5} bg="background.lightGreen">
      <Marquee autoFill>
        {data.map(({ icon: IconComponent, text }, index) => (
          <Flex key={index} alignItems="center" py={1} px={5} gap={3}>
            <Icon color="text.primary" as={IconComponent} boxSize={10} />
            <Heading
              color="text.primary"
              fontSize="text4"
              fontWeight="semibold"
            >
              {text}
            </Heading>
          </Flex>
        ))}
      </Marquee>
    </Box>
  );
};

export default CustomMarquee;
