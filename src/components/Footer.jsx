import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {"Copyright © "}
      <Link href="/">Best Health insurance Parker&nbsp;</Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

function Footer() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: "center", md: "left" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          pt: { xs: 2, sm: 4 },
          width: "100%",
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <div>
          <Copyright />
        </div>
      </Box>
    </Container>
  );
}
export default Footer;
