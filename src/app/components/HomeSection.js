"use client";

import React from "react";
import { Link } from "react-scroll";
import { Box, Typography, useMediaQuery, Button } from "@mui/material";
import { motion } from "framer-motion";

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
  const MotionTypography = motion(Typography);
  const MotionBox = motion(Box);
  const MotionButton = motion(Button);

  const styles = {
    parent_landingpage: {
      // border: "solid green 2px",
      backgroundImage: `url("/images/landingpage_cb.jpg")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height:
        screenGreaterThan1024LessThan1280 || screenGreaterThan1440LessThan1920
          ? "92vh"
          : screenGreaterThan768LessThan1024
          ? "88vh"
          : screenGreaterThan1280LessThan1440
          ? "93vh"
          : screenGreaterThan1920LessThan3840
          ? "94vh"
          : "8vh",
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
      alignSelf: screenGreaterThan1024LessThan1280 ? "center" : "center",
      marginTop: screenGreaterThan1024LessThan1280 ? "-60px" : "",
    },
    typo_heading: {
      color: "#fff",
      fontWeight: 700,
      fontSize: screenGreaterThan1920LessThan3840
        ? "56px"
        : screenGreaterThan1440LessThan1920
        ? "48px"
        : screenGreaterThan1024LessThan1280
        ? "42px"
        : screenGreaterThan768LessThan1024
        ? "36px"
        : screenGreaterThan430LessThan768
        ? "32px"
        : "28px",
      // border: "solid white 1px",
      width: screenGreaterThan1024LessThan1280 ? "90%" : "80%",
      alignSelf: "center",
      textAlign: "center",
      justifySelf: "center",
    },
    typo_desc: {
      color: "#fff",
      // border: "solid red 1px",
      width: screenGreaterThan1440LessThan1920 ? "60%" : "80%",
      alignSelf: "center",
      textAlign: "center",
      fontWeight: 400,
      fontSize: screenGreaterThan1920LessThan3840
        ? "24px"
        : screenGreaterThan1440LessThan1920
        ? "20px"
        : screenGreaterThan768LessThan1024
        ? "18px"
        : screenGreaterThan430LessThan768
        ? "16px"
        : "14px",
      fontFamily: '"OCR A Std, monospace',
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
      fontWeight: 500,
      fontSize: screenGreaterThan1920LessThan3840
        ? "20px"
        : screenGreaterThan1440LessThan1920
        ? "18px"
        : screenGreaterThan1024LessThan1280
        ? "16px"
        : screenGreaterThan768LessThan1024
        ? "15px"
        : "14px",
    },
    button_services: {
      //   border: "solid 1px white",
      backgroundColor: "#c23237",
      color: "#fff",
      width:
        screenGreaterThan1440LessThan1920 || screenGreaterThan1920LessThan3840
          ? "200px"
          : "150px",
      fontWeight: 500,
      fontSize: screenGreaterThan1920LessThan3840
        ? "20px"
        : screenGreaterThan1440LessThan1920
        ? "18px"
        : screenGreaterThan1024LessThan1280
        ? "16px"
        : screenGreaterThan768LessThan1024
        ? "15px"
        : "14px",
    },
    button_parent: {
      width: "80%",
      alignSelf: "center",
      display: "flex",
      flexDirection: "row",
      gap: screenGreaterThan1920LessThan3840 ? "80px" : "40px",
      // border: "solid 1px white",
      justifyContent: "center",
      justifySelf: "center",
      marginTop: "30px",
    },
    parent_landing_smaller: {
      // border: "solid green 5px",
      height:
        screenGreaterThan430LessThan768 || screenGreaterThan768LessThan1024
          ? "93vh"
          : "94vh",
      backgroundColor: "#424242",
      display: "flex",
      flexDirection: "column",
      gap: screenGreaterThan768LessThan1024
        ? "8%"
        : screenGreaterThan430LessThan768
        ? "60px"
        : screenLessThan430
        ? ""
        : "20px",
    },
    parent_landingpage_small: {
      backgroundImage: `url("/images/landingpage_cb.jpg")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "50%",
      // border: "solid green 5px",
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
      // border: "solid white 1px",
      textAlign: "center",
    },
    typo_desc_smaller: {
      color: "#fff",
      textAlign: "center",
      fontSize: screenLessThan430 ? "16px" : "18px",
    },
    button_parent_smaller: {
      // border: "solid white 2px",
      display: "flex",
      flexDirection: "row",
      alignSelf: "center",
      // gap: screenGreaterThan768LessThan1024 ? "60px" : "30px",
      width: screenLessThan430
        ? "85%"
        : screenGreaterThan430LessThan768
        ? "70%"
        : screenGreaterThan768LessThan1024
        ? "80%"
        : "100%",
      justifyContent: "space-between",
    },
    button_services_smaller: {
      border: "solid 2px #c23237",
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
        <Box sx={styles.parent_landing_smaller} id="home_page">
          <Box sx={styles.parent_landingpage_small}></Box>
          <Box sx={styles.content_landingpage_smaller}>
            <MotionTypography
              sx={styles.typo_heading_smaller}
              initial={{ transform: "translateY(-100px)" }}
              whileInView={{ transform: "translateY(10%)" }}
              transition={{ type: "spring", bounce: 0.25, visualDuration: 1 }}
            >
              Reliable <span style={{ color: "#c23237" }}>Trucking</span> and{" "}
              <span style={{ color: "#c23237" }}>Transportation</span> Services
            </MotionTypography>
            <MotionTypography
              sx={styles.typo_desc_smaller}
              initial={{ transform: "translateX(-50px)" }}
              whileInView={{ transform: "translateX(0px)" }}
              transition={{ type: "spring", bounce: 0.25, visualDuration: 1 }}
            >
              We provide services in the field of road transportation,ensuring
              reliable, and efficient delivery solutions for business and
              individuals.
            </MotionTypography>
            <MotionBox
              sx={styles.button_parent_smaller}
              initial={{ transform: "translateY(50px)" }}
              whileInView={{ transform: "translateY(0px)" }}
              transition={{ type: "spring", bounce: 0.25, visualDuration: 1 }}
            >
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                <Link to="service_page" duration={500} smooth={true}>
                  <Button sx={styles.button_services_smaller}>
                    Our Services
                  </Button>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                <Link to="contact_us_page" duration={500} smooth={true}>
                  <Button sx={styles.button_contact_smaller}>Contact Us</Button>
                </Link>
              </motion.div>
            </MotionBox>
          </Box>
        </Box>
      ) : (
        <Box sx={styles.parent_landingpage} id="home_page">
          <Box sx={styles.overlay_box}></Box>
          <Box sx={styles.content_landingpage}>
            <MotionTypography
              sx={styles.typo_heading}
              initial={{ transform: "translateY(-100px)" }}
              whileInView={{ transform: "translateY(0px)" }}
              transition={{ type: "spring", bounce: 0.25, visualDuration: 1 }}
            >
              Reliable <span style={{ color: "#c23237" }}>Trucking</span> and{" "}
              <span style={{ color: "#c23237" }}>Transportation</span> Services
            </MotionTypography>
            <MotionTypography
              sx={styles.typo_desc}
              initial={{ transform: "translateX(-100px)" }}
              whileInView={{ transform: "translateX(0px)" }}
              transition={{ type: "spring", bounce: 0.25, visualDuration: 1 }}
            >
              We provide services in the field of road transportation,ensuring
              reliable, and efficient delivery solutions for business and
              individuals.
            </MotionTypography>
            <MotionBox
              sx={styles.button_parent}
              initial={{ transform: "translateY(100px)" }}
              whileInView={{ transform: "translateY(-20px)" }}
              transition={{ type: "spring", bounce: 0.25, visualDuration: 1 }}
            >
              <Link to="service_page" duration={500} smooth={true}>
                <MotionButton
                  sx={styles.button_services}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                >
                  Our Services
                </MotionButton>
              </Link>
              <Link to="contact_us_page" duration={500} smooth={true}>
                <MotionButton
                  sx={styles.button_contact}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                >
                  Contact Us
                </MotionButton>
              </Link>
            </MotionBox>
          </Box>
        </Box>
      )}
    </>
  );
}

export default HomeSection;
