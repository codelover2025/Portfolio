import React from "react";
import { ChakraProvider, Box, Container } from "@chakra-ui/react";
import theme from "./theme";
import Header from "./components/Header";
import SectionList from "./components/SectionList";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box minH="100vh" bg="gray.900" color="white">
        <Container maxW="container.xl" py={8}>
          <Header />
          <SectionList />
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default App;
