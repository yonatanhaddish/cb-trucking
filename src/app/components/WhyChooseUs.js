"use client";

import React from "react";

import { Box, Typography, useMediaQuery, Button } from "@mui/material";
function WhyChooseUs() {
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
    parent_why_whoose_us_box: {
      backgroundColor: "#D9D9D9",
      paddingTop: "100px",
      width: screenGreaterThan1920LessThan3840 ? "80%" : "100%",
      margin: screenGreaterThan1920LessThan3840 ? "0 auto" : "",
    },
    heading_whychooseus: {
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
        : screenGreaterThan1024LessThan1280 || screenGreaterThan1280LessThan1440
        ? "30%"
        : screenGreaterThan1440LessThan1920 || screenGreaterThan430LessThan768
        ? "30%"
        : screenGreaterThan768LessThan1024
        ? "30%"
        : screenGreaterThan1920LessThan3840
        ? "20%"
        : "15%",
      textAlign: "center",
      marginLeft: "5%",
      marginBottom: "30px",
    },
    desc_whychooseus: {
      // border: "solid green 2px",
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
      textAlign: "center",
      justifySelf: "center",
      width: screenLessThan430
        ? "80%"
        : screenGreaterThan430LessThan768 ||
          screenGreaterThan768LessThan1024 ||
          screenGreaterThan1280LessThan1440
        ? "70%"
        : screenGreaterThan1024LessThan1280 ||
          screenGreaterThan1440LessThan1920 ||
          screenGreaterThan1920LessThan3840
        ? "60%"
        : "100%",
      margin: "0 auto",
      fontWeight: "bold",
    },
    child_whychooseus_box: {
      // border: "solid green 2px",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      width: screenLessThan430
        ? "80%"
        : screenGreaterThan430LessThan768
        ? "60%"
        : screenGreaterThan768LessThan1024 ||
          screenGreaterThan1024LessThan1280 ||
          screenGreaterThan1280LessThan1440 ||
          screenGreaterThan1440LessThan1920 ||
          screenGreaterThan1920LessThan3840
        ? "90%"
        : "100%",
      gap:
        screenLessThan430 || screenGreaterThan768LessThan1024
          ? "40px"
          : screenGreaterThan430LessThan768
          ? "60px"
          : screenGreaterThan1920LessThan3840
          ? "30px"
          : screenGreaterThan1024LessThan1280 ||
            screenGreaterThan1280LessThan1440 ||
            screenGreaterThan1440LessThan1920
          ? "30px"
          : "",
      margin: "0 auto",
      justifyContent: "center",
      marginTop: "50px",
    },
    single_whychooseus_box: {
      // border: "solid blue 2px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      gap:
        screenLessThan430 ||
        screenGreaterThan430LessThan768 ||
        screenGreaterThan768LessThan1024 ||
        screenGreaterThan1024LessThan1280 ||
        screenGreaterThan1280LessThan1440 ||
        screenGreaterThan1440LessThan1920 ||
        screenGreaterThan1920LessThan3840
          ? "10px"
          : "",
      width:
        screenLessThan430 || screenGreaterThan430LessThan768
          ? "100%"
          : screenGreaterThan768LessThan1024
          ? "45%"
          : screenGreaterThan1024LessThan1280 ||
            screenGreaterThan1280LessThan1440 ||
            screenGreaterThan1440LessThan1920 ||
            screenGreaterThan1920LessThan3840
          ? "30%"
          : "100%",
    },
    typo_heading: {
      // border: "solid red 1px",
      width:
        screenLessThan430 ||
        screenGreaterThan430LessThan768 ||
        screenGreaterThan768LessThan1024 ||
        screenGreaterThan1280LessThan1440
          ? "60%"
          : screenGreaterThan1024LessThan1280
          ? "80%"
          : screenGreaterThan1440LessThan1920 ||
            screenGreaterThan1920LessThan3840
          ? "50%"
          : "100%",
      fontSize:
        screenLessThan430 ||
        screenGreaterThan430LessThan768 ||
        screenGreaterThan768LessThan1024 ||
        screenGreaterThan1920LessThan3840
          ? "1.4rem"
          : screenGreaterThan1024LessThan1280 ||
            screenGreaterThan1280LessThan1440 ||
            screenGreaterThan1440LessThan1920
          ? "1.3rem"
          : "1rem",
      color: "#c23237",
      fontWeight: "bold",
    },
    typo_desc: {
      // border: "solid purple 2px",
      width: screenLessThan430
        ? "70%"
        : screenGreaterThan430LessThan768
        ? "60%"
        : screenGreaterThan1024LessThan1280 ||
          screenGreaterThan1280LessThan1440 ||
          screenGreaterThan1440LessThan1920 ||
          screenGreaterThan1920LessThan3840
        ? "60%"
        : "100%",
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
    <Box sx={styles.parent_why_whoose_us_box}>
      <Typography sx={styles.heading_whychooseus}>Why Choose Us</Typography>
      <Typography sx={styles.desc_whychooseus}>
        At CB Trucking, we don't just move cargo - we move your business foward.
        With a passion precision and a commitment to excellence, here's why
        customers across the region trust us
      </Typography>
      <Box sx={styles.child_whychooseus_box}>
        <Box sx={styles.single_whychooseus_box}>
          <Typography sx={styles.typo_heading}>
            Reliable & On-Time Delivery
          </Typography>
          <Typography sx={styles.typo_desc}>
            We understand time is money. Our logistics network is optimized to
            ensure your freight reaches its destination safely and on schedule —
            every time
          </Typography>
        </Box>
        <Box sx={styles.single_whychooseus_box}>
          <Typography sx={styles.typo_heading}>
            Customer-First Approach
          </Typography>
          <Typography sx={styles.typo_desc}>
            We build relationships, not just routes. Our team is available
            around the clock, providing personalized support tailored to your
            needs
          </Typography>
        </Box>
        <Box sx={styles.single_whychooseus_box}>
          <Typography sx={styles.typo_heading}>
            Trusted by Industry Leaders
          </Typography>
          <Typography sx={styles.typo_desc}>
            Our partners include some of the most recognized names in logistics
            and retail. Our reputation is built on trust, transparency, and
            results
          </Typography>
        </Box>
        <Box sx={styles.single_whychooseus_box}>
          <Typography sx={styles.typo_heading}>Competitive Pricing</Typography>
          <Typography sx={styles.typo_desc}>
            Top-tier service shouldn’t come with top-tier pricing. Our
            transparent and fair rates ensure you get value at every mile
          </Typography>
        </Box>
        <Box sx={styles.single_whychooseus_box}>
          <Typography sx={styles.typo_heading}>Flexible Solutions</Typography>
          <Typography sx={styles.typo_desc}>
            From same-day shipments to long-haul freight — vans, pallets, or
            boxes — we adapt to meet your business demands
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default WhyChooseUs;
