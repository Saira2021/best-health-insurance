import React from "react";
import Carousel from "../components/Carousel";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Services from "./Services";
import OurPlans from "./OurPlans";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      {/* <div id="Home"> */}
      <Carousel />
      {/* </div> */}
      <div id="Services">
        <Services />
      </div>
      <div id="Contact Us">
        <ContactUs />
      </div>
      <div id="Our Plans">
        <OurPlans />
      </div>
      <div id="About Us">
        <AboutUs />
      </div>
      <Footer />
    </>
  );
};

export default Home;
