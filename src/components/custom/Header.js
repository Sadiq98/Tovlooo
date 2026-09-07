import {
  Button,
  useCheckboxGroup,
  Flex,
  Icon,
  Menu,
  Portal,
  Link,
  Drawer,
  CloseButton,
  IconButton,
  Stack,
  Dialog,
  Text,
  Heading,
  Spacer,
  Input,
  Checkbox,
  PinInput,
  Field,
  Fieldset,
} from "@chakra-ui/react";
import { Link as RouterLink, useLocation, matchPath } from "react-router-dom";

import { IoChevronDown } from "react-icons/io5";
import { FaGlobe, FaHandshake, FaUserAlt } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { IoMenu } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { TbPawOff, TbPawFilled } from "react-icons/tb";

import { languages } from "../../data/language";
import { lazy, useEffect, useRef, useState } from "react";
import { OrangeButton } from "./CustomButton";
import { PasswordInput } from "../ui/password-input";

const SingleLink = lazy(() => import("./SingleLink"));
const Logo = lazy(() => import("../../data/Logo"));

const Header = () => {
  const location = useLocation();
  const staticPaths = [
    "/ingredients",
    "/starterpack",
    "/blog",
    "/jerky",
    "/supplements",
    "/account",
  ];
  const dynamicPatterns = ["/catalog/:id", "/blog/:title"];
  const [step, setStep] = useState("details");
  const [loginDrawerOpen, setLoginDrawerOpen] = useState(false);

  const header2 =
    staticPaths.includes(location.pathname) ||
    dynamicPatterns.some((pattern) => matchPath(pattern, location.pathname));
  const defaultNav = [
    { label: "About us", url: "/about" },
    { label: "Catalog", url: "/catalog" },
    { label: "Ingredients", url: "/ingredients" },
    { label: "Blog", url: "/blog" },
    { label: "Contact Us", url: "/contact" },
  ];

  const drawerNav = [
    { label: "About us", url: "/about" },
    { label: "Catalog", url: "/catalog" },
    { label: "Ingredients", url: "/ingredients" },
    { label: "Blog", url: "/blog" },
    { label: "Contacts", url: "/contact" },
    { label: "Account", isAccount: true },
    { label: "Get a custom plan", url: "/contact" },
    { label: "Ambassador", url: "/contact" },
    { label: "program", url: "/contact" },
  ];

  const socials = [
    {
      icon: RiInstagramFill,
      url: "https://instagram.com/",
    },
    {
      icon: FaFacebookF,
      url: "https://facebook.com/",
    },
  ];

  const AUTH_STEPS = {
    details: {
      title: "Welcome to Tovlo!",
      subtitle: ({ setStep }) => (
        <Text
          fontSize={{
            base: "text8",
            md: "text1",
            lg: "text6",
          }}
          fontWeight="normal"
          lineHeight="text1"
        >
          Already have an account?{" "}
          <Link
            color="text.lightGreen50"
            cursor="pointer"
            onClick={() => setStep("login")}
          >
            Sign In
          </Link>
        </Text>
      ),
      component: LoginForm,
    },
    otp: {
      title: "Enter the 4-digit code",
      subtitle: ({ email }) => (
        <Text
          fontSize={{
            base: "text8",
            md: "text1",
            lg: "text6",
          }}
          fontWeight="normal"
          lineHeight="text1"
        >
          We sent the code to {email}
        </Text>
      ),
      component: OTPForm,
    },
  };

  const CurrentStep = AUTH_STEPS[step];
  const Component = CurrentStep.component;

  const group = useCheckboxGroup({ defaultValue: "English" });
  const selectedLanguage = group.value;

  return (
    <>
      <Flex
        as="header"
        position="absolute"
        top="0"
        p={{ base: 3, md: 5 }}
        zIndex="10"
        w="full"
        justifyContent="center"
      >
        <Flex
          bg={header2 ? "#FAFCEB" : "transparent"}
          w="full"
          justify="space-between"
          align="center"
          py={3}
          px={{ base: 3, md: 5 }}
          borderRadius="lg"
          border="2px solid"
          borderColor={header2 ? "text.primary" : "text.ivory"}
        >
          {/* Left Nav */}
          <Flex
            align="center"
            gap={{ lg: 5, xl: 6 }}
            display={{ base: "none", lg: "flex" }}
          >
            {defaultNav.map(({ label, url }) => (
              <SingleLink
                key={label}
                label={label}
                url={url}
                color={header2 ? "text.primary" : "text.ivory"}
                _hover={{
                  color: header2 ? "text.darkGreen1" : "text.darkIvory",
                }}
              />
            ))}
          </Flex>

          {/* Center Logo */}
          <Link
            as={RouterLink}
            to="/"
            onClick={() => {
              window.scrollTo({ top: "0", behavior: "smooth" });
            }}
            _focus={{ outline: "none" }}
          >
            <Logo
              fill={header2 ? "#017D65" : "#FBFFDC"}
              display={{ base: "none", xl: "block" }}
            />
            <Logo
              fill={header2 ? "#017D65" : "#FBFFDC"}
              width="120"
              height="20"
              display={{ base: "block", xl: "none" }}
            />
          </Link>

          {/* Right Side */}
          <Flex align="center" gap={5} display={{ base: "none", lg: "flex" }}>
            <Button
              size="xs"
              bg={header2 ? "text.primary" : "text.ivory"}
              color={header2 ? "text.ivory" : "text.primary"}
              borderRadius="md"
              _hover={{ bg: header2 ? "text.darkGreen1" : "text.darkIvory" }}
            >
              Get a custom plugin
            </Button>

            <Menu.Root>
              <Menu.Trigger asChild>
                <Button
                  variant="plain "
                  _hover={{
                    color: header2 ? "text.darkGreen1" : "text.darkIvory",
                  }}
                  color={header2 ? "text.primary" : "text.ivory"}
                  size="sm"
                >
                  <FaGlobe /> {selectedLanguage || "Select Language"}{" "}
                  <IoChevronDown />
                </Button>
              </Menu.Trigger>
              <Portal>
                <Menu.Positioner>
                  <Menu.Content>
                    <Menu.ItemGroup
                      color={header2 ? "text.primary" : "text.ivory"}
                    >
                      {languages.map(({ language }) => (
                        <Menu.CheckboxItem
                          key={language}
                          value={language}
                          // checked={group.isChecked(language)}
                          onCheckedChange={() => group.toggleValue(language)}
                        >
                          {language}
                          <Menu.ItemIndicator />
                        </Menu.CheckboxItem>
                      ))}
                    </Menu.ItemGroup>
                  </Menu.Content>
                </Menu.Positioner>
              </Portal>
            </Menu.Root>

            <Link as={RouterLink} to="/contact">
              <Icon
                as={FaHandshake}
                color={header2 ? "text.primary" : "text.ivory"}
                _hover={{
                  color: header2 ? "text.darkGreen1" : "text.darkIvory",
                }}
                boxSize={8}
              />
            </Link>

            {/* login Dialog Desktop */}
            <Dialog.Root key={"center"} placement={"center"} size={"lg"}>
              <Dialog.Trigger asChild>
                <Icon
                  as={FaUserAlt}
                  color={header2 ? "text.primary" : "text.ivory"}
                  _hover={{
                    color: header2 ? "text.darkGreen1" : "text.darkIvory",
                  }}
                  boxSize={6}
                  cursor="pointer"
                />
              </Dialog.Trigger>
              <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                  <Dialog.Content
                    bgColor={"background.default"}
                    color={"text.primary"}
                    p={10}
                  >
                    <Dialog.Header>
                      <Dialog.Title w="full">
                        <Stack
                          gap={{ base: 2, md: 5 }}
                          w="full"
                          textAlign={"center"}
                        >
                          <Heading
                            fontSize={{ base: "text6", md: "h5", lg: "h4" }}
                            lineHeight="heading2"
                            fontWeight={500}
                          >
                            {CurrentStep.title}
                          </Heading>
                          {CurrentStep.subtitle({
                            email: "example@email.com",
                            setStep,
                          })}
                        </Stack>
                      </Dialog.Title>
                    </Dialog.Header>
                    <Dialog.Body w={"full"}>
                      <Component setStep={setStep} />
                    </Dialog.Body>

                    <Dialog.CloseTrigger asChild>
                      <CloseButton
                        size="lg"
                        bgColor={"transparent"}
                        color={"text.primary"}
                      />
                    </Dialog.CloseTrigger>
                  </Dialog.Content>
                </Dialog.Positioner>
              </Portal>
            </Dialog.Root>

            <Icon
              as={TiShoppingCart}
              color={header2 ? "text.primary" : "text.ivory"}
              _hover={{ color: header2 ? "text.darkGreen1" : "text.darkIvory" }}
              boxSize={8}
            />
          </Flex>

          {/* Mobile Drawer */}
          <Flex
            align="center"
            gap={{ base: 3, md: 5 }}
            display={{ base: "flex", lg: "none" }}
          >
            <Icon
              as={TiShoppingCart}
              color={header2 ? "text.primary" : "text.ivory"}
              _hover={{ color: header2 ? "text.darkGreen1" : "text.darkIvory" }}
              boxSize={{ base: "6", md: "12" }}
            />

            <Drawer.Root size="md">
              <Drawer.Trigger asChild>
                <IconButton bgColor="transparent">
                  <Icon
                    as={IoMenu}
                    color={header2 ? "text.primary" : "text.ivory"}
                    boxSize={{ base: "6", md: "12" }}
                  />
                </IconButton>
              </Drawer.Trigger>
              <Drawer.Positioner>
                <Drawer.Content bgColor="background.default">
                  <Drawer.Body mt={28}>
                    <Stack justifyContent="space-between" h="full">
                      <Stack gap={{ base: 8, md: 14 }}>
                        {drawerNav.map(({ label, url, isAccount }, index) =>
                          isAccount ? (
                            <Text
                              key={index}
                              as="button"
                              type="button"
                              fontFamily="heading"
                              fontSize={{ base: "h5", md: "h3" }}
                              fontWeight="500"
                              textAlign="left"
                              color="text.primary"
                              _hover={{ color: "text.primary" }}
                              onClick={() => {
                                setStep("details");
                                setLoginDrawerOpen(true);
                              }}
                            >
                              {label}
                            </Text>
                          ) : (
                            <Drawer.ActionTrigger key={index}>
                              <SingleLink
                                fontFamily="heading"
                                fontSize={{ base: "h5", md: "h3" }}
                                fontWeight="500"
                                textAlign="left"
                                color="text.primary"
                                _hover={{ color: "text.primary" }}
                                label={label}
                                url={url}
                              />
                            </Drawer.ActionTrigger>
                          ),
                        )}
                      </Stack>

                      <Flex w="full" justifyContent="space-between">
                        <Flex gap={5}>
                          {socials.map((item, index) => (
                            <Link
                              href={item.url}
                              bgColor="text.primary"
                              key={index}
                              borderRadius="full"
                              p={2}
                            >
                              <Icon
                                as={item.icon}
                                color="text.ivory"
                                boxSize={6}
                                key={index}
                              />
                            </Link>
                          ))}
                        </Flex>
                        <Menu.Root>
                          <Menu.Trigger asChild>
                            <Button
                              variant="plain"
                              _hover={{ color: "text.primary" }}
                              color="text.primary"
                              fontSize="lg"
                            >
                              <FaGlobe />{" "}
                              {selectedLanguage || "Select Language"}{" "}
                              <IoChevronDown />
                            </Button>
                          </Menu.Trigger>
                          <Portal>
                            <Menu.Positioner>
                              <Menu.Content>
                                <Menu.ItemGroup color="text.primary">
                                  {languages.map(({ language }) => (
                                    <Menu.CheckboxItem
                                      key={language}
                                      value={language}
                                      // checked={group.isChecked(language)}
                                      onCheckedChange={() =>
                                        group.toggleValue(language)
                                      }
                                    >
                                      {language}
                                      <Menu.ItemIndicator />
                                    </Menu.CheckboxItem>
                                  ))}
                                </Menu.ItemGroup>
                              </Menu.Content>
                            </Menu.Positioner>
                          </Portal>
                        </Menu.Root>
                      </Flex>
                    </Stack>
                  </Drawer.Body>
                  <Drawer.CloseTrigger asChild>
                    <CloseButton
                      color="text.primary"
                      _hover={{ bgColor: "transparent" }}
                      size="2xl"
                    />
                  </Drawer.CloseTrigger>
                </Drawer.Content>
              </Drawer.Positioner>
            </Drawer.Root>

            {/* Login Drawer — mobile/tablet equivalent of the desktop Dialog */}
            <Drawer.Root
              size="md"
              open={loginDrawerOpen}
              onOpenChange={(e) => setLoginDrawerOpen(e.open)}
            >
              <Drawer.Positioner>
                <Drawer.Content
                  bgColor="background.default"
                  color={"text.primary"}
                  p={{ base: 5, md: 10 }}
                  h={"full"}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Drawer.Header>
                    <Drawer.Title w="full">
                      <Stack
                        gap={{ base: 2, md: 5 }}
                        w="full"
                        textAlign="center"
                      >
                        <Heading
                          fontSize={{ base: "text6", md: "h5", lg: "h4" }}
                          lineHeight="heading2"
                          fontWeight={500}
                        >
                          {CurrentStep.title}
                        </Heading>
                        {CurrentStep.subtitle({
                          email: "example@email.com",
                          setStep,
                        })}
                      </Stack>
                    </Drawer.Title>
                  </Drawer.Header>
                  <Drawer.Body w="full">
                    <Component setStep={setStep} />
                  </Drawer.Body>
                  <Drawer.CloseTrigger asChild>
                    <CloseButton
                      size="lg"
                      bgColor="transparent"
                      color="text.primary"
                    />
                  </Drawer.CloseTrigger>
                </Drawer.Content>
              </Drawer.Positioner>
            </Drawer.Root>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

const LoginForm = ({ setStep }) => {
  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
    confirmPassword: "",
  });
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.emailOrPhone.trim()) {
      newErrors.emailOrPhone = "Email or phone is required";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    if (!agreed) {
      newErrors.agreed = "You must agree to the processing of personal data";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setStep("otp");
    }
  };

  return (
    <Stack>
      <Flex direction="column" w="full" justifyContent="center">
        <form onSubmit={handleSubmit} noValidate>
          <Fieldset.Root invalid={Object.keys(errors).length > 0}>
            <Fieldset.Content>
              {/* Email or Phone */}
              <Field.Root required invalid={!!errors.emailOrPhone}>
                <Input
                  placeholder="Email or Phone"
                  variant="flushed"
                  value={formData.emailOrPhone}
                  onChange={handleChange("emailOrPhone")}
                  fontSize={{
                    base: "text8",
                    md: "text1",
                    lg: "text6",
                  }}
                />
                <Field.ErrorText>{errors.emailOrPhone}</Field.ErrorText>
              </Field.Root>
              <Spacer h={5} />

              {/* Password */}
              <Field.Root required invalid={!!errors.password}>
                <PasswordInput
                  placeholder="Password"
                  variant="flushed"
                  value={formData.password}
                  onChange={handleChange("password")}
                  fontSize={{
                    base: "text8",
                    md: "text1",
                    lg: "text6",
                  }}
                  visibilityIcon={{
                    on: <TbPawFilled />,
                    off: <TbPawOff />,
                  }}
                />
                <Field.ErrorText>{errors.password}</Field.ErrorText>
              </Field.Root>
              <Spacer h={5} />

              {/* Confirm Password */}
              <Field.Root required invalid={!!errors.confirmPassword}>
                <PasswordInput
                  placeholder="Confirm Password"
                  variant="flushed"
                  value={formData.confirmPassword}
                  onChange={handleChange("confirmPassword")}
                  fontSize={{
                    base: "text8",
                    md: "text1",
                    lg: "text6",
                  }}
                  visibilityIcon={{
                    on: <TbPawFilled />,
                    off: <TbPawOff />,
                  }}
                />
                <Field.ErrorText>{errors.confirmPassword}</Field.ErrorText>
              </Field.Root>
            </Fieldset.Content>

            <Spacer h={5} />

            <OrangeButton w="full" onClick={handleSubmit}>
              Sign In
            </OrangeButton>
          </Fieldset.Root>
        </form>
      </Flex>

      <Checkbox.Root
        pt={5}
        checked={agreed}
        invalid={!!errors.agreed}
        onCheckedChange={(e) => {
          setAgreed(!!e.checked);
          setErrors((prev) => ({ ...prev, agreed: "" }));
        }}
      >
        <Checkbox.HiddenInput required />
        <Checkbox.Control />
        <Checkbox.Label>
          I agree to the{" "}
          <Link color="text.lightGreen50" href="https://google.com">
            processing of personal data
          </Link>
        </Checkbox.Label>
      </Checkbox.Root>
      {errors.agreed && (
        <Text color="red.400" fontSize="sm" mt={1}>
          {errors.agreed}
        </Text>
      )}
    </Stack>
  );
};

