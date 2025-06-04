import React from "react";
import {
  Box,
  Heading,
  List,
  ListItem,
  Text,
  Link,
  VStack,
} from "@chakra-ui/react";

const certifications = [
  {
    title: "Machine Learning Specialization",
    issuer: "Coursera - Stanford University",
    date: "June 2024",
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/MLSPEC2024",
  },
  {
    title: "React - The Complete Guide",
    issuer: "Udemy",
    date: "March 2024",
    link: "https://www.udemy.com/certificate/react-complete-guide",
  },
  {
    title: "Google IT Automation with Python Professional Certificate",
    issuer: "Google/Coursera",
    date: "December 2023",
    link: "https://www.coursera.org/account/accomplishments/professional-cert/py-automation",
  },
  {
    title: "Deep Learning Specialization",
    issuer: "Coursera - deeplearning.ai",
    date: "September 2023",
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/DLSPEC2023",
  },
  {
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "July 2023",
    link: "https://www.aws.training/certification/solutions-architect-associate",
  },
];

export default function Certifications() {
  return (
    <Box maxW="4xl" mx="auto" px={4} mb={20}>
      <Heading
        as="h2"
        fontSize="4xl"
        fontFamily="heading"
        fontWeight="bold"
        mb={8}
        color="teal.400"
      >
        Certifications
      </Heading>

      <VStack spacing={6} align="stretch">
        {certifications.map(({ title, issuer, date, link }, idx) => (
          <Box
            key={idx}
            bg="gray.800"
            borderRadius="2xl"
            p={6}
            boxShadow="md"
            _hover={{ boxShadow: "lg" }}
            transition="box-shadow 0.3s"
          >
            <Link
              href={link}
              isExternal
              fontSize="xl"
              fontWeight="semibold"
              color="white"
              fontFamily="heading"
              _hover={{ color: "teal.400" }}
            >
              {title}
            </Link>
            <Text color="gray.400" fontFamily="body" mt={1}>
              Issued by <strong>{issuer}</strong> — <em>{date}</em>
            </Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
}
