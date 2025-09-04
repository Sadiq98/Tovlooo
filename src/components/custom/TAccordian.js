import { Accordion, Heading, Icon, Image, Theme } from "@chakra-ui/react";
import { transform } from "framer-motion";
import React from "react";
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";

export const TAccordian = ({ data, ...props }) => {
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

export const TAccordian2 = ({ heading, content, index, ...props }) => {
  return (
    <>
      <Accordion.Root
        collapsible
        variant={"enclosed"}
        border={"none"}
        borderRadius={"4xl"}
        bgColor={"custom.lightGreen"}
        {...props}
      >
        <Accordion.Item
          key={index}
          value={index}
          color={"text.primary"}
          borderColor={"text.lightGreen50"}
          _open={{ bg: "background.green", color: "text.ivory" }}
        >
          <Accordion.ItemTrigger py={2}>
            <Heading flex={1} textTransform={"uppercase"} fontWeight={"500"}>
              {index + 1}. {heading}
            </Heading>
            <Accordion.ItemIndicator
              _open={{
                bg: "text.ivory",
                color: "text.primary",
              }}
              borderRadius={"full"}
            >
              <Icon boxSize={8} bgColor={"transparent"}>
                <BsArrowDownCircle />
              </Icon>
            </Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <Accordion.ItemBody>{content}</Accordion.ItemBody>
          </Accordion.ItemContent>
        </Accordion.Item>
      </Accordion.Root>
    </>
  );
};
