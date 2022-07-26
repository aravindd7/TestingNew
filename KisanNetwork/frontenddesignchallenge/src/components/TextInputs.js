import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function TextInputs() {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" }
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-multiline-flexible"
          multiline
          maxRows={4}
          value={value}
          onChange={handleChange}
        />
        <TextField id="outlined-multiline-static" multiline rows={4} />
      </div>
      <div></div>
    </Box>
  );
}
