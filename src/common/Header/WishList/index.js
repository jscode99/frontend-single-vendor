import { useState, useEffect } from "react";
import { Box, Stack } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Typography } from "antd";

const WishList = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="end"
      height="100%"
    >
      <Box sx={{ cursor: "pointer", display: "flex" }}>
        <FavoriteBorderIcon
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
          WishList
        </Typography>
      </Box>
    </Stack>
  );
};

export default WishList;
