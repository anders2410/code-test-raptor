import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Container, Grid } from "@mui/material";

interface Props {
  children: React.ReactNode;
}

const Page = ({ children }: Props) => {
  return (
    <Grid container flexDirection="column" sx={{ minHeight: "100vh" }}>
      <Header />
      <Container maxWidth="lg" sx={{ margin: "20px auto auto auto" }}>
        {children}
      </Container>
      <Footer />
    </Grid>
  );
};

export default Page;
