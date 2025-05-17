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
      // border: "solid red 2px",
      backgroundColor: "#000",
      display: "flex",
      flexWrap: "wrap",
      gap:
        screenLessThan430 || screenGreaterThan430LessThan768
          ? "50px"
          : screenGreaterThan1920LessThan3840
          ? "100px"
          : "",
      justifyContent: "center",
      width: screenGreaterThan1920LessThan3840 ? "80%" : "100%",
      margin: screenGreaterThan1920LessThan3840 ? "0 auto" : "",
      paddingTop: "100px",
      alignItems: screenGreaterThan1920LessThan3840 ? "center" : "",
    },
    logoname_box: {
      // border: "solid green 2px",
      width: screenLessThan430
        ? "80%"
        : screenGreaterThan768LessThan1024
        ? "60%"
        : screenGreaterThan1024LessThan1280 || screenGreaterThan1280LessThan1440
        ? "50%"
        : screenGreaterThan1440LessThan1920
        ? "40%"
        : screenGreaterThan1920LessThan3840
        ? "100%"
        : screenGreaterThan430LessThan768
        ? "90%"
        : "100%",
    },
    logo_box: {
      backgroundImage: `url("/images/logo.PNG")`,
      // border: "solid red 2px",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: screenGreaterThan768LessThan1024
        ? "120px"
        : screenGreaterThan1024LessThan1280 ||
          screenGreaterThan1280LessThan1440 ||
          screenGreaterThan1440LessThan1920
        ? "120px"
        : screenGreaterThan1920LessThan3840
        ? "160px"
        : screenLessThan430 || screenGreaterThan430LessThan768
        ? "140px"
        : "50px",
      width: screenGreaterThan768LessThan1024
        ? "200px"
        : screenGreaterThan1024LessThan1280 ||
          screenGreaterThan1280LessThan1440 ||
          screenGreaterThan1440LessThan1920
        ? "160px"
        : screenGreaterThan1920LessThan3840
        ? "200px"
        : screenLessThan430 || screenGreaterThan430LessThan768
        ? "200px"
        : "50px",
      // margin: "0 auto",
    },
    typo_name_heading: {
      // border: "solid green 2px",
      color: "#d9d9d9",
      fontSize:
        screenLessThan430 || screenGreaterThan430LessThan768
          ? "30px"
          : screenGreaterThan768LessThan1024 ||
            screenGreaterThan1024LessThan1280 ||
            screenGreaterThan1440LessThan1920
          ? "30px"
          : screenGreaterThan1920LessThan3840
          ? "40px"
          : "1.4rem",
    },
    typo_name: {
      // border: "solid blue 1px",
      color: "#d9d9d9",
      fontSize: screenLessThan430
        ? "0.875rem"
        : screenGreaterThan430LessThan768
        ? "0.9375rem"
        : screenGreaterThan768LessThan1024
        ? "1rem"
        : screenGreaterThan1024LessThan1280
        ? "1.0625rem"
        : screenGreaterThan1280LessThan1440
        ? "1.125rem"
        : screenGreaterThan1440LessThan1920
        ? "1.125rem"
        : screenGreaterThan1920LessThan3840
        ? "1.25rem"
        : "1rem",
    },
    box_one: {
      // paddingTop: "20px",
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
      // alignItems: "center",
      // border: "solid blue 2px",
      width: screenGreaterThan430LessThan768
        ? "85%"
        : screenGreaterThan1440LessThan1920
        ? "30%"
        : screenGreaterThan768LessThan1024
        ? "40%"
        : screenGreaterThan1280LessThan1440
        ? "30%"
        : screenLessThan430
        ? "85%"
        : screenGreaterThan1024LessThan1280
        ? "35%"
        : screenGreaterThan1920LessThan3840
        ? "20%"
        : "100%",
    },
    typo_address: {
      // border: "solid green 2px",
      width:
        screenGreaterThan430LessThan768 || screenLessThan430
          ? "85%"
          : screenGreaterThan1280LessThan1440
          ? "60%"
          : screenGreaterThan1440LessThan1920
          ? "60%"
          : screenGreaterThan1920LessThan3840
          ? "20%"
          : screenGreaterThan768LessThan1024
          ? "80%"
          : screenGreaterThan1024LessThan1280
          ? "75%"
          : "100%",
      margin:
        screenLessThan430 ||
        screenGreaterThan430LessThan768 ||
        screenGreaterThan768LessThan1024 ||
        screenGreaterThan1024LessThan1280
          ? "0 auto"
          : "",
    },
    nav_links: {
      // border: "solid white 2px",
      display: "flex",
      flexDirection: "column",
      width: screenGreaterThan768LessThan1024
        ? "40%"
        : screenGreaterThan1024LessThan1280
        ? "40%"
        : screenGreaterThan1280LessThan1440 || screenGreaterThan1440LessThan1920
        ? "30%"
        : screenLessThan430 || screenGreaterThan430LessThan768
        ? "85%"
        : screenGreaterThan1920LessThan3840
        ? "20%"
        : "100%",
      margin:
        screenLessThan430 || screenGreaterThan430LessThan768 ? "0 auto" : "",
    },
    button_single: {
      color: "#d9d9d9",
      // border: "solid red 1px",
      width: "fit-content",
      fontSize: screenLessThan430
        ? "0.75rem"
        : screenGreaterThan430LessThan768
        ? "0.8125rem"
        : screenGreaterThan768LessThan1024
        ? "0.875rem"
        : screenGreaterThan1024LessThan1280
        ? "0.9375rem"
        : screenGreaterThan1280LessThan1440
        ? "0.9375rem"
        : screenGreaterThan1440LessThan1920
        ? "1rem"
        : screenGreaterThan1920LessThan3840
        ? "1.0625rem"
        : "1rem",
    },
  };
  return (
    <Box sx={styles.parent_box}>
      <Box sx={styles.box_one}>
        <Box sx={styles.logoname_box}>
          <Box sx={styles.logo_box}></Box>
          <Typography sx={styles.typo_name_heading}>CB Trucking</Typography>
        </Box>
      </Box>
      <Box sx={styles.nav_links}>
        <Button sx={styles.button_single}>Home</Button>
        <Button sx={styles.button_single}>About</Button>
        <Button sx={styles.button_single}>Service</Button>
        <Button sx={styles.button_single}>Certificates & Accrediations</Button>
        <Button sx={styles.button_single}>Our Partners</Button>
        <Button sx={styles.button_single}> Why Choose Us</Button>
        <Button sx={styles.button_single}>Carrier</Button>
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
  );
}

export default Footer;
