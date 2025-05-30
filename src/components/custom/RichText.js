import { Heading, Box } from "@chakra-ui/react";

const RichText = ({
  text,
  width = "xl",
  fontSize = "h4",
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
      color="text.primary"
      fontSize={fontSize}
      lineHeight="heading2"
      letterSpacing="default"
      textAlign="center"
      width={width}
      {...props}
    >
      {renderWithItalics()}
    </Heading>
  );
};

export default RichText;
