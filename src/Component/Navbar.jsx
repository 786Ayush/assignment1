// Navbar.js
"use client";
import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";

const Navbar = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  useEffect(() => {
    setIsEnabled(true);
  }, []);

  // If server-side rendering, render an empty div instead of null
  if (typeof window === "undefined" || !isEnabled) {
    return <div style={{ display: "none" }} />;
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        <Link href="/" passHref>
          <Button color="inherit">Home</Button>
        </Link>
        <Link href="/register" passHref>
          <Button color="inherit">Register</Button>
        </Link>

        <Link href="/home/anything" passHref>
          <Button color="inherit">Anything</Button>
        </Link>

        <Link href="/city/mumbai" passHref>
          <Button color="inherit">City</Button>
        </Link>
        {/* Add more links/buttons as needed */}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
