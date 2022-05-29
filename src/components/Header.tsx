import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { House } from "@mui/icons-material";

export default function Header() {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 0 }}>
      <AppBar position="static" sx={{ backgroundColor: "#17233E" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => navigate("/")}
            sx={{ mr: 2 }}
          >
            <House />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Code Test Raptor
          </Typography>
          <Button onClick={() => navigate("/entry")} color="inherit">
            Create New Card
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
