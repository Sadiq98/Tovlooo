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
import { RiShoppingBasketFill } from "react-icons/ri";
import Rating from "./Rating";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <Link
        as={RouterLink}
        to={`/product/${product.id}`}
        _focus={{ outline: "none" }}
        _hover={{ textDecoration: "none" }}
      >
        <Card.Root
          maxW="md"
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
              borderRadius="50px"
              gap={2}
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
                      fontSize="text8"
                      px={3}
                    >
                      {tag}
                    </Badge>
                  ))}
                </Flex>
                <IconButton rounded="full" bgColor="black" color="white">
                  <RiShoppingBasketFill />
                </IconButton>
              </Flex>
              <Image
                src={product.image}
                boxSize={{ base: "250px", md: "250px" }}
                objectFit="contain"
              />
              <Button
                visibility={hovered ? "visible" : "hidden"}
                size="xs"
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
              <Flex gap={2} alignItems="center">
                <Image src={product.icon} boxSize="22px" />
                {product.name}
              </Flex>
            </Card.Title>
            <Card.Description
              textAlign="center"
              color="text.primary"
              opacity={0.7}
              fontSize="text8"
              w="80%"
            >
              {product.description}
            </Card.Description>
            <Text fontSize="text6">{product.price}₪</Text>
            <Rating value={product.rating} boxSize={5} />
          </Card.Body>
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
        </Card.Root>
      </Link>
    </>
  );
};

export default ProductCard;
