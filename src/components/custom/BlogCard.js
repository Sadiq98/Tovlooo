import { Box, Card, Image, Stack } from "@chakra-ui/react";
import React from "react";
import { OrangeButton } from "./CustomButton";

const BlogCard = (blog, isLast) => {
  return (
    <>
      <Box
        py={5}
        borderTop="1px solid"
        borderBottom={isLast ? "1px solid" : "none"}
        borderColor="text.lightGreen50"
      >
        <Card.Root
          display={"flex"}
          flexDirection={{ base: "column", md: "row" }}
          bgColor={"transparent"}
          border={"none"}
          color={"text.primary"}
          gap={5}
        >
          <Image
            src="../assets/about/Itay_with_dog.png"
            w={{ base: "100%", md: "50vw" }}
            h={{ base: "250px", md: "400px" }}
            borderRadius={"xl"}
          />
          <Stack
            justifyContent={"space-between"}
            w={{ base: "full", md: "md", lg: "xl" }}
            gap={5}
          >
            <Card.Body gap={2} p={0}>
              <Card.Title
                fontFamily={"heading"}
                fontSize={{ base: "text2", md: "h6", lg: "h5" }}
                lineHeight={"heading2"}
              >
                How one man’s passion for dogs sparked the creation of Tovlo –
                Israel’s trusted pet nutrition brand
              </Card.Title>
              <Card.Description
                fontFamily={"body"}
                fontSize={{ base: "text8", md: "text8", lg: "text6" }}
                color={"text.primary"}
              >
                Animal psychologists note that a lack of physical activity is a
                cause of stress in pets. Owners simply don't know how to spend
                quality time with their pets in a beneficial way. We offer
                several activities that promote fun and engaging time together.
              </Card.Description>
            </Card.Body>
            <Card.Footer p={0} w={"full"}>
              <OrangeButton px={{ base: 24, md: 16, lg: 5 }} width="full">
                Read The Article
              </OrangeButton>
            </Card.Footer>
          </Stack>
        </Card.Root>
      </Box>
    </>
  );
};

export default BlogCard;
