import React, { useState, useEffect } from "react";
import { Box, Flex, Link, VStack, Text, IconButton, useDisclosure, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import AboutMe from "./AboutMe";
import Skills from "./Skills";
import FreelanceServices from "./FreelanceServices";
import Projects from "./Projects";
import ResumeDownload from "./ResumeDownload";
import Certifications from "./Certifications";
import FullTimeAvailability from "./FullTimeAvailability";
import TechStack from "./TechStack";
import Testimonials from "./Testimonials";
import ContactMe from "./ContactMe";

const sections = [
  { id: "about", label: "About", icon: "👋" },
  { id: "skills", label: "Skills", icon: "💡" },
  { id: "services", label: "Services", icon: "🛠️" },
  { id: "projects", label: "Projects", icon: "🚀" },
  { id: "resume", label: "Resume", icon: "📄" },
  { id: "certifications", label: "Certs", icon: "🏆" },
  { id: "availability", label: "Available", icon: "📅" },
  { id: "techstack", label: "Tech", icon: "⚡" },
  { id: "testimonials", label: "Reviews", icon: "💬" },
  { id: "contact", label: "Contact", icon: "📧" },
];

const NavLink = ({ id, label, icon, isActive, onClick }) => (
  <Link
    href={`#${id}`}
    px={3}
    py={2}
    rounded="full"
    position="relative"
    _hover={{
      textDecoration: "none",
      bg: "rgba(139, 92, 246, 0.15)",
      transform: "translateY(-1px)",
    }}
    _active={{
      bg: "rgba(139, 92, 246, 0.25)",
    }}
    transition="all 0.2s ease"
    onClick={onClick}
  >
    <Flex align="center" gap={1}>
      <Text fontSize="md" opacity={0.9}>{icon}</Text>
      <Text
        color={isActive ? "brand.400" : "gray.300"}
        fontWeight={isActive ? "bold" : "medium"}
        fontSize="sm"
        transition="all 0.2s ease"
      >
        {label}
      </Text>
    </Flex>
    {isActive && (
      <Box
        position="absolute"
        bottom="-2px"
        left="50%"
        transform="translateX(-50%)"
        width="20px"
        height="2px"
        bg="brand.400"
        rounded="full"
        transition="all 0.2s ease"
        boxShadow="0 0 8px rgba(139, 92, 246, 0.5)"
      />
    )}
  </Link>
);

export default function SectionList() {
  const [activeSection, setActiveSection] = useState("about");
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop - 100 && 
              scrollPosition < offsetTop + offsetHeight - 100) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setActiveSection(id);
    onClose();
  };

  return (
    <Box maxW="6xl" mx="auto" py={8} px={4}>
      {/* Desktop Navigation */}
      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={10}
        bg="rgba(26, 32, 44, 0.95)"
        backdropFilter="blur(10px)"
        borderBottom="0px solid"
        borderColor="gray.700"
        py={1}
      >
        <Box maxW="6xl" mx="auto" px={4}>
          <Flex
            as="nav"
            justify="space-between"
            align="center"
            gap={8}
          >
            {/* Name */}
            <Box 
              display={{ base: "none", md: "block" }}
              position="relative"
            right={"100px"}
              top="2px"
              minW="280px"
            >
              <Text
                fontSize="xl"
                fontWeight="bold"
                color="brand.400"
                letterSpacing="tight"
                whiteSpace="nowrap"
                _hover={{
                  color: "brand.300",
                  transform: "translateY(-1px)",
                }}
                transition="all 0.2s ease"
              >
                Chirag Saxena
              </Text>
            </Box>

            {/* Navigation Links */}
            <Flex
              justify="center"
              align="center"
              gap={1}
              flex="1"
              overflowX="auto"
              ml={4}
              css={{
                '&::-webkit-scrollbar': {
                  height: '0px',
                },
                '&::-webkit-scrollbar-track': {
                  background: 'transparent',
                },
                '&::-webkit-scrollbar-thumb': {
                  background: 'transparent',
                },
              }}
            >
              {sections.map(({ id, label, icon }) => (
                <NavLink
                  key={id}
                  id={id}
                  label={label}
                  icon={icon}
                  isActive={activeSection === id}
                  onClick={() => handleNavClick(id)}
                />
              ))}
            </Flex>
          </Flex>
        </Box>
      </Box>

      {/* Mobile Navigation Button */}
      <Box
        position="fixed"
        top={3}
        right={4}
        zIndex={20}
        display={{ base: "block", md: "none" }}
      >
        <IconButton
          icon={<HamburgerIcon />}
          aria-label="Open menu"
          onClick={onOpen}
          bg="rgba(26, 32, 44, 0.95)"
          color="white"
          _hover={{ bg: "rgba(26, 32, 44, 0.98)" }}
          boxShadow="0 4px 20px rgba(0, 0, 0, 0.3)"
          rounded="full"
          size="sm"
        />
      </Box>

      {/* Mobile Navigation Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="gray.900">
          <DrawerCloseButton color="white" />
          <DrawerHeader borderBottomWidth="1px" borderColor="gray.700">
            <Text 
              color="brand.400" 
              fontWeight="bold"
              fontSize="xl"
              letterSpacing="tight"
            >
              Chirag Saxena
            </Text>
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="stretch" mt={4}>
              {sections.map(({ id, label, icon }) => (
                <NavLink
                  key={id}
                  id={id}
                  label={label}
                  icon={icon}
                  isActive={activeSection === id}
                  onClick={() => handleNavClick(id)}
                />
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* Content Spacer */}
      <Box h="60px" />

      {/* Sections */}
      <VStack spacing={{ base: 12, md: 20 }}>
        <Box id="about" w="full">
          <AboutMe />
        </Box>
        <Box id="skills" w="full">
          <Skills />
        </Box>
        <Box id="services" w="full">
          <FreelanceServices />
        </Box>
        <Box id="projects" w="full">
          <Projects />
        </Box>
        <Box id="resume" w="full">
          <ResumeDownload />
        </Box>
        <Box id="certifications" w="full">
          <Certifications />
        </Box>
        <Box id="availability" w="full">
          <FullTimeAvailability />
        </Box>
        <Box id="techstack" w="full">
          <TechStack />
        </Box>
        <Box id="testimonials" w="full">
          <Testimonials />
        </Box>
        <Box id="contact" w="full">
          <ContactMe />
        </Box>
      </VStack>
    </Box>
  );
}
