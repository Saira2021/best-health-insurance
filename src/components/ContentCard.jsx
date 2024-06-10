import { Card, CardContent, Typography, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import MarketplaceIcon from "@mui/icons-material/Storefront";
import PrivateMarketIcon from "@mui/icons-material/Lock";
import LimitedBenefitPlansIcon from "@mui/icons-material/Policy";
import React from "react";

const useStyles = makeStyles({
  icon: {
    marginRight: 16,
    color: "#1976d2",
    fontSize: "29px",
  },
  container: {
    display: "flex",
    gap: "16px",
    flexWrap: "wrap",
  },
  card: {
    flex: "1 1 300px",
    minWidth: "300px",
  },
});

const cardData = [
  {
    icon: <MarketplaceIcon />,
    title: "Market Place ",
    subTitle: "(Public, Obama Care, ACA affordable care act)",
    content:
      "Everyone is grouped up together by zip code and you pay based on IRS reported income. Great option for lower incomes or expensive illness. ",
  },
  {
    icon: <PrivateMarketIcon />,
    title: "Private Market",
    subTitle: "",
    content:
      "Private Market Plans are health based. Same companies but there selective in who they choose. If approved they offer lower premiums and deductibles because they verify your health up front.",
  },
  {
    icon: <LimitedBenefitPlansIcon />,
    title: "Limited Benefit Plans ",
    subTitle:
      "(Limited Benefit plan, short term disability, Multiplan, multicar)",

    content:
      "Limited benefits plans are insurance products with reduced benefits and are not intended to be an alternative, it is intended to help supplement Comprehensive coverage. Further, this insurance is not a minimum essential benefit as set forth under the Patient Protection and Affordable Care Act.",
  },
];

const ContentCard = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {cardData.map((card, index) => (
        <Card className={classes.card} key={index}>
          <CardContent>
            <Grid container alignItems="center">
              <Grid item>
                {React.cloneElement(card.icon, { className: classes.icon })}
              </Grid>
              <Grid item>
                <Typography
                  variant="h5"
                  component="h2"
                  className="card-main-title"
                >
                  {card.title}
                </Typography>
                <Typography variant="h6" component="h2">
                  {card.subTitle}
                </Typography>
                <Typography variant="body1">{card.content}</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ContentCard;
