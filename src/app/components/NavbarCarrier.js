"use client";

import React, { useState, useEffect } from "react";
import NextLink from "next/link";
import {
  Box,
  Typography,
  useMediaQuery,
  IconButton,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
function NavbarCarrier() {
  const [selectedCurrentLink, setSelectedCurrentLink] =
    useState("carrier-page");

  const isMobile = useMediaQuery("(max-width: 768px)");
  const isWideScreen = useMediaQuery("(min-width: 1921px)");

  const styles = {
    parent_nav_bar_carrier: {
      backgroundColor: "#c23237",
      display: "flex",
      flexDirection: "row",
      height: isMobile ? "64px" : "72px",
      justifyContent: "space-between",
      alignItems: "center",
      width: isWideScreen ? "80%" : "100%",
      margin: isWideScreen ? "0 auto" : "0",
      position: "sticky",
      top: 0,
      zIndex: 1100,
    },
    logo_box_parent: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      cursor: "pointer",
      //   border: "solid green 2px",
      marginLeft: isMobile ? "15px" : "25px",
    },
    logo_img: {
      backgroundImage: `url("/images/logo.PNG")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "60px",
      width: "60px",
      cursor: "pointer",
    },
    typo_logo: {
      fontSize: isMobile ? "15px" : "20px",
      color: "#fff",
      fontWeight: 600,
    },
    navlink_button: {
      //   border: "solid green 2px",
      display: "flex",
      flexDirection: "row",
      gap: isMobile ? "12px" : "30px",
      marginRight: isMobile ? "20px" : "15%",
    },
    single_navlink: {
      color: "#fff",
      cursor: "pointer",
      fontWeight: "bold",
    },
    navlist_onhover: {
      color: "#000",
      textShadow: `
        0 0 10px #e6e6e6,
        0 0 20px #e6e6e6,
        0 0 30px #e6e6e6,
        0 0 40px #e6e6e6
      `,
    },
    selected_link_current: {
      color: "#000",
      textShadow: `
        0 0 10px #e6e6e6,
        0 0 20px #e6e6e6,
        0 0 30px #e6e6e6,
        0 0 40px #e6e6e6
      `,
    },
  };

  const handleSelectCurrentLink = (data) => {
    setSelectedCurrentLink(data);
  };

  return (
    <>
      <Box sx={styles.parent_nav_bar_carrier}>
        <Button sx={styles.logo_box_parent} component={NextLink} href="/">
          <Box sx={styles.logo_img}></Box>
          <Typography sx={styles.typo_logo}>CB Transportation</Typography>
        </Button>
        <Box sx={styles.navlink_button}>
          <Button
            component={NextLink}
            href="/"
            sx={{
              ...styles.single_navlink,
              "&:hover": styles.navlist_onhover,
              ...(selectedCurrentLink === "home-page" &&
                styles.selected_link_current),
            }}
            onClick={() => handleSelectCurrentLink("home-page")}
          >
            Home
          </Button>
          <Button
            component={NextLink}
            href="/carriers"
            sx={{
              ...styles.single_navlink,
              "&:hover": styles.navlist_onhover,
              ...(selectedCurrentLink === "carrier-page" &&
                styles.selected_link_current),
            }}
            onClick={() => handleSelectCurrentLink("carrier-page")}
          >
            Carriers
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default NavbarCarrier;
