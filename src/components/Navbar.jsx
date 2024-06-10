import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Diversity1Icon from "@mui/icons-material/Diversity1";

const pages = ["Home", "Services", "Contact Us", "Our Plans", "About Us"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavMenuClick = (sectionId) => {
    if (sectionId === "Home") {
      window.location.href = "/";
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    handleCloseNavMenu();
  };

  return (
    <div>
      <AppBar>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Diversity1Icon
              sx={{ display: { xs: "none", md: "flex" }, mr: 2 }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 15,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                fontSize: { xs: "15px", sm: "20px" },
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Best Health Insurance Parker
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={() => handleNavMenuClick(page)}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Diversity1Icon
              sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontWeight: 700,
                fontSize: { xs: "13px", sm: "20px" },
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Best Health Insurance Parker
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => handleNavMenuClick(page)}
                  sx={{ my: 2, color: "white", display: "block" }}
                  href={page === "Home" ? "/" : undefined}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Navbar;
