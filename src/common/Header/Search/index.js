import { useState, useRef } from "react";
import Grid from "@mui/material/Grid";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";

import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import { DialogBox } from "../../";

const Search = () => {
  const inputRef = useRef();
  console.log(inputRef);

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
        onClick={() => inputRef.current.handleClickOpen()}
      >
        <ArrowDropDownIcon sx={{ paddingLeft: 1, fontSize: 28 }} />
        <DialogBox ref={inputRef} />
      </Box>
      <InputBase
        sx={{
          ml: 1,
          flex: 1,
          backgroundColor: "whitesmoke",
          padding: `0 0 0 16px`,
          height: "40px",
          marginX: 0,
          // borderStartStartRadius: 25,
          // borderEndStartRadius: 25,
        }}
        placeholder="Search for products..."
        inputProps={{ "aria-label": "search for products" }}
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
