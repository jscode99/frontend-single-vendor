import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import CategoryModal from "../../CategoryModal";

const Search = () => {
  const [open, setOpen] = useState(false);
  const handleModal = () => {
    setOpen(!open);
  };
  console.log(open);
  const products = [
    { title: "Product 1" },
    { title: "Product 2" },
    { title: "Product 3" },
    { title: "Product 4" },
  ];
  return (
    <Grid container height={`100%`} alignItems={`center`}>
      <Box
        sx={{
          display: "flex",
          height: 40,
          backgroundColor: "whitesmoke",
          borderTopLeftRadius: 25,
          borderBottomLeftRadius: 25,
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
        onClick={() => {
          handleModal();
        }}
      >
        <ArrowDropDownIcon sx={{ paddingLeft: 1, fontSize: 28 }} />
        <CategoryModal open={open} handleModal={handleModal} />
      </Box>
      <InputBase
        sx={{
          ml: 1,
          flex: 1,
          // border: `1 solid blue`,
          backgroundColor: "whitesmoke",
          padding: `0 0 0 16px`,
          height: "40px",
          marginX: 0,
        }}
        placeholder="Search for products..."
        inputProps={{ "aria-label": "search google maps" }}
      />
      <Box
        sx={{
          display: "flex",
          height: 40,
          backgroundColor: "#f3b53b",
          borderTopRightRadius: 25,
          borderBottomRightRadius: 25,
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
        onClick={() => console.log("Search..")}
      >
        <SearchIcon sx={{ marginX: 1, fontSize: 24 }} />
      </Box>
    </Grid>
  );
};

export default Search;
