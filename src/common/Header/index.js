import React from "react";
import { Box, Grid, Stack } from "@mui/material";
import AppDrawer from "./AppDrawer";
import Logo from "./Logo";
import Search from "./Search";
import Account from "./Account";
import WishList from "./WishList";
import AppCart from "./AppCart";

const Header = () => (
  <Box sx={{ width: "100%", height: 75, backgroundColor: "#122234" }}>
    <Stack direction={`row`} height={`100%`} width={`100%`}>
      <Grid container sx={{ height: "100%" }} justifyContent="space-evenly">
        <Grid item sm={1} height={`100%`}>
          <AppDrawer />
        </Grid>
        <Grid item sm={2} height={`100%`}>
          <Logo />
        </Grid>
        <Grid item sm={5}>
          <Search />
        </Grid>
        <Grid item sm={1}>
          <WishList />
        </Grid>
        <Grid item sm={1}>
          <Account />
        </Grid>
        <Grid item sm={1}>
          <AppCart />
        </Grid>
      </Grid>
    </Stack>
  </Box>
);

export default Header;
