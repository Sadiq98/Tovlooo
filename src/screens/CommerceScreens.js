import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import {
  Badge,
  Box,
  Button,
  Checkbox,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Input,
  Progress,
  RadioGroup,
  Separator,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FiArrowLeft, FiArrowRight, FiCheck, FiMinus, FiPlus } from "react-icons/fi";
import { products } from "../data/products";

const PageShell = ({ eyebrow, title, description, children, dark = false }) => (
  <Stack
    bg={dark ? "text.primary" : "background.default"}
    color={dark ? "text.ivory" : "text.primary"}
    px={{ base: 4, md: 10, lg: 20 }}
    pt={{ base: 28, md: 36 }}
    pb={{ base: 16, md: 24 }}
    gap={{ base: 10, md: 16 }}
  >
    <Stack maxW="900px" gap={4}>
      {eyebrow && <Text textTransform="uppercase" letterSpacing="0.12em" fontSize="text8">{eyebrow}</Text>}
      <Heading fontSize={{ base: "h4", md: "h2", lg: "h1" }} lineHeight="heading2" fontWeight="500">{title}</Heading>
      {description && <Text maxW="620px" fontSize={{ base: "text6", md: "text2" }}>{description}</Text>}
    </Stack>
    {children}
  </Stack>
);

const Field = ({ label, placeholder, type = "text" }) => (
  <Stack gap={2}>
    <Text fontSize="text8" textTransform="uppercase" letterSpacing="0.08em">{label}</Text>
    <Input type={type} placeholder={placeholder} size="lg" bg="whiteAlpha.500" borderColor="text.lightGreen30" _focus={{ borderColor: "text.orange" }} />
  </Stack>
);

const OutlineButton = ({ children, to, onClick }) => (
  <Button as={to ? RouterLink : "button"} to={to} onClick={onClick} variant="outline" borderColor="text.primary" color="text.primary" size="lg" borderRadius="full" px={8}>
    {children}
  </Button>
);

export const RegistrationScreen = () => {
  const navigate = useNavigate();
  return (
    <PageShell eyebrow="Welcome to Tovlo" title="A healthier bowl starts here." description="Create your account to save your pet's profile, track orders, and unlock personalised nutrition recommendations.">
      <Grid templateColumns={{ base: "1fr", lg: "1fr 0.8fr" }} gap={12} alignItems="start">
        <Stack gap={5} bg="whiteAlpha.600" p={{ base: 5, md: 10 }} borderRadius="2xl">
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={5}>
            <Field label="First name" placeholder="Your first name" />
            <Field label="Last name" placeholder="Your last name" />
          </Grid>
          <Field label="Email address" placeholder="you@example.com" type="email" />
          <Field label="Password" placeholder="At least 8 characters" type="password" />
          <Checkbox.Root colorPalette="green"><Checkbox.HiddenInput /><Checkbox.Control /><Checkbox.Label fontSize="text8">I agree to the terms and privacy policy.</Checkbox.Label></Checkbox.Root>
          <Button size="lg" borderRadius="full" bg="text.orange" color="white" _hover={{ bg: "text.darkOrange" }} onClick={() => navigate("/quiz")}>Create account <FiArrowRight /></Button>
          <Text textAlign="center" fontSize="text8">Already have an account? <Button variant="plain" p={0} color="text.orange">Sign in</Button></Text>
        </Stack>
        <Stack gap={5} pt={{ lg: 10 }}>
          {["Personal feeding recommendations", "One place for every order", "Early access to Tovlo drops"].map((item) => <HStack key={item} align="start" gap={4}><Box bg="text.orange" color="white" borderRadius="full" p={2}><FiCheck /></Box><Text fontSize="text1">{item}</Text></HStack>)}
        </Stack>
      </Grid>
    </PageShell>
  );
};

export const PaymentScreen = () => (
  <PageShell eyebrow="Checkout / 02" title="Almost home." description="Secure payment for your Tovlo order.">
    <Grid templateColumns={{ base: "1fr", lg: "1.2fr 0.8fr" }} gap={10}>
      <Stack gap={5} bg="whiteAlpha.600" p={{ base: 5, md: 10 }} borderRadius="2xl">
        <Heading fontSize="h5" fontWeight="500">Payment details</Heading>
        <Field label="Card number" placeholder="1234 1234 1234 1234" />
        <Grid templateColumns="1fr 1fr" gap={5}><Field label="Expiry" placeholder="MM / YY" /><Field label="CVC" placeholder="123" /></Grid>
        <Separator borderColor="text.lightGreen30" />
        <Heading fontSize="h5" fontWeight="500">Delivery address</Heading>
        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={5}><Field label="Full name" placeholder="Your name" /><Field label="Phone" placeholder="+91" /></Grid>
        <Field label="Address" placeholder="Street and house number" />
        <Grid templateColumns="1fr 1fr" gap={5}><Field label="City" placeholder="City" /><Field label="Postal code" placeholder="Postal code" /></Grid>
        <Button size="lg" borderRadius="full" bg="text.orange" color="white" _hover={{ bg: "text.darkOrange" }}>Pay securely <FiArrowRight /></Button>
      </Stack>
      <OrderSummary />
    </Grid>
  </PageShell>
);

