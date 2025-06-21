import { Heading, Box } from "@chakra-ui/react";

const RichText = ({
  text,
  width = { base: "full", md: "2xl" },
  fontSize = { base: "h6", md: "h4" },
  color = "text.primary",
  italicWords = [],
  ...props
}) => {
  const renderWithItalics = () => {
    const parts = text.split(/(\s+)/);
    return parts.map((word, index) => {
      const cleanWord = word.replace(/[^\w]/g, "");
      if (italicWords.includes(cleanWord)) {
        return (
          <Box as="span" key={index} fontStyle="italic">
            {word}
          </Box>
        );
      }
      return (
        <Box as="span" key={index}>
          {word}
        </Box>
      );
    });
  };

  return (
    <Heading
      color={color}
      fontSize={fontSize}
      lineHeight="heading1"
      letterSpacing="default"
      textAlign="center"
      textTransform="uppercase"
      width={width}
      {...props}
    >
      {renderWithItalics()}
    </Heading>
  );
};

export default RichText;
