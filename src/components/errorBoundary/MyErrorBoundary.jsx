import { useEffect } from "react";
import { Box, Typography } from "@mui/material";

const IS_DEV_MODE = true;

// TODO: 추후 스타일링 필요
const MyErrorBoundary = ({ error }) => {
  useEffect(() => {
    IS_DEV_MODE && console.log(error);
  }, [error]);

  return (
    <Box
      style={{
        width: "100%",
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography>This is Error</Typography>
      <a href="/" style={{ color: "black" }}>
        GO BACK
      </a>
    </Box>
  );
};

export default MyErrorBoundary;
