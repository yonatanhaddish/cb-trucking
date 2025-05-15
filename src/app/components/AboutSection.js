"use client";

import React from "react";
import { Box, Typography, useMediaQuery, Button } from "@mui/material";
import { motion } from "framer-motion";

function AboutSection() {
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
    parent_aboutsection: {
      // border: "solid blue 2px",
      display: "flex",
      flexDirection:
        screenLessThan430 ||
        screenGreaterThan430LessThan768 ||
        screenGreaterThan768LessThan1024
          ? "column"
          : "row",
      justifyContent: "center",
    },
    heading_aboutus: {
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
        ? "60%"
        : screenGreaterThan1024LessThan1280 ||
          screenGreaterThan430LessThan768 ||
          screenGreaterThan768LessThan1024 ||
          screenGreaterThan1280LessThan1440
        ? "20%"
        : screenGreaterThan1440LessThan1920
        ? "15%"
        : "15%",
      textAlign: "center",
      marginBottom: "50px",
      justifySelf: "center",
    },
    aboutsection_image_box: {
      border:
        screenLessThan430 ||
        screenGreaterThan430LessThan768 ||
        screenGreaterThan768LessThan1024 ||
        screenGreaterThan1280LessThan1440
          ? ""
          : "",
      boxShadow:
        screenLessThan430 ||
        screenGreaterThan430LessThan768 ||
        screenGreaterThan768LessThan1024
          ? ""
          : "",
      height: screenLessThan430
        ? "300px"
        : screenGreaterThan430LessThan768
        ? "350px"
        : screenGreaterThan1920LessThan3840
        ? "700px"
        : screenGreaterThan1024LessThan1280
        ? "400px"
        : screenGreaterThan768LessThan1024
        ? "450px"
        : screenGreaterThan1280LessThan1440
        ? "500px"
        : screenGreaterThan1440LessThan1920
        ? "600px"
        : "300px",
      position: "relative",
      width: screenLessThan430
        ? "98%"
        : screenGreaterThan1024LessThan1280
        ? "45%"
        : screenGreaterThan430LessThan768
        ? "70%"
        : screenGreaterThan768LessThan1024
        ? "70%"
        : screenGreaterThan1280LessThan1440
        ? "45%"
        : screenGreaterThan1440LessThan1920
        ? "40%"
        : screenGreaterThan1920LessThan3840
        ? "40%"
        : "30%",
      alignContent: "center",
      justifyItems: "center",
      alignSelf: "center",
      // border: "solid green 2px",
    },
    aboutsection_img1: {
      backgroundImage: `url("/images/aboutus.jpg")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height:
        screenGreaterThan768LessThan1024 || screenGreaterThan1920LessThan3840
          ? "80%"
          : screenGreaterThan430LessThan768
          ? "85%"
          : "70%",
      width:
        screenGreaterThan768LessThan1024 || screenGreaterThan1920LessThan3840
          ? "80%"
          : screenGreaterThan430LessThan768
          ? "80%"
          : "70%",
      // border: "solid black 1px",
      boxShadow: "0 0 10px black",
      margin: screenGreaterThan768LessThan1024 ? "0 auto" : "",
    },
    aboutsection_img2: {
      backgroundImage: `url("/images/aboutus2.jpg")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: screenGreaterThan1920LessThan3840
        ? "200px"
        : screenLessThan430
        ? "120px"
        : screenGreaterThan1440LessThan1920
        ? "200px"
        : "160px",
      width: screenGreaterThan1920LessThan3840
        ? "200px"
        : screenLessThan430
        ? "120px"
        : screenGreaterThan1440LessThan1920
        ? "200px"
        : "160px",
      position: "absolute",
      top: "end",
      left: "end",
      right: screenGreaterThan1280LessThan1440
        ? 40
        : screenGreaterThan1920LessThan3840
        ? 50
        : screenGreaterThan1024LessThan1280
        ? 40
        : screenLessThan430
        ? 20
        : screenGreaterThan768LessThan1024
        ? 40
        : screenGreaterThan1440LessThan1920
        ? 70
        : screenGreaterThan430LessThan768
        ? -40
        : 0,
      bottom: screenGreaterThan1280LessThan1440
        ? 20
        : screenGreaterThan1920LessThan3840
        ? 30
        : screenGreaterThan1024LessThan1280
        ? 10
        : screenLessThan430
        ? -10
        : screenGreaterThan768LessThan1024
        ? -10
        : screenGreaterThan1440LessThan1920
        ? 50
        : screenGreaterThan430LessThan768
        ? -60
        : 0,
      borderRadius: "360px",
      border: "solid #000 3px",
      boxShadow: `
    0 0 2px #000,
    0 0 2px #000,
    0 0 2px #000,
    0 0 2px #000
  `,
    },
    aboutsection_desc_box: {
      // border: "solid black 1px",
      boxShadow: "0 0 10px black",
      width:
        screenGreaterThan1024LessThan1280 ||
        screenGreaterThan1280LessThan1440 ||
        screenGreaterThan1440LessThan1920 ||
        screenGreaterThan1920LessThan3840
          ? "45%"
          : screenLessThan430
          ? "90%"
          : screenGreaterThan430LessThan768
          ? "70%"
          : screenGreaterThan768LessThan1024
          ? "70%"
          : "100%",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#c23237",
      justifyContent: "center",
      alignItems: "center",
      height: screenLessThan430
        ? "520px"
        : screenGreaterThan1024LessThan1280 ||
          screenGreaterThan1280LessThan1440 ||
          screenGreaterThan1440LessThan1920 ||
          screenGreaterThan1920LessThan3840
        ? "full"
        : screenGreaterThan430LessThan768
        ? "500px"
        : screenGreaterThan768LessThan1024
        ? "480px"
        : "",
      gap: "30px",
      margin:
        screenLessThan430 ||
        screenGreaterThan430LessThan768 ||
        screenGreaterThan768LessThan1024
          ? "0 auto"
          : "",
    },
    typo_desc: {
      // border: "solid black 1px",
      // boxShadow: "0 0 10px black",
      width: screenLessThan430
        ? "80%"
        : screenGreaterThan1024LessThan1280 || screenGreaterThan1280LessThan1440
        ? "90%"
        : screenGreaterThan1440LessThan1920 || screenGreaterThan1920LessThan3840
        ? "75%"
        : screenGreaterThan430LessThan768 || screenGreaterThan768LessThan1024
        ? "70%"
        : "100%",
      fontWeight: 500,
      fontSize: screenLessThan430
        ? "1.05rem"
        : screenGreaterThan430LessThan768 || screenGreaterThan768LessThan1024
        ? "1.0rem"
        : screenGreaterThan1024LessThan1280
        ? "1.1rem"
        : screenGreaterThan1280LessThan1440
        ? "1.2rem"
        : screenGreaterThan1440LessThan1920
        ? "1.3rem"
        : screenGreaterThan1920LessThan3840
        ? "1.4rem"
        : "1.6rem",
      color: "#000",
      borderRadius: "6px",
    },
  };
  return (
    <div id="about_us_page">
      <Box
        sx={{
          backgroundColor: "#d9d9d9",
          width: screenGreaterThan1920LessThan3840 ? "80%" : "100%",
          margin: screenGreaterThan1920LessThan3840 ? "0 auto" : "",
          paddingTop: "100px",
        }}
      >
        <motion.div
          initial={{ transform: "translateY(-100px)" }}
          whileInView={{ transform: "translateY(10%)" }}
          transition={{ type: "spring", bounce: 0.25, visualDuration: 1 }}
        >
          <Typography sx={styles.heading_aboutus}>About Us</Typography>
        </motion.div>
        <Box sx={styles.parent_aboutsection}>
          <Box sx={styles.aboutsection_image_box}>
            <Box sx={styles.aboutsection_img1}></Box>
            <Box sx={styles.aboutsection_img2}></Box>
          </Box>
          <Box sx={styles.aboutsection_desc_box}>
            <Typography sx={styles.typo_desc}>
              <span
                style={{
                  color: "#000",
                  // fontWeight: "bold",
                }}
              >
                CB Trucking
              </span>{" "}
              is one of Canada's most exciting third-party logistics providers.
              We take pride in our commitment to service, competitiveness, and
              reliability. At CB Trucking we strive to serve not only our
              customers but also our carriers with the same level of dedication.
            </Typography>
            <Typography sx={styles.typo_desc}>
              We are well-equipped to meet your needs with our vast experience
              in the transportation industry and a deep understanding of the
              produce sector and refrigerated logistics.
            </Typography>
            <Typography sx={styles.typo_desc}>
              Just a phone call away, we offer both competitive and fixed
              pricing. Our reliability is unmatched.
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default AboutSection;
