"use client";

import React from "react";

import { Box, Typography, useMediaQuery, Button } from "@mui/material";
function WeWorkWith() {
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
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#D9D9D9",
          paddingTop: "30px",
          width: screenGreaterThan1920LessThan3840 ? "80%" : "100%",
          margin: screenGreaterThan1920LessThan3840 ? "0 auto" : "",
        }}
      >
        <Typography>We work with goes here!!!</Typography>
      </Box>
    </>
  );
}

export default WeWorkWith;
