"use client";

import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { motion, useInView } from "framer-motion";

const partners_array = [
  { name: "Costco", fontFamily: "'Roboto', sans-serif" },
  { name: "Taylor Farms", fontFamily: "'Roboto', sans-serif" },
  { name: "Sobeys", fontFamily: "'Roboto', sans-serif" },
  { name: "Loblaws", fontFamily: "'Roboto', sans-serif" },
  { name: "Metro", fontFamily: "'Roboto', sans-serif" },
  { name: "Walmart", fontFamily: "'Roboto', sans-serif" },
  { name: "Costco", fontFamily: "'Roboto', sans-serif" },
  { name: "Taylor Farms", fontFamily: "'Roboto', sans-serif" },
  { name: "Sobeys", fontFamily: "'Roboto', sans-serif" },
  { name: "Loblaws", fontFamily: "'Roboto', sans-serif" },
  { name: "Metro", fontFamily: "'Roboto', sans-serif" },
  { name: "Walmart", fontFamily: "'Roboto', sans-serif" },
  { name: "Costco", fontFamily: "'Roboto', sans-serif" },
  { name: "Taylor Farms", fontFamily: "'Roboto', sans-serif" },
  { name: "Sobeys", fontFamily: "'Roboto', sans-serif" },
  { name: "Loblaws", fontFamily: "'Roboto', sans-serif" },
  { name: "Metro", fontFamily: "'Roboto', sans-serif" },
  { name: "Walmart", fontFamily: "'Roboto', sans-serif" },
  { name: "Costco", fontFamily: "'Roboto', sans-serif" },
  { name: "Taylor Farms", fontFamily: "'Roboto', sans-serif" },
  { name: "Sobeys", fontFamily: "'Roboto', sans-serif" },
  { name: "Loblaws", fontFamily: "'Roboto', sans-serif" },
  { name: "Metro", fontFamily: "'Roboto', sans-serif" },
  { name: "Walmart", fontFamily: "'Roboto', sans-serif" },
];

const WeWorkWith = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animateHeading, setAnimateHeading] = useState(false);

  const total = partners_array.length;
  const visibleItems = 8;

  const screenLessThan430 = useMediaQuery("(max-width: 430px)");
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

  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true });

  useEffect(() => {
    setAnimateHeading(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 2000);

    return () => clearInterval(interval);
  }, [total]);

  const translateX = `-${(currentIndex % total) * (100 / visibleItems)}%`;

  const styles = {
    heading_our_partners: {
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
      margin: "0 auto",
    },
  };

  return (
    <Box
      id="our_partner_page"
      sx={{
        overflow: "hidden",
        py: 4,
        bgcolor: "#d9d9d9",
        width: screenGreaterThan1920LessThan3840 ? "80%" : "100%",
        margin: screenGreaterThan1920LessThan3840 ? "0 auto" : "",
        paddingTop: "100px",
      }}
    >
      <motion.div
        ref={headingRef}
        initial={{ y: -100 }}
        whileInView={isInView ? { y: 0 } : {}}
        transition={{ type: "spring", bounce: 0.25, duration: 1 }}
      >
        <Typography sx={styles.heading_our_partners}>Trusted By</Typography>
      </motion.div>

      <Box
        sx={{
          display: "flex",
          width: `${(total / visibleItems) * 100}%`,
          transform: `translateX(${translateX})`,
          transition: "transform 0.8s ease-in-out",
          marginTop: "100px",
          // border: "solid black 2px",
          marginBottom: "80px",
        }}
      >
        {partners_array.map((partner, index) => (
          <Box
            key={index}
            sx={{
              flex: `0 0 ${100 / visibleItems}%`,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              px: 1,
              height: "250px",
              bgcolor: "#c23237",
              border: "solid #c23237 2px",
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                fontFamily: partner.fontFamily,
                fontWeight: "bold",
                whiteSpace: "nowrap",
                color: "#d9d9d9",
                fontSize: screenLessThan430
                  ? "1.2rem"
                  : screenGreaterThan430LessThan768
                  ? "1.4rem"
                  : screenGreaterThan768LessThan1024
                  ? "1.6rem"
                  : screenGreaterThan1024LessThan1280
                  ? "1.8rem"
                  : screenGreaterThan1280LessThan1440
                  ? "2rem"
                  : screenGreaterThan1440LessThan1920
                  ? "2.2rem"
                  : screenGreaterThan1920LessThan3840
                  ? "2.4rem"
                  : "1.2rem",
              }}
            >
              {partner.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default WeWorkWith;
