// File: src/screens/PersonalAccountScreen.js
import { useState } from "react";
import { Button, Grid, Heading, Stack, Text } from "@chakra-ui/react";
import {
  AccountNav,
  Field,
  PageShell,
} from "../components/custom/CommerceScreenComponents";

const PersonalAccountScreen = () => {
  const [saved, setSaved] = useState(false);

  // TODO: load and save through the customer API once it is connected.
  const save = (event) => {
    event.preventDefault();
    setSaved(true);
  };

  return (
    <PageShell
      eyebrow="My Tovlo"
      title="Your account, made personal."
      description="Manage your details, pet profile, and everyday wellness journey."
    >
      <Grid templateColumns={{ base: "1fr", lg: "260px 1fr" }} gap={10}>
        <AccountNav />
        <Stack
          as="form"
          onSubmit={save}
          onChange={() => setSaved(false)}
          gap={6}
          bg="whiteAlpha.600"
          p={{ base: 5, md: 10 }}
          borderRadius="2xl"
        >
          <Heading as="h2" fontSize="h5" fontWeight="500">
            Personal details
          </Heading>
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={5}>
            <Field
              label="First name"
              name="firstName"
              placeholder="Your first name"
              autoComplete="given-name"
              required
            />
            <Field
              label="Last name"
              name="lastName"
              placeholder="Your last name"
              autoComplete="family-name"
              required
            />
            <Field
              label="Email"
              name="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
            />
            <Field
              label="Phone"
              name="phone"
              type="tel"
              placeholder="+972 00 000 0000"
              autoComplete="tel"
            />
          </Grid>
          <Stack direction={{ base: "column", sm: "row" }} align={{ sm: "center" }}>
            <Button
              type="submit"
              alignSelf="start"
              borderRadius="full"
              bg="text.orange"
              color="white"
              _hover={{ bg: "text.darkOrange" }}
            >
              Save changes
            </Button>
            {saved && (
              <Text role="status" color="text.darkGreen1">
                Your details are saved.
              </Text>
            )}
          </Stack>
        </Stack>
      </Grid>
    </PageShell>
  );
};

export default PersonalAccountScreen;
