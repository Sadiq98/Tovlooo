import { Grid, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import RichText from "../components/custom/RichText";

const IngredientScreen = () => {
  return (
    <>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
        justifyContent={"center"}
        alignItems={"center"}
        pt={{ base: 28, md: 32, lg: 0 }}
      >
        <Stack alignItems={"center"} justifyContent={"center"} gap={5}>
          <RichText
            fontWeight="500"
            text="Every Bowl Begins With Nature"
            width={{ base: "2xs", md: "md", lg: "2xl" }}
          />
          <Heading
            textAlign={"center"}
            fontWeight="600"
            lineHeight={"heading1"}
            fontSize={{ base: "h6", md: "h6", lg: "h5" }}
          >
            Real Ingredients. Real Nutrition. Real Love.
          </Heading>
          <Text w={{ base: "80%", md: "40%" }} textAlign={"center"}>
            We don’t cut corners. Every ingredient in your dog’s bowl has a
            purpose — and a story.
          </Text>
        </Stack>
        <Image src="../assets/ingredients/banner.png" w={"full"} h={"full"} />
      </Grid>
    </>
  );
};

export default IngredientScreen;
