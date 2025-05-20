"use client";

import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import {
  Box,
  Typography,
  useMediaQuery,
  Button,
  TextField,
} from "@mui/material";
import { motion } from "framer-motion";

function InputsSection() {
  const MotionBox = motion(Box);
  const MotionTypography = motion(Typography);
  const MotionButton = motion(Button);

  const [sendButtonDisabled, setSendButtonDisable] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
    typo_getintouch_desc: {
      fontSize: screenLessThan430
        ? "0.9rem"
        : screenGreaterThan430LessThan768 || screenGreaterThan768LessThan1024
        ? "1.0rem"
        : screenGreaterThan1024LessThan1280
        ? "1.05rem"
        : screenGreaterThan1280LessThan1440
        ? "1.1rem"
        : screenGreaterThan1440LessThan1920
        ? "1.2rem"
        : screenGreaterThan1920LessThan3840
        ? "1.3rem"
        : "1rem",
      fontWeight: "bold",
    },
    input_box: {
      //   border: "solid green 2px",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      width:
        screenLessThan430 || screenGreaterThan430LessThan768
          ? "85%"
          : screenGreaterThan768LessThan1024 ||
            screenGreaterThan1024LessThan1280 ||
            screenGreaterThan1280LessThan1440 ||
            screenGreaterThan1440LessThan1920 ||
            screenGreaterThan1920LessThan3840
          ? "80%"
          : "100%",
      paddingBottom: "30px",
      alignSelf: "center",
      margin: "0 auto",
    },
    button: {
      // border: "solid blue 1px",
      width:
        screenLessThan430 || screenGreaterThan430LessThan768
          ? "100%"
          : screenGreaterThan768LessThan1024 ||
            screenGreaterThan1024LessThan1280 ||
            screenGreaterThan1280LessThan1440 ||
            screenGreaterThan1440LessThan1920 ||
            screenGreaterThan1920LessThan3840
          ? "70%"
          : "",
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
      backgroundColor: sendButtonDisabled ? "grey" : "#c23237",
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
    },
    input_text: {
      "& .MuiInputBase-root": {
        backgroundColor: "#fff",
        "&:hover": {
          backgroundColor: "#fff",
        },
        "&.Mui-focused": {
          backgroundColor: "#fff",
        },
      },
      "& .MuiOutlinedInput-notchedOutline": {
        // borderColor: "#000",
      },
      "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#000",
      },
      "& .MuiInputLabel-root": {
        color: "#000",
      },
      "& .MuiInputLabel-root.Mui-focused": {
        color: "#c23237",
      },
    },
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangeMessage = (event) => {
    setMessage(event.target.value);
  };

  const handleSendEmail = (event) => {
    event.preventDefault();
    console.log("000", {
      name,
      email,
      message,
    });
    setName("");
    setEmail("");
    setMessage("");
  };

  useEffect(() => {
    if (name && email && message) {
      setSendButtonDisable(false);
    } else {
      setSendButtonDisable(true);
    }
  });
  return (
    <div>
      {" "}
      <Box sx={styles.input_box}>
        <Typography sx={styles.typo_getintouch_desc}>
          Feel free to leave us message anytime. We will get back to your as
          soon as we can!
        </Typography>
        <TextField
          id="outlined-basic"
          label="Full Name"
          variant="outlined"
          size="small"
          sx={styles.input_text}
          value={name}
          onChange={handleChangeName}
        />
        <TextField
          id="outlined-basic"
          label="Email Address"
          variant="outlined"
          size="small"
          sx={styles.input_text}
          value={email}
          onChange={handleChangeEmail}
        />
        <TextField
          id="outlined-basic"
          label="Message"
          variant="outlined"
          size="small"
          multiline
          minRows={6}
          maxRows={10}
          sx={styles.input_text}
          value={message}
          onChange={handleChangeMessage}
        />
        <MotionButton
          sx={styles.button}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          onClick={handleSendEmail}
          disabled={sendButtonDisabled}
        >
          Send
        </MotionButton>
      </Box>
    </div>
  );
}

export default InputsSection;
