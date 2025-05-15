"use client";
import React, { useState, useEffect } from "react";
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

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Home() {
  // const [loading, setLoading] = useState(undefined);
  // useEffect(() => {
  //   setLoading(false);
  // }, []);
  // if (loading === undefined) {
  //   return (
  //     <Box sx={{ display: "flex" }}>
  //       <CircularProgress />
  //     </Box>
  //   );
  // }

  return (
    <>
      <>
        <Navbar />
        <HomeSection />
        <AboutSection />
        <Service />
        <WeWorkWith />
        {/* <CertificateRequest /> */}
        {/* <WhyChooseUs /> */}
        {/* <ContactUs /> */}
        {/* <Footer /> */}
        {/* <FooterTwo /> */}
      </>
    </>
  );
}
