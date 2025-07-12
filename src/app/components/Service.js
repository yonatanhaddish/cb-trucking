"use client";

import React from "react";

import { Box, Typography, useMediaQuery, Button } from "@mui/material";
import { motion } from "framer-motion";
function Service() {
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

  const styles = {
    parent_service: {
      // border: "solid red 2px",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-evenly",
      gap:
        screenLessThan430 ||
        screenGreaterThan430LessThan768 ||
        screenGreaterThan1920LessThan3840
          ? "40px"
          : screenGreaterThan768LessThan1024 ||
            screenGreaterThan1024LessThan1280 ||
            screenGreaterThan1280LessThan1440 ||
            screenGreaterThan1440LessThan1920
          ? "60px"
          : "",
      paddingBottom:
        screenGreaterThan1024LessThan1280 ||
        screenGreaterThan1280LessThan1440 ||
        screenGreaterThan1440LessThan1920
          ? "80px"
          : "50px",
      marginTop: "50px",
    },
    service_box: {
      border: "solid #000 1px",
      boxShadow: "0 0 10px #000",
      width: screenLessThan430
        ? "75%"
        : screenGreaterThan430LessThan768
        ? "50%"
        : screenGreaterThan768LessThan1024
        ? "40%"
        : screenGreaterThan1024LessThan1280
        ? "27%"
        : screenGreaterThan1920LessThan3840
        ? "26%"
        : screenGreaterThan1280LessThan1440
        ? "22%"
        : screenGreaterThan1440LessThan1920
        ? "18%"
        : "100%",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      height: screenLessThan430
        ? "400px"
        : screenGreaterThan1024LessThan1280
        ? "380px"
        : screenGreaterThan430LessThan768
        ? "400px"
        : screenGreaterThan768LessThan1024
        ? "450px"
        : screenGreaterThan1440LessThan1920
        ? "400px"
        : screenGreaterThan1280LessThan1440
        ? "360px"
        : "550px",
    },
    heading_service: {
      fontSize: screenLessThan430
        ? "32px"
        : screenGreaterThan430LessThan768
        ? "34px"
        : screenGreaterThan768LessThan1024
        ? "36px"
        : screenGreaterThan1024LessThan1280
        ? "36px"
        : screenGreaterThan1280LessThan1440
        ? "40px"
        : screenGreaterThan1440LessThan1920
        ? "44px"
        : "52px",
      borderBottom: "solid #c23237 2px",
      width: screenLessThan430
        ? "60%"
        : screenGreaterThan1024LessThan1280 || screenGreaterThan1280LessThan1440
        ? "20%"
        : screenGreaterThan1440LessThan1920
        ? "15%"
        : screenGreaterThan768LessThan1024
        ? "30%"
        : screenGreaterThan1920LessThan3840
        ? "15%"
        : "15%",
      textAlign: "center",
      marginBottom: "50px",
      justifySelf: "center",
      margin: "0 auto",
    },
    desc_service: {
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
        ? "85%"
        : screenGreaterThan430LessThan768 ||
          screenGreaterThan768LessThan1024 ||
          screenGreaterThan1280LessThan1440
        ? "70%"
        : screenGreaterThan1024LessThan1280 ||
          screenGreaterThan1440LessThan1920 ||
          screenGreaterThan1280LessThan1440 ||
          screenGreaterThan1920LessThan3840
        ? "60%"
        : "100%",
      margin: "0 auto",
      fontWeight: "bold",
      marginTop: "50px",
    },
    typo_service_heading: {
      //   border: "solid green 2px",
      fontSize: screenLessThan430 ? "1.4rem" : "1.2rem",
      fontWeight: "bold",
      color: "#fff",
      backgroundColor: "#c23237",
      textAlign: "center",
      width: "100%",
      height: screenLessThan430 ? "15%" : "12%",
      alignContent: "center",
    },
    typo_service_desc: {
      // border: "solid red 2px",
      width: screenLessThan430
        ? "80%"
        : screenGreaterThan768LessThan1024 || screenGreaterThan1920LessThan3840
        ? "80%"
        : screenGreaterThan1024LessThan1280 ||
          screenGreaterThan1280LessThan1440 ||
          screenGreaterThan1440LessThan1920
        ? "80%"
        : screenGreaterThan430LessThan768
        ? "75%"
        : "100%",
      fontSize: screenLessThan430
        ? "0.9rem"
        : screenGreaterThan430LessThan768 || screenGreaterThan768LessThan1024
        ? "1.0rem"
        : screenGreaterThan1024LessThan1280
        ? "0.9rem"
        : screenGreaterThan1280LessThan1440
        ? "0.9rem"
        : screenGreaterThan1440LessThan1920
        ? "1rem"
        : screenGreaterThan1920LessThan3840
        ? "1.3rem"
        : "1rem",
      alignSelf: "center",
      fontWeight: 500,
    },
  };
  return (
    <div id="service_page">
      <Box
        sx={{
          backgroundColor: "#D9D9D9",
          paddingTop: "100px",
          width: screenGreaterThan1920LessThan3840 ? "80%" : "100%",
          margin: screenGreaterThan1920LessThan3840 ? "0 auto" : "",
        }}
      >
        <MotionTypography
          sx={styles.heading_service}
          initial={{ transform: "translateY(-100px)" }}
          whileInView={{ transform: "translateY(10%)" }}
          transition={{ type: "spring", bounce: 0.25, visualDuration: 1 }}
          viewport={{ once: true }}
        >
          Services
        </MotionTypography>
        <MotionTypography
          sx={styles.desc_service}
          initial={{ transform: "translateY(40px)" }}
          whileInView={{ transform: "translateY(0px)" }}
          transition={{
            type: "spring",
            visualDuration: 1,
            bounce: 0.5,
          }}
          viewport={{ once: true }}
        >
          We provide reliable, professional, and customer-focused services
          designed to meet your unique needs. With a strong commitment to
          quality, efficiency, and integrity, our team ensures that every job is
          handled with care—from the first interaction to final delivery. Your
          satisfaction is our priority
        </MotionTypography>

        <Box sx={styles.parent_service}>
          <Box sx={styles.service_box}>
            <Typography sx={styles.typo_service_heading}>
              Full Truck Load
            </Typography>
            <MotionTypography
              sx={styles.typo_service_desc}
              initial={{ transform: "translateX(10px)" }}
              whileInView={{ transform: "translateX(0px)" }}
              transition={{
                type: "spring",
                visualDuration: 1,
                bounce: 0.5,
              }}
            >
              With our Full Truckload (FTL) service, we take complete control of
              your freight&rsquo;s journey. We provide extensive FTL coverage
              across hundreds of lanes throughout Ontario. Whether managing
              single pick-and-drop locations or navigating complex multi-stop
              shipments for both dry and refrigerated cargo, our operations
              team’s vast expertise ensures you receive a reliable and
              cost-effective solution on short notice.
            </MotionTypography>
          </Box>
          <Box sx={styles.service_box}>
            <Typography sx={styles.typo_service_heading}>
              Less Truck Load
            </Typography>
            <MotionTypography
              sx={styles.typo_service_desc}
              initial={{ transform: "translateX(10px)" }}
              whileInView={{ transform: "translateX(0px)" }}
              transition={{
                type: "spring",
                visualDuration: 1,
                bounce: 0.5,
              }}
            >
              LTL shipping is a cost-effective solution for small to
              medium-sized orders where the pickup or delivery locations do not
              align well with your existing orders. If you have occasional
              pallet-sized orders that need to be loaded promptly, our LTL
              service is straightforward and efficient. You won’t have to deal
              with complex calculations, we provide a flat per-pallet rate for
              shipments of up to 12 pallets across numerous Ontario routes.
            </MotionTypography>
          </Box>
          <Box sx={styles.service_box}>
            <Typography sx={styles.typo_service_heading}>
              Renting a storage trailer
            </Typography>
            <MotionTypography
              sx={styles.typo_service_desc}
              initial={{ transform: "translateX(10px)" }}
              whileInView={{ transform: "translateX(0px)" }}
              transition={{
                type: "spring",
                visualDuration: 1,
                bounce: 0.5,
              }}
            >
              Our storage trailer rental services in Toronto provide exceptional
              flexibility, enabling customers to rent our trailers for any
              length of time without restrictions on minimum or maximum rental
              periods. You have the option to keep the storage trailer on your
              premises for added convenience.
            </MotionTypography>
          </Box>
          <Box sx={styles.service_box}>
            <Typography sx={styles.typo_service_heading}>
              Temperature Controlled Trailers
            </Typography>
            <MotionTypography
              sx={styles.typo_service_desc}
              initial={{ transform: "translateX(10px)" }}
              whileInView={{ transform: "translateX(0px)" }}
              transition={{
                type: "spring",
                visualDuration: 1,
                bounce: 0.5,
              }}
            >
              Ensure the protection of your fresh or frozen perishable items
              with our temperature- controlled trailers (reefers) designed for
              FTL and LTL shipments. By communicating your requirements to us,
              our teams leverage their in-depth commodity knowledge and regional
              expertise to maintain the cold chain at optimal temperatures
              throughout transit, while also sourcing the most suitable trucks
              at competitive prices.
            </MotionTypography>
          </Box>
          <Box sx={styles.service_box}>
            <Typography sx={styles.typo_service_heading}>
              Truckload Freight Claims
            </Typography>
            <MotionTypography
              sx={styles.typo_service_desc}
              initial={{ transform: "translateX(10px)" }}
              whileInView={{ transform: "translateX(0px)" }}
              transition={{
                type: "spring",
                visualDuration: 1,
                bounce: 0.5,
              }}
            >
              While not as common, truckload carrier claims can happen. Our
              expertise in trucking regulations ensures companies can navigate
              the claims process easier. Plus, all carriers carry
              industry-standard $100,000 cargo insurance for added peace of
              mind.
            </MotionTypography>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Service;
