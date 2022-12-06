import { Box } from "@mui/material";
import Header from "../commonLayout/Header";

const CommonLayout = ({ children }) => {
  return (
    <Box>
      <Header />
      {children}
    </Box>
  );
};

export default CommonLayout;
