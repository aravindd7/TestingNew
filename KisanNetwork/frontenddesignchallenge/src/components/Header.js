import { Box, Typography } from "@mui/material";

function Header() {
  return (
    <Box sx={{height: "300px", display: "flex", alignItems: "center", justifyContent: "center"}}>
      <Typography>
        Let us keep that promise - that American promise - and in the words of
        Scripture hold firmly, without wavering, to the hope that we confess.
      </Typography>
    </Box>
  );
}

export default Header;
