import React from "react";
import { Typography, Grid, Box, Divider } from "@mui/material";
import Insurance from "../../src/assets/insurance.jpg";

const AboutUs = () => {
  return (
    <>
      <div style={{ padding: "30px" }}>
        <Divider />
      </div>
      <Box sx={{ width: "100%", padding: "2rem" }}>
        <div elevation={3} sx={{ padding: "2rem" }}>
          <h1 style={{ textAlign: "center" }}>About Us</h1>

          <Grid container spacing={4} alignItems="center">
            <Grid item xs={14} md={6}>
              <Typography variant="body1" paragraph>
                Welcome to our company! We are dedicated to providing the best
                service possible. Our team of professionals is here to help you
                with whatever you need. We pride ourselves on our customer
                satisfaction and strive to exceed your expectations. Lorem ipsum
                dolor sit amet consectetur.
              </Typography>
              <Typography variant="body1" paragraph>
                Our mission is to create value for our customers through
                innovative solutions and exceptional service. We believe in
                building long-term relationships based on trust and mutual
                respect.
              </Typography>
              <Typography variant="body1">
                Thank you for choosing us. We look forward to working with you
                and helping you achieve your goals.
              </Typography>
            </Grid>
            <Grid item xs={10} md={6}>
              <img
                src={Insurance}
                alt="About Us"
                style={{ width: "100%", height: "300px", borderRadius: "8px" }}
              />
            </Grid>
          </Grid>
        </div>
      </Box>
    </>
  );
};

export default AboutUs;