const OrderSummary = () => (
  <Stack gap={5} bg="text.primary" color="text.ivory" p={{ base: 5, md: 8 }} borderRadius="2xl" h="fit-content">
    <Heading fontSize="h5" fontWeight="500">Your order</Heading>
    <HStack justify="space-between"><Text>Chicken Choice × 1</Text><Text>159.90₪</Text></HStack>
    <HStack justify="space-between"><Text>Delivery</Text><Text>Free</Text></HStack>
    <Separator borderColor="text.ivory" opacity={0.3} />
    <HStack justify="space-between" fontSize="h6"><Text>Total</Text><Text>159.90₪</Text></HStack>
    <Text fontSize="text8" opacity={0.75}>Your order is packed fresh and shipped with care.</Text>
  </Stack>
);

export const BagScreen = () => {
  const [quantity, setQuantity] = useState(1);
  const product = products[0];
  return (
    <PageShell eyebrow="Your bag" title="Good choices, ready to go." description="Review your dog's new favourites before checkout.">
      <Grid templateColumns={{ base: "1fr", lg: "1.2fr 0.8fr" }} gap={10}>
        <Stack gap={4}>
          <HStack justify="space-between"><Text fontSize="text8" textTransform="uppercase">1 item</Text><Text fontSize="text8">Free delivery over 99₪</Text></HStack>
          <Stack direction={{ base: "column", md: "row" }} align={{ md: "center" }} gap={5} bg="whiteAlpha.600" p={5} borderRadius="2xl">
            <Image src={product.image} alt={product.name} boxSize="140px" objectFit="contain" bg="background.lightGreen" borderRadius="xl" />
            <Stack flex="1" gap={2}><Heading fontSize="h5" fontWeight="500">{product.name}</Heading><Text>{product.description}</Text><Text fontWeight="600">{product.price.toFixed(2)}₪</Text></Stack>
            <HStack border="1px solid" borderColor="text.lightGreen30" borderRadius="full" p={1}><Button variant="plain" onClick={() => setQuantity(Math.max(1, quantity - 1))}><FiMinus /></Button><Text>{quantity}</Text><Button variant="plain" onClick={() => setQuantity(quantity + 1)}><FiPlus /></Button></HStack>
          </Stack>
        </Stack>
        <OrderSummary />
      </Grid>
    </PageShell>
  );
};

export const QuizScreen = () => {
  const [step, setStep] = useState(0);
  const [answer, setAnswer] = useState("");
  const questions = ["How old is your dog?", "What is their biggest wellness goal?", "What size are they?", "What would they love most?"];
  const answers = [["Puppy", "Adult", "Senior"], ["Digestion", "Skin & coat", "Joints", "Everyday wellness"], ["Small", "Medium", "Large"], ["Meals", "Treats", "Supplements"]];
  return <PageShell eyebrow={`Personal plan / 0${step + 1} of 04`} title="Let's find their perfect bowl." description="A few quick questions help us make every recommendation more personal.">
    <Stack maxW="760px" gap={8}>
      <Progress value={((step + 1) / questions.length) * 100} colorPalette="orange" />
      <Heading fontSize={{ base: "h5", md: "h3" }} fontWeight="500">{questions[step]}</Heading>
      <RadioGroup.Root value={answer} onValueChange={(event) => setAnswer(event.value)}>
        <Stack gap={3}>{answers[step].map((option) => <RadioGroup.Item key={option} value={option} p={5} border="1px solid" borderColor="text.lightGreen30" borderRadius="xl" _checked={{ borderColor: "text.orange", bg: "custom.orange12" }}><RadioGroup.ItemHiddenInput /><RadioGroup.ItemIndicator /><RadioGroup.ItemText fontSize="text1">{option}</RadioGroup.ItemText></RadioGroup.Item>)}</Stack>
      </RadioGroup.Root>
      <Flex justify="space-between"><OutlineButton onClick={() => setStep(Math.max(0, step - 1))}><FiArrowLeft /> Back</OutlineButton><Button borderRadius="full" size="lg" bg="text.orange" color="white" disabled={!answer} onClick={() => { setAnswer(""); setStep((current) => Math.min(questions.length - 1, current + 1)); }}>{step === questions.length - 1 ? "See my plan" : "Next"} <FiArrowRight /></Button></Flex>
    </Stack>
  </PageShell>;
};

