"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Box,
  Typography,
  useMediaQuery,
  IconButton,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Navbar from "../components/Navbar";

import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CircularProgress from "@mui/material/CircularProgress";
import InputSectionCarrier from "../components/InputSectionCarrier";
import FooterTwo from "../components/FooterTwo";
import NavbarCarrier from "../components/NavbarCarrier";

function Carriers() {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);

  const MotionTypography = motion(Typography);

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
    parent_carrier_box: {
      // border: "solid green 2px",
      backgroundColor: "#d9d9d9",
      paddingTop: "30px",
      width: screenGreaterThan1920LessThan3840 ? "80%" : "100%",
      margin: screenGreaterThan1920LessThan3840 ? "0 auto" : "",
      flexGrow: 1,
    },
    typo_heading: {
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
    carrier_sub_box: {
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
        screenGreaterThan1280LessThan1440 ||
        screenGreaterThan1440LessThan1920 ||
        screenGreaterThan1920LessThan3840
          ? "10px"
          : screenGreaterThan768LessThan1024
          ? "30px"
          : "",
      width:
        screenLessThan430 || screenGreaterThan430LessThan768
          ? "95%"
          : screenGreaterThan768LessThan1024
          ? "80%"
          : "100%",
      margin: "0 auto ",
    },
    info_parent_box: {
      // border: "solid green 2px",
      display: "flex",
      flexDirection: "column",
      width:
        screenGreaterThan1024LessThan1280 ||
        screenGreaterThan1280LessThan1440 ||
        screenGreaterThan1440LessThan1920 ||
        screenGreaterThan1920LessThan3840
          ? "45%"
          : "100%",
      // justifyContent: "center",
      marginTop: screenGreaterThan1280LessThan1440
        ? "100px"
        : screenGreaterThan1024LessThan1280
        ? "50px"
        : screenGreaterThan1440LessThan1920
        ? "120px"
        : screenGreaterThan1920LessThan3840
        ? "200px"
        : "",
      marginBottom: "20px",
    },
    join_team_desc: {
      // border: "solid green 2px",
      width:
        screenLessThan430 ||
        screenGreaterThan430LessThan768 ||
        screenGreaterThan768LessThan1024
          ? "90%"
          : screenGreaterThan1024LessThan1280 ||
            screenGreaterThan1280LessThan1440
          ? "80%"
          : screenGreaterThan1440LessThan1920 ||
            screenGreaterThan1920LessThan3840
          ? "60%"
          : "100%",
      display: "flex",
      flexDirection: "column",
      margin: "0 auto",
      gap: "6px",
    },
    address_info_box: {
      // border: "solid green 2px",
      width:
        screenLessThan430 ||
        screenGreaterThan430LessThan768 ||
        screenGreaterThan768LessThan1024 ||
        screenGreaterThan1280LessThan1440
          ? "90%"
          : "100%",
      margin: "0 auto",
    },
    input_box: {
      // border: "solid red 2px",
      width:
        screenGreaterThan1024LessThan1280 || screenGreaterThan1280LessThan1440
          ? "50%"
          : screenGreaterThan1440LessThan1920 ||
            screenGreaterThan1920LessThan3840
          ? "35%"
          : "100%",
    },
  };

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  if (loading) {
    return (
      <Box
        sx={{
          backgroundColor: "#d9d9d9",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <LocalShippingOutlinedIcon
          sx={{ height: 150, width: 150, color: "#c23237" }}
        />
        <CircularProgress
          sx={{ width: 100, height: 100, mt: 2, color: "#c23237" }}
        />
      </Box>
    );
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Box>
        <NavbarCarrier />
      </Box>
      <Box sx={styles.parent_carrier_box}>
        <Box sx={styles.carrier_sub_box}>
          <Box sx={styles.info_parent_box}>
            <Box sx={styles.join_team_desc}>
              <MotionTypography
                sx={{
                  color: "#c23237",
                  fontWeight: "bold",
                  fontSize: screenLessThan430 ? "22px" : "1.4rem",
                }}
                initial={{ transform: "translateX(-100px)" }}
                whileInView={{ transform: "translateX(0px)" }}
                transition={{ type: "spring", bounce: 0.25, visualDuration: 1 }}
                viewport={{ once: true }}
              >
                Join Our Team
              </MotionTypography>
              <Typography sx={{ width: "90%", alignSelf: "center" }}>
                We&rsquo;re always looking for passionate, motivated individuals
                to join our growing team. Whether you&rsquo;re an experienced
                professional or just starting out, we value dedication,
                creativity, and a desire to make a difference. If you&rsquo;re
                interested in working with a company that values teamwork,
                innovation, and growth, we&rsquo;d love to hear from you. Fill
                out the form and let&rsquo;s start a conversation.
              </Typography>
            </Box>
          </Box>
          <Box sx={styles.input_box}>
            <InputSectionCarrier />
          </Box>
        </Box>
      </Box>
      <FooterTwo />
    </Box>
  );
}

export default Carriers;
