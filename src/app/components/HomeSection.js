"use client";

import React from "react";

import { Box, Typography, useMediaQuery, Button } from "@mui/material";

function HomeSection() {
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
    parent_landingpage: {
      // border: "solid red 2px",
      backgroundImage: `url("/images/landingpage_cb.jpg")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height:
        screenGreaterThan1024LessThan1280 ||
        screenGreaterThan1280LessThan1440 ||
        screenGreaterThan1440LessThan1920 ||
        screenGreaterThan1920LessThan3840
          ? "90vh"
          : "86vh",
      position: "relative",
      display: "flex",
      width: screenGreaterThan1920LessThan3840 ? "80%" : "100%",
      margin: screenGreaterThan1920LessThan3840 ? "0 auto" : "",
    },
    overlay_box: {
      backgroundColor: "rgba(0, 0, 0, 0.2)",
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
    content_landingpage: {
      position: "relative",
      zIndex: 1,
      // border: "solid green 1px",
      width: screenLessThan430 ? "90%" : "40%",
      display: "flex",
      flexDirection: "column",
      gap: screenGreaterThan1920LessThan3840 ? "50px" : "30px",
      alignSelf: "center",
    },
    typo_heading: {
      color: "#fff",
      fontSize: screenGreaterThan1440LessThan1920
        ? "48px"
        : screenGreaterThan1920LessThan3840
        ? "52px"
        : "36px",
      //   border: "solid white 1px",
      width: "80%",
      alignSelf: "center",
      textAlign: "center",
    },
    typo_desc: {
      color: "#fff",
      //   border: "solid red 1px",
      width: "80%",
      alignSelf: "center",
      textAlign: "center",
      fontSize: screenGreaterThan1440LessThan1920
        ? "20px"
        : screenGreaterThan1920LessThan3840
        ? "22px"
        : "",
    },
    button_contact: {
      border: "solid 1px #c23237",
      color: "#c23237",
      width:
        screenGreaterThan1440LessThan1920 || screenGreaterThan1920LessThan3840
          ? "200px"
          : "150px",
      //   fontWeight: "bold",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      fontSize:
        screenGreaterThan1440LessThan1920 || screenGreaterThan1920LessThan3840
          ? "18px"
          : "",
    },
    button_services: {
      //   border: "solid 1px white",
      backgroundColor: "#c23237",
      color: "#fff",
      width:
        screenGreaterThan1440LessThan1920 || screenGreaterThan1920LessThan3840
          ? "200px"
          : "150px",
      fontSize:
        screenGreaterThan1440LessThan1920 || screenGreaterThan1920LessThan3840
          ? "18px"
          : "",
    },
    button_parent: {
      width: "80%",
      alignSelf: "center",
      display: "flex",
      flexDirection: "row",
      gap: screenGreaterThan1920LessThan3840 ? "80px" : "40px",
      //   border: "solid 1px white",
      justifyContent: "center",
    },
    parent_landing_smaller: {
      // border: "solid green 2px",
      height:
        screenGreaterThan430LessThan768 || screenGreaterThan768LessThan1024
          ? "93vh"
          : "88vh",
      backgroundColor: "#424242",
      display: "flex",
      flexDirection: "column",
      gap: screenGreaterThan768LessThan1024
        ? "8%"
        : screenGreaterThan430LessThan768
        ? "60px"
        : "20px",
    },
    parent_landingpage_small: {
      backgroundImage: `url("/images/landingpage_cb.jpg")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "50%",
    },
    content_landingpage_smaller: {
      // border: "solid red 2px",
      display: "flex",
      flexDirection: "column",
      gap: screenGreaterThan768LessThan1024
        ? "35px"
        : screenGreaterThan430LessThan768
        ? "40px"
        : "30px",
      width: screenLessThan430
        ? "96%"
        : screenGreaterThan430LessThan768
        ? "70%"
        : screenGreaterThan768LessThan1024
        ? "60%"
        : "100%",
      alignSelf: "center",
    },
    typo_heading_smaller: {
      fontSize: screenGreaterThan768LessThan1024 ? "40px" : "34px",
      color: "#fff",
      //   border: "solid white 1px",
      textAlign: "center",
    },
    typo_desc_smaller: {
      color: "#fff",
      textAlign: "center",
      fontSize: screenLessThan430 ? "16px" : "18px",
    },
    button_parent_smaller: {
      //   border: "solid white 2px",
      display: "flex",
      flexDirection: "row",
      alignSelf: "center",
      gap: screenGreaterThan768LessThan1024 ? "60px" : "30px",
    },
    button_services_smaller: {
      backgroundColor: "#c23237",
      color: "#fff",
      width: "150px",
    },
    button_contact_smaller: {
      border: "solid 2px #c23237",
      color: "#c23237",
      width: "150px",
    },
  };
  return (
    <>
      {screenLessThan430 ||
      screenGreaterThan430LessThan768 ||
      screenGreaterThan768LessThan1024 ? (
        <Box sx={styles.parent_landing_smaller}>
          <Box sx={styles.parent_landingpage_small}></Box>
          <Box sx={styles.content_landingpage_smaller}>
            <Typography sx={styles.typo_heading_smaller}>
              Reliable <span style={{ color: "#c23237" }}>Trucking</span> and{" "}
              <span style={{ color: "#c23237" }}>Transportation</span> Services
            </Typography>
            <Typography sx={styles.typo_desc_smaller}>
              We provide services in the field of road transportation,ensuring
              reliable, and efficient delivery solutions for business and
              individuals.
            </Typography>
            <Box sx={styles.button_parent_smaller}>
              <Button sx={styles.button_services_smaller}>Our Services</Button>
              <Button sx={styles.button_contact_smaller}>Contact Us</Button>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box sx={styles.parent_landingpage}>
          <Box sx={styles.overlay_box}></Box>
          <Box sx={styles.content_landingpage}>
            <Typography sx={styles.typo_heading}>
              Reliable <span style={{ color: "#c23237" }}>Trucking</span> and{" "}
              <span style={{ color: "#c23237" }}>Transportation</span> Services
            </Typography>
            <Typography sx={styles.typo_desc}>
              We provide services in the field of road transportation,ensuring
              reliable, and efficient delivery solutions for business and
              individuals.
            </Typography>
            <Box sx={styles.button_parent}>
              <Button sx={styles.button_services}>Our Services</Button>
              <Button sx={styles.button_contact}>Contact Us</Button>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}

export default HomeSection;
