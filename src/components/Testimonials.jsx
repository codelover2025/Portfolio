import React from "react";
import { Box, Grid, Heading, Text, VStack } from "@chakra-ui/react";

const testimonials = [
  {
    name: "John Doe",
    role: "Product Manager at TechCorp",
    feedback:
      "Chirag’s dedication and expertise significantly boosted our project’s success. His AI insights were particularly impressive.",
  },
  {
    name: "Jane Smith",
    role: "CTO at InnovateX",
    feedback:
      "Professional, reliable, and highly skilled. Chirag delivered top-notch backend solutions on time and within budget.",
  },
  {
    name: "Alice Johnson",
    role: "Freelance Client",
    feedback:
      "Chirag exceeded expectations with his freelance work. Clear communication and great results every time.",
  },
];

export default function Testimonials() {
  return (
    <Box maxW="5xl" mx="auto" px={6} py={12}>
      <Heading
        as="h2"
        size="xl"
        mb={10}
        color="teal.400"
        textAlign="center"
        fontWeight="bold"
      >
        Client Testimonials
      </Heading>
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
        gap={8}
      >
        {testimonials.map(({ name, role, feedback }, idx) => (
          <Box
            key={idx}
            bg="gray.700"
            rounded="2xl"
            p={6}
            shadow="md"
            _hover={{ shadow: "lg", transform: "translateY(-4px)" }}
            transition="all 0.3s ease"
            as="blockquote"
            aria-label={`Testimonial from ${name}, ${role}`}
          >
            <Text fontStyle="italic" color="gray.300" mb={6} lineHeight="tall">
              “{feedback}”
            </Text>
            <VStack align="start" spacing={0}>
              <Text fontWeight="semibold" fontSize="lg" color="white">
                {name}
              </Text>
              <Text fontSize="sm" color="teal.400">
                {role}
              </Text>
            </VStack>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}
