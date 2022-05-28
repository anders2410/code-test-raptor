import React from "react";
import { Box, Link, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      component="footer"
      sx={{ px: 2, mb: 3, mt: "20px" }}
    >
      <Typography sx={{ paddingBottom: "10px " }}>
        Provided by{" "}
        <Link
          href="https://github.com/anders2410"
          underline="none"
          sx={{ color: "#C80046" }}
        >
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
