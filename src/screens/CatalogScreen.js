/*************  ✨ Windsurf Command 🌟  *************/
import {
  Box,
  Stack,
  Heading,
  Text,
  Grid,
  Flex,
  Pagination,
  IconButton,
  ButtonGroup,
  Select,
  Portal,
} from "@chakra-ui/react";
import React, { useState } from "react";
import ProductCard from "../components/custom/ProductCard";
import { products } from "../data/products";

const CatalogScreen = () => {
  const filters = [
    {
      key: "productType",
      label: "Product Type",
      options: ["Air-dried meal", "Treats", "Starter Pack", "Supplements"],
    },
    {
      key: "healthGoals",
      label: "Health Goals",
      options: ["Gut Health", "Skin & Coat", "Hip & Joint", "Immunity"],
    },
    {
      key: "breedSize",
      label: "Breed Size",
      options: ["Small", "Medium", "Large"],
    },
    {
      key: "ageGroup",
      label: "Age Group",
      options: ["Puppy", "Adult", "Senior"],
    },
    {
      key: "flavour",
      label: "Flavour / Protein",
      options: ["Chicken", "Fish", "Beef", "Lamb"],
    },
  ];

  const sortBy = [
    "Popularity",
    "Price: Low to High",
    "Price: High to Low",
    "Newest first",
  ];

  const [selectedFilters, setSelectedFilters] = useState({});
  const [page, setPage] = useState(1);
  const pageSize = 9;

  const handleFilterChange = (key, selectedOptions) => {
    setPage(1); // reset to first page on filter change
    setSelectedFilters((prev) => ({
      ...prev,
      [key]: selectedOptions,
    }));
  };

  const applyFilters = (productList) => {
    return productList.filter((product) => {
      return Object.entries(selectedFilters).every(([filterKey, values]) => {
        if (!values || values.length === 0) return true;
        const productValue = product[filterKey];

        if (Array.isArray(productValue)) {
          return values.every((val) => productValue.includes(val));
        } else {
          return values.includes(productValue);
        }
      });
    });
  };

  const filteredProducts = applyFilters(products);

  const totalProducts = filteredProducts.length;
  const startRange = (page - 1) * pageSize;
  const endRange = startRange + pageSize;
  const visibleProducts = filteredProducts.slice(startRange, endRange);

  return (
    <>
      <Box
        bgColor="text.primary"
        color="text.ivory"
        w="full"
        borderBottomRadius="full"
        px={{ base: 2, md: 5 }}
        py={{ base: 16, md: 20 }}
        pt={{ base: 28, md: 32, lg: 32 }}
      >
        <Stack
          h="full"
          alignItems="center"
          textAlign="center"
          justifyContent="end"
          gap={{ base: 5, md: 10 }}
        >
          <Heading
            textTransform="uppercase"
            fontWeight="500"
            fontSize={{ base: "28px", md: "52px", lg: "90px" }}
            lineHeight="heading2"
          >
            Crafted for Wellness. Curated with Care.
          </Heading>
          <Text
            fontSize={{ base: "text8", md: "text1", lg: "h6" }}
            fontWeight="400"
            lineHeight="heading1"
            textAlign="center"
            w={{ base: "xs", md: "lg", lg: "xl" }}
          >
            Discover air-dried meals, healthy treats, and daily supplements for
            every dog
          </Text>
        </Stack>
      </Box>

      {/* PRODUCTS */}
      <Stack
        alignItems="center"
        w={"full"}
        gap={5}
        px={{ base: 2, md: 5 }}
        py={10}
      >
        {/* Filters */}
        <Flex justifyContent="space-between" w="full">
          <Flex gap={2}>
            {filters.map(({ key, label, options }) => (
              <Select.Root
                key={key}
                multiple
                size="xs"
                w="150px"
                onValueChange={(selectedOptions) =>
                  handleFilterChange(key, selectedOptions)
                }
              >
                <Select.HiddenSelect />
                <Select.Control>
                  <Select.Trigger borderRadius="xl">
                    <Select.ValueText
                      justifyContent="center"
                      fontSize="sm"
                      textTransform="uppercase"
                      placeholder={label}
                    />
                  </Select.Trigger>
                  <Select.IndicatorGroup>
                    <Select.Indicator />
                  </Select.IndicatorGroup>
                </Select.Control>
                <Portal>
                  <Select.Positioner>
                    <Select.Content
                      gap={1}
                      bgColor="background.default"
                      color="text.darkOrange"
                    >
                      {options.map((option) => (
                        <Select.Item
                          justifyContent="center"
                          fontSize="sm"
                          textTransform="uppercase"
                          border="1px solid"
                          borderColor="text.darkOrange"
                          borderRadius="xl"
                          _selected={{
                            bgColor: "text.darkOrange",
                            color: "text.ivory",
                          }}
                          _hover={{
                            bgColor: "text.darkOrange",
                            color: "text.ivory",
                          }}
                          item={option}
                          key={option}
                        >
                          {option}
                        </Select.Item>
                      ))}
                    </Select.Content>
                  </Select.Positioner>
                </Portal>
              </Select.Root>
            ))}
          </Flex>

          {/* Sort */}
          <Flex alignItems="center" gap={2}>
            Sort by:
            <Select.Root size="xs" w="200px" defaultValue={sortBy[0]}>
              <Select.HiddenSelect />
              <Select.Control>
                <Select.Trigger borderRadius="xl">
                  <Select.ValueText
                    textTransform="uppercase"
                    placeholder={sortBy[0]}
                  />
                </Select.Trigger>
                <Select.IndicatorGroup>
                  <Select.Indicator />
                </Select.IndicatorGroup>
              </Select.Control>
              <Portal>
                <Select.Positioner>
                  <Select.Content
                    gap={1}
                    bgColor="background.default"
                    color="text.darkOrange"
                  >
                    {sortBy.map((sort) => (
                      <Select.Item
                        justifyContent="center"
                        fontSize="sm"
                        textTransform="uppercase"
                        border="1px solid"
                        borderColor="text.darkOrange"
                        borderRadius="xl"
                        _selected={{
                          bgColor: "text.darkOrange",
                          color: "text.ivory",
                        }}
                        _hover={{
                          bgColor: "text.darkOrange",
                          color: "text.ivory",
                        }}
                        item={sort}
                        key={sort}
                      >
                        {sort}
                      </Select.Item>
                    ))}
                  </Select.Content>
                </Select.Positioner>
              </Portal>
            </Select.Root>
          </Flex>
        </Flex>

        {/* Selected Filters */}
        <Flex></Flex>

        {/* Product Grid */}
        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
          gap={{ base: 2, md: 5 }}
          px={{ base: 2, md: 5 }}
          py={10}
        >
          {visibleProducts.map((product) => (
            <ProductCard product={product} key={product.id} hideFooter />
          ))}
        </Grid>
        {/* Pagination */}
        <Pagination.Root
          pageSize={pageSize}
          count={totalProducts}
          page={page}
          onPageChange={(e) => setPage(e.page)}
        >
          <ButtonGroup variant="ghost" size="lg">
            <Pagination.Items
              color="text.primary"
              borderRadius="full"
              variant="ghost"
              _hover={{ bgColor: "text.lightGreen30" }}
              render={(page) => (
                <IconButton
                  key={page.value}
                  border={"1px solid"}
                  borderColor="text.primary"
                  color="text.primary"
                  _hover={{
                    color: "text.primary",
                    bgColor: "text.lightGreen30",
                  }}
                  borderRadius="full"
                  _selected={{ color: "text.ivory", bgColor: "text.primary" }}
                  onClick={() => {
                    window.scrollTo({ top: "0", behavior: "auto" });
                  }}
                >
                  {page.value}
                </IconButton>
              )}
            />
          </ButtonGroup>
        </Pagination.Root>
      </Stack>
    </>
  );
};

export default CatalogScreen;

/*******  167fe64a-392f-4f3a-b0be-c6f2febb03ae  *******/
