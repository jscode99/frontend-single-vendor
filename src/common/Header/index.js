import React from "react";
import { Box, Grid, Stack } from "@mui/material";
import AppDrawer from "./AppDrawer";
import Logo from "./Logo";
import Search from "./Search";
import Account from "./Account";
import ReOrder from "./ReOrder";
import AppCart from "./AppCart";
import styles from "./index.module.sass";

const Header = () => {
  return (
    <Box sx={{ width: "100%", height: 75, backgroundColor: "#122234" }}>
      <Stack
        direction={`row`}
        height={`100%`}
      >
        <Grid container  sx={{height:"100%"}}  >
          <Grid item sm={1} height={`100%`}>
            <AppDrawer />
          </Grid>
          <Grid item sm={2} height={`100%`}>
            <Logo />
          </Grid>
          <Grid item md={5}>
            <Search />
          </Grid>
          {/* <Grid item md={2}>
            <Account />
          </Grid> */}
          {/* <Grid item md={2}>
            <ReOrder />
          </Grid> */}
          {/* <Grid item md={2}>
            <AppCart />
          </Grid> */}
        </Grid>
      </Stack>
    </Box>
  );
};

export default Header;
