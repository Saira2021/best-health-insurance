import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ContactPopUp from "../components/ContactPopUp";
import { Box } from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

function PricingPlan() {
  return (
    <Container
      id="pricing"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: "100%", md: "60%" },
          textAlign: { sm: "left", md: "center" },
        }}
      >
        <Typography component="h2" variant="h4" color="text.primary">
          Health Pricing Plans
        </Typography>
        <Typography variant="body1" color="text.secondary">
          The Health Insurance Marketplace, also known as the "exchange", is a
          federal government service that helps people, families, and small
          businesses compare, enroll in, or change health insurance plans. It
          was created by the Affordable Care Act in 2010.
        </Typography>
      </Box>
      <Card
        sx={{
          minWidth: 450,
          maxWidth: 500,
          boxShadow: 4,
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 3,
          backgroundColor: "white",
        }}
      >
        <CardContent>
          <Typography
            color="text.secondary"
            variant="h6"
            component="div"
            gutterBottom
            align="center"
          >
            Health Benefits
          </Typography>
          <Typography
            color="#1976d2"
            gutterBottom
            component="h3"
            variant="h3"
            align="center"
            sx={{ fontWeight: "bold" }}
          >
            $400
          </Typography>
          <Box sx={{ mt: 2, mb: 2 }}>
            <Typography variant="body1" color="text.primary">
              <CheckCircleRoundedIcon sx={{ verticalAlign: "middle", mr: 1 }} />
              Family Plan
            </Typography>
            <Typography variant="body1" color="text.primary">
              <CheckCircleRoundedIcon sx={{ verticalAlign: "middle", mr: 1 }} />
              Care: Basic, Major, Orthodontic
            </Typography>
            <Typography variant="body1" color="text.primary">
              <CheckCircleRoundedIcon sx={{ verticalAlign: "middle", mr: 1 }} />
              Coinsurance Preventive
            </Typography>
          </Box>
        </CardContent>
        <CardActions sx={{ justifyContent: "center", width: "100%" }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ width: "80%" }}
          >
            Family Saver Plan
          </Button>
        </CardActions>
      </Card>
      <div className="contact-popup-container">
        <ContactPopUp />
      </div>
    </Container>
  );
}

export default PricingPlan;
