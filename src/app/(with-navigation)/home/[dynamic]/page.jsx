"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import CustomButton from "@/Component/Button";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
// import CustomButton from "./Button"; // Assuming Button.js is in the same directory

const Dynamic = () => {
  const { dynamic: dynamicParam } = useParams(); // Assuming 'dynamic' is the parameter name
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <div className=" flex items-center justify-center">
      <CustomButton onClick={handleDialogOpen}> Open Pop </CustomButton>
      <Dialog open={isDialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Dynamic Content</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Content from router: {dynamicParam}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <CustomButton onClick={handleDialogClose}>Close</CustomButton>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Dynamic;
