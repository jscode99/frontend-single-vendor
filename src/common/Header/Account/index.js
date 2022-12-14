import { useState, useEffect } from "react";
import { Box, Stack } from "@mui/material";
import { Typography } from "antd";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Account = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      height="100%"
    >
      <Box sx={{ cursor: "pointer", display: "flex" }}>
        <AccountCircleIcon
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
          Profile
        </Typography>
      </Box>
    </Stack>
  );
};

export default Account;
