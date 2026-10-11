// File: src/screens/AmbassadorSocialAccountsScreen.js
import { useState } from "react";
import { Button, Field, Heading, Input, Stack, Text } from "@chakra-ui/react";
import {
  getAmbassadorProfile,
  saveAmbassadorProfile,
} from "../data/ambassadorData";

const networks = [
  ["instagram", "Instagram", "https://instagram.com/yourname"],
  ["tiktok", "TikTok", "https://tiktok.com/@yourname"],
  ["facebook", "Facebook", "https://facebook.com/yourname"],
  ["youtube", "YouTube", "https://youtube.com/@yourname"],
];

const AmbassadorSocialAccountsScreen = () => {
  // Read on mount (not at module load) so returning to this screen shows
  // what was last saved.
  const [accounts, setAccounts] = useState(() => ({
    instagram: "",
    tiktok: "",
    facebook: "",
    youtube: "",
    ...getAmbassadorProfile().social,
  }));
  const [saved, setSaved] = useState(false);

  const updateField = (event) => {
    setAccounts((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
    setSaved(false);
  };

  const save = (event) => {
    event.preventDefault();
    saveAmbassadorProfile({ social: accounts });
    setSaved(true);
  };

  return (
    <Stack as="form" onSubmit={save} gap={7}>
      <Stack gap={2}>
        <Text fontSize="text8" textTransform="uppercase">
          Your community
        </Text>
        <Heading
          as="h2"
          fontFamily="heading"
          fontSize={{ base: "h5", md: "h3" }}
          fontWeight="500"
        >
          Social accounts
        </Heading>
        <Text>
          Add the public profiles where you share pet care and Tovlo content.
        </Text>
      </Stack>
      <Stack maxW="720px" gap={5}>
        {networks.map(([name, label, placeholder]) => (
          <Field.Root key={name}>
            <Field.Label>{label} profile URL</Field.Label>
            <Input
              name={name}
              type="url"
              value={accounts[name]}
              onChange={updateField}
              placeholder={placeholder}
            />
          </Field.Root>
        ))}
      </Stack>
      <Stack direction={{ base: "column", sm: "row" }} align={{ sm: "center" }}>
        <Button
          type="submit"
          bg="text.orange"
          color="white"
          _hover={{ bg: "text.darkOrange" }}
        >
          Save social accounts
        </Button>
        {saved && (
          <Text role="status" color="text.darkGreen1">
            Your social accounts are saved.
          </Text>
        )}
      </Stack>
    </Stack>
  );
};

export default AmbassadorSocialAccountsScreen;
