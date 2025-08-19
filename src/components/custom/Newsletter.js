import { lazy } from "react";
import { Grid, Input, InputGroup, Stack, Text } from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";

import { GreenButton } from "./CustomButton";

const RichText = lazy(() => import("./RichText"));

const Newsletter = () => {
  return (
    <>
      <Grid
        justifyContent={"center"}
        alignItems={"center"}
        gap={5}
        py={20}
        px={{ base: 2, md: 5, lg: 5 }}
        templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
        background=" linear-gradient(180deg, #FAFCEB -6.17%, #D5E9D7 48.37%, #FAFCEB 103.97%);"
        justifyItems={"center"}
      >
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          gap={5}
          textAlign={"center"}
        >
          <RichText
            text="Let’s put your dog’s health first with food that’s as wholesome as your love"
            textTransform={"none"}
            fontSize={{ base: "h6", md: "h5", lg: "h5" }}
          />
          <Text
            w={"60%"}
            fontSize={{ base: "text8", md: "text8", lg: "text6" }}
          >
            Join our pet-loving community for wellness tips, surprises & more
          </Text>
        </Stack>
        <Stack gap={5}>
          <InputGroup
            flex="1"
            endElement={<BsArrowUpRight size={20} color={"text.primary"} />}
          >
            <Input
              size={"xl"}
              color={"text.primary"}
              borderColor={"text.primary"}
              border={"2px solid"}
              borderRadius={"xl"}
              placeholder="Email address"
            />
          </InputGroup>
          <GreenButton w={{ base: "full", md: "initial" }}>Submit</GreenButton>
        </Stack>
      </Grid>
    </>
  );
};

export default Newsletter;
