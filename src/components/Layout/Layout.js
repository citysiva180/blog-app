import React from "react";
import { Grid } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
function Layout({ children }) {
  return (
    <Grid
      minh="100vh"
      templateColumns="repeat(3,1fr)"
      templateRows="max-content"
      gap={6}
      p={3}
    >
      <ColorModeSwitcher
        position="absolute"
        top={3}
        right={3}
      ></ColorModeSwitcher>
      {children}
    </Grid>
  );
}

export default Layout;
