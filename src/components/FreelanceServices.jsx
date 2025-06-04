import React from "react";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";

export default function FreelanceServices() {
  const services = [
    {
      title: "Full Stack Web Development",
      description:
        "Building responsive and dynamic websites and web applications using React, Node.js, Flask, and modern tools. I ensure clean, maintainable code with focus on performance and scalability.",
    },
    {
      title: "AI & Machine Learning Solutions",
      description:
        "Implementing custom AI models and ML pipelines for predictive analytics, task automation, anomaly detection, and intelligent scheduling tailored to your business needs.",
    },
    {
      title: "Backend API Development",
      description:
        "Designing and developing robust RESTful APIs and microservices using Python, Flask, and Node.js for seamless integration and reliable performance.",
    },
    {
      title: "UI/UX Design & Enhancements",
      description:
        "Crafting user-friendly interfaces with Tailwind CSS and React, optimizing user experience with accessibility and responsive design principles.",
    },
    {
      title: "Code Review & Optimization",
      description:
        "Providing thorough code audits, performance profiling, and optimization strategies to improve existing codebases and systems.",
    },
    {
      title: "Technical Consulting",
      description:
        "Offering expert advice on project architecture, technology selection, and best development practices to help you achieve your goals efficiently.",
    },
  ];

  return (
    <Box maxW="4xl" mx="auto" px={6} py={12} animation="fadeIn 1s ease-in-out">
      <Heading
        as="h2"
        fontSize="3xl"
        fontFamily="heading"
        fontWeight="bold"
        mb={10}
        color="teal.400"
      >
        Freelance Services
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        {services.map(({ title, description }, idx) => (
          <Box
            key={idx}
            bg="gray.800"
            rounded="xl"
            p={6}
            shadow="lg"
            _hover={{ shadow: "xl" }}
            transition="box-shadow 0.3s ease"
          >
            <Heading
              as="h3"
              fontSize="xl"
              fontWeight="semibold"
              mb={3}
              fontFamily="heading"
              color="gray.100"
            >
              {title}
            </Heading>
            <Text color="gray.300" fontFamily="body">
              {description}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
