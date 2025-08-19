import { Accordion, Heading, Icon, Image, Theme } from "@chakra-ui/react";
import { transform } from "framer-motion";
import React from "react";
import { BsArrowUpCircle } from "react-icons/bs";

const TAccordian = ({ data, ...props }) => {
  return (
    <>
      <Accordion.Root
        collapsible
        variant={"enclosed"}
        borderX={"none"}
        borderRadius={"none"}
        borderColor={"text.lightGreen50"}
        {...props}
      >
        {data.map((data, index) => (
          <Accordion.Item
            key={index}
            value={index}
            borderColor={"text.lightGreen50"}
            _open={{ bg: "background.default" }}
          >
            <Accordion.ItemTrigger py={2}>
              <Image src={data.icon} boxSize={8} />
              <Heading flex={1}>{data.heading}</Heading>
              <Accordion.ItemIndicator>
                <Icon
                  boxSize={8}
                  bgColor={"background.lightGreen"}
                  borderRadius={"full"}
                >
                  <BsArrowUpCircle />
                </Icon>
              </Accordion.ItemIndicator>
            </Accordion.ItemTrigger>
            <Accordion.ItemContent px={{ base: 2, md: 8 }}>
              <Accordion.ItemBody>{data.content}</Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </>
  );
};

export default TAccordian;
