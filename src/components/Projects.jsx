import React from "react";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Link,
  Badge,
  HStack,
  Icon,
  useColorModeValue,
  Tooltip,
  ScaleFade,
  VStack,
} from "@chakra-ui/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "AI-Powered Task Scheduler & System Monitor",
    description:
      "A smart scheduler and monitoring tool that uses ML for dynamic task prioritization and real-time system analytics.",
    tech: ["React", "Flask", "TensorFlow", "psutil"],
    github: "https://github.com/codelover2025/task-scheduler",
    demo: "https://task-scheduler-demo.com",
    featured: true,
  },
  {
    title: "Project Redis – Redis Clone",
    description:
      "An in-memory key-value database clone with TTL, JSON support, and stack/queue operations.",
    tech: ["Python", "RESP", "Multithreading"],
    github: "https://github.com/codelover2025/project-redis",
    demo: "https://project-redis-demo.com",
    featured: true,
  },
  {
    title: "Image to PDF Converter",
    description:
      "A web app converting images to PDFs using React frontend and Node.js backend with SQL database.",
    tech: ["React", "Node.js", "SQL"],
    github: "https://github.com/codelover2025/image-to-pdf",
    demo: "https://image-to-pdf-demo.com",
  },
  {
    title: "AI-Assisted Compiler for Code Optimization",
    description:
      "A Python-based compiler using AI models to optimize code performance.",
    tech: ["Python", "TensorFlow", "AST parsing"],
    github: "https://github.com/codelover2025/ai-compiler",
    demo: "https://ai-compiler-demo.com",
    featured: true,
  },
  {
    title: "Intelligent System Monitor and Security Analyzer",
    description:
      "Real-time monitoring with AI-driven threat detection and log analysis.",
    tech: ["Python", "C++", "React", "TensorFlow"],
    github: "https://github.com/codelover2025/system-monitor",
    demo: "https://system-monitor-demo.com",
  },
  {
    title: "Lead Intent Classifier",
    description:
      "A machine learning model to classify business leads with a Flask web UI.",
    tech: ["Python", "Flask", "Scikit-learn"],
    github: "https://github.com/codelover2025/lead-intent-classifier",
    demo: "https://lead-classifier-demo.com",
  },
  {
    title: "Network Optimization using AI",
    description:
      "Demonstrates AI-driven optimization techniques for network performance.",
    tech: ["Python", "TensorFlow"],
    github: "https://github.com/codelover2025/network-optimization",
    demo: "https://network-optimization-demo.com",
  },
  {
    title: "Portfolio Website",
    description:
      "A dark-themed responsive portfolio showcasing projects, skills, and contact info.",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/codelover2025/portfolio-website",
    demo: "https://portfolio-demo.com",
  },
  {
    title: "Task Manager with Reinforcement Learning",
    description:
      "An intelligent task manager optimizing resource allocation using RL.",
    tech: ["Python", "TensorFlow", "React"],
    github: "https://github.com/codelover2025/task-manager-rl",
    demo: "https://task-manager-demo.com",
  },
];

export default function Projects() {
  const bgColor = useColorModeValue("gray.800", "gray.700");
  const hoverBgColor = useColorModeValue("gray.700", "gray.600");
  const textColor = useColorModeValue("gray.100", "white");

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
        Featured Projects
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {projects.map((project, idx) => (
          <ScaleFade
            key={idx}
            initialScale={0.9}
            in={true}
            transition={{ enter: { duration: 0.5, delay: idx * 0.1 } }}
          >
            <Box
              bg={bgColor}
              rounded="xl"
              overflow="hidden"
              transition="all 0.3s"
              _hover={{
                transform: "translateY(-5px)",
                shadow: "xl",
                bg: hoverBgColor,
              }}
            >
              <VStack
                align="stretch"
                spacing={4}
                p={6}
                position="relative"
              >
                {project.featured && (
                  <Badge
                    position="absolute"
                    top={4}
                    right={4}
                    colorScheme="teal"
                    variant="solid"
                    rounded="full"
                    px={3}
                  >
                    Featured
                  </Badge>
                )}
                
                <Heading
                  as="h3"
                  fontSize="xl"
                  fontWeight="bold"
                  color={textColor}
                >
                  {project.title}
                </Heading>

                <Text color="gray.300" fontSize="sm">
                  {project.description}
                </Text>

                <HStack wrap="wrap" spacing={2}>
                  {project.tech.map((tech, i) => (
                    <Badge
                      key={i}
                      colorScheme="teal"
                      variant="subtle"
                      rounded="full"
                      px={2}
                    >
                      {tech}
                    </Badge>
                  ))}
                </HStack>

                <HStack spacing={4} mt={2}>
                  <Tooltip label="View Code" placement="top">
                    <Link
                      href={project.github}
                      isExternal
                      color="teal.400"
                      _hover={{ color: "teal.300" }}
                    >
                      <Icon as={FaGithub} boxSize={5} />
                    </Link>
                  </Tooltip>
                  {project.demo && (
                    <Tooltip label="Live Demo" placement="top">
                      <Link
                        href={project.demo}
                        isExternal
                        color="teal.400"
                        _hover={{ color: "teal.300" }}
                      >
                        <Icon as={FaExternalLinkAlt} boxSize={5} />
                      </Link>
                    </Tooltip>
                  )}
                </HStack>
              </VStack>
            </Box>
          </ScaleFade>
        ))}
      </SimpleGrid>
    </Box>
  );
}
