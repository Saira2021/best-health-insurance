import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { SvgIcon } from "@mui/material";
import Typography from "@mui/material/Typography";

function PlansCard({
  icon,
  title,
  description,
  icon: Icon,
  buttonText,
  onButtonClick,
}) {
  return (
    <Card sx={{ minWidth: 275 }} className="plan-card">
      {/* sx={{ minWidth: 275 }} */}
      <CardContent>
        <div style={{ display: "flex", alignItems: "center" }}>
          {Icon && (
            <SvgIcon
              style={{ color: "#1976d2" }}
              component={Icon}
              sx={{ mr: 1 }}
            />
          )}

          <Typography variant="h5" component="div">
            {title}
          </Typography>
        </div>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      {buttonText && onButtonClick && (
        <Box sx={{ textAlign: "center", marginBottom: 2 }}>
          <Button size="small" onClick={onButtonClick}>
            {buttonText}
          </Button>
        </Box>
      )}
    </Card>
  );
}

PlansCard.propTypes = {
  icon: PropTypes.elementType,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  onButtonClick: PropTypes.func,
};

export default PlansCard;
