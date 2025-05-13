"use client";

import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import {
  Box,
  Typography,
  useMediaQuery,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {
  const [loading, setLoading] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openSideNavBar, setOpenSideNavBar] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, []);

  const isMobile = useMediaQuery("(max-width: 768px)");
  const isWideScreen = useMediaQuery("(min-width: 1921px)");

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
    },
    icon_button: {
      height: "50px",
      width: "50px",
      // border: "solid white 2px",
      marginRight: "20px",
    },
    icon_close: {
      height: "50px",
      width: "50px",
      // border: "solid white 2px",
      margin: "auto",
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
    },
    typo_logo: {
      fontSize: "20px",
      color: "#fff",
      fontWeight: 600,
    },
    side_navbar_box: {
      backgroundColor: "#c23237",
      position: "fixed",
      top: 0,
      right: 0,
      width: "92%",
      height: "60vh",
      padding: "2rem 1rem",
      transform: openSideNavBar ? "translateX(0)" : "translateX(100%)",
      transition: "transform 0.3s ease",
      zIndex: 1000,
    },
  };

  const open = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const toggleSideNavbar = () => setOpenSideNavBar((prev) => !prev);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Box sx={styles.parent_navbar_box}>
        <Link to="home_page" duration={500} smooth={true}>
          <Box sx={styles.logo_box_parent}>
            <Box sx={styles.logo_img}></Box>
            <Typography sx={styles.typo_logo}>CB Trucking</Typography>
          </Box>
        </Link>

        {isMobile ? (
          <>
            <IconButton onClick={toggleSideNavbar} sx={styles.icon_button}>
              <MenuIcon />
            </IconButton>
            <Box sx={styles.side_navbar_box}>
              <Link to="home_page" duration={500} smooth={true}>
                <Box sx={styles.logo_box_parent}>
                  <Box sx={styles.logo_img}></Box>
                  <Typography sx={styles.typo_logo}>CB Trucking</Typography>
                </Box>
              </Link>
              <IconButton onClick={toggleSideNavbar} sx={styles.icon_close}>
                <CloseIcon />
              </IconButton>
              <Box>
                {[
                  { id: "home_page", label: "Home" },
                  { id: "about_us_page", label: "About" },
                  { id: "service_page", label: "Service" },
                  {
                    id: "certificate_and_accrediation_page",
                    label: "Certificate & Accreditations",
                  },
                  { id: "our_partner_page", label: "Our Partners" },
                  { id: "why_choose_us_page", label: "Why Choose Us?" },
                  { id: "contact_us_page", label: "Contact" },
                ].map((item) => (
                  <Link key={item.id} to={item.id} duration={500} smooth={true}>
                    <MenuItem onClick={toggleSideNavbar}>{item.label}</MenuItem>
                  </Link>
                ))}
              </Box>
            </Box>
          </>
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
            <Typography
              onClick={handleClick}
              sx={styles.typo_nav_item}
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              Pages ⌄
            </Typography>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{ "aria-labelledby": "basic-button" }}
            >
              <Link
                to="certificate_and_accrediation_page"
                duration={500}
                smooth={true}
              >
                <MenuItem onClick={handleClose}>
                  Certificate & Accreditations
                </MenuItem>
              </Link>
              <Link to="our_partner_page" duration={500} smooth={true}>
                <MenuItem onClick={handleClose}>Our Partners</MenuItem>
              </Link>
              <Link to="why_choose_us_page" duration={500} smooth={true}>
                <MenuItem onClick={handleClose}>Why Choose Us?</MenuItem>
              </Link>
              <Link to="contact_us_page" duration={500} smooth={true}>
                <MenuItem onClick={handleClose}>Contact</MenuItem>
              </Link>
            </Menu>
          </Box>
        )}
      </Box>
    </>
  );
}

export default Navbar;
