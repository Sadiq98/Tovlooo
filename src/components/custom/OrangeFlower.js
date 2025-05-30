import { Flex, Stack, Heading, List, Image } from "@chakra-ui/react";
import React from "react";
import { IoPaw } from "react-icons/io5";

const OrangeFlower = ({ ...props }) => {
  return (
    <>
      <Flex
        justifyContent="center"
        alignItems="center"
        bgImage="url('../assets/Flower_Orange.png')"
        bgSize="contain"
        bgRepeat="no-repeat"
        bgPosition="center"
        boxSize="350px"
        color="text.orange"
        {...props}
      >
        <Stack fontSize="xs" w="60%">
          <Heading fontSize="md" lineHeight="short" textAlign="center">
            Give your dog the gift of a happy, healthy future
          </Heading>
          <List.Root gap="2" variant="plain" align="center">
            <List.Item>
              <List.Indicator asChild>
                <IoPaw />
              </List.Indicator>
              Tomorrow’s energy, mood, and immunity begin with today’s bowl{" "}
            </List.Item>
            <List.Item>
              <List.Indicator asChild>
                <IoPaw />
              </List.Indicator>
              Choose a future where your dog thrives—not just survives{" "}
            </List.Item>
            <List.Item>
              <List.Indicator asChild>
                <IoPaw />
              </List.Indicator>
              Real food helps prevent joint issues, allergies, and dull coats{" "}
            </List.Item>
          </List.Root>
        </Stack>
        <Image
          src="../assets/Today.png"
          position="absolute"
          width="100px"
          top={-50}
          left={20}
        />
      </Flex>
    </>
  );
};

export default OrangeFlower;
