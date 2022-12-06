import { AppBar, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  return (
    <AppBar position="relatvie">
      <Toolbar>
        <MenuIcon sx={{ mr: 2 }} />
        <Typography variant="h6" color="inherit" nowrap>
          MINI BLOG
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
