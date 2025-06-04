import React from "react";
import { Box, Heading, Text, Link, Center } from "@chakra-ui/react";

export default function ResumeDownload() {
  return (
    <Box maxW="4xl" mx="auto" px={6} py={12} textAlign="center" className="animate-fade-in">
      <Heading
        as="h2"
        fontSize="3xl"
        fontFamily="heading"
        fontWeight="bold"
        mb={8}
        color="teal.400"
      >
        Download My Resume
      </Heading>
      <Text color="gray.300" fontFamily="body" mb={6}>
        Feel free to download my resume to learn more about my professional experience, skills, and accomplishments.
      </Text>
      <Center>
        <Link
          href="/Chirag_Resume_WIPRO.pdf" // Ensure this file is in your public folder
          download
          aria-label="Download Resume"
          bg="teal.400"
          color="gray.900"
          fontWeight="semibold"
          px={8}
          py={3}
          rounded="full"
          boxShadow="lg"
          _hover={{ bg: "teal.500", textDecoration: "none" }}
          transition="background-color 0.3s ease"
        >
          Download Resume
        </Link>
      </Center>
    </Box>
  );
}
