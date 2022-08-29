import { useState } from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const CategorySelect = () => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Grid container height={`100%`} alignItems="center">
      <FormControl
        sx={{
          m: 1,
          width: `140px`,
        }}
        size="small"
        variant="standard"
      >
        <Select
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          value={age}
          onChange={handleChange}
          autoWidth={false}
          sx={{ color: "whitesmoke" }}
        >
          <MenuItem disabled={true} value="">
            <em>Category</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>ThirtyThirtyThirtyThirty</MenuItem>
        </Select>
      </FormControl>
    </Grid>
  );
};

export default CategorySelect;
