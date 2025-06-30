import {
  Heading,
  Image,
  Stack,
  Text,
  Timeline,
  Separator,
} from "@chakra-ui/react";

const timelineSteps = [
  {
    heading: "Sourcing fresh ingredients",
    text: "We start with the source - fresh farm ingredients",
    image: "../assets/timeline1.png",
  },
  {
    heading: "Gentle air-drying",
    text: "We gently air-dry our food, locking in nutrient and natural flavours",
    image: "../assets/timeline2.png",
  },
  {
    heading: "Careful quality checking",
    text: "Every batch is checked, tested, and improved by experts",
    image: "../assets/timeline3.png",
  },
  {
    heading: "Delivered fresh to you",
    text: "Freshly packed and delivered to your door, delighting your pets",
    image: "../assets/timeline4.png",
  },
];

const TimelineData = ({ heading, text }) => (
  <Stack gap={5} width={{ base: "5xs", md: "xs", lg: "sm" }}>
    <Heading
      fontSize={{ base: "text6", md: "h5", lg: "h4" }}
      lineHeight="heading2"
    >
      {heading}
    </Heading>
    <Text
      fontSize={{ base: "text8", md: "text1", lg: "text1" }}
      fontWeight="normal"
      lineHeight="text1"
    >
      {text}
    </Text>
    <Separator size="md" borderColor="text.primary" />
  </Stack>
);

const CustomTimeline = () => {
  return (
    <Timeline.Root size="xl" width="full" alignItems="center">
      {timelineSteps.map((step, index) => {
        const isEven = index % 2 === 0;
        const isLast = index === timelineSteps.length - 1;

        return (
          <Timeline.Item key={index} alignItems="center">
            {isEven ? (
              <>
                <Timeline.Content>
                  <Timeline.Title>
                    <TimelineData heading={step.heading} text={step.text} />
                  </Timeline.Title>
                </Timeline.Content>
                <Timeline.Connector px={{ base: 2, md: 5 }}>
                  <Timeline.Separator
                    borderColor="text.primary"
                    display={isLast ? "block" : undefined}
                  />
                </Timeline.Connector>
                <Timeline.Content>
                  <Timeline.Title>
                    <Image
                      src={step.image}
                      boxSize={{ base: "200px", md: "400px" }}
                      objectFit="contain"
                      alt={step.heading}
                    />
                  </Timeline.Title>
                </Timeline.Content>
              </>
            ) : (
              <>
                <Timeline.Content>
                  <Timeline.Title>
                    <Image
                      src={step.image}
                      boxSize={{ base: "200px", md: "400px" }}
                      objectFit="contain"
                      alt={step.heading}
                    />
                  </Timeline.Title>
                </Timeline.Content>
                <Timeline.Connector px={{ base: 2, md: 5 }}>
                  <Timeline.Separator
                    borderColor="text.primary"
                    display={isLast ? "block" : undefined}
                  />
                </Timeline.Connector>
                <Timeline.Content>
                  <Timeline.Title>
                    <TimelineData heading={step.heading} text={step.text} />
                  </Timeline.Title>
                </Timeline.Content>
              </>
            )}
          </Timeline.Item>
        );
      })}
    </Timeline.Root>
  );
};

export default CustomTimeline;
