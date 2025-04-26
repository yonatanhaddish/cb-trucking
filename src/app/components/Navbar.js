"use client";

import React, { useState, useEffect } from "react";

import {
  Box,
  Typography,
  useMediaQuery,
  IconButton,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Navbar() {
  const [loading, setLoading] = useState(undefined);
  const [anchorEl, setAnchorEl] = useState(null);
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
    parent_navbar_box: {
      //   border: "solid blue 2px",
      backgroundColor: "#c23237",
      display: "flex",
      flexDirection: "row",
      height:
        screenLessThan430 || screenGreaterThan430LessThan768
          ? "64px"
          : screenGreaterThan768LessThan1024 ||
            screenGreaterThan1024LessThan1280 ||
            screenGreaterThan1280LessThan1440 ||
            screenGreaterThan1440LessThan1920
          ? "72px"
          : "100px",
      justifyContent: "space-between",
      alignItems: "center",
      width: screenGreaterThan1920LessThan3840 ? "80%" : "100%",
      margin: screenGreaterThan1920LessThan3840 ? "0 auto" : "",
    },
    logo_img: {
      //   border: "solid blue 2px",
      backgroundImage: `url("/images/logo.PNG")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height:
        screenLessThan430 || screenGreaterThan430LessThan768
          ? "50px"
          : screenGreaterThan768LessThan1024 ||
            screenGreaterThan1024LessThan1280 ||
            screenGreaterThan1280LessThan1440 ||
            screenGreaterThan1440LessThan1920
          ? "50px"
          : "100px",
      width:
        screenLessThan430 || screenGreaterThan430LessThan768
          ? "60px"
          : screenGreaterThan768LessThan1024 ||
            screenGreaterThan1024LessThan1280 ||
            screenGreaterThan1280LessThan1440 ||
            screenGreaterThan1440LessThan1920
          ? "60px"
          : "100px",
      marginLeft:
        screenLessThan430 || screenGreaterThan430LessThan768
          ? "20px"
          : screenGreaterThan768LessThan1024 ||
            screenGreaterThan1024LessThan1280 ||
            screenGreaterThan1280LessThan1440
          ? "30px"
          : screenGreaterThan1440LessThan1920
          ? "40px"
          : "50px",
      cursor: "pointer",
    },
    navlist_box: {
      //   border: "solid black 2px",
      display: "flex",
      flexDirection: "row",
      //   gap: "60px",
      gap: "30px",
      marginRight:
        screenGreaterThan768LessThan1024 ||
        screenGreaterThan1280LessThan1440 ||
        screenGreaterThan1440LessThan1920
          ? "8%"
          : screenGreaterThan1024LessThan1280
          ? "12%"
          : screenGreaterThan1920LessThan3840
          ? "10%"
          : "",
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
      fontSize: screenGreaterThan1920LessThan3840 ? "25px" : "20px",
      color: "#fff",
      cursor: "pointer",
      //   border: "solid green 1px",
    },
  };
  if (loading === undefined) {
    return <div>Loading...</div>;
  }

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
            <div>
              <Typography
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                sx={styles.typo_nav_item}
              >
                Pages ⌄{/* <ExpandMoreIcon /> */}
              </Typography>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  Certificates & Accreditation
                </MenuItem>
                <MenuItem onClick={handleClose}>Our Partners</MenuItem>
                <MenuItem onClick={handleClose}>Why Choose Us?</MenuItem>
                <MenuItem onClick={handleClose}>Testimonials</MenuItem>
              </Menu>
            </div>
            <Typography sx={styles.typo_nav_item}>Contact</Typography>
          </Box>
        )}
      </Box>
    </>
  );
}

export default Navbar;
