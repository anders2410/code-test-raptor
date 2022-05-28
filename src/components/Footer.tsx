import React from "react";
import { Box, Link, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      component="footer"
      sx={{ px: 2, mb: 3, mt: "auto" }}
    >
      <Typography sx={{ paddingBottom: "10px " }}>
        Provided by{" "}
        <Link href="https://appseed.us" underline="none">
          Anders Holt
        </Link>
      </Typography>
      <Typography sx={{ opacity: "0.4" }}>
        Code Test Raptor - Built with MUI
      </Typography>
    </Box>
  );
};

export default Footer;
