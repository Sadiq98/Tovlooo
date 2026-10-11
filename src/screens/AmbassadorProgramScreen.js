import { Button, Grid, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { PageShell } from "./CommerceScreenComponents";

const steps = [
	["01", "Apply", "Tell us about you and your community."],
				["02", "Share", "Get your personal link and product stories."],
	["03", "Earn", "Receive rewards for every new Tovlo family."],
];

const AmbassadorProgramScreen = () => (
	<PageShell eyebrow="Tovlo community" title="Share better bowls. Earn together." description="Join the Tovlo ambassador programme and turn your love for better pet nutrition into meaningful rewards." dark>
		<Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={5}>
			{steps.map(([number, title, text]) => (
				<Stack key={number} border="1px solid" borderColor="text.ivory" p={6} borderRadius="xl" gap={8}>
					<Text color="text.orange" fontSize="h5">{number}</Text>
					<Stack gap={2}><Heading fontSize="h5" fontWeight="500">{title}</Heading><Text>{text}</Text></Stack>
				</Stack>
			))}
		</Grid>
		<HStack gap={4} wrap="wrap">
			<Button as={RouterLink} to="/ambassador/register" size="lg" borderRadius="full" bg="text.orange" color="white" _hover={{ bg: "text.darkOrange" }}>Apply to become an ambassador <FiArrowRight /></Button>
			<Button as={RouterLink} to="/ambassador/login" size="lg" variant="outline" borderColor="text.ivory" color="text.ivory">Member sign in</Button>
		</HStack>
	</PageShell>
);

export default AmbassadorProgramScreen;