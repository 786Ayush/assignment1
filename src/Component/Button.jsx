import { Button } from "@mui/material";
import React from "react";

const CustomButton = ({ onClick, children }) => {
  return (
    // <div className="h-screen flex items-center justify-center">
      <Button variant="contained" onClick={onClick}>
        {children}
      </Button>
    // </div>
  );
};

export default CustomButton;
