import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Grid } from "@mui/material";

interface Props {
  children: React.ReactNode;
}

const Page = ({ children }: Props) => {
  return (
    <Grid container flexDirection="column">
      <Header />
      {children}
      <Footer />
    </Grid>
  );
};

export default Page;
