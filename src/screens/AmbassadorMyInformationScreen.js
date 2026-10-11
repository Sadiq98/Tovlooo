// File: src/screens/AmbassadorMyInformationScreen.js
import { useState } from "react";
import {
  Button,
  Field,
  Grid,
  Heading,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import {
  getAmbassadorProfile,
  saveAmbassadorProfile,
} from "../data/ambassadorData";

const fields = [
  { name: "firstName", label: "First name", autoComplete: "given-name", required: true },
  { name: "lastName", label: "Last name", autoComplete: "family-name", required: true },
  { name: "email", label: "Email address", type: "email", autoComplete: "email", required: true },
  { name: "phone", label: "Phone number", type: "tel", autoComplete: "tel" },
  { name: "city", label: "City", autoComplete: "address-level2" },
];

const AmbassadorMyInformationScreen = () => {
  // Read on mount (not at module load) so the form always shows the latest
  // saved profile, e.g. right after registration.
  const [form, setForm] = useState(() => ({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    bio: "",
    ...getAmbassadorProfile().personal,
  }));
  const [saved, setSaved] = useState(false);

  const updateField = (event) => {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
    setSaved(false);
  };

  const save = (event) => {
    event.preventDefault();
    saveAmbassadorProfile({ personal: form });
    setSaved(true);
  };

  return (
    <Stack as="form" onSubmit={save} gap={7}>
      <Stack gap={2}>
        <Text fontSize="text8" textTransform="uppercase">
          Your profile
        </Text>
        <Heading
          as="h2"
          fontFamily="heading"
          fontSize={{ base: "h5", md: "h3" }}
          fontWeight="500"
        >
          My information
        </Heading>
        <Text>
          Keep your contact details current so we can reach you about the
          program.
        </Text>
      </Stack>
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={5}>
        {fields.map(({ name, label, type = "text", autoComplete, required }) => (
          <Field.Root key={name} required={required}>
            <Field.Label>
              {label}
              <Field.RequiredIndicator />
            </Field.Label>
            <Input
              name={name}
              type={type}
              autoComplete={autoComplete}
              value={form[name]}
              onChange={updateField}
            />
          </Field.Root>
        ))}
        <Field.Root gridColumn={{ md: "1 / -1" }}>
          <Field.Label>Tell us about your community</Field.Label>
          <Textarea
            name="bio"
            value={form.bio}
            onChange={updateField}
            rows={4}
          />
        </Field.Root>
      </Grid>
      <Stack direction={{ base: "column", sm: "row" }} align={{ sm: "center" }}>
        <Button
          type="submit"
          bg="text.orange"
          color="white"
          _hover={{ bg: "text.darkOrange" }}
        >
          Save information
        </Button>
        {saved && (
          <Text role="status" color="text.darkGreen1">
            Your information is saved.
          </Text>
        )}
      </Stack>
    </Stack>
  );
};

export default AmbassadorMyInformationScreen;
