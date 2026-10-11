// File: src/screens/AmbassadorRegistrationScreen.js
import { useEffect, useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Field,
  Grid,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";
import { register } from "../actions/public/authActions";
import { AUTH_REGISTER_RESET } from "../constants/authConstants";
import { PageShell } from "../components/custom/CommerceScreenComponents";
import { saveAmbassadorProfile } from "../data/ambassadorData";

const fields = [
  { name: "firstName", label: "First name", type: "text", autoComplete: "given-name" },
  { name: "lastName", label: "Last name", type: "text", autoComplete: "family-name" },
  { name: "email", label: "Email address", type: "email", autoComplete: "email" },
  { name: "phoneNumber", label: "Phone number", type: "tel", autoComplete: "tel" },
  { name: "password", label: "Password", type: "password", autoComplete: "new-password", minLength: 8 },
];

const AmbassadorRegistrationScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, success, error } = useSelector(
    (state) => state.authRegister || {},
  );
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  useEffect(() => {
    if (success) {
      saveAmbassadorProfile({
        personal: {
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          phone: form.phoneNumber,
        },
      });
      // Clear the flag so coming back to this page doesn't redirect again.
      dispatch({ type: AUTH_REGISTER_RESET });
      navigate("/ambassador/my-information");
    }
  }, [success, form, dispatch, navigate]);

  const updateField = (event) =>
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));

  const submit = (event) => {
    event.preventDefault();
    dispatch(register(form));
  };

  return (
    <PageShell
      eyebrow="Tovlo community"
      title="Join the ambassador program."
      description="Create your account to build your profile and start sharing Tovlo with your community."
    >
      <Stack
        as="form"
        onSubmit={submit}
        maxW="760px"
        gap={6}
        bg="whiteAlpha.600"
        p={{ base: 5, md: 9 }}
      >
        <Heading as="h2" fontSize="h5" fontWeight="500">
          Create your account
        </Heading>
        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={5}>
          {fields.map(({ name, label, ...inputProps }) => (
            <Field.Root key={name} required>
              <Field.Label>
                {label}
                <Field.RequiredIndicator />
              </Field.Label>
              <Input
                name={name}
                value={form[name]}
                onChange={updateField}
                {...inputProps}
              />
            </Field.Root>
          ))}
        </Grid>
        {error && (
          <Text role="alert" color="text.red">
            {error}
          </Text>
        )}
        <Button
          type="submit"
          alignSelf="start"
          size="lg"
          bg="text.orange"
          color="white"
          loading={loading}
          _hover={{ bg: "text.darkOrange" }}
        >
          Create account <FiArrowRight />
        </Button>
        <Text fontSize="text8">
          Already registered?{" "}
          <Button
            as={RouterLink}
            to="/ambassador/login"
            variant="plain"
            color="text.orange"
            p={0}
            h="auto"
          >
            Sign in
          </Button>
        </Text>
      </Stack>
    </PageShell>
  );
};

export default AmbassadorRegistrationScreen;
