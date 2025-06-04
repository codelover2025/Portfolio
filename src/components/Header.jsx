import React from "react";
import {
  Box,
  Heading,
  Text,
  HStack,
  Link,
  VStack,
  Icon,
  Flex,
  Badge,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Header() {
  return (
    <Box maxW="8xl" mx="auto" mb={20} textAlign="center">
      <VStack spacing={8}>
        <Heading
          as="h1"
          fontSize={{ base: "9xl", md: "10xl" }}
          fontFamily="heading"
          fontWeight="bold"
          bgGradient="linear(to-r, brand.400, accent.400)"
          bgClip="text"
        >
          Chirag Saxena
        </Heading>

        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          gap={4}
          mb={4}
        >
          <Badge
            bgGradient="linear(to-r, brand.400, brand.600)"
            color="white"
            px={6}
            py={2}
            rounded="full"
            fontSize="lg"
          >
            Full Stack Developer
          </Badge>
          <Badge
            bgGradient="linear(to-r, accent.400, accent.600)"
            color="white"
            px={6}
            py={2}
            rounded="full"
            fontSize="lg"
          >
            AI Enthusiast
          </Badge>
        </Flex>

        <Text
          fontSize={{ base: "lg", md: "2xl" }}
          fontFamily="body"
          color="gray.300"
          maxW="3xl"
          textAlign="center"
          lineHeight="tall"
          fontWeight="medium"
        >
          Crafting elegant solutions through code and innovation.
          Specializing in full-stack development and artificial intelligence.
        </Text>

        <HStack
          spacing={10}
          justify="center"
          color="gray.400"
          fontSize="3xl"
        >
          <Link
            href="https://github.com/codelover2025"
            isExternal
            _hover={{ color: "brand.400" }}
          >
            <Icon as={FaGithub} />
          </Link>
          <Link
            href="https://linkedin.com/in/chiragpatel"
            isExternal
            _hover={{ color: "accent.400" }}
          >
            <Icon as={FaLinkedin} />
          </Link>
          <Link
            href="mailto:chirag@example.com"
            _hover={{ color: "brand.400" }}
          >
            <Icon as={FaEnvelope} />
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
}