const AccountNav = () => <Stack gap={2}>{["Personal details", "My orders", "Pet profile", "Payments", "Ambassador programme"].map((item, index) => <Button key={item} as={RouterLink} to={["/account", "/my-orders", "/account", "/payment", "/ambassador"][index]} justifyContent="space-between" variant={index === 0 ? "solid" : "ghost"} bg={index === 0 ? "text.primary" : "transparent"} color={index === 0 ? "text.ivory" : "text.primary"} size="lg">{item}<FiArrowRight /></Button>)}</Stack>;

export const PersonalAccountScreen = () => <PageShell eyebrow="My Tovlo" title="Your account, made personal." description="Manage your details, pet profile, and everyday wellness journey.">
  <Grid templateColumns={{ base: "1fr", lg: "260px 1fr" }} gap={10}><AccountNav /><Stack gap={6} bg="whiteAlpha.600" p={{ base: 5, md: 10 }} borderRadius="2xl"><Heading fontSize="h5" fontWeight="500">Personal details</Heading><Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={5}><Field label="First name" placeholder="Sadiq" /><Field label="Last name" placeholder="Shaikh" /><Field label="Email" placeholder="hello@example.com" /><Field label="Phone" placeholder="+91 00000 00000" /></Grid><Button alignSelf="start" borderRadius="full" bg="text.orange" color="white">Save changes</Button></Stack></Grid>
</PageShell>;

export const OrdersScreen = () => <PageShell eyebrow="My Tovlo / orders" title="Your order history." description="Everything your dog has loved, all in one place.">
  <Stack gap={4}>{[{ id: "TV-1048", date: "12 Sep 2026", status: "Delivered", total: "159.90₪", item: "Chicken Choice" }, { id: "TV-0992", date: "21 Aug 2026", status: "Delivered", total: "79.90₪", item: "Joint Support Supplement" }].map((order) => <Stack key={order.id} gap={4} bg="whiteAlpha.600" p={{ base: 5, md: 7 }} borderRadius="2xl"><Flex justify="space-between" wrap="wrap" gap={3}><Stack gap={1}><Text fontSize="text8" textTransform="uppercase">Order {order.id}</Text><Heading fontSize="h6" fontWeight="500">{order.item}</Heading><Text fontSize="text8">{order.date}</Text></Stack><Stack align={{ md: "end" }} gap={2}><Badge colorPalette="green">{order.status}</Badge><Text fontWeight="600">{order.total}</Text></Stack></Flex><Separator borderColor="text.lightGreen30" /><Button variant="plain" alignSelf="start" color="text.orange">View order <FiArrowRight /></Button></Stack>)}</Stack>
</PageShell>;

export const AmbassadorProgramScreen = () => <PageShell eyebrow="Tovlo community" title="Share better bowls. Earn together." description="Join the Tovlo ambassador programme and turn your love for better pet nutrition into meaningful rewards." dark>
  <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={5}>{[["01", "Apply", "Tell us about you and your community."], ["02", "Share", "Get your personal link and product stories."], ["03", "Earn", "Receive rewards for every new Tovlo family."]].map(([number, title, text]) => <Stack key={number} border="1px solid" borderColor="text.ivory" p={6} borderRadius="xl" gap={8}><Text color="text.orange" fontSize="h5">{number}</Text><Stack gap={2}><Heading fontSize="h5" fontWeight="500">{title}</Heading><Text>{text}</Text></Stack></Stack>)}</Grid>
  <Button as={RouterLink} to="/ambassador/dashboard" alignSelf="start" size="lg" borderRadius="full" bg="text.orange" color="white">Apply to become an ambassador <FiArrowRight /></Button>
</PageShell>;

export const AmbassadorDashboardScreen = () => <PageShell eyebrow="Ambassador hub" title="Your impact, at a glance." description="Keep track of your community, rewards, and the next story to share.">
  <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={5}>{[["12", "Orders referred"], ["1,249₪", "Available rewards"], ["86%", "Monthly goal"]].map(([value, label]) => <Stack key={label} bg="text.primary" color="text.ivory" p={7} borderRadius="xl" gap={2}><Text fontSize="h3" fontFamily="heading">{value}</Text><Text>{label}</Text></Stack>)}</Grid>
  <Stack bg="whiteAlpha.600" p={{ base: 5, md: 8 }} borderRadius="2xl" gap={5}><Flex justify="space-between" align="center"><Heading fontSize="h5" fontWeight="500">Your referral link</Heading><Badge colorPalette="orange">Active</Badge></Flex><Input value="tovlo.com/r/sadiq" readOnly size="lg" /><Button alignSelf="start" borderRadius="full" bg="text.orange" color="white">Copy link</Button></Stack>
</PageShell>;