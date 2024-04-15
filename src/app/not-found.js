"use client";
import React from "react";
import Link from "next/link";
import { Container, Typography, Button } from "@mui/material";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center mt-16 justify-center">
      <Typography variant="h2" component="h1" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1" gutterBottom>
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </Typography>
      <div className="mt-4">
        <Link href="/" passHref>
          <Button variant="contained" color="primary">
            Go to Homepage
          </Button>
        </Link>
      </div>
    </Container>
  );
}
