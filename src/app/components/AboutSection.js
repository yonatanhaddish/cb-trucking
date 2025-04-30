"use client";

import React from "react";
import { Box, Typography, useMediaQuery, Button } from "@mui/material";

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
      // border: "solid green 2px",
      display: "flex",
      flexDirection:
        screenLessThan430 ||
        screenGreaterThan430LessThan768 ||
        screenGreaterThan768LessThan1024
          ? "column"
          : "row",
      gap: screenGreaterThan1920LessThan3840 ? "10%" : "20px",
      alignItems: "center",
      justifyContent: "center",
    },

    heading_aboutus: {
      fontSize: screenLessThan430
        ? "24px"
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
        : screenGreaterThan1024LessThan1280 ||
          screenGreaterThan430LessThan768 ||
          screenGreaterThan768LessThan1024 ||
          screenGreaterThan1280LessThan1440
        ? "20%"
        : screenGreaterThan1440LessThan1920
        ? "15%"
        : "15%",
      textAlign: "center",
      marginLeft: "5%",
      marginBottom: "30px",
    },
    aboutsection_image_box: {
      // border: "solid #000 2px",
      height:
        screenLessThan430 || screenGreaterThan1024LessThan1280
          ? "300px"
          : screenGreaterThan430LessThan768
          ? "350px"
          : screenGreaterThan1440LessThan1920 ||
            screenGreaterThan1920LessThan3840
          ? "400px"
          : "300px",
      position: "relative",
      width: screenLessThan430
        ? "90%"
        : screenGreaterThan1024LessThan1280
        ? "40%"
        : screenGreaterThan430LessThan768
        ? "70%"
        : screenGreaterThan768LessThan1024
        ? "55%"
        : screenGreaterThan1280LessThan1440 || screenGreaterThan1440LessThan1920
        ? "30%"
        : "30%",
    },
    aboutsection_img1: {
      backgroundImage: `url("/images/aboutus.jpg")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "80%",
      width: "80%",
      //   border: "solid #c23237 2px",
    },
    aboutsection_img2: {
      backgroundImage: `url("/images/aboutus2.jpg")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: screenGreaterThan1920LessThan3840 ? "200px" : "160px",
      width: screenGreaterThan1920LessThan3840 ? "200px" : "160px",
      position: "absolute",
      top: "end",
      left: "end",
      right:
        screenGreaterThan1280LessThan1440 || screenGreaterThan1440LessThan1920
          ? 40
          : screenGreaterThan1920LessThan3840
          ? 50
          : 0,
      bottom:
        screenGreaterThan1280LessThan1440 || screenGreaterThan1440LessThan1920
          ? 20
          : screenGreaterThan1920LessThan3840
          ? 30
          : 0,
      borderRadius: "360px",
      border: "solid #c23237 2px",
      boxShadow: `
    0 0 2px #c23237,
    0 0 2px #c23237,
    0 0 2px #c23237,
    0 0 2px #c23237
  `,
    },
    aboutsection_desc_box: {
      // border: "solid blue 2px",
      //   height: "300px",
      width: screenLessThan430
        ? "85%"
        : screenGreaterThan1024LessThan1280
        ? "50%"
        : screenGreaterThan430LessThan768
        ? "70%"
        : screenGreaterThan768LessThan1024
        ? "65%"
        : screenGreaterThan1280LessThan1440 || screenGreaterThan1440LessThan1920
        ? "40%"
        : "30%",
      display: "flex",
      flexDirection: "column",
      //   gap: "20px",
    },
    typo_desc: {
      //   borderTop: "solid #c23237 1px",
      borderBottom: "solid #c23237 1px",
      width: screenLessThan430
        ? "100%"
        : screenGreaterThan1024LessThan1280
        ? "90%"
        : "100%",
      paddingTop: "20px",
      paddingBottom: "20px",
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
    },
  };
  return (
    <Box
      sx={{
        backgroundColor: "#D9D9D9",
        paddingTop: "30px",
        width: screenGreaterThan1920LessThan3840 ? "80%" : "100%",
        margin: screenGreaterThan1920LessThan3840 ? "0 auto" : "",
      }}
    >
      <Typography sx={styles.heading_aboutus}>About Us</Typography>
      <Box sx={styles.parent_aboutsection}>
        <Box sx={styles.aboutsection_image_box}>
          <Box sx={styles.aboutsection_img1}></Box>
          <Box sx={styles.aboutsection_img2}></Box>
        </Box>
        <Box sx={styles.aboutsection_desc_box}>
          <Typography sx={styles.typo_desc}>
            <span
              style={{
                color: "#c23237",
                // fontWeight: "bold",
              }}
            >
              CB Trucking
            </span>{" "}
            is one of Canada's most exciting third-party logistics providers. We
            take pride in our commitment to service, competitiveness, and
            reliability. At{" "}
            <span style={{ color: "#c23237" }}>CB Trucking</span> we strive to
            serve not only our customers but also our carriers with the same
            level of dedication.
          </Typography>
          <Typography sx={styles.typo_desc}>
            We are well-equipped to meet your needs with our vast experience in
            the{" "}
            <span style={{ color: "#c23237" }}>transportation industry</span>{" "}
            and a deep understanding of the{" "}
            <span style={{ color: "#c23237" }}>produce sector</span> and{" "}
            <span style={{ color: "#c23237" }}>refrigerated logistics</span>.
          </Typography>
          <Typography sx={styles.typo_desc}>
            Just a phone call away, we offer both{" "}
            <span style={{ color: "#c23237" }}>competitive</span> and{" "}
            <span style={{ color: "#c23237" }}>fixed pricing</span>. Our
            reliability is unmatched.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default AboutSection;
