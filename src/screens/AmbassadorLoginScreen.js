// File: src/screens/AmbassadorLoginScreen.js
import { useEffect, useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Field, Heading, Input, Stack, Text } from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";
import { login } from "../actions/public/authActions";
import { PageShell } from "../components/custom/CommerceScreenComponents";

const AmbassadorLoginScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, userInfo, error } = useSelector((state) => state.userLogin || {});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (userInfo) navigate("/ambassador/dashboard");
  }, [userInfo, navigate]);

  const submit = (event) => {
    event.preventDefault();
    dispatch(login({ email, password, provider: "Local" }));
  };

  return (
    <PageShell eyebrow="Welcome back" title="Sign in to your ambassador account." description="Open your dashboard, update your profile, and find the latest Tovlo media.">
      <Stack as="form" onSubmit={submit} maxW="560px" gap={6} bg="whiteAlpha.600" p={{ base: 5, md: 9 }}>
        <Heading fontSize="h5" fontWeight="500">Member sign in</Heading>
        <Field.Root required>
          <Field.Label>Email address</Field.Label>
          <Input type="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </Field.Root>
        <Field.Root required>
          <Field.Label>Password</Field.Label>
          <Input type="password" autoComplete="current-password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </Field.Root>
        {error && <Text role="alert" color="text.red">{error}</Text>}
        <Button type="submit" alignSelf="start" size="lg" bg="text.orange" color="white" loading={loading}>Sign in <FiArrowRight /></Button>
        <Text fontSize="text8">New to Tovlo? <Button as={RouterLink} to="/ambassador/register" variant="plain" color="text.orange" p={0}>Create an account</Button></Text>
      </Stack>
    </PageShell>
  );
};

export default AmbassadorLoginScreen;
