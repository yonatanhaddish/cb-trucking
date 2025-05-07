import React from "react";

import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import CertificateRequest from "./components/CertificateRequest";
import Service from "./components/Service";
import WeWorkWith from "./components/WeWorkWith";
import WhyChooseUs from "./components/WhyChooseUs";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
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
      </>
    </>
  );
}
