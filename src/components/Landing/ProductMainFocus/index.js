import React from "react";
import { Stack, Paper } from "@mui/material";

import prod1 from "../../../assets/main_product/prod1.webp";

import styles from "./index.module.sass";

const ProductMainFocus = () => {
  const focusedProduct = [
    {
      title: "Long-weekend cookout",
      product: [
        { title: "Upto 60% off fashion", url: prod1 },
        { title: "Upto 40% off floor care", url: prod1 },
        { title: "22% off PC gaming", url: prod1 },
        { title: "Upto 20% off mattresses", url: prod1 },
      ],
    },
    {
      title: "Labor Day saving",
      product: [
        { title: "Upto 60% off fashion", url: prod1 },
        { title: "Upto 40% off floor care", url: prod1 },
        { title: "22% off PC gaming", url: prod1 },
        { title: "Upto 20% off mattresses", url: prod1 },
      ],
    },
    {
      title: "Onam special offer",
      product: [
        { title: "Upto 60% off fashion", url: prod1 },
        { title: "Upto 40% off floor care", url: prod1 },
        { title: "22% off PC gaming", url: prod1 },
        { title: "Upto 20% off mattresses", url: prod1 },
      ],
    },
  ];
  return (
    <Stack
      direction={`row`}
      spacing={2}
      justifyContent="space-between"
      my={2.5}
    >
      {focusedProduct &&
        focusedProduct.map((item, i) => (
          <Paper key={i} className={styles.paper_container}>
            {item.title}
          </Paper>
        ))}
    </Stack>
  );
};

export default ProductMainFocus;
