import React from "react";
import Carousel from "react-material-ui-carousel";
import { Box, Typography } from "@mui/material";
import familyimage from "../assets/bestfamily.jpg";
import { Link } from "react-router-dom";

const items = [
  {
    image: familyimage,
    companyInfo: "BEST HEALTH INSURNACE PARKER",
    callContent: "Call now to speak to a license agent",
    contact: "123-456-7890",
    appointment: "Click here to schedule an appointment",
  },
  // Add more items as needed
];

function CarouselComponent() {
  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item({ item }) {
  return (
    // <div className="home-carousel">
    <div
      className="carousel-paper-style"
      style={{
        backgroundImage: `url(${item.image})`,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: { xs: "40%", sm: "15%" },
          padding: "10px",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          textAlign: "center",
          borderRadius: "5px",
        }}
      >
        <Typography variant="h6">{item.callContent}</Typography>
        <Typography variant="h6">{item.contact}</Typography>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          padding: "20px",
          borderRadius: "10px",
          textAlign: "center",
          fontWeight: "700",
        }}
      >
        <Typography variant="h4">{item.companyInfo}</Typography>
      </Box>
      <Box
        sx={{
          position: "absolute",
          left: 0,
          bottom: 30,
          width: { xs: "44%", sm: "19%" },
          padding: "10px",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          color: "white",
          textAlign: "center",
          borderRadius: "5px",
        }}
      >
        <Link
          to="https://calendly.com/lparkerushealthadvisors"
          style={{ color: "white", textDecoration: "none" }}
        >
          <Typography variant="h6">{item.appointment}</Typography>
        </Link>
      </Box>
    </div>
    // </div>
  );
}

export default CarouselComponent;
