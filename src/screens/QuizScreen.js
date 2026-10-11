// File: src/screens/QuizScreen.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Flex,
  Heading,
  Progress,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import {
  OutlineButton,
  PageShell,
} from "../components/custom/CommerceScreenComponents";

const questions = [
  {
    question: "How old is your dog?",
    options: ["Puppy", "Adult", "Senior"],
  },
  {
    question: "What is their biggest wellness goal?",
    options: ["Digestion", "Skin & coat", "Joints", "Everyday wellness"],
  },
  {
    question: "What size are they?",
    options: ["Small", "Medium", "Large"],
  },
  {
    question: "What would they love most?",
    options: ["Meals", "Treats", "Supplements"],
  },
];

// Where "See my plan" sends the pet parent, based on the last answer.
const planRoutes = {
  Meals: "/catalog",
  Treats: "/jerky",
  Supplements: "/supplements",
};

const QuizScreen = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  // One answer per question, so going back keeps earlier choices.
  const [answers, setAnswers] = useState(questions.map(() => ""));

  const { question, options } = questions[step];
  const answer = answers[step];
  const isLast = step === questions.length - 1;

  const selectAnswer = (value) =>
    setAnswers((current) =>
      current.map((item, index) => (index === step ? value : item)),
    );

  const next = () => {
    if (isLast) {
      navigate(planRoutes[answer] || "/catalog");
      return;
    }
    setStep((current) => current + 1);
  };

  return (
    <PageShell
      eyebrow={`Personal plan / 0${step + 1} of 0${questions.length}`}
      title="Let's find their perfect bowl."
      description="A few quick questions help us make every recommendation more personal."
    >
      <Stack maxW="760px" gap={8}>
        <Progress.Root
          value={((step + 1) / questions.length) * 100}
          colorPalette="orange"
          size="sm"
        >
          <Progress.Track bg="text.lightGreen30">
            <Progress.Range bg="text.orange" />
          </Progress.Track>
        </Progress.Root>
        <Heading as="h2" fontSize={{ base: "h5", md: "h3" }} fontWeight="500">
          {question}
        </Heading>
        <RadioGroup.Root
          value={answer}
          onValueChange={(event) => selectAnswer(event.value)}
        >
          <Stack gap={3}>
            {options.map((option) => (
              <RadioGroup.Item
                key={option}
                value={option}
                p={5}
                border="1px solid"
                borderColor="text.lightGreen30"
                borderRadius="xl"
                cursor="pointer"
                _checked={{ borderColor: "text.orange", bg: "custom.orange12" }}
              >
                <RadioGroup.ItemHiddenInput />
                <RadioGroup.ItemIndicator />
                <RadioGroup.ItemText fontSize="text1">
                  {option}
                </RadioGroup.ItemText>
              </RadioGroup.Item>
            ))}
          </Stack>
        </RadioGroup.Root>
        <Flex justify="space-between" gap={3}>
          <OutlineButton
            disabled={step === 0}
            onClick={() => setStep((current) => Math.max(0, current - 1))}
          >
            <FiArrowLeft /> Back
          </OutlineButton>
          <Button
            borderRadius="full"
            size="lg"
            bg="text.orange"
            color="white"
            _hover={{ bg: "text.darkOrange" }}
            disabled={!answer}
            onClick={next}
          >
            {isLast ? "See my plan" : "Next"} <FiArrowRight />
          </Button>
        </Flex>
      </Stack>
    </PageShell>
  );
};

export default QuizScreen;
