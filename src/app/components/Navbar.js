"use client";

import React, { useState, useEffect } from "react";

import { Box, Typography, useMediaQuery, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const [loading, setLoading] = useState(undefined);
  useEffect(() => {
    setLoading(false);
  }, []);

  const screenLessThan430 = useMediaQuery(
    "(min-width: 100px) and (max-width: 430px)"
  );
  const screenGreaterThan430LessThan768 = useMediaQuery(
    "(min-width: 431px) and (max-width: 768px)"
  );
  const screenGreaterThan768LessThan1024 = useMediaQuery(
    "(min-width: 769px) and (max-width: 1024px)"
  );
  const screenGreaterThan1024LessThan3840 = useMediaQuery(
    "(min-width: 1025px) and (max-width: 3840px)"
  );
  const screenGreaterThan1280LessThan1440 = useMediaQuery(
    "(min-width: 1281px) and (max-width: 1440px)"
  );
  const screenGreaterThan1440LessThan1920 = useMediaQuery(
    "(min-width: 1441px) and (max-width: 1920px)"
  );
  const screenGreaterThan1920LessThan2560 = useMediaQuery(
    "(min-width: 1921px) and (max-width: 2560px)"
  );

  const styles = {
    parent_navbar_box: {
      //   border: "solid red 2px",
      backgroundColor: "#c23237",
      display: "flex",
      flexDirection: "row",
      height:
        screenLessThan430 || screenGreaterThan430LessThan768
          ? "64px"
          : screenGreaterThan768LessThan1024
          ? "72px"
          : "100px",
      justifyContent: "space-between",
      alignItems: "center",
    },
    logo_img: {
      //   border: "solid blue 2px",
      backgroundImage: `url("/images/logo.PNG")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height:
        screenLessThan430 || screenGreaterThan430LessThan768
          ? "50px"
          : screenGreaterThan768LessThan1024
          ? "50px"
          : "30px",
      width:
        screenLessThan430 || screenGreaterThan430LessThan768
          ? "60px"
          : screenGreaterThan768LessThan1024
          ? "60px"
          : "30px",
      marginLeft:
        screenLessThan430 || screenGreaterThan430LessThan768
          ? "20px"
          : screenGreaterThan768LessThan1024
          ? "30px"
          : "",
    },
    navlist_box: {
      //   border: "solid black 2px",
      display: "flex",
      flexDirection: "row",
      gap: "60px",
      marginRight: screenGreaterThan768LessThan1024 ? "60px" : "",
    },
    humburgur_icon: {
      //   border: "solid green 2px",
      height:
        screenLessThan430 || screenGreaterThan430LessThan768 ? "40px" : "30px",
      width:
        screenLessThan430 || screenGreaterThan430LessThan768 ? "40px" : "30px",
      marginRight: "10px",
    },
    typo_nav_item: {
      fontSize: "20px",
      color: "#fff",
    },
  };
  if (loading === undefined) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Box sx={styles.parent_navbar_box}>
        <Box sx={styles.logo_img}></Box>
        {screenLessThan430 || screenGreaterThan430LessThan768 ? (
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon sx={styles.humburgur_icon} />
          </IconButton>
        ) : (
          <Box sx={styles.navlist_box}>
            <Typography sx={styles.typo_nav_item}>Home</Typography>
            <Typography sx={styles.typo_nav_item}>About</Typography>
            <Typography sx={styles.typo_nav_item}>Service</Typography>
            <Typography sx={styles.typo_nav_item}>Contact</Typography>
          </Box>
        )}
      </Box>
    </>
  );
}

export default Navbar;
