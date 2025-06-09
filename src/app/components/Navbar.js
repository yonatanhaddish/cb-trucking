"use client";

import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
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
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openSideNavBar, setOpenSideNavBar] = useState(false);
  const [selectedCurrentLink, setSelectedCurrentLink] = useState("home-page");

  const isMobile = useMediaQuery("(max-width: 768px)");
  const isWideScreen = useMediaQuery("(min-width: 1921px)");

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

  const MotionMenuItem = motion(MenuItem);
  const MotionTypography = motion(Typography);
  const MotionButton = motion(Button);

  const styles = {
    parent_navbar_box: {
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
    logo_img: {
      backgroundImage: `url("/images/logo.PNG")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "60px",
      width: "60px",
      marginLeft: "20px",
      cursor: "pointer",
    },
    navlist_box: {
      display: "flex",
      flexDirection: "row",
      gap: "30px",
      marginRight: "8%",
      // border: "solid white 2px",
    },
    icon_button: {
      height: "40px",
      width: "40px",
      // border: "solid white 2px",
      marginRight: "20px",
    },
    icon_close: {
      height: "40px",
      width: "40px",
      // border: "solid white 2px",
      marginRight: "20px",
    },
    typo_nav_item: {
      fontSize: isWideScreen ? "25px" : "20px",
      color: "#fff",
      cursor: "pointer",
    },
    logo_box_parent: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      cursor: "pointer",
    },
    typo_logo: {
      fontSize: "20px",
      color: "#fff",
      fontWeight: 600,
    },
    side_navbar_box: {
      backgroundColor: "#c23237",
      position: "fixed",
      top: isMobile ? "62px" : "72px",
      right: 0,
      width: screenLessThan430
        ? "94vw"
        : screenGreaterThan430LessThan768
        ? "98vw"
        : "",
      height: "40vh",
      padding: "2rem 1rem",
      transform: openSideNavBar ? "translateX(0)" : "translateX(100%)",
      transition: "transform 0.3s ease",
      zIndex: 1000,
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
    pages_link: {
      // fontSize: isWideScreen ? "25px" : "20px",
      color: "#fff",
      cursor: "pointer",
    },
    pages_onhover: {
      color: "#000",
      textShadow: `
                    0 0 20px #e6e6e6,
                    0 0 30px #e6e6e6,
                    0 0 40px #e6e6e6,
                    0 0 50px #e6e6e6
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

  const open = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const toggleSideNavbar = () => setOpenSideNavBar((prev) => !prev);

  const handleSelectCurrentLink = (data) => {
    setSelectedCurrentLink(data);
  };

  return (
    <>
      <Box sx={styles.parent_navbar_box}>
        <Link to="home_page" duration={500} smooth={true}>
          <Button sx={styles.logo_box_parent}>
            <Box sx={styles.logo_img}></Box>
            <Typography sx={styles.typo_logo}>CB Trucking</Typography>
          </Button>
        </Link>

        {isMobile ? (
          <>
            {openSideNavBar ? (
              <IconButton onClick={toggleSideNavbar}>
                <CloseIcon sx={styles.icon_close} />
              </IconButton>
            ) : (
              <IconButton onClick={toggleSideNavbar}>
                <MenuIcon sx={styles.icon_button} />
              </IconButton>
            )}

            <Box sx={styles.side_navbar_box}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "30px",
                }}
              >
                {[
                  { id: "home_page", label: "Home" },
                  { id: "about_us_page", label: "About" },
                  { id: "service_page", label: "Service" },
                  {
                    id: "certificate_and_accrediation_page",
                    label: "Certificate & Accreditations",
                  },
                  { id: "our_partner_page", label: "Trusted By" },
                  { id: "why_choose_us_page", label: "Why Choose Us?" },
                  { id: "contact_us_page", label: "Contact" },
                ].map((item) => (
                  <Link key={item.id} to={item.id} duration={500} smooth={true}>
                    <MotionTypography
                      onClick={() => {
                        toggleSideNavbar();
                      }}
                      sx={{
                        justifySelf: "center",
                        textAlign: "center",
                        fontSize: screenLessThan430
                          ? "14px"
                          : screenGreaterThan430LessThan768
                          ? "15px"
                          : screenGreaterThan768LessThan1024
                          ? "15.5px"
                          : screenGreaterThan1024LessThan1280
                          ? "16px"
                          : screenGreaterThan1280LessThan1440
                          ? "16.5px"
                          : screenGreaterThan1440LessThan1920
                          ? "17px"
                          : "18px",
                        fontWeight: "bold",
                      }}
                      whileTap={{
                        color: "#000",
                        textShadow: `
                          0 0 20px #e6e6e6,
                          0 0 30px #e6e6e6,
                          0 0 40px #e6e6e6,
                          0 0 50px #e6e6e6
                        `,
                      }}
                      whileHover={{
                        color: "#000",
                        textShadow: `
                          0 0 20px #e6e6e6,
                          0 0 30px #e6e6e6,
                          0 0 40px #e6e6e6,
                          0 0 50px #e6e6e6
                        `,
                      }}
                    >
                      {item.label}{" "}
                    </MotionTypography>
                  </Link>
                ))}
              </Box>
            </Box>
          </>
        ) : (
          <Box sx={styles.navlist_box}>
            <Link to="home_page" duration={500} smooth={true}>
              <Typography
                sx={{
                  ...styles.typo_nav_item,
                  "&:hover": styles.navlist_onhover,
                  ...(selectedCurrentLink === "home-page" &&
                    styles.selected_link_current),
                }}
                onClick={() => handleSelectCurrentLink("home-page")}
              >
                Home
              </Typography>
            </Link>
            <Link to="about_us_page" duration={500} smooth={true}>
              <Typography
                sx={{
                  ...styles.typo_nav_item,
                  "&:hover": styles.navlist_onhover,
                  ...(selectedCurrentLink === "about_us_page" &&
                    styles.selected_link_current),
                }}
                onClick={() => handleSelectCurrentLink("about_us_page")}
              >
                About
              </Typography>
            </Link>
            <Link to="service_page" duration={500} smooth={true}>
              <Typography
                sx={{
                  ...styles.typo_nav_item,
                  "&:hover": styles.navlist_onhover,
                  ...(selectedCurrentLink === "service_page" &&
                    styles.selected_link_current),
                }}
                onClick={() => handleSelectCurrentLink("service_page")}
              >
                Service
              </Typography>
            </Link>
            <Typography
              onClick={handleClick}
              sx={{
                ...styles.typo_nav_item,
                "&:hover": styles.navlist_onhover,
                ...([
                  "certificate_and_accrediation_page",
                  "our_partner_page",
                  "why_choose_us_page",
                  "contact_us_page",
                ].includes(selectedCurrentLink) &&
                  styles.selected_link_current),
              }}
              // aria-controls={open ? "basic-menu" : undefined}
              // aria-haspopup="true"
              // aria-expanded={open ? "true" : undefined}
            >
              Pages ⌄
            </Typography>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              sx={{
                ...styles.typo_nav_item,
              }}
            >
              <Box
                style={{
                  backgroundColor: " #c23237",
                  marginTop: "-8px",
                  marginBottom: "-8px",
                }}
              >
                <Link
                  to="certificate_and_accrediation_page"
                  duration={500}
                  smooth={true}
                >
                  <MenuItem
                    sx={{
                      ...styles.pages_link,
                      "&:hover": styles.pages_onhover,
                      ...(selectedCurrentLink ===
                        "certificate_and_accrediation_page" &&
                        styles.selected_link_current),
                    }}
                    onClick={() => {
                      handleClose();
                      handleSelectCurrentLink(
                        "certificate_and_accrediation_page"
                      );
                    }}
                  >
                    Certificate & Accreditations
                  </MenuItem>
                </Link>
                <Link to="our_partner_page" duration={500} smooth={true}>
                  <MenuItem
                    sx={{
                      ...styles.pages_link,
                      "&:hover": styles.pages_onhover,
                      ...(selectedCurrentLink === "our_partner_page" &&
                        styles.selected_link_current),
                    }}
                    onClick={() => {
                      handleClose();
                      handleSelectCurrentLink("our_partner_page");
                    }}
                  >
                    Trusted By
                  </MenuItem>
                </Link>
                <Link to="why_choose_us_page" duration={500} smooth={true}>
                  <MenuItem
                    sx={{
                      ...styles.pages_link,
                      "&:hover": styles.pages_onhover,
                      ...(selectedCurrentLink === "why_choose_us_page" &&
                        styles.selected_link_current),
                    }}
                    onClick={() => {
                      handleClose();
                      handleSelectCurrentLink("why_choose_us_page");
                    }}
                  >
                    Why Choose Us?
                  </MenuItem>
                </Link>
                <Link to="contact_us_page" duration={500} smooth={true}>
                  <MenuItem
                    sx={{
                      ...styles.pages_link,
                      "&:hover": styles.pages_onhover,
                      ...(selectedCurrentLink === "contact_us_page" &&
                        styles.selected_link_current),
                    }}
                    onClick={() => {
                      handleClose();
                      handleSelectCurrentLink("contact_us_page");
                    }}
                  >
                    Contact
                  </MenuItem>
                </Link>
              </Box>
            </Menu>
          </Box>
        )}
      </Box>
    </>
  );
}

export default Navbar;
