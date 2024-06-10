import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import ContactPopUp from "../components/ContactPopUp";

const tiers = [
  {
    title: "Saver Plus",
    price: 350,
    description: [
      "Deductibles $50 per person",
      "$150 per family 1 - 6",
      "Additional Orthodontic Deductible ",
      "$150 per person 1 - 8",
    ],
    buttonText: "Dental Care",
    buttonVariant: "outlined",
  },
  {
    title: "Saver Plus",
    subheader: "Recommended",
    price: 370,
    description: [
      "Deductibles $50 per person",
      "$150 per family 1 - 6",
      "Additional Orthodontic Deductible ",
      "$150 per person 1 - 8",
    ],
    buttonText: "Dental Care",
    buttonVariant: "contained",
  },
  {
    title: "Premium plan",
    price: 400,
    description: [
      "Deductibles $50 per person",
      "$150 per family 1 - 6",
      "Additional Orthodontic Deductible ",
      "$150 per person 1 - 8",
    ],
    buttonText: "Dental Care",
    buttonVariant: "outlined",
  },
];

const Pricing = () => {
  const [selectedOptions, setSelectedOptions] = useState(
    tiers.map(() => ({ dental: false, vision: false }))
  );

  const handleOptionChange = (index, option) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[index][option] = !newSelectedOptions[index][option];
    setSelectedOptions(newSelectedOptions);
  };

  const calculatePrice = (basePrice, options) => {
    let totalPrice = basePrice;
    if (options.dental) totalPrice += 25;
    if (options.vision) totalPrice += 10;
    return totalPrice;
  };

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
          Dental Care Pricing Plans
        </Typography>
        <Typography variant="body1" color="text.secondary">
          The Health Insurance Marketplace, also known as the "exchange", is a
          federal government service that helps people, families, and small
          businesses compare, enroll in, or change health insurance plans. It
          was created by the Affordable Care Act in 2010.
        </Typography>
      </Box>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        {tiers.map((tier, index) => (
          <Grid
            item
            key={tier.title + index}
            xs={12}
            sm={tier.title === "Enterprise" ? 12 : 6}
            md={4}
          >
            <Card
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                gap: 4,
                border: tier.title === "Professional" ? "1px solid" : undefined,
                borderColor:
                  tier.title === "Professional" ? "primary.main" : undefined,
                background:
                  tier.title === "Professional"
                    ? "linear-gradient(#033363, #021F3B)"
                    : undefined,
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    mb: 1,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    color: tier.title === "Professional" ? "grey.100" : "",
                  }}
                >
                  <Typography component="h3" variant="h6">
                    {tier.title}
                  </Typography>
                  {tier.title === "Professional" && (
                    <Chip
                      icon={<AutoAwesomeIcon />}
                      label={tier.subheader}
                      size="small"
                      sx={{
                        background: (theme) =>
                          theme.palette.mode === "light" ? "" : "none",
                        backgroundColor: "primary.contrastText",
                        "& .MuiChip-label": {
                          color: "primary.dark",
                        },
                        "& .MuiChip-icon": {
                          color: "primary.dark",
                        },
                      }}
                    />
                  )}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "baseline",
                    color:
                      tier.title === "Professional" ? "grey.50" : undefined,
                  }}
                >
                  <Typography component="h3" variant="h2">
                    ${calculatePrice(tier.price, selectedOptions[index])}
                  </Typography>
                  <Typography component="h3" variant="h6">
                    &nbsp; per month
                  </Typography>
                </Box>
                <Divider
                  sx={{
                    my: 2,
                    opacity: 0.2,
                    borderColor: "grey.500",
                  }}
                />
                {tier.description.map((line) => (
                  <Box
                    key={line}
                    sx={{
                      py: 1,
                      display: "flex",
                      gap: 1.5,
                      alignItems: "center",
                    }}
                  >
                    <CheckCircleRoundedIcon
                      sx={{
                        width: 20,
                        color:
                          tier.title === "Professional"
                            ? "primary.light"
                            : "primary.main",
                      }}
                    />
                    <Typography
                      component="text"
                      variant="subtitle2"
                      sx={{
                        color:
                          tier.title === "Professional"
                            ? "grey.200"
                            : undefined,
                      }}
                    >
                      {line}
                    </Typography>
                  </Box>
                ))}
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedOptions[index].dental}
                      onChange={() => handleOptionChange(index, "dental")}
                    />
                  }
                  label="Dental Plan (+$25)"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedOptions[index].vision}
                      onChange={() => handleOptionChange(index, "vision")}
                    />
                  }
                  label="Vision Plan (+$10)"
                />
              </CardContent>
              <CardActions>
                <Button
                  fullWidth
                  variant={tier.buttonVariant}
                  component="a"
                  href="/material-ui/getting-started/templates/checkout/"
                  target="_blank"
                >
                  {tier.buttonText}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <div className="contact-popup-container">
        <ContactPopUp />
      </div>
    </Container>
  );
};

export default Pricing;
