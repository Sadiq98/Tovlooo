import { Icon, Image, Stack, Table } from "@chakra-ui/react";

import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegThumbsDown } from "react-icons/fa";
import { SlCheck } from "react-icons/sl";

import Logo from "../../data/Logo";

const ComparisonTable = () => {
  const tableData = [
    {
      title: "All-natural ingredients",
      frozen: true,
      dry: false,
    },
    {
      title: "No added preservatives",
      frozen: true,
      dry: false,
    },
    {
      title: "No synthetic chemicals",
      frozen: true,
      dry: false,
    },
    {
      title: "Balanced and complete",
      frozen: false,
      dry: false,
    },
    {
      title: "No fridge needed",
      frozen: false,
      dry: false,
    },
    {
      title: "Easy to serve",
      frozen: false,
      dry: true,
    },
    {
      title: "Travel-friendly",
      frozen: false,
      dry: true,
    },
  ];
  return (
    <>
      <Table.Root fontFamily="heading" fontSize={{ base: "text8", md: "h6" }}>
        <Table.Header>
          <Table.Row bgColor="background.default">
            <Table.ColumnHeader border="none"></Table.ColumnHeader>
            <Table.ColumnHeader
              fontSize={{ base: "text6", md: "h5" }}
              border="none"
              py={10}
              textAlign="center"
              color="text.primary"
            >
              <Stack alignItems="center">
                <Image
                  src="/assets/table_frozen.png"
                  boxSize={{ base: "50px", md: "100px" }}
                />
                Frozen Food
              </Stack>
            </Table.ColumnHeader>
            <Table.ColumnHeader
              fontSize={{ base: "text6", md: "h5" }}
              border="none"
              borderTopRadius="4xl"
              py={10}
              textAlign="center"
              bgColor="background.green"
              color="text.ivory"
            >
              <Stack alignItems="center">
                <Image
                  src="/assets/table_frozen.png"
                  boxSize={{ base: "50px", md: "100px" }}
                />
                <Logo display={{ base: "none", md: "block" }} />
                <Logo width="80" height="20" />
                Air-dried Food
              </Stack>
            </Table.ColumnHeader>
            <Table.ColumnHeader
              fontSize={{ base: "text6", md: "h5" }}
              border="none"
              py={10}
              textAlign="center"
              color="text.primary"
            >
              <Stack alignItems="center">
                <Image
                  src="/assets/table_dry.png"
                  boxSize={{ base: "50px", md: "100px" }}
                />
                Dry Food
              </Stack>
            </Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {tableData.map((item, index) => (
            <Table.Row
              bgColor={
                index % 2 === 0 ? "background.default" : "background.lightGreen"
              }
              color="text.primary"
            >
              {/* Title */}
              <Table.Cell
                py={{ base: 2, md: 10 }}
                border="none"
                fontWeight="500"
                borderLeftRadius={{ base: "3xl", md: "4xl" }}
              >
                {item.title}
              </Table.Cell>

              {/* Frozen Food */}
              <Table.Cell
                py={{ base: 2, md: 10 }}
                border="none"
                textAlign="center"
              >
                <Icon
                  as={item.frozen ? FaRegThumbsUp : FaRegThumbsDown}
                  color={item.frozen ? "text.primary" : "text.orange"}
                  boxSize={{ base: 6, md: 10 }}
                />
              </Table.Cell>

              {/* Tovlo */}
              <Table.Cell
                py={{ base: 2, md: 10 }}
                border="1px solid"
                borderBottomRadius={
                  index === tableData.length - 1 ? "40px" : ""
                }
                bgColor="background.green"
                color="text.ivory"
                textAlign="center"
              >
                <Icon
                  as={SlCheck}
                  boxSize={{ base: 6, md: 10 }}
                  color="text.ivory"
                />
              </Table.Cell>

              {/* Dry Food */}
              <Table.Cell
                py={{ base: 5, md: 10 }}
                border="none"
                textAlign="center"
                borderRightRadius={{ base: "3xl", md: "4xl" }}
              >
                <Icon
                  as={item.dry ? FaRegThumbsUp : FaRegThumbsDown}
                  color={item.frozen ? "text.primary" : "text.orange"}
                  boxSize={{ base: 6, md: 10 }}
                />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </>
  );
};

export default ComparisonTable;
