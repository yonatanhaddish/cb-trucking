"use client";

import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
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
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Navbar() {
  const [loading, setLoading] = useState(undefined);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openSideNavBar, setOpenSideNavBar] = useState(false);

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
      position: "sticky",
      top: 0,
      zIndex: 1100,
    },
    logo_img: {
      // border: "solid blue 2px",
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
      height: openSideNavBar ? "40px" : "60px",
      width: openSideNavBar ? "40px" : "60px",
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
      // border: "solid green 2px",
      height:
        screenLessThan430 || screenGreaterThan430LessThan768 ? "40px" : "30px",
      width:
        screenLessThan430 || screenGreaterThan430LessThan768 ? "40px" : "30px",
      marginRight: "10px",
    },
    humburgur_icon_close: {
      // border: "solid red 2px",
      height:
        screenLessThan430 || screenGreaterThan430LessThan768 ? "40px" : "30px",
      width:
        screenLessThan430 || screenGreaterThan430LessThan768 ? "40px" : "30px",
      // marginRight: "10px",
      // width: "50%",
      marginLeft: "60%",
    },
    typo_nav_item: {
      fontSize: screenGreaterThan1920LessThan3840 ? "25px" : "20px",
      color: "#fff",
      cursor: "pointer",
      //   border: "solid green 1px",
    },
    logo_box_parent: {
      display: "flex",
      // border: "solid white 1px",
      alignItems: "center",
      gap: "8px",
    },
    typo_logo: {
      fontSize: screenLessThan430 ? "1.3rem" : "1.4rem",
      fontSize: openSideNavBar ? "14px" : "20px",
      color: "#fff",
      fontWeight: 600,
    },
    side_navbar_box: {
      // border: "solid green 2px",
      // width: "200px",
      marginTop: "346px",
      marginLeft: "80px",
      backgroundColor: "#c23237",
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

  const handleOpenHumberger = () => {
    setOpenSideNavBar(!openSideNavBar);
  };
  const handleCloseHumberger = () => {
    setOpenSideNavBar(!openSideNavBar);
  };
  const handleCloseSideBar = () => {
    setOpenSideNavBar(false);
  };

  return (
    <>
      <Box sx={styles.parent_navbar_box}>
        <Link to="home_page" duration={500} smooth={true}>
          <Box sx={styles.logo_box_parent}>
            <Box sx={styles.logo_img}></Box>
            <Typography sx={styles.typo_logo}>CB Trucking</Typography>
          </Box>
        </Link>
        {screenLessThan430 || screenGreaterThan430LessThan768 ? (
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
          >
            {!openSideNavBar ? (
              <MenuIcon
                sx={styles.humburgur_icon}
                onClick={handleOpenHumberger}
              />
            ) : (
              <Box sx={styles.side_navbar_box}>
                <CloseIcon
                  sx={styles.humburgur_icon_close}
                  onClick={handleCloseHumberger}
                />
                <Box>
                  <Link to="home_page" duration={500} smooth={true}>
                    <MenuItem onClick={handleCloseSideBar}>Home</MenuItem>
                  </Link>
                  <Link to="about_us_page" duration={500} smooth={true}>
                    <MenuItem onClick={handleCloseSideBar}>About</MenuItem>
                  </Link>
                  <Link to="service_page" duration={500} smooth={true}>
                    <MenuItem onClick={handleCloseSideBar}> Service</MenuItem>
                  </Link>
                  <Link
                    to="certificate_and_accrediation_page"
                    duration={500}
                    smooth={true}
                  >
                    <MenuItem onClick={handleCloseSideBar}>
                      Certificate & Accrediations
                    </MenuItem>
                  </Link>
                  <Link to="our_partner_page" duration={500} smooth={true}>
                    <MenuItem onClick={handleCloseSideBar}>
                      Our Partners
                    </MenuItem>
                  </Link>
                  <Link to="why_choose_us_page" duration={500} smooth={true}>
                    <MenuItem onClick={handleCloseSideBar}>
                      Why Choose Us?
                    </MenuItem>
                  </Link>
                  <Link to="contact_us_page" duration={500} smooth={true}>
                    <MenuItem onClick={handleCloseSideBar}>Contact</MenuItem>
                  </Link>
                </Box>
              </Box>
            )}
          </IconButton>
        ) : (
          <Box sx={styles.navlist_box}>
            <Link to="home_page" duration={500} smooth={true}>
              <Typography sx={styles.typo_nav_item}>Home</Typography>
            </Link>
            <Link to="about_us_page" duration={500} smooth={true}>
              <Typography sx={styles.typo_nav_item}>About</Typography>
            </Link>

            <Link to="service_page" duration={500} smooth={true}>
              <Typography sx={styles.typo_nav_item}>Service</Typography>
            </Link>
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
                <Link
                  to="certificate_and_accrediation_page"
                  duration={500}
                  smooth={true}
                >
                  <MenuItem>Certificates & Accreditation</MenuItem>
                </Link>
                <Link to="our_partner_page" duration={500} smooth={true}>
                  <MenuItem>Our Partners</MenuItem>
                </Link>
                <Link to="why_choose_us_page" duration={500} smooth={true}>
                  {" "}
                  <MenuItem>Why Choose Us?</MenuItem>
                </Link>
              </Menu>
            </div>
            <Link to="contact_us_page" duration={500} smooth={true}>
              <Typography sx={styles.typo_nav_item}>Contact</Typography>
            </Link>
          </Box>
        )}
      </Box>
    </>
  );
}

export default Navbar;
