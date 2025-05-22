"use client";

import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";

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
  const screenLessThan430 = useMediaQuery(
    "(min-width: 100px) and (max-width: 430px)"
  );
  const screenGreaterThan430LessThan768 = useMediaQuery(
    "(min-width: 431px) and (max-width: 768px)"
  );
  const screenGreaterThan768LessThan1024 = useMediaQuery(
    "(min-width: 769px) and (max-width: 1024px)"
  );
  const screenGreaterThan1024LessThan1280 = useMediaQuery(
    "(min-width: 1025px) and (max-width: 1280px)"
  );
  const screenGreaterThan1280LessThan1440 = useMediaQuery(
    "(min-width: 1281px) and (max-width: 1440px)"
  );
  const screenGreaterThan1440LessThan1920 = useMediaQuery(
    "(min-width: 1441px) and (max-width: 1920px)"
  );
  const screenGreaterThan1920LessThan3840 = useMediaQuery(
    "(min-width: 1921px) and (max-width: 3840px)"
  );
  const styles = {
    contact_and_input: {
      // border: "solid green 2px",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    },
    address_info_box: {
      border: "solid #000 1px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      backgroundColor: "#AEAEAE",
      marginLeft: "5%",
      paddingLeft: "20px",
      paddingRight: "15px",
      paddingTop: "10px",
      paddingBottom: "20px",
    },
    input_box: {
      // border: "solid #000 1px",
      // boxShadow: "0 0 10px #c23237",
      borderTop: "none",
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
      justifyContent: "center",
      backgroundColor: "#fff",
      width: screenLessThan430 ? "90%" : "100%",
      margin: "0 auto",
      paddingTop: "30px",
    },
    single_input: {
      // border: "solid red 2px",
      width: screenLessThan430 ? "80%" : "50%",
    },
    button: {
      // border: "solid blue 2px",
      width: "80%",
      marginBottom: "30px",
      marginTop: "20px",
      backgroundColor: "#c23237",
      color: "#fff",
      fontSize: screenGreaterThan1920LessThan3840
        ? "20px"
        : screenGreaterThan1440LessThan1920
        ? "18px"
        : screenGreaterThan1024LessThan1280
        ? "16px"
        : screenGreaterThan768LessThan1024
        ? "15px"
        : "14px",
      alignSelf: "center",
      textAlign: "center",
      height:
        screenLessThan430 ||
        screenGreaterThan430LessThan768 ||
        screenGreaterThan768LessThan1024 ||
        screenGreaterThan1024LessThan1280 ||
        screenGreaterThan1280LessThan1440
          ? "40px"
          : screenGreaterThan1440LessThan1920 ||
            screenGreaterThan1920LessThan3840
          ? "50px"
          : "",
    },
  };
  const handleSendEmail = () => {
    console.log("test!!!");
  };
  return (
    <Box sx={styles.contact_and_input}>
      <Box sx={styles.address_info_box}>
        <Typography sx={{ fontWeight: 600, marginBottom: "15px" }}>
          Feel free to leave us message anytime. We will get back to your as
          soon as we can!
        </Typography>
        <Typography
          sx={{
            fontWeight: 600,
            borderBottom: "solid #c23237 1px",
            width: "80%",
            marginBottom: "10px",
          }}
        >
          Support Center 24/7
        </Typography>
        <Typography sx={{ fontWeight: 500 }}> (123) 456 7890</Typography>
        <Typography sx={{ fontWeight: 500 }}> cb-trucking@email.com</Typography>
      </Box>
      <form onSubmit={handleSendEmail}>
        <Box sx={styles.input_box}>
          <TextField
            id="f_name"
            name="f_name"
            label="First Name"
            variant="outlined"
            size="small"
            sx={styles.single_input}
          />
          <TextField
            id="l_name"
            name="l_name"
            label="Last Name"
            variant="outlined"
            size="small"
            sx={styles.single_input}
          />
          <TextField
            id="email"
            name="email"
            label="Email Address"
            variant="outlined"
            size="small"
            sx={styles.single_input}
          />
          <TextField
            id="phone_number"
            name="phone_number"
            label="Phone Number"
            variant="outlined"
            size="small"
            sx={styles.single_input}
          />
          <TextField
            id="message"
            name="message"
            label="Message"
            variant="outlined"
            size="small"
            multiline
            maxRows={8}
            minRows={6}
            sx={styles.single_input}
          />
          <Button type="submit" sx={styles.button}>
            Send
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default InputSectionCarrier;
