import React from "react";

import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import CertificateRequest from "./components/CertificateRequest";

export default function Home() {
  return (
    <>
      <>
        <Navbar />
        <HomeSection />
        <AboutSection />
        <CertificateRequest />
      </>
    </>
  );
}
