"use client";
import React, { useState, useEffect } from "react";
import { motion, scale } from "framer-motion";

import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import CertificateRequest from "./components/CertificateRequest";
import Service from "./components/Service";
import WeWorkWith from "./components/WeWorkWith";
import WhyChooseUs from "./components/WhyChooseUs";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import FooterTwo from "./components/FooterTwo";

import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  if (loading) {
    return (
      <Box
        sx={{
          backgroundColor: "#d9d9d9",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <LocalShippingOutlinedIcon
          sx={{ height: 150, width: 150, color: "#c23237" }}
        />
        <CircularProgress
          sx={{ width: 100, height: 100, mt: 2, color: "#c23237" }}
        />
      </Box>
    );
  }

  return (
    <>
      <Navbar />
      <HomeSection />
      <AboutSection />
      <Service />
      <WeWorkWith />
      <CertificateRequest />
      <WhyChooseUs />
      <ContactUs />
      <Footer />
      <FooterTwo />
    </>
  );
}
