import React from "react";
import { FaCode, FaCubes, FaDatabase, FaTools, FaCloud } from "react-icons/fa";
import {
  Box,
  SimpleGrid,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  useColorModeValue,
  Badge,
  Tooltip,
  Flex,
  IconButton,
} from "@chakra-ui/react";

const techStack = {
  Languages: [
    { name: "Python", years: 4, level: "Expert" },
    { name: "JavaScript", years: 3, level: "Advanced" },
    { name: "Go", years: 2, level: "Intermediate" },
    { name: "C++", years: 3, level: "Advanced" },
    { name: "SQL", years: 4, level: "Expert" },
  ],
  Frameworks: [
    { name: "React.js", years: 3, level: "Advanced" },
    { name: "Flask", years: 3, level: "Advanced" },
    { name: "Node.js", years: 2, level: "Intermediate" },
    { name: "TensorFlow", years: 2, level: "Intermediate" },
    { name: "PyTorch", years: 1, level: "Intermediate" },
  ],
  Databases: [
    { name: "PostgreSQL", years: 3, level: "Advanced" },
    { name: "MongoDB", years: 2, level: "Intermediate" },
    { name: "SQLite", years: 3, level: "Advanced" },
  ],
  Tools: [
    { name: "Git", years: 4, level: "Expert" },
    { name: "Docker", years: 2, level: "Intermediate" },
    { name: "Linux", years: 3, level: "Advanced" },
    { name: "VS Code", years: 4, level: "Expert" },
    { name: "Postman", years: 3, level: "Advanced" },
  ],
  Cloud: [
    { name: "Heroku", years: 2, level: "Intermediate" },
    { name: "AWS", years: 1, level: "Basic" },
    { name: "Netlify", years: 2, level: "Intermediate" },
  ],
};

const categoryIcons = {
  Languages: FaCode,
  Frameworks: FaCubes,
  Databases: FaDatabase,
  Tools: FaTools,
  Cloud: FaCloud,
};

const getLevelColor = (level) => {
  switch (level) {
    case "Expert":
      return "green";
    case "Advanced":
      return "teal";
    case "Intermediate":
      return "blue";
    case "Basic":
      return "purple";
    default:
      return "gray";
  }
};

export default function TechStack() {
  const bgColor = useColorModeValue("gray.800", "gray.700");
  const textColor = useColorModeValue("gray.100", "white");
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
        Tech Stack
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {Object.entries(techStack).map(([category, items], idx) => (
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
              {items.map((tech, i) => (
                <Tooltip
                  key={i}
                  label={`${tech.years} years of experience`}
                  placement="top"
                  hasArrow
                >
                  <Flex
                    justify="space-between"
                    align="center"
                    p={2}
                    rounded="md"
                    _hover={{
                      bg: "gray.600",
                      transform: "scale(1.02)",
                    }}
                    transition="all 0.2s"
                  >
                    <HStack spacing={3}>
                      <Text color={textColor} fontWeight="medium">
                        {tech.name}
                      </Text>
                      <Badge
                        colorScheme={getLevelColor(tech.level)}
                        variant="subtle"
                        rounded="full"
                        px={2}
                      >
                        {tech.level}
                      </Badge>
                    </HStack>
                    <Text color="teal.400" fontSize="sm">
                      {tech.years}y
                    </Text>
                  </Flex>
                </Tooltip>
              ))}
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
