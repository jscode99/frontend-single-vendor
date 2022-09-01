import React from "react";
import { Box, Grid, Stack, Button, Divider } from "@mui/material";

import styles from "./index.module.sass";

const SubHeader = () => {
  const pages = [
    "All",
    "Best sellers",
    "Mobiles",
    "Today's Deal",
    "Books",
    "Customer Services",
    "Electronics",
    "Fashion",
    "New Releases",
    "Home & Kitchen",
  ];
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: "none", md: "flex" },
        justifyContent: "space-evenly",
        backgroundColor: "#0c1a2a",
      }}
    >
      {pages &&
        pages.map((data, i) => (
          <>
            <Button
              key={i}
              sx={{
                my: 1,
                color: "#DDD",
                display: "block",
                "&:hover": {
                  backgroundColor: "#122234",
                },
              }}
              className={styles.btn_title}
            >
              {data}
            </Button>
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              light={true}
              sx={{ color: "darkolivegreen", borderColor: "darkolivegreen" }}
            />
          </>
        ))}
    </Box>
  );
};

export default SubHeader;
