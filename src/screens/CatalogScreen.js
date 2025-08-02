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
  const [selectedSort, setSelectedSort] = useState(["Popularity"]);
  const [page, setPage] = useState(1);
  const pageSize = 9;

  const handleFilterChange = (key, selectedOptions) => {
    setPage(1);
    setSelectedFilters((prev) => ({
      ...prev,
      [key]: Array.isArray(selectedOptions)
        ? selectedOptions
        : [selectedOptions],
    }));
  };

  // Filter products
  const filterProducts = (productList, filters) => {
    return productList.filter((product) => {
      for (const [key, selectedOptions] of Object.entries(filters)) {
        if (selectedOptions && selectedOptions.length > 0) {
          const productValue = product[key];
          if (Array.isArray(productValue)) {
            if (!productValue.some((val) => selectedOptions.includes(val))) {
              return false;
            }
          } else {
            if (!selectedOptions.includes(productValue)) {
              return false;
            }
          }
        }
      }
      return true;
    });
  };

  // Sort products
  const sortProducts = (productList) => {
    const sortValue = selectedSort[0]; // Get the selected value from the array

    switch (sortValue) {
      case "Price: Low to High":
        return productList.sort((a, b) => a.price - b.price);
      case "Price: High to Low":
        return productList.sort((a, b) => b.price - a.price);
      case "Newest first":
        return productList.sort(
          (a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0)
        );
      case "Popularity":
      default:
        return productList.sort((a, b) => b.rating - a.rating);
    }
  };

  const filtered = filterProducts(products, selectedFilters);
  const sorted = sortProducts(filtered);
  const totalProducts = sorted.length;
  const startRange = (page - 1) * pageSize;
  const endRange = startRange + pageSize;
  const visibleProducts = sorted.slice(startRange, endRange);

  console.log(selectedSort);
  console.log(selectedFilters);

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
        {/* Filters & Sort */}
        <Flex justifyContent="space-between" w="full">
          <Flex gap={2}>
            {filters.map(({ key, label, options }) => (
              <Select.Root
                key={key}
                multiple
                size="xs"
                w="150px"
                value={selectedFilters[key] || []}
                onValueChange={(details) => {
                  handleFilterChange(key, details.value);
                }}
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
            <Select.Root
              size="xs"
              w="200px"
              onValueChange={({ value }) => {
                setSelectedSort(value);
              }}
              value={selectedSort}
            >
              <Select.HiddenSelect />
              <Select.Control>
                <Select.Trigger borderRadius="xl">
                  <Select.ValueText
                    textTransform="uppercase"
                    placeholder={selectedSort}
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
                        item={sort}
                        key={sort}
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

        {/* Product Grid */}
        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
          gap={{ base: 2, md: 5 }}
          px={{ base: 2, md: 5 }}
          py={10}
          w={"full"}
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
