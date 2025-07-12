"use client";

import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import {
  Box,
  Typography,
  useMediaQuery,
  Button,
  TextField,
  Alert,
} from "@mui/material";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import CheckIcon from "@mui/icons-material/Check";
import ErrorIcon from "@mui/icons-material/Error";

function InputsSection({ insuranceNameSelectedFromContact }) {
  const MotionBox = motion(Box);
  const MotionTypography = motion(Typography);
  const MotionButton = motion(Button);

  const [sendButtonDisabled, setSendButtonDisable] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameValidated, setNameValidated] = useState(true);
  const [emailValidated, setEmailValidated] = useState(true);
  const [errorMessageSend, setErrorMessageSend] = useState(null);
  const [selectedCertificate, setSelectedCertificate] = useState("");

  useEffect(() => {
    setSelectedCertificate(insuranceNameSelectedFromContact);
  }, [insuranceNameSelectedFromContact]);

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
      position: "relative",
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
    input_text: {},
    alert_box: {
      position: "absolute",
      left: 0,
      top: -20,
      // border: "solid red 2px",
      width: "100%",
    },
  };

  const handleChangeName = (event) => {
    if (isValidName(event.target.value)) {
      setNameValidated(true);
    } else {
      setNameValidated(false);
    }
    setName(event.target.value);
  };

  const handleChangeEmail = (event) => {
    if (isValidEmail(event.target.value)) {
      setEmailValidated(true);
    } else {
      setEmailValidated(false);
    }
    setEmail(event.target.value);
  };
  const handleChangeMessage = (event) => {
    setMessage(event.target.value);
  };

  const isValidName = (name) => {
    const fullNameRegex = /^[a-zA-Z]+( [a-zA-Z]+)*$/;
    return fullNameRegex.test(name.trim());
  };
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim().toLowerCase());
  };
  const validatedAllInput = () => {
    if (nameValidated && emailValidated) {
      return true;
    } else {
      return false;
    }
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    if (validatedAllInput()) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID,
          process.env.NEXT_PUBLIC_TEMPLATE_ID,
          e.target,
          process.env.NEXT_PUBLIC_PUBLIC_KEY
        )
        .then(
          (result) => {
            setErrorMessageSend(false);
          },
          (error) => {
            setErrorMessageSend(true);
          }
        );
      e.target.reset();
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setErrorMessageSend(true);
    }
  };

  useEffect(() => {
    if (errorMessageSend !== null) {
      const timer = setTimeout(() => {
        setErrorMessageSend(null);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [errorMessageSend]);

  useEffect(() => {
    if (name && email && message) {
      setSendButtonDisable(false);
    } else {
      setSendButtonDisable(true);
    }
  });

  return (
    <form onSubmit={handleSendEmail}>
      <Box sx={styles.input_box}>
        {errorMessageSend !== null && (
          <MotionBox
            sx={styles.alert_box}
            initial={{ y: -100 }}
            animate={{ y: 15 }}
            transition={{ type: "spring", bounce: 0.25, duration: 2 }}
          >
            <Alert
              icon={
                errorMessageSend ? (
                  <ErrorIcon fontSize="inherit" />
                ) : (
                  <CheckIcon fontSize="inherit" />
                )
              }
              severity={errorMessageSend ? "error" : "success"}
            >
              {errorMessageSend
                ? "Failed to send the message. Please try again."
                : "Message sent successfully!"}
            </Alert>
          </MotionBox>
        )}

        <Typography sx={styles.typo_getintouch_desc}>
          Feel free to leave us message anytime. We will get back to your as
          soon as we can!
        </Typography>
        <TextField
          id="name"
          name="name"
          placeholder="Full Name"
          variant="outlined"
          size="small"
          sx={{
            ...styles.input_text,
            "& .MuiOutlinedInput-root": {
              "& .MuiOutlinedInput-notchedOutline": {
                border: nameValidated ? "1px solid grey" : "solid red 1px",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                border: nameValidated ? "1px solid grey" : "solid red 1px",
              },
            },
          }}
          value={name}
          onChange={handleChangeName}
        />
        <TextField
          id="email"
          name="email"
          placeholder="Email Address"
          variant="outlined"
          size="small"
          sx={{
            ...styles.input_text,
            "& .MuiOutlinedInput-root": {
              "& .MuiOutlinedInput-notchedOutline": {
                border: emailValidated ? "1px solid grey" : "solid red 1px",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                border: emailValidated ? "1px solid grey" : "solid red 1px",
              },
            },
          }}
          onChange={handleChangeEmail}
        />
        <TextField
          id="message"
          name="message"
          placeholder="Message"
          variant="outlined"
          size="small"
          multiline
          minRows={6}
          maxRows={10}
          sx={{
            ...styles.input_text,
            "& .MuiOutlinedInput-root": {
              "& .MuiOutlinedInput-notchedOutline": {
                border: "1px solid grey",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                border: "1px solid grey",
              },
            },
          }}
          value={message}
          onChange={handleChangeMessage}
        />
        <input
          type="hidden"
          id="subject"
          name="subject"
          value={
            selectedCertificate === "" ? "General Inquiry" : selectedCertificate
          }
        />
        <MotionButton
          sx={styles.button}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          initial={{ transform: "translateY(30px)" }}
          whileInView={{ transform: "translateY(0px)" }}
          transition={{ type: "spring", bounce: 0.25, visualDuration: 1 }}
          //   onClick={handleSendEmail}
          disabled={sendButtonDisabled}
          type="submit"
        >
          Send
        </MotionButton>
      </Box>
    </form>
  );
}

export default InputsSection;
