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

// headingProps / bodyProps / triggerProps / iconSize are optional overrides
// so screens can match per-breakpoint Figma typography without duplicating
// the component. Defaults keep the original look.
export const TAccordian2 = ({
  heading,
  content,
  index,
  headingProps,
  bodyProps,
  triggerProps,
  iconSize = 8,
  ...props
}) => {
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
          <Accordion.ItemTrigger py={2} {...triggerProps}>
            <Heading
              flex={1}
              textTransform={"uppercase"}
              fontWeight={"500"}
              fontSize={{ base: "15px", md: "text6", lg: "text1" }}
              {...headingProps}
            >
              {index + 1}. {heading}
            </Heading>
            <Accordion.ItemIndicator
              _open={{
                bg: "text.ivory",
                color: "text.primary",
              }}
              borderRadius={"full"}
            >
              <Icon boxSize={iconSize} bgColor={"transparent"}>
                <BsArrowDownCircle />
              </Icon>
            </Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <Accordion.ItemBody
              fontSize={{ base: "text8", md: "text8", lg: "text6" }}
              {...bodyProps}
            >
              {content}
            </Accordion.ItemBody>
          </Accordion.ItemContent>
        </Accordion.Item>
      </Accordion.Root>
    </>
  );
};
