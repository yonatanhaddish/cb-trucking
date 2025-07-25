"use client";

import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
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
  Badge,
  Stack,
  Alert,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import ErrorIcon from "@mui/icons-material/Error";

function InputSectionCarrier() {
  const [sendButtonDisabled, setSendButtonDisable] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [firstNameValidated, setFirstNameValidated] = useState(true);
  const [lastNameValidated, setLastNameValidated] = useState(true);
  const [emailValidated, setEmailValidated] = useState(true);
  const [phoneNumberValidated, setPhoneNumberValidated] = useState(true);
  const [phoneNumberFormat, setPhoneNumberFormat] = useState("");
  const [errorMessageSend, setErrorMessageSend] = useState(null);

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

  const MotionBox = motion(Box);
  const MotionTypography = motion(Typography);

  const styles = {
    contact_and_input: {
      // border: "solid green 2px",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      marginTop: screenGreaterThan1280LessThan1440
        ? "30px"
        : screenGreaterThan1440LessThan1920
        ? "90px"
        : screenGreaterThan1920LessThan3840
        ? "150px"
        : "",
      position: "relative",
    },
    address_info_box: {
      // border: "solid #000 1px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      backgroundColor: "#AEAEAE",
      marginLeft: "5%",
      paddingLeft: "20px",
      paddingRight: "15px",
      paddingTop: "10px",
      paddingBottom: "20px",
      margin: "0 auto",
      width: screenLessThan430
        ? "80% "
        : screenGreaterThan430LessThan768 || screenGreaterThan768LessThan1024
        ? "70%"
        : screenGreaterThan1024LessThan1280 || screenGreaterThan1280LessThan1440
        ? "80%"
        : screenGreaterThan1440LessThan1920
        ? "95%"
        : screenGreaterThan1920LessThan3840
        ? "90%"
        : "100%",
    },
    input_box: {
      // border: "solid #000 1px",
      // boxShadow: "0 0 10px #c23237",
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
      justifyContent: "center",
      backgroundColor: "#fff",
      width: screenLessThan430
        ? "90%"
        : screenGreaterThan430LessThan768
        ? "75%"
        : screenGreaterThan768LessThan1024
        ? "75%"
        : screenGreaterThan1024LessThan1280
        ? "85%"
        : screenGreaterThan1280LessThan1440
        ? "85%"
        : screenGreaterThan1920LessThan3840
        ? "94%"
        : "100%",
      margin: "0 auto",
      paddingTop: "30px",
      marginBottom: screenGreaterThan1024LessThan1280 ? "80px" : "100px",
    },
    single_input: {
      // border: "solid red 2px",
      width:
        screenLessThan430 || screenGreaterThan430LessThan768
          ? "80%"
          : screenGreaterThan768LessThan1024
          ? "40%"
          : screenGreaterThan1024LessThan1280 ||
            screenGreaterThan1280LessThan1440 ||
            screenGreaterThan1440LessThan1920 ||
            screenGreaterThan1920LessThan3840
          ? "45%"
          : "100%",
    },
    button: {
      // border: "solid blue 2px",
      width: screenGreaterThan768LessThan1024
        ? "80%"
        : screenGreaterThan1280LessThan1440
        ? "90%"
        : screenGreaterThan1440LessThan1920
        ? "90%"
        : screenGreaterThan1920LessThan3840
        ? "70%"
        : screenGreaterThan1024LessThan1280
        ? "90%"
        : "80%",
      marginBottom: "30px",
      marginTop: "20px",
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
    message_single_input: {
      // border: "solid red 2px",
      width:
        screenLessThan430 || screenGreaterThan430LessThan768
          ? "80%"
          : screenGreaterThan768LessThan1024
          ? "82%"
          : screenGreaterThan1024LessThan1280
          ? "92%"
          : screenGreaterThan1280LessThan1440
          ? "91%"
          : screenGreaterThan1440LessThan1920
          ? "91%"
          : screenGreaterThan1920LessThan3840
          ? "92%"
          : "100%",
    },
    // input_single_onactive: {
    //   border: firstNameValidated ? "solid grey 1px" : "solid red 1px",
    // },
    alert_box: {
      position: "absolute",
      left: screenLessThan430
        ? "10%"
        : screenGreaterThan430LessThan768 ||
          screenGreaterThan768LessThan1024 ||
          screenGreaterThan1024LessThan1280 ||
          screenGreaterThan1280LessThan1440 ||
          screenGreaterThan1440LessThan1920 ||
          screenGreaterThan1920LessThan3840
        ? "20%"
        : "15%",
      top: 0,
      // border: "solid red 2px",
      width: screenLessThan430
        ? "80%"
        : screenGreaterThan430LessThan768
        ? "60%"
        : screenGreaterThan768LessThan1024
        ? "60%"
        : screenGreaterThan1024LessThan1280 ||
          screenGreaterThan1280LessThan1440 ||
          screenGreaterThan1440LessThan1920 ||
          screenGreaterThan1920LessThan3840
        ? "60%"
        : "",
    },
  };

  const isValidName = (name) => {
    const fullNameRegex = /^[a-zA-Z]+$/;
    return fullNameRegex.test(name.trim());
  };
  const isValidPhoneNumber = (phone) => {
    return /^\d{10}$/.test(String(phone).trim());
  };
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim().toLowerCase());
  };
  const handleChangeFirstName = (event) => {
    if (isValidName(event.target.value)) {
      setFirstNameValidated(true);
    } else {
      setFirstNameValidated(false);
    }
    setFirstName(event.target.value);
  };
  const handleChangeLastName = (event) => {
    if (isValidName(event.target.value)) {
      setLastNameValidated(true);
    } else {
      setLastNameValidated(false);
    }
    setLastName(event.target.value);
  };
  const handleChangeEmail = (event) => {
    if (isValidEmail(event.target.value)) {
      setEmailValidated(true);
    } else {
      setEmailValidated(false);
    }
    setEmail(event.target.value);
  };
  const handleChangePhoneNumber = (event) => {
    const input = event.target.value;

    const digits = input.replace(/\D/g, "").slice(0, 10);

    setPhoneNumberValidated(digits.length === 10);

    let formatted = "";
    if (digits.length > 6) {
      formatted = `(${digits.slice(0, 3)}) ${digits.slice(3, 6)} ${digits.slice(
        6
      )}`;
    } else if (digits.length > 3) {
      formatted = `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    } else if (digits.length > 0) {
      formatted = `(${digits}`;
    }

    setPhoneNumber(formatted);
  };

  const handleChangeMessage = (event) => {
    setMessage(event.target.value);
  };
  const validatedAllInput = () => {
    if (
      firstNameValidated &&
      lastNameValidated &&
      emailValidated &&
      phoneNumberValidated &&
      message
    ) {
      return true;
    } else {
      return false;
    }
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (validatedAllInput()) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID,
          process.env.NEXT_PUBLIC_TEMPLATE_ID_02,
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
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhoneNumber("");
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
    if (firstName && lastName && email && phoneNumber && message) {
      setSendButtonDisable(false);
    } else {
      setSendButtonDisable(true);
    }
  });
  return (
    <Box sx={styles.contact_and_input}>
      {errorMessageSend !== null && (
        <MotionBox
          sx={styles.alert_box}
          initial={{ y: 0 }}
          animate={{ y: 60 }}
          transition={{ type: "spring", bounce: 0.25, duration: 1 }}
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
      <Box sx={styles.address_info_box}>
        <MotionTypography
          sx={{
            fontWeight: 600,
            borderBottom: "solid #c23237 1px",
            width: "80%",
            marginBottom: "10px",
          }}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
        >
          Support Center 24/7
        </MotionTypography>
        <MotionTypography
          sx={{ fontWeight: 500 }}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
        >
          +1 (647) 807 6911
        </MotionTypography>
        <MotionTypography
          sx={{ fontWeight: 500 }}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
        >
          cb@cbtransportation.org
        </MotionTypography>
      </Box>
      <form onSubmit={handleSubmitForm}>
        <Box sx={styles.input_box}>
          <TextField
            id="f_name"
            name="f_name"
            placeholder="First Name"
            variant="outlined"
            size="small"
            sx={{
              ...styles.single_input,
              "& .MuiOutlinedInput-root": {
                "& .MuiOutlinedInput-notchedOutline": {
                  border: firstNameValidated
                    ? "1px solid grey"
                    : "solid red 1px",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  border: firstNameValidated
                    ? "1px solid grey"
                    : "solid red 1px",
                },
              },
            }}
            value={firstName}
            onChange={handleChangeFirstName}
          />
          <TextField
            id="l_name"
            name="l_name"
            placeholder="Last Name"
            variant="outlined"
            size="small"
            sx={{
              ...styles.single_input,
              "& .MuiOutlinedInput-root": {
                "& .MuiOutlinedInput-notchedOutline": {
                  border: lastNameValidated
                    ? "1px solid grey"
                    : "solid red 1px",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  border: lastNameValidated
                    ? "1px solid grey"
                    : "solid red 1px",
                },
              },
            }}
            value={lastName}
            onChange={handleChangeLastName}
          />
          <TextField
            id="email"
            name="email"
            placeholder="Email Address"
            variant="outlined"
            size="small"
            sx={{
              ...styles.single_input,
              "& .MuiOutlinedInput-root": {
                "& .MuiOutlinedInput-notchedOutline": {
                  border: emailValidated ? "1px solid grey" : "solid red 1px",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  border: emailValidated ? "1px solid grey" : "solid red 1px",
                },
              },
            }}
            value={email}
            onChange={handleChangeEmail}
          />
          <TextField
            id="phone_number"
            name="phone_number"
            placeholder="Phone Number"
            variant="outlined"
            size="small"
            sx={{
              ...styles.single_input,
              "& .MuiOutlinedInput-root": {
                "& .MuiOutlinedInput-notchedOutline": {
                  border: phoneNumberValidated
                    ? "1px solid grey"
                    : "solid red 1px",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  border: phoneNumberValidated
                    ? "1px solid grey"
                    : "solid red 1px",
                },
              },
            }}
            value={phoneNumber}
            onChange={handleChangePhoneNumber}
          />
          <TextField
            id="message"
            name="message"
            placeholder="Message"
            variant="outlined"
            size="small"
            multiline
            maxRows={8}
            minRows={7}
            sx={{
              ...styles.single_input,
              "& .MuiOutlinedInput-root": {
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "1px solid grey",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  border: "1px solid grey",
                },
              },
              ...styles.message_single_input,
            }}
            value={message}
            onChange={handleChangeMessage}
          />
          <input type="hidden" id="subject" name="subject" value="Carrier" />
          <Button
            type="submit"
            sx={styles.button}
            disabled={sendButtonDisabled}
          >
            Send
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default InputSectionCarrier;
