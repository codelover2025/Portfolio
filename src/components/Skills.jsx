import React from "react";
import { FaCode, FaCogs, FaTools, FaBrain } from "react-icons/fa";
import {
  Box,
  SimpleGrid,
  Heading,
  Text,
  VStack,
  HStack,
  Progress,
  Icon,
  useColorModeValue,
  Tooltip,
} from "@chakra-ui/react";

const skills = {
  "Programming Languages": [
    { name: "Python", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "C++", level: 80 },
    { name: "Go", level: 75 },
    { name: "SQL", level: 85 },
  ],
  "Frameworks & Libraries": [
    { name: "React.js", level: 90 },
    { name: "Flask", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "TensorFlow", level: 75 },
    { name: "PyTorch", level: 70 },
  ],
  "Tools & Platforms": [
    { name: "Git & GitHub", level: 90 },
    { name: "Docker", level: 85 },
    { name: "Linux", level: 80 },
    { name: "PostgreSQL", level: 85 },
    { name: "MongoDB", level: 80 },
  ],
  "Other Skills": [
    { name: "Machine Learning & AI", level: 85 },
    { name: "Data Structures & Algorithms", level: 90 },
    { name: "System Design", level: 80 },
    { name: "RESTful API Development", level: 85 },
    { name: "Multithreading & Concurrency", level: 75 },
  ],
};

const categoryIcons = {
  "Programming Languages": FaCode,
  "Frameworks & Libraries": FaCogs,
  "Tools & Platforms": FaTools,
  "Other Skills": FaBrain,
};

export default function Skills() {
  const bgColor = useColorModeValue("gray.800", "gray.700");
  const textColor = useColorModeValue("gray.100", "white");
  const progressColor = "teal.400";
  const hoverBgColor = useColorModeValue("gray.700", "gray.600");

  return (
    <Box maxW="6xl" mx="auto" px={6} py={16}>
      <Heading
        as="h2"
        fontSize="4xl"
        fontFamily="heading"
        fontWeight="bold"
        mb={12}
        color="teal.400"
        textAlign="center"
      >
        Skills & Expertise
      </Heading>
      
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
        {Object.entries(skills).map(([category, skillsList], idx) => (
          <Box
            key={idx}
            bg={bgColor}
            rounded="xl"
            p={6}
            shadow="lg"
            transition="all 0.3s"
            _hover={{
              transform: "translateY(-5px)",
              shadow: "xl",
              bg: hoverBgColor,
            }}
          >
            <HStack mb={6} spacing={3}>
              <Icon
                as={categoryIcons[category]}
                boxSize={6}
                color="teal.400"
              />
              <Heading
                as="h3"
                fontSize="xl"
                fontFamily="heading"
                color={textColor}
              >
                {category}
              </Heading>
            </HStack>

            <VStack spacing={4} align="stretch">
              {skillsList.map((skill, i) => (
                <Tooltip
                  key={i}
                  label={`${skill.level}% Proficiency`}
                  placement="top"
                  hasArrow
                >
                  <Box>
                    <HStack justify="space-between" mb={2}>
                      <Text color={textColor} fontWeight="medium">
                        {skill.name}
                      </Text>
                      <Text color="teal.400" fontSize="sm">
                        {skill.level}%
                      </Text>
                    </HStack>
                    <Progress
                      value={skill.level}
                      size="sm"
                      colorScheme="teal"
                      bg="gray.600"
                      rounded="full"
                    />
                  </Box>
                </Tooltip>
              ))}
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
