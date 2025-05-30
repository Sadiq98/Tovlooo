import { Flex, Stack, Heading, List, Image } from "@chakra-ui/react";
import { IoPaw } from "react-icons/io5";
const GreenFlower = ({ ...props }) => {
  return (
    <>
      <Flex
        justifyContent="center"
        alignItems="center"
        bgImage="url('../assets/Flower_Green.png')"
        bgSize="contain"
        bgRepeat="no-repeat"
        bgPosition="center"
        boxSize="350px"
        color="text.primary"
        {...props}
      >
        <Stack fontSize="xs" w="60%">
          <Heading fontSize="md" lineHeight="short" textAlign="center">
            Don't just feed your dog, nourish their potential{" "}
          </Heading>
          <List.Root gap="2" variant="plain" align="center">
            <List.Item>
              <List.Indicator asChild>
                <IoPaw />
              </List.Indicator>
              Every bite your dog takes today builds the foundation of their
              health{" "}
            </List.Item>
            <List.Item>
              <List.Indicator asChild>
                <IoPaw />
              </List.Indicator>
              Heavily processed meals can silently cause long-term issues{" "}
            </List.Item>
            <List.Item>
              <List.Indicator asChild>
                <IoPaw />
              </List.Indicator>
              It’s not just food—it’s a lifelong decision{" "}
            </List.Item>
          </List.Root>
        </Stack>
        <Image
          src="../assets/Tomorrow.png"
          position="absolute"
          width="100px"
          top={5}
          right={0}
        />
      </Flex>
    </>
  );
};

export default GreenFlower;
