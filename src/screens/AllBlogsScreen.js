import { ButtonGroup, IconButton, Pagination, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import RichText from "../components/custom/RichText";
import BlogCard from "../components/custom/BlogCard";
import { blogs } from "../data/blogs";

const AllBlogsScreen = () => {
  const [page, setPage] = useState(1);
  const pageSize = 4;

  // Calculate the slice of blogs for the current page
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedBlogs = blogs.slice(startIndex, endIndex);

  return (
    <>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        py={20}
        pt={{ base: 28, md: 32, lg: 40 }}
      >
        <RichText
          text="BLOG"
          fontSize={{ base: "h3", md: "h1", lg: "115px" }}
        />
        <RichText
          fontWeight="normal"
          fontSize={{ base: "text1", md: "h5", lg: "h6" }}
          textTransform="none"
          textAlign="center"
          text="How one man’s passion for dogs sparked the creation of TOVLO – Israel’s trusted pet nutrition brand"
          width={{ base: "100%", md: "2xl" }}
        />
      </Stack>
      <Stack px={{ base: 2, md: 5, lg: 5 }} justifyContent={"center"} pb={40}>
        {paginatedBlogs.map((blog, index) => (
          <BlogCard
            key={blog.id}
            blog={blog}
            isLast={index === paginatedBlogs.length - 1 ? true : false}
          />
        ))}

        {/* Pagination */}
        <Stack w={"full"} justifyContent={"center"} alignItems={"center"}>
          <Pagination.Root
            pageSize={pageSize}
            count={blogs.length}
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
      </Stack>
    </>
  );
};

export default AllBlogsScreen;
