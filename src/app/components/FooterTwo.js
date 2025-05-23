"use client";

import React from "react";

import {
  Box,
  Typography,
  useMediaQuery,
  Button,
  TextField,
} from "@mui/material";

function FooterTwo() {
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
    parent_footer_two: {
      borderTop: "solid #fff 1px",
      backgroundColor: "#000",
      paddingTop: "30px",
      paddingBottom: "30px",
      width: screenGreaterThan1920LessThan3840 ? "80%" : "100%",
      margin: screenGreaterThan1920LessThan3840 ? "0 auto" : "",
      paddingTop: "20px",
      // border: "solid red 2px",
    },
    typo_footer_two: {
      color: "#c23237",
      textAlign: "center",
      fontSize: screenLessThan430
        ? "0.65rem"
        : screenGreaterThan430LessThan768
        ? "0.75rem"
        : screenGreaterThan1024LessThan1280
        ? "1rem"
        : screenGreaterThan1280LessThan1440
        ? "1.05rem"
        : screenGreaterThan1440LessThan1920
        ? "1.1rem"
        : screenGreaterThan1920LessThan3840
        ? "1.2rem"
        : screenGreaterThan768LessThan1024
        ? "0.875rem"
        : "0.75rem",
    },
  };
  return (
    <Box sx={styles.parent_footer_two}>
      <Typography sx={styles.typo_footer_two}>
        © 2025 CB Logistics Inc. All rights reserved.
      </Typography>
    </Box>
  );
}

export default FooterTwo;
