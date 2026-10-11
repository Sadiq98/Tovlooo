// File: src/screens/RegistrationScreen.js
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  Checkbox,
  Grid,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import { register } from "../actions/public/authActions";
import { AUTH_REGISTER_RESET } from "../constants/authConstants";
import {
  Field,
  PageShell,
} from "../components/custom/CommerceScreenComponents";

const perks = [
  "Personal feeding recommendations",
  "One place for every order",
  "Early access to Tovlo drops",
];

const RegistrationScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, success, error } = useSelector(
    (state) => state.authRegister || {},
  );
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [agreed, setAgreed] = useState(false);
  const [agreeError, setAgreeError] = useState(false);

  useEffect(() => {
    if (success) {
      // Clear the flag so coming back to this page doesn't redirect again.
      dispatch({ type: AUTH_REGISTER_RESET });
      navigate("/quiz");
    }
  }, [success, dispatch, navigate]);

  const updateField = (event) =>
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));

  const submit = (event) => {
    event.preventDefault();
    if (!agreed) {
      setAgreeError(true);
      return;
    }
    dispatch(register(form));
  };

  return (
    <PageShell
      eyebrow="Welcome to Tovlo"
      title="A healthier bowl starts here."
      description="Create your account to save your pet's profile, track orders, and unlock personalised nutrition recommendations."
    >
      <Grid
        templateColumns={{ base: "1fr", lg: "1fr 0.8fr" }}
        gap={12}
        alignItems="start"
      >
        <Stack
          as="form"
          onSubmit={submit}
          gap={5}
          bg="whiteAlpha.600"
          p={{ base: 5, md: 10 }}
          borderRadius="2xl"
        >
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={5}>
            <Field
              label="First name"
              name="firstName"
              placeholder="Your first name"
              autoComplete="given-name"
              value={form.firstName}
              onChange={updateField}
              required
            />
            <Field
              label="Last name"
              name="lastName"
              placeholder="Your last name"
              autoComplete="family-name"
              value={form.lastName}
              onChange={updateField}
              required
            />
          </Grid>
          <Field
            label="Email address"
            name="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            value={form.email}
            onChange={updateField}
            required
          />
          <Field
            label="Password"
            name="password"
            type="password"
            placeholder="At least 8 characters"
            autoComplete="new-password"
            minLength={8}
            value={form.password}
            onChange={updateField}
            required
          />
          <Checkbox.Root
            colorPalette="green"
            checked={agreed}
            invalid={agreeError}
            onCheckedChange={(event) => {
              setAgreed(!!event.checked);
              setAgreeError(false);
            }}
          >
            <Checkbox.HiddenInput />
            <Checkbox.Control />
            <Checkbox.Label fontSize="text8">
              I agree to the terms and privacy policy.
            </Checkbox.Label>
          </Checkbox.Root>
          {agreeError && (
            <Text role="alert" fontSize="text8" color="text.red">
              Please agree to the terms and privacy policy to continue.
            </Text>
          )}
          {error && (
            <Text role="alert" color="text.red">
              {error}
            </Text>
          )}
          <Button
            type="submit"
            size="lg"
            borderRadius="full"
            bg="text.orange"
            color="white"
            loading={loading}
            _hover={{ bg: "text.darkOrange" }}
          >
            Create account <FiArrowRight />
          </Button>
          {/* TODO: customer sign-in lives in the Header dialog, which can't be
              opened from here yet — wire this up once it is reachable. */}
          <Text textAlign="center" fontSize="text8">
            Already have an account? Sign in from the account icon in the menu.
          </Text>
        </Stack>
        <Stack gap={5} pt={{ lg: 10 }}>
          {perks.map((item) => (
            <HStack key={item} align="start" gap={4}>
              <Box bg="text.orange" color="white" borderRadius="full" p={2}>
                <FiCheck />
              </Box>
              <Text fontSize="text1">{item}</Text>
            </HStack>
          ))}
        </Stack>
      </Grid>
    </PageShell>
  );
};

export default RegistrationScreen;
