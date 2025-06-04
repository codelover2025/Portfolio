import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      50: "#f5f3ff",
      100: "#ede9fe",
      200: "#ddd6fe",
      300: "#c4b5fd",
      400: "#a78bfa",
      500: "#8b5cf6",
      600: "#7c3aed",
      700: "#6d28d9",
      800: "#5b21b6",
      900: "#4c1d95",
    },
    accent: {
      50: "#e0f2fe",
      100: "#bae6fd",
      200: "#7dd3fc",
      300: "#38bdf8",
      400: "#0ea5e9",
      500: "#0284c7",
      600: "#0369a1",
      700: "#075985",
      800: "#0c4a6e",
      900: "#082f49",
    },
  },
  styles: {
    global: (props) => ({
      body: {
        bg: "gray.900",
        color: "white",
        minHeight: "100vh",
        margin: 0,
        padding: 0,
      },
      html: {
        scrollBehavior: "smooth",
      },
    }),
  },
  components: {
    Heading: {
      baseStyle: {
        fontFamily: "heading",
      },
    },
    Text: {
      baseStyle: {
        fontFamily: "body",
      },
    },
    Badge: {
      baseStyle: {
        textTransform: "none",
      },
    },
  },
  fonts: {
    heading: "Inter, system-ui, sans-serif",
    body: "Inter, system-ui, sans-serif",
  },
});

export default theme; 