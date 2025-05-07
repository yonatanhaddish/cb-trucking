"use client";

import React from "react";

import { Box, Typography, useMediaQuery, Button } from "@mui/material";
function Footer() {
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
    parent_box: {
      //   border: "solid green 2px",
      backgroundColor: "#000",
      display: "flex",
      flexDirection: screenLessThan430 ? "column" : "row",
      gap: screenLessThan430 ? "50px" : "",
      justifyContent: "space-evenly",
    },
    logoname_box: {
      //   border: "solid red 2px",
      width:
        screenLessThan430 || screenGreaterThan430LessThan768
          ? "80%"
          : screenGreaterThan768LessThan1024
          ? "60%"
          : screenGreaterThan1024LessThan1280 ||
            screenGreaterThan1280LessThan1440
          ? "50%"
          : screenGreaterThan1440LessThan1920
          ? "40%"
          : screenGreaterThan1920LessThan3840
          ? "30%"
          : "100%",
    },
    logo_box: {
      backgroundImage: `url("/images/logo.PNG")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height:
        screenLessThan430 ||
        screenGreaterThan430LessThan768 ||
        screenGreaterThan768LessThan1024
          ? "80px"
          : screenGreaterThan1024LessThan1280 ||
            screenGreaterThan1280LessThan1440
          ? "100px"
          : screenGreaterThan1920LessThan3840
          ? "120px"
          : "50px",
      width:
        screenLessThan430 ||
        screenGreaterThan430LessThan768 ||
        screenGreaterThan768LessThan1024
          ? "80px"
          : screenGreaterThan1024LessThan1280 ||
            screenGreaterThan1280LessThan1440
          ? "100px"
          : screenGreaterThan1920LessThan3840
          ? "120px"
          : "50px",
    },
    typo_name_heading: {
      //   border: "solid blue 1px",
      color: "#d9d9d9",
      fontSize: screenLessThan430 ? "1.4rem" : "1.4rem",
    },
    typo_name: {
      //   border: "solid blue 1px",
      color: "#d9d9d9",
    },
    boxOne: {
      display: "flex",
      flexDirection:
        screenLessThan430 ||
        screenGreaterThan430LessThan768 ||
        screenGreaterThan768LessThan1024 ||
        screenGreaterThan1024LessThan1280 ||
        screenGreaterThan1280LessThan1440 ||
        screenGreaterThan1440LessThan1920 ||
        screenGreaterThan1920LessThan3840
          ? "column"
          : "row",
      gap:
        screenLessThan430 ||
        screenGreaterThan430LessThan768 ||
        screenGreaterThan768LessThan1024 ||
        screenGreaterThan1024LessThan1280 ||
        screenGreaterThan1280LessThan1440 ||
        screenGreaterThan1440LessThan1920 ||
        screenGreaterThan1920LessThan3840
          ? "20px"
          : "100px",
      alignItems: "center",
      //   border: "solid blue 1px",
      width:
        screenGreaterThan430LessThan768 ||
        screenGreaterThan768LessThan1024 ||
        screenGreaterThan1024LessThan1280 ||
        screenGreaterThan1280LessThan1440
          ? "50%"
          : screenGreaterThan1440LessThan1920 ||
            screenGreaterThan1920LessThan3840
          ? "30%"
          : "100%",
    },
    typo_address: {
      width:
        screenLessThan430 || screenGreaterThan430LessThan768
          ? "80%"
          : screenGreaterThan768LessThan1024
          ? "60%"
          : screenGreaterThan1024LessThan1280 ||
            screenGreaterThan1280LessThan1440
          ? "50%"
          : screenGreaterThan1440LessThan1920
          ? "40%"
          : screenGreaterThan1920LessThan3840
          ? "30%"
          : "100%",
    },
    nav_links: {
      //   border: "solid green 2px",
      display: "flex",
      flexDirection: screenLessThan430 ? "row" : "column",
      flexWrap: "wrap",
      justifyContent: "space-evenly",
      width:
        screenGreaterThan430LessThan768 || screenGreaterThan768LessThan1024
          ? "50%"
          : screenGreaterThan1024LessThan1280
          ? "40%"
          : screenGreaterThan1280LessThan1440 ||
            screenGreaterThan1440LessThan1920 ||
            screenGreaterThan1920LessThan3840
          ? "30%"
          : "100%",
    },
    button_single: {
      color: "#d9d9d9",
    },
  };
  return (
    <Box sx={styles.parent_box}>
      <Box sx={styles.boxOne}>
        <Box sx={styles.logoname_box}>
          <Box sx={styles.logo_box}></Box>
          <Typography sx={styles.typo_name_heading}>CB Trucking</Typography>
        </Box>
        <Box sx={styles.typo_address}>
          <Typography sx={styles.typo_name}>
            {" "}
            100 Wellington Ave E, #508
          </Typography>
          <Typography sx={styles.typo_name}>Toronto ,ON, Canada</Typography>
          <Typography sx={styles.typo_name}> M1L 1P6</Typography>
          <Typography sx={styles.typo_name}>+1 (800)-222-2222</Typography>
          <Typography sx={styles.typo_name}>cb_trucking@email.com</Typography>
        </Box>
      </Box>
      <Box sx={styles.nav_links}>
        <Button sx={styles.button_single}>Home</Button>
        <Button sx={styles.button_single}>About</Button>
        <Button sx={styles.button_single}>Service</Button>
        <Button sx={styles.button_single}>Certificates & Accrediations</Button>
        <Button sx={styles.button_single}>Our Partners</Button>
        <Button sx={styles.button_single}> Why Choose Us</Button>
      </Box>
    </Box>
  );
}

export default Footer;
