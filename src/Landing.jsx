import React from "react";
import "./Landing.scss";
import Header from "./Header/Header";
import MeetSubba from "./MeetSubba/MeetSubba";
import MyPlan from "./MyPlan/MyPlan";
import WhyMe from "./WhyMe/WhyMe";
import ContactUs from "./ContactUs/ContactUs";
import Footer from "./Footer/Footer";
import Gallery from "./Gallery/Gallery";
import Faqs from "./Faqs/Faqs";


function Landing() {
  return (
    <>
      <Header />
      <MeetSubba/>
      <MyPlan/>
      <WhyMe/>
      <Gallery/>
      <ContactUs/>
      <Footer/>
    </>
  );
}

export default Landing;
