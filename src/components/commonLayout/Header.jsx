import { AppBar, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <MenuIcon sx={{ mr: 2 }} />
        <Typography variant="h6" color="inherit" noWrap={true}>
          MINI BLOG
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
