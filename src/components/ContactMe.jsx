import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
  HStack,
  Link,
} from "@chakra-ui/react";

export default function ContactMe() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Thank you for reaching out! I will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Box maxW="3xl" mx="auto" px={4} mb={20}>
      <Heading as="h2" fontSize="4xl" fontFamily="heading" fontWeight="bold" mb={8} color="teal.400">
        Contact Me
      </Heading>

      <Text color="gray.300" fontFamily="body" mb={6}>
        Whether you have a project idea, freelance inquiry, or just want to say hi,
        feel free to reach out! I’m always open to new opportunities and collaborations.
      </Text>

      <form onSubmit={handleSubmit}>
        <VStack spacing={6} align="stretch">
          <FormControl isRequired>
            <FormLabel color="gray.300" fontWeight="semibold">Name</FormLabel>
            <Input
              name="name"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              bg="gray.800"
              color="gray.100"
              _focus={{ ring: 2, ringColor: "teal.400" }}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel color="gray.300" fontWeight="semibold">Email</FormLabel>
            <Input
              name="email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
              bg="gray.800"
              color="gray.100"
              _focus={{ ring: 2, ringColor: "teal.400" }}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel color="gray.300" fontWeight="semibold">Message</FormLabel>
            <Textarea
              name="message"
              placeholder="Write your message here..."
              rows={5}
              resize="none"
              value={formData.message}
              onChange={handleChange}
              bg="gray.800"
              color="gray.100"
              _focus={{ ring: 2, ringColor: "teal.400" }}
            />
          </FormControl>

          <Button
            type="submit"
            bg="teal.400"
            color="gray.900"
            fontWeight="semibold"
            px={6}
            py={3}
            borderRadius="lg"
            _hover={{ bg: "teal.500" }}
            transition="0.3s"
            width="fit-content"
          >
            Send Message
          </Button>
        </VStack>
      </form>

      {status && (
        <Text mt={6} color="green.400" fontFamily="body" fontWeight="semibold">
          {status}
        </Text>
      )}

      <HStack mt={10} spacing={6} justify="center">
        <Link
          href="mailto:chirag@example.com"
          color="teal.400"
          _hover={{ color: "teal.600" }}
          aria-label="Email"
          fontSize="2xl"
        >
          GitHub
        </Link>
        <Link
          href="https://github.com/codelover2025"
          isExternal
          color="teal.400"
          _hover={{ color: "teal.600" }}
          aria-label="GitHub"
          fontSize="2xl"
        >
           🔗
           
          LinkedIn
        </Link>
        <Link
          href="https://www.linkedin.com/in/chirag19saxena/"
          isExternal
          color="teal.400"
          _hover={{ color: "teal.600" }}
          aria-label="LinkedIn"
          fontSize="2xl"
        >
          🔗
        </Link>
      </HStack>
    </Box>
  );
}
