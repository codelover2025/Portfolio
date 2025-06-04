import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function AboutMe() {
  return (
    <Box maxW="4xl" mx="auto" px={4} mb={20} animation="fade-in">
      <Heading as="h2" fontSize="4xl" fontFamily="heading" fontWeight="bold" mb={8} color="teal.400">
        About Me
      </Heading>

      <Text color="gray.300" fontFamily="body" lineHeight="tall" mb={6}>
        Hello! I’m <strong>Chirag Saxena</strong>, a passionate software developer with expertise in full-stack development, artificial intelligence, and machine learning. Over the years, I have cultivated a deep understanding of building efficient, scalable applications that deliver real-world impact.
      </Text>

      <Text color="gray.300" fontFamily="body" lineHeight="tall" mb={6}>
        My journey began with a curiosity for problem-solving and a fascination with how technology can transform ideas into reality. This curiosity propelled me to master multiple programming languages and frameworks, including Python, React.js, Flask, and TensorFlow, among others.
      </Text>

      <Text color="gray.300" fontFamily="body" lineHeight="tall" mb={6}>
        I have designed and developed complex projects such as AI-powered task schedulers that optimize resource allocation dynamically, custom Redis clones featuring TTL and JSON capabilities, and intelligent system monitors with machine learning-based anomaly detection. These projects showcase my ability to blend theoretical knowledge with practical implementation.
      </Text>

      <Text color="gray.300" fontFamily="body" lineHeight="tall" mb={6}>
        What drives me is a relentless pursuit of excellence and a commitment to writing clean, maintainable code. I believe software development is not just about coding but crafting elegant solutions that are robust, scalable, and user-friendly.
      </Text>

      <Text color="gray.300" fontFamily="body" lineHeight="tall" mb={6}>
        Collaboration is at the heart of my work ethic. I enjoy working closely with teams, exchanging ideas, and mentoring peers. I am a firm believer that great software emerges from diverse perspectives and continuous learning.
      </Text>

      <Text color="gray.300" fontFamily="body" lineHeight="tall">
        Outside the realm of programming, I am an avid reader of technology trends and a competitive programmer who constantly hones problem-solving skills. I am also passionate about contributing to open-source projects that help grow and strengthen the developer community.
      </Text>

      <Text color="gray.300" fontFamily="body" lineHeight="tall" mt={6}>
        I am excited to take on new challenges where I can apply my skills and passion to create innovative solutions that make a difference. Let’s build something great together!
      </Text>
    </Box>
  );
}
