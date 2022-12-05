import { Box, CircularProgress } from "@mui/material";

const CircularLoader = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  );
};

export default CircularLoader;