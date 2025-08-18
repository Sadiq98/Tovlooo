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
  Drawer,
  Button,
  CloseButton,
  Icon,
  Image,
} from "@chakra-ui/react";
import React, { useState, lazy } from "react";
import { products } from "../data/products";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { GiSettingsKnobs } from "react-icons/gi";
import { GreenButton } from "../components/custom/CustomButton";

const ProductCard = lazy(() => import("../components/custom/ProductCard"));
const RichText = lazy(() => import("../components/custom/RichText"));

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

  const iconData = [
    {
      icon: "../assets/Icons/Dog.svg",
      label: "Supports skin & coat",
    },
    {
      icon: "../assets/Icons/Brain.svg",
      label: "Boosts cognitive health",
    },
    {
      icon: "../assets/Icons/Muscle.svg",
      label: "Builds lean muscles",
    },
    {
      icon: "../assets/Icons/Bone.svg",
      label: "Improves joint strength",
    },
    {
      icon: "../assets/Icons/Meat.svg",
      label: "High real-meat content",
    },
    {
      icon: "../assets/Icons/No.svg",
      label: "No harmful chemicals",
    },
  ];

  const [open, setOpen] = useState(false);

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
    const sortValue = selectedSort[0];

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
        <Flex
          justifyContent="space-between"
          w="full"
          direction={{ base: "row-reverse", lg: "row" }}
        >
          {/* Desktop Filters */}
          <Flex gap={2} display={{ base: "none", lg: "flex" }}>
            {filters.map(({ key, label, options }) => (
              <Select.Root
                key={key}
                multiple
                size="xs"
                w="150px"
                value={selectedFilters[key] || []}
                onValueChange={(details) => {
                  handleFilterChange(key, details.value);
                  setPage(1);
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

          {/* Drawer Filters  */}
          <Flex display={{ base: "flex", lg: "none" }}>
            <Drawer.Root size="md">
              <Drawer.Trigger asChild>
                <Button color="text.primary" variant="plain">
                  Filters <GiSettingsKnobs transform="rotate(90)" />
                </Button>
              </Drawer.Trigger>
              <Drawer.Positioner>
                <Drawer.Content bgColor="background.default">
                  <Drawer.Body mt={28}>
                    <Stack justifyContent="space-between" h="full"></Stack>
                  </Drawer.Body>
                  <Drawer.CloseTrigger asChild>
                    <CloseButton
                      color="text.primary"
                      _hover={{ bgColor: "transparent" }}
                      size="2xl"
                    />
                  </Drawer.CloseTrigger>
                </Drawer.Content>
              </Drawer.Positioner>
            </Drawer.Root>
          </Flex>

          {/* Sort */}
          <Flex alignItems="center" gap={2}>
            Sort by:
            <Select.Root
              size="xs"
              w={{ base: "120px", lg: "200px" }}
              onValueChange={({ value }) => {
                setSelectedSort(value);
                setPage(1);
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
                        fontSize={{ base: "sm", lg: "sm" }}
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

        {Object.entries(selectedFilters).some(
          ([_, values]) => values.length > 0
        ) && (
          <Flex
            wrap="wrap"
            gap={2}
            w="full"
            px={{ base: 2, md: 5 }}
            display={{ base: "none", md: "flex" }}
          >
            {Object.entries(selectedFilters).map(([key, values]) =>
              values.map((value) => (
                <Flex
                  key={`${key}-${value}`}
                  alignItems="center"
                  py={1}
                  fontSize={{ base: "xs", md: "sm", lg: "md" }}
                >
                  <Text textTransform="uppercase">{value}</Text>
                  <CloseButton
                    variant="plain"
                    color={"text.primary"}
                    size={{ base: "xs", md: "sm", lg: "md" }}
                    onClick={() => {
                      const updated = { ...selectedFilters };
                      updated[key] = updated[key].filter((v) => v !== value);
                      if (updated[key].length === 0) delete updated[key];
                      setSelectedFilters(updated);
                      setPage(1);
                    }}
                  />
                </Flex>
              ))
            )}
          </Flex>
        )}

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

      {/* Icons */}
      <Box w="full" px={{ base: 2, md: 5 }} py={10}>
        <Swiper
          loop={true}
          breakpoints={{
            0: {
              centeredSlides: true,
              slidesPerView: 2.8,
              spaceBetween: 10,
            },
            640: {
              centeredSlides: true,
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
            1920: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
          className="testimonialSwiper"
        >
          {iconData.map(({ icon, label }, index) => (
            <SwiperSlide key={index}>
              <Stack alignItems={"center"} justifyContent={"center"} gap={5}>
                <Image src={icon} boxSize="60px" alt={label} w={"auto"} />
                <Heading
                  textAlign={"center"}
                  lineHeight={"heading2"}
                  fontWeight="500"
                  fontSize={{ base: "text6", md: "h6", lg: "h5" }}
                >
                  {label}
                </Heading>
              </Stack>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {/* CTA */}
      <Stack
        px={{ base: 2, md: 5 }}
        py={5}
        alignItems="center"
        gap={8}
        background=" linear-gradient(180deg, #FAFCEB -6.17%, #D5E9D7 48.37%, #FAFCEB 103.97%);"
      >
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Stack justifyContent={"center"} alignItems={"center"} gap={5}>
            <RichText
              text="Not sure where to begin?"
              width={"full"}
              fontSize={{ base: "h6", md: "h6", lg: "h4" }}
            />
            <Heading
              fontSize={{ base: "text6", md: "h6", lg: "h5" }}
              textAlign={"center"}
              lineHeight={"heading2"}
              w={{ base: "full", md: "full", lg: "80%" }}
            >
              Start with our bestseller Starter Pack – curated selection loved
              by first-timers
            </Heading>
            <GreenButton px={{ base: 20, lg: 40 }}>
              Explore the Starter Pack
            </GreenButton>
          </Stack>
          <Image src="../assets/starter_box.png" w={"full"} />
        </Grid>
      </Stack>
    </>
  );
};

export default CatalogScreen;
