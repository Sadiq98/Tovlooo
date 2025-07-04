import { Flex, Image, Stack, Table } from "@chakra-ui/react";

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
              borderTopRadius={{ base: "3xl", md: "4xl" }}
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
                <Flex justify="center">
                  <Image
                    src={
                      item.frozen
                        ? "../assets/Icons/thumbs-up.svg"
                        : "../assets/Icons/thumbs-down.svg"
                    }
                    boxSize={{ base: 6, md: 10 }}
                  />
                </Flex>
              </Table.Cell>

              {/* Tovlo */}
              <Table.Cell
                py={{ base: 2, md: 10 }}
                border="1px solid"
                borderBottomRadius={
                  index === tableData.length - 1
                    ? { base: "3xl", md: "4xl" }
                    : undefined
                }
                bgColor="background.green"
                color="text.ivory"
                textAlign="center"
              >
                <Flex justify="center">
                  <Image
                    src={"../assets/Icons/check.svg"}
                    boxSize={{ base: 6, md: 10 }}
                  />
                </Flex>
              </Table.Cell>

              {/* Dry Food */}
              <Table.Cell
                py={{ base: 5, md: 10 }}
                border="none"
                textAlign="center"
                borderRightRadius={{ base: "3xl", md: "4xl" }}
              >
                <Flex justify="center">
                  <Image
                    src={
                      item.frozen
                        ? "../assets/Icons/thumbs-up.svg"
                        : "../assets/Icons/thumbs-down.svg"
                    }
                    boxSize={{ base: 6, md: 10 }}
                  />
                </Flex>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </>
  );
};

export default ComparisonTable;
