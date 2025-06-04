import React from "react";
import { Box, Heading, Text, Link, List, ListItem } from "@chakra-ui/react";

export default function FullTimeAvailability() {
  return (
    <Box maxW="4xl" mx="auto" px={6} py={12} animation="fadeIn 1s ease-in-out">
      <Heading
        as="h2"
        fontSize="3xl"
        fontFamily="heading"
        fontWeight="bold"
        mb={8}
        color="teal.400"
      >
        Full-Time Availability
      </Heading>

      <Text color="gray.300" fontFamily="body" mb={6} lineHeight="tall">
        I am actively seeking full-time opportunities where I can contribute my skills in software development, AI/ML, and backend engineering. With a strong foundation in both frontend and backend technologies, I aim to join innovative teams that value continuous learning, collaboration, and impactful solutions.
      </Text>

      <Text color="gray.300" fontFamily="body" mb={6} lineHeight="tall">
        I am open to remote or hybrid positions and am flexible with time zones. My ideal role involves challenging projects, a supportive work culture, and opportunities for growth and mentorship.
      </Text>

      <Text color="gray.300" fontFamily="body" mb={6} lineHeight="tall">
        Please feel free to{" "}
        <Link href="#contact" color="teal.400" _hover={{ textDecoration: "underline" }}>
          contact me
        </Link>{" "}
        if you have an opportunity that aligns with my skills and career goals.
      </Text>

      <List as="ul" color="gray.300" fontFamily="body" spacing={2} pl={5} styleType="disc">
        <ListItem>Strong proficiency in Python, JavaScript, and React</ListItem>
        <ListItem>Experience with RESTful API development and cloud services</ListItem>
        <ListItem>Passion for AI, machine learning, and data-driven applications</ListItem>
        <ListItem>Excellent problem-solving and communication skills</ListItem>
        <ListItem>Committed to writing clean, maintainable, and scalable code</ListItem>
      </List>
    </Box>
  );
}
