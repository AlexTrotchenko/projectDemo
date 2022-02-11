import { AppBar, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import React from "react";
import logo from "../../assets/Logo.png";

const useStyles = makeStyles((theme) => ({
  logo: {
    height: "2rem",
    padding: "0.2rem",
  },
}));

const Offset = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
  marginBottom: "1.5rem",
}));

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar color="secondary">
        {/* Toolbar allign items horisontally */}
        <Typography variant="h3">
          <Toolbar disableGutters>
            <img src={logo} alt="logo" className={classes.logo} />
          </Toolbar>
        </Typography>
      </AppBar>

      <Offset />
    </>
  );
};

export default Header;
