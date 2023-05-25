import React, { useState } from "react";
import {
  Box,
  Card,
  Typography,
  Grid,
  Button,
  Avatar,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";

export default function Dropdownlist() {
  const [langue, setLangue] = useState("");
  const handleChange = (event) => {
    setLangue(event.target.value);
  };
  return (
    <Box>
      <FormControl
        style={{
          boxSizing: "border-box",
          height: "40px",
          backgroundColor: "white",
          boxShadow: "0 0 0 0 rgba(90,113,208,0.11)",
          borderRadius: "8px",
          border: "1px solid #DDE4EB",
        }}
        fullWidth
      >
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={langue || "fr"} // Set default value to "fr" (French)
          onChange={handleChange}
          style={{ height: "40px",borderRadius: "8px"}}
        >
          <MenuItem value={"fr"}>Langue : Français</MenuItem>
          <MenuItem value={"en"}>Langue : Anglais</MenuItem>
          <MenuItem value={"ar"}>Langue : Arabe</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
