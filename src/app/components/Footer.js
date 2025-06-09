"use client";

import React from "react";
import { Link } from "react-scroll";
import NextLink from "next/link";
import { Box, Typography, useMediaQuery, Button } from "@mui/material";
import { motion } from "framer-motion";
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

  const MotionButton = motion(Button);

  const styles = {
    parent_box: {
      // border: "solid green 2px",
      backgroundColor: "#000",
      display: "flex",
      flexDirection:
        screenLessThan430 || screenGreaterThan430LessThan768 ? "column" : "row",
      gap: screenLessThan430 || screenGreaterThan430LessThan768 ? "40px" : "",
      paddingTop: "50px",
      justifyContent:
        screenGreaterThan768LessThan1024 ||
        screenGreaterThan1024LessThan1280 ||
        screenGreaterThan1280LessThan1440 ||
        screenGreaterThan1440LessThan1920 ||
        screenGreaterThan1920LessThan3840
          ? "space-evenly"
          : "",
      width: screenGreaterThan1920LessThan3840 ? "80%" : "100%",
      margin: screenGreaterThan1920LessThan3840 ? "0 auto" : "",
      paddingBottom: "50px",
    },
    logo_address_box: {
      // border: "solid red 2px",
      display: "flex",
      flexDirection: "column",
      gap:
        screenLessThan430 || screenGreaterThan430LessThan768
          ? "40px"
          : screenGreaterThan768LessThan1024 ||
            screenGreaterThan1024LessThan1280 ||
            screenGreaterThan1280LessThan1440 ||
            screenGreaterThan1440LessThan1920
          ? "60px"
          : screenGreaterThan1920LessThan3840
          ? "100px"
          : "",
    },
    nav_links_parent: {
      // border: "solid green 2px",
      display: "flex",
      flexDirection: "row",
      justifyContent:
        screenLessThan430 || screenGreaterThan430LessThan768
          ? "space-evenly"
          : "",
      //   alignSelf: screenGreaterThan768LessThan1024 ? "center" : "",
      gap: screenGreaterThan768LessThan1024
        ? "80px"
        : screenGreaterThan1024LessThan1280 ||
          screenGreaterThan1280LessThan1440 ||
          screenGreaterThan1440LessThan1920 ||
          screenGreaterThan1920LessThan3840
        ? "100px"
        : screenLessThan430
        ? "50px"
        : "",
      marginTop:
        screenLessThan430 ||
        screenGreaterThan430LessThan768 ||
        screenGreaterThan768LessThan1024
          ? ""
          : "40px",
    },
    logo_heading: {
      // border: "solid blue 2px",
      width: screenLessThan430
        ? "85%"
        : screenGreaterThan430LessThan768
        ? "80%"
        : "100%",
      margin: "0 auto",
    },
    logo_box: {
      backgroundImage: `url("/images/logo.PNG")`,
      //   border: "solid red 2px",
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
          ? "28px"
          : screenGreaterThan1920LessThan3840
          ? "40px"
          : screenGreaterThan1280LessThan1440
          ? "26px"
          : "1.4rem",
      width: screenLessThan430
        ? "55%"
        : screenGreaterThan430LessThan768
        ? "33%"
        : screenGreaterThan1024LessThan1280
        ? "90%"
        : screenGreaterThan1280LessThan1440
        ? "80%"
        : screenGreaterThan1440LessThan1920
        ? "80%"
        : screenGreaterThan1920LessThan3840
        ? "100%"
        : "100%",
      textAlign: "center",
    },
    typo_address: {
      width: screenLessThan430
        ? "80%"
        : screenGreaterThan430LessThan768
        ? "78%"
        : "100%",
      margin: "0 auto",
      // border: "solid green 2px",
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
    button_single: {
      color: "#d9d9d9",
      // border: "solid red 1px",
      // width: "fit-content",
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
      alignSelf: "center",
      textAlign: "center",
    },
    nav01: {
      // border: "solid blue 1px",
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      textAlign: "center",
    },
    nav02: {
      // border: "solid blue 1px",
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      textAlign: "center",
    },
    heading_link: {
      fontWeight: "bold",
      color: "#fff",
      fontSize: screenLessThan430
        ? "0.9rem"
        : screenGreaterThan430LessThan768
        ? "0.95rem"
        : screenGreaterThan768LessThan1024
        ? "1rem"
        : screenGreaterThan1024LessThan1280
        ? "1.05rem"
        : screenGreaterThan1280LessThan1440
        ? "1.1rem"
        : screenGreaterThan1440LessThan1920
        ? "1.15rem"
        : screenGreaterThan1920LessThan3840
        ? "1.2rem"
        : "1rem",
      borderBottom: "solid #c23237 2px",
    },
    onhover_effect: {
      color: "#c23237",
    },
  };
  return (
    <Box sx={styles.parent_box}>
      <Box sx={styles.logo_address_box}>
        <Box sx={styles.logo_heading}>
          <Box sx={styles.logo_box}></Box>
          <Typography sx={styles.typo_name_heading}>CB Trucking</Typography>
        </Box>
        <Box sx={styles.typo_address}>
          <Typography sx={styles.typo_name}>140 Erskine Avenue</Typography>
          <Typography sx={styles.typo_name}>Toronto ,ON</Typography>
          <Typography sx={styles.typo_name}>Canada, M4P 1Z2</Typography>
          <Typography sx={styles.typo_name}>+1 (647) 807 6911</Typography>
          <Typography sx={styles.typo_name}>cb_trucking@email.com</Typography>
        </Box>
      </Box>
      <Box sx={styles.nav_links_parent}>
        <Box sx={styles.nav01}>
          <Button sx={styles.heading_link}>Company</Button>
          <Link to="home_page" duration={500} smooth={true}>
            <MotionButton
              sx={styles.button_single}
              whileHover={styles.onhover_effect}
              whileTap={styles.onhover_effect}
            >
              Home
            </MotionButton>
          </Link>
          <Link to="about_us_page" duration={500} smooth={true}>
            <MotionButton
              sx={styles.button_single}
              whileHover={styles.onhover_effect}
              whileTap={styles.onhover_effect}
            >
              About
            </MotionButton>
          </Link>
          <Link to="service_page" duration={500} smooth={true}>
            <MotionButton
              sx={styles.button_single}
              whileHover={styles.onhover_effect}
              whileTap={styles.onhover_effect}
            >
              Service
            </MotionButton>
          </Link>
          <Link to="contact_us_page" duration={500} smooth={true}>
            <MotionButton
              sx={styles.button_single}
              whileHover={styles.onhover_effect}
              whileTap={styles.onhover_effect}
            >
              Contact
            </MotionButton>
          </Link>
        </Box>
        <Box sx={styles.nav02}>
          <MotionButton
            sx={styles.heading_link}
            whileHover={styles.onhover_effect}
            whileTap={styles.onhover_effect}
          >
            Links
          </MotionButton>
          <Link to="our_partner_page" duration={500} smooth={true}>
            <MotionButton
              sx={styles.button_single}
              whileHover={styles.onhover_effect}
              whileTap={styles.onhover_effect}
            >
              Our Partners
            </MotionButton>
          </Link>
          <Link to="why_choose_us_page" duration={500} smooth={true}>
            <MotionButton
              sx={styles.button_single}
              whileHover={styles.onhover_effect}
              whileTap={styles.onhover_effect}
            >
              Why Choose Us?
            </MotionButton>
          </Link>
          <MotionButton
            LinkComponent={NextLink}
            href="/carriers"
            sx={styles.button_single}
            whileHover={styles.onhover_effect}
            whileTap={styles.onhover_effect}
          >
            Carrier
          </MotionButton>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