const OTPForm = ({ setStep }) => {
  const [otp, setOtp] = useState([]);
  const [error, setError] = useState("");
  const [countdown, setCountdown] = useState(57);
  const timerRef = useRef(null);

  useEffect(() => {
    if (countdown <= 0) return;

    timerRef.current = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(timerRef.current);
  }, [countdown]);

  const handleValueChange = (details) => {
    setOtp(details.value);
    if (error) setError("");
  };

  const handleResend = () => {
    if (countdown > 0) return;
    // TODO: trigger actual resend API call here
    setCountdown(57);
  };

  const handleConfirm = () => {
    const code = otp.join("");
    if (code.length < 4) {
      setError("Please enter the full 4-digit code");
      return;
    }
    // TODO: verify OTP with backend here
    setStep("next"); // swap for whatever step follows OTP
  };

  return (
    <Stack gap={10} py={5}>
      <Stack justifyContent={"center"} alignItems={"center"} w={"full"} gap={5}>
        <PinInput.Root
          size="2xl"
          required
          variant="outline"
          color={"text.primary"}
          value={otp}
          onValueChange={handleValueChange}
          otp
        >
          <PinInput.HiddenInput />
          <PinInput.Control>
            <PinInput.Input
              bgColor={"background.lightGreen"}
              borderRadius={10}
              index={0}
            />
            <PinInput.Input
              bgColor={"background.lightGreen"}
              borderRadius={10}
              index={1}
            />
            <PinInput.Input
              bgColor={"background.lightGreen"}
              borderRadius={10}
              index={2}
            />
            <PinInput.Input
              bgColor={"background.lightGreen"}
              borderRadius={10}
              index={3}
            />
          </PinInput.Control>
        </PinInput.Root>

        {error && (
          <Text color="red.400" fontSize="sm">
            {error}
          </Text>
        )}

        <Text
          fontSize={{
            base: "text8",
            md: "text1",
            lg: "text6",
          }}
          fontWeight="normal"
          lineHeight="text1"
          color="text.lightGreen50"
        >
          Did not receive the code?{" "}
          {countdown > 0 ? (
            <Text as="span">Send again ({countdown})</Text>
          ) : (
            <Link
              onClick={handleResend}
              color="text.orange"
              textDecoration="underline"
              cursor="pointer"
            >
              Send again
            </Link>
          )}
        </Text>
      </Stack>
      <OrangeButton w="full" onClick={handleConfirm}>
        Confirm
      </OrangeButton>
    </Stack>
  );
};

export default Header;
