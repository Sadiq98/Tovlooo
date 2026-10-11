// File: src/screens/AmbassadorMediaLibraryScreen.js
import { Button, Grid, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { FiDownload } from "react-icons/fi";

const assets = [
  { title: "Chicken Choice", image: "/assets/products/chicken_choice.png", description: "A product image for your next Tovlo story." },
  { title: "Fish Fantasy", image: "/assets/products/fish_fantasy.png", description: "Share a fresh favorite with your community." },
  { title: "Meaty Marvel", image: "/assets/products/meaty_marvel.png", description: "A Tovlo product visual, ready to download." },
  { title: "Starter pack", image: "/assets/products/starterpack.png", description: "Introduce new families to the Tovlo range." },
];

const AmbassadorMediaLibraryScreen = () => (
  <Stack gap={7}>
    <Stack gap={2}>
      <Text fontSize="text8" textTransform="uppercase">Share Tovlo</Text>
      <Heading fontFamily="heading" fontSize={{ base: "h5", md: "h3" }} fontWeight="500">Media library</Heading>
      <Text>Download product images to use in your ambassador posts.</Text>
    </Stack>
    <Grid templateColumns={{ base: "1fr 1fr", lg: "repeat(2, minmax(0, 1fr))" }} gap={{ base: 3, md: 5 }}>
      {assets.map((asset) => (
        <Stack key={asset.title} border="1px solid" borderColor="text.lightGreen30" p={{ base: 3, md: 5 }} gap={4}>
          <Image src={asset.image} alt={asset.title} aspectRatio="1.3" objectFit="contain" bg="white" p={3} />
          <Stack gap={1}><Heading fontSize="h6" fontWeight="500">{asset.title}</Heading><Text fontSize="text8">{asset.description}</Text></Stack>
          <Button as="a" href={asset.image} download alignSelf="start" variant="outline" borderColor="text.primary" size="sm"><FiDownload /> Download image</Button>
        </Stack>
      ))}
    </Grid>
  </Stack>
);

export default AmbassadorMediaLibraryScreen;
