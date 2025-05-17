"use client";

import React, { useState, useEffect } from "react";

import {
  Box,
  Typography,
  useMediaQuery,
  Button,
  TextField,
} from "@mui/material";
import { motion } from "framer-motion";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import EmailIcon from "@mui/icons-material/Email";

function ContactUs() {
  const [loading, setLoading] = useState(undefined);

  const MotionBox = motion(Box);
  const MotionTypography = motion(Typography);
  const MotionButton = motion(Button);

  useEffect(() => {
    setLoading(false);
  }, []);
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
    parent_contactus_box: {
      // border: "solid green 2px",
      backgroundColor: "#D9D9D9",
      paddingTop: "100px",
      width: screenGreaterThan1920LessThan3840 ? "80%" : "100%",
      margin: screenGreaterThan1920LessThan3840 ? "0 auto" : "",
    },
    heading_contactus: {
      fontSize: screenLessThan430
        ? "32px"
        : screenGreaterThan430LessThan768
        ? "28px"
        : screenGreaterThan768LessThan1024
        ? "32px"
        : screenGreaterThan1024LessThan1280
        ? "36px"
        : screenGreaterThan1280LessThan1440
        ? "40px"
        : screenGreaterThan1440LessThan1920
        ? "44px"
        : "52px",
      borderBottom: "solid #c23237 2px",
      width: screenLessThan430
        ? "50%"
        : screenGreaterThan1024LessThan1280 || screenGreaterThan1280LessThan1440
        ? "40%"
        : screenGreaterThan1440LessThan1920
        ? "30%"
        : screenGreaterThan768LessThan1024
        ? "30%"
        : screenGreaterThan1920LessThan3840
        ? "20%"
        : screenGreaterThan430LessThan768
        ? "30%"
        : "15%",
      textAlign: "center",
      marginBottom: "50px",
      justifySelf: "center",
    },
    contactus_box: {
      // border: "solid blue 2px",
      display: "flex",
      flexDirection:
        screenLessThan430 ||
        screenGreaterThan430LessThan768 ||
        screenGreaterThan768LessThan1024
          ? "column"
          : "row",
      gap:
        screenLessThan430 ||
        screenGreaterThan430LessThan768 ||
        screenGreaterThan768LessThan1024
          ? "30px"
          : screenGreaterThan1440LessThan1920 ||
            screenGreaterThan1920LessThan3840
          ? "100px"
          : "",

      justifyContent:
        screenGreaterThan1024LessThan1280 || screenGreaterThan1280LessThan1440
          ? "space-evenly"
          : screenGreaterThan1440LessThan1920 ||
            screenGreaterThan1920LessThan3840
          ? "center"
          : "",
      paddingBottom: "100px",
      marginTop: "50px",
    },
    contact_info_box: {
      // border: "solid green 1px",
      width: screenLessThan430
        ? "85%"
        : screenGreaterThan430LessThan768
        ? "60%"
        : screenGreaterThan768LessThan1024
        ? "65%"
        : screenGreaterThan1024LessThan1280 ||
          screenGreaterThan1280LessThan1440 ||
          screenGreaterThan1920LessThan3840
        ? "35%"
        : screenGreaterThan1440LessThan1920
        ? "30%"
        : "100%",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      alignSelf: "center",
    },
    contact_input_box: {
      // border: "solid red 2px",
      // boxShadow: "0 0 2px #000",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      width: screenLessThan430
        ? "85%"
        : screenGreaterThan430LessThan768
        ? "60%"
        : screenGreaterThan768LessThan1024
        ? "65%"
        : screenGreaterThan1024LessThan1280 || screenGreaterThan1280LessThan1440
        ? "45%"
        : screenGreaterThan1440LessThan1920
        ? "35%"
        : screenGreaterThan1920LessThan3840
        ? "30%"
        : "100%",
      alignSelf: "center",
      backgroundColor: "#fff",
      paddingTop: "20px",
      borderRadius: "2px",
    },
    typo_getintouch_heading: {
      fontSize:
        screenLessThan430 || screenGreaterThan430LessThan768
          ? "1.2rem"
          : "1.3rem",
      color: "#c23237",
    },
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
    single_contact_info: {
      // border: "solid green 2px",
      display: "flex",
      flexDirection: "row",
      gap: screenGreaterThan1440LessThan1920 ? "10px" : "15px",
    },
    input_box: {
      // border: "solid green 2px",
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

  if (loading === undefined) {
    return <div>Loading...</div>;
  }
  return (
    <div id="contact_us_page">
      <Box sx={styles.parent_contactus_box}>
        <MotionTypography
          sx={styles.heading_contactus}
          initial={{ transform: "translateY(-100px)" }}
          whileInView={{ transform: "translateY(0px)" }}
          transition={{ type: "spring", bounce: 0.25, visualDuration: 1 }}
        >
          Contact Us
        </MotionTypography>

        <Box sx={styles.contactus_box}>
          <Box sx={styles.contact_info_box}>
            {screenLessThan430 ||
            screenGreaterThan430LessThan768 ||
            screenGreaterThan768LessThan1024 ? (
              <></>
            ) : (
              <MotionTypography
                sx={styles.typo_getintouch_heading}
                initial={{ transform: "translateX(-100px)" }}
                whileInView={{ transform: "translateX(0px)" }}
                transition={{ type: "spring", bounce: 0.25, visualDuration: 1 }}
              >
                Get In Touch
              </MotionTypography>
            )}
            <MotionTypography
              sx={styles.typo_getintouch_desc}
              initial={{ transform: "translateX(-100px)" }}
              whileInView={{ transform: "translateX(0px)" }}
              transition={{
                type: "spring",
                bounce: 0.25,
                visualDuration: 1.2,
              }}
            >
              Have questions or need a quote? Get in touch with Reliable
              Trucking and Transportation Services. We're here to provide prompt
              and dependable support for all your transportation needs.
            </MotionTypography>
            <MotionBox
              sx={styles.single_contact_info}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
              }}
            >
              <LocationPinIcon
                sx={{
                  color: "#c23237",
                }}
              />
              <Typography>123 Wellington Ave. E</Typography>
            </MotionBox>
            <MotionBox
              sx={styles.single_contact_info}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                scale: { type: "spring", visualDuration: 0.3, bounce: 0.5 },
              }}
            >
              <PhoneIcon
                sx={{
                  color: "#c23237",
                }}
              />
              <Typography>(123) 456-7890</Typography>
            </MotionBox>
            <MotionBox
              sx={styles.single_contact_info}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
              }}
            >
              <EmailIcon
                sx={{
                  color: "#c23237",
                }}
              />
              <Typography>cb-trucking@email.com</Typography>
            </MotionBox>
          </Box>
          <Box sx={styles.contact_input_box}>
            <Box sx={styles.input_box}>
              <Typography sx={styles.typo_getintouch_desc}>
                Feel free to leave us message anytime. We will get back to your
                as soon as we can!
              </Typography>
              <TextField
                id="outlined-basic"
                label="Full Name"
                variant="outlined"
                size="small"
                sx={styles.input_text}
              />
              <TextField
                id="outlined-basic"
                label="Email Address"
                variant="outlined"
                size="small"
                sx={styles.input_text}
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
              />

              <MotionButton
                sx={styles.button}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.8 }}
                initial={{ transform: "translateY(50px)" }}
                whileInView={{ transform: "translateY(0px)" }}
                transition={{ type: "spring", bounce: 0.25, visualDuration: 1 }}
              >
                Send
              </MotionButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default ContactUs;
