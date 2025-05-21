"use client";

import React, { useState, useEffect } from "react";

import {
  Box,
  Typography,
  useMediaQuery,
  IconButton,
  Menu,
  MenuItem,
  Button,
  TextField,
} from "@mui/material";

function InputSectionCarrier() {
  const styles = {};
  const handleSendEmail = () => {
    console.log("test!!!");
  };
  return (
    <form onSubmit={handleSendEmail}>
      <Box sx={styles.input_box}>
        <TextField
          id="f_name"
          name="f_name"
          label="First Name"
          variant="outlined"
          size="small"
        />
        <TextField
          id="l_name"
          name="l_name"
          label="Last Name"
          variant="outlined"
          size="small"
        />
        <TextField
          id="email"
          name="email"
          label="Email Address"
          variant="outlined"
          size="small"
        />
        <TextField
          id="name"
          name="name"
          label="Full Name"
          variant="outlined"
          size="small"
        />
        <TextField
          id="message"
          name="message"
          label="Message"
          variant="outlined"
          size="small"
          multiline
          minRows={6}
          maxRows={10}
        />
        <Button sx={styles.button} type="submit">
          Send
        </Button>
      </Box>
    </form>
  );
}

export default InputSectionCarrier;
