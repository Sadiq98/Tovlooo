import {
  Badge,
  Box,
  Button,
  Card,
  Flex,
  Heading,
  IconButton,
  Image,
  Stack,
  Text,
  Link,
} from "@chakra-ui/react";
import { TiShoppingCart } from "react-icons/ti";
import Rating from "./Rating";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const ProductCard = ({ product, hideFooter = false }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <Link
        as={RouterLink}
        to={`/catalog/${product.id}`}
        _focus={{ outline: "none" }}
        _hover={{ textDecoration: "none" }}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "auto" });
        }}
      >
        <Card.Root
          maxW="lg"
          w="full"
          overflow="hidden"
          bgColor="transparent"
          border="none"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Box
            borderRadius="xl"
            bgColor={hovered ? "text.orange" : "transparent"}
          >
            <Stack
              alignItems="center"
              bgColor="text.ivory"
              border="1px solid"
              borderColor="text.orange"
              borderRadius={{ base: "30px", md: "50px" }}
              gap={{ base: 5, md: 2 }}
              p={5}
            >
              <Flex justifyContent="space-between" w="full">
                <Flex gap={2}>
                  {product.tags?.map((tag, index) => (
                    <Badge
                      size="xs"
                      key={index}
                      bgColor="text.darkIvory"
                      borderRadius="full"
                      color="text.primary"
                      fontFamily="heading"
                      fontSize={{ base: "3xs", md: "text8" }}
                      px={{ base: 2, md: 3 }}
                    >
                      {tag}
                    </Badge>
                  ))}
                </Flex>
                <IconButton rounded="full" bgColor="black" color="white">
                  <TiShoppingCart />
                </IconButton>
              </Flex>
              <Image
                src={product.image}
                boxSize={{ base: "150px", md: "250px" }}
                objectFit="contain"
              />
              <Button
                display={{ base: "none", md: "block" }}
                visibility={hovered ? "visible" : "hidden"}
                size="xs"
                w="80%"
                color="text.ivory"
                bgColor="black"
                borderRadius="full"
                fontSize="text8"
                fontWeight="normal"
                px={10}
                py={0}
              >
                See inside the bag
              </Button>
            </Stack>
          </Box>
          <Card.Body gap="2" color="text.primary" alignItems="center">
            <Card.Title fontFamily="heading" fontSize="text1">
              <Flex
                gap={2}
                alignItems="center"
                fontSize={{ base: "sm", md: "text2" }}
              >
                <Image
                  src={product.icon}
                  alt={product.name}
                  display={{ base: "none", md: "block" }}
                  boxSize="22px"
                />
                {product.name}
              </Flex>
            </Card.Title>
            <Card.Description
              textAlign="center"
              color="text.primary"
              opacity={0.7}
              fontSize={{ base: "2xs", md: "text8" }}
              w="80%"
            >
              {product.description}
            </Card.Description>
            <Text
              w="full"
              py={1}
              textAlign={"center"}
              fontSize={{ base: "text8", md: "text1" }}
              bgColor={{ base: "text.primary", md: "transparent" }}
              color={{ base: "text.ivory", md: "text.primary" }}
              borderRadius="full"
            >
              {`${product.tags[0] ? product.tags[0] + " - " : ""}${
                product.price
              }₪`}
            </Text>
            <Rating value={product.rating} boxSize={5} />
          </Card.Body>
          {!hideFooter && (
            <Card.Footer
              gap="2"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              p={0}
              w="full"
            >
              <Flex
                justifyContent="space-between"
                w={{ base: "full", xl: "90%" }}
              >
                {product.ingredients.map((ingredient) => (
                  <Stack color="text.primary" opacity={0.7}>
                    <Heading
                      fontSize="h4"
                      fontWeight="normal"
                      lineHeight="heading1"
                    >
                      {ingredient.value}
                    </Heading>
                    <Text fontSize="text6" letterSpacing="default">
                      {ingredient.label}
                    </Text>
                  </Stack>
                ))}
              </Flex>
            </Card.Footer>
          )}
        </Card.Root>
      </Link>
    </>
  );
};

export default ProductCard;
