"use client";

import React from "react";

import { Box, Typography, useMediaQuery, Button } from "@mui/material";

function CertificateRequest() {
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
    parent_certificate: {
      //   border: "solid red 2px",
      marginTop: "50px",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: screenLessThan430
        ? "40px"
        : screenGreaterThan430LessThan768 ||
          screenGreaterThan768LessThan1024 ||
          screenGreaterThan1024LessThan1280 ||
          screenGreaterThan1280LessThan1440
        ? "60px"
        : screenGreaterThan1440LessThan1920 || screenGreaterThan1920LessThan3840
        ? "120px"
        : "",
    },
    heading_certification: {
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
        ? "40%"
        : screenGreaterThan1440LessThan1920
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
    license_box: {
      width: screenLessThan430
        ? "80%"
        : screenGreaterThan430LessThan768
        ? "50%"
        : screenGreaterThan768LessThan1024
        ? "35%"
        : screenGreaterThan1024LessThan1280 || screenGreaterThan1280LessThan1440
        ? "24%"
        : screenGreaterThan1440LessThan1920
        ? "22%"
        : screenGreaterThan1920LessThan3840
        ? "20%"
        : "100%",
      border: "solid #000 1px",
      boxShadow: "0 0 10px #000",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifySelf: "center",
      justifyContent: "space-around",
      backgroundColor: "#fff",
      height: screenLessThan430
        ? "450px"
        : screenGreaterThan430LessThan768 ||
          screenGreaterThan1440LessThan1920 ||
          screenGreaterThan1920LessThan3840
        ? "450px"
        : screenGreaterThan768LessThan1024 || screenGreaterThan1280LessThan1440
        ? "400px"
        : screenGreaterThan1024LessThan1280
        ? "350px"
        : "300px",
      borderRadius: "5px",
    },
    license_logo_icc: {
      backgroundImage: `url("/images/icc_license.png")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100px",
      width: "100px",
      //   border: "solid green 1px",
    },
    license_logo_cpma_license: {
      backgroundImage: `url("/images/cpma_license.png")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "150px",
      width: "150px",
      //   border: "solid green 1px",
    },
    wsib_license_logo: {
      backgroundImage: `url("/images/wsib_license.png")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "150px",
      width: "200px",
      //   border: "solid green 1px",
    },
    button_request: {
      //   border: "solid 1px blue",
      width:
        screenLessThan430 || screenGreaterThan430LessThan768
          ? "80%"
          : screenGreaterThan768LessThan1024 ||
            screenGreaterThan1024LessThan1280 ||
            screenGreaterThan1280LessThan1440 ||
            screenGreaterThan1440LessThan1920 ||
            screenGreaterThan1920LessThan3840
          ? "70%"
          : "",
      height:
        screenLessThan430 ||
        screenGreaterThan430LessThan768 ||
        screenGreaterThan768LessThan1024 ||
        screenGreaterThan1024LessThan1280 ||
        screenGreaterThan1280LessThan1440
          ? "40px"
          : screenGreaterThan1440LessThan1920 ||
            screenGreaterThan1920LessThan3840
          ? "50px"
          : "",
      backgroundColor: "#c23237",
      color: "#fff",
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
    desc_certification: {
      //   border: "solid green 2px",
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
          screenGreaterThan1280LessThan1440 ||
          screenGreaterThan1920LessThan3840
        ? "70%"
        : screenGreaterThan1024LessThan1280 || screenGreaterThan1440LessThan1920
        ? "75%"
        : "100%",
      margin: "0 auto",
      fontWeight: "bold",
    },
    typo_desc: {
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
      width: "90%",
      textAlign: "center",
    },
    typo_heading: {
      fontWeight: "bold",
      fontSize: screenLessThan430
        ? "1.05rem"
        : screenGreaterThan430LessThan768 || screenGreaterThan768LessThan1024
        ? "1.0rem"
        : screenGreaterThan1024LessThan1280
        ? "1.1rem"
        : screenGreaterThan1280LessThan1440
        ? "1.2rem"
        : screenGreaterThan1440LessThan1920
        ? "1.3rem"
        : screenGreaterThan1920LessThan3840
        ? "1.4rem"
        : "1rem",
    },
  };
  return (
    <Box
      sx={{
        backgroundColor: "#d9d9d9",
        paddingTop: "30px",
        width: screenGreaterThan1920LessThan3840 ? "80%" : "100%",
        margin: screenGreaterThan1920LessThan3840 ? "0 auto" : "",
      }}
    >
      <Typography sx={styles.heading_certification}>
        Certificate & Accrediations
      </Typography>
      <Typography sx={styles.desc_certification}>
        Our certifications and accreditations demonstrate our ongoing commitment
        to quality, safety, and compliance. From recognized industry standards
        to government-authorized validations, each credential reflects our
        dedication to delivering trusted, high-standard services that meet
        regulatory and customer expectations.
      </Typography>
      <Box sx={styles.parent_certificate}>
        <Box sx={styles.license_box}>
          <Box sx={styles.license_logo_icc}></Box>
          <Typography sx={styles.typo_heading}>ICC LICENSE</Typography>
          <Typography sx={styles.typo_desc}>
            Canadian Produce Marketing Association
          </Typography>
          <Button sx={styles.button_request}>Request</Button>
        </Box>
        <Box sx={styles.license_box}>
          <Box sx={styles.license_logo_cpma_license}></Box>
          <Typography sx={styles.typo_heading}>CPMA</Typography>
          <Typography sx={styles.typo_desc}>
            Interstate Commerce Commission License
          </Typography>
          <Button sx={styles.button_request}>Request</Button>
        </Box>
        <Box sx={styles.license_box}>
          <Box sx={styles.wsib_license_logo}></Box>
          <Typography sx={styles.typo_heading}>WSIB CLEARANCE</Typography>
          <Typography sx={styles.typo_desc}>
            Workplace Safety and Insurance Board Clearance
          </Typography>
          <Button sx={styles.button_request}>Request</Button>
        </Box>
      </Box>
    </Box>
  );
}

export default CertificateRequest;
