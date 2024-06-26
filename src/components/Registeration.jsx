import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import DynamicRadioGroup from "./RadioGroup";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Register() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const genderOptions = [
    { value: "female", label: "Female" },
    { value: "male", label: "Male" },
    { value: "other", label: "Other" },
  ];

  const healthOptions = [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ];

  const dentalOptions = [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ];
  return (
    <>
      <div className="contact-us-form-container">
        <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h1" variant="h4">
                Contact Us
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      //   autoComplete="given-name"
                      name="state"
                      required
                      fullWidth
                      id="state"
                      label="Select State"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="age"
                      label="Age"
                      name="age"
                      autoComplete="age"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="contact"
                      label="Contact Number"
                      name="contact"
                      autoComplete="contact"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <DynamicRadioGroup
                      label="Gender"
                      options={genderOptions}
                      name="gender"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <DynamicRadioGroup
                      label="Are you relatively healthy?"
                      options={healthOptions}
                      name="health"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <DynamicRadioGroup
                      label="Do you want dental and vision?"
                      options={dentalOptions}
                      name="dentalVision"
                    />
                  </Grid>
                </Grid>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </div>
    </>
  );
}
