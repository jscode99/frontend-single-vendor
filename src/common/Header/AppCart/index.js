import { useState, useEffect } from "react";
import { Box, Stack } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Typography } from "antd";

const AppCart = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="start"
      height="100%"
    >
      <Box sx={{ cursor: "pointer", display: "flex" }}>
        <ShoppingCartIcon
          style={{
            color: "whitesmoke",
            fontWeight: "900",
            fontSize: "18px",
            margin: `0 5px 0 0`,
          }}
        />
        <Typography
          style={{ color: "whitesmoke", margin: 0 }}
          variant="h6"
          component="h6"
        >
          Cart
        </Typography>
      </Box>
    </Stack>
  );
};

export default AppCart;
