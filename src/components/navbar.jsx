import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Icon, Input, TextField } from "@mui/material";
import { CiUser } from "react-icons/ci";
import { Search } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar sx={{ boxShadow:"0", backgroundColor: "#feee00" }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              cursor: "default",
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              marginRight: "70px",
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img src="/logo.png" alt="logo" />
          </Typography>
          <input
            style={{
              width: "60%",
              borderRadius: "5px",
              border: "none",
              outline: "none",
              padding: "8px 10px",
            }}
            placeholder="What are you looking for ?"
            type="text"
          />
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "end",
            }}
          >
            <Button
              sx={{
                borderTop: "none",
                borderBottom: "none",
                borderLeft: "none",
                borderRight: "2px solid black",
                borderRadius: "0px",
                my: 2,
                py: 0,
                textTransform: "capitalize",
                fontWeight: "bold",
                color: "black",
                display: "flex",
                gap: 1,
                alignItems: "center",
              }}
            >
              log in <CiUser />
            </Button>
            <Button
              sx={{
                borderTop: "none",
                borderBottom: "none",
                borderLeft: "none",
                borderRight: "2px solid black",
                borderRadius: "0px",
                my: 2,
                py: 0,
                textTransform: "capitalize",
                fontWeight: "bold",
                color: "black",
                display: "flex",
                gap: 1,
                alignItems: "center",
              }}
            >
              Wishlist <CiHeart />
            </Button>
            <Button
              sx={{
                border: "none",
                my: 2,
                py: 0,
                textTransform: "capitalize",
                fontWeight: "bold",
                color: "black",
                display: "flex",
                gap: 1,
                alignItems: "center",
              }}
            >
              cart
              <FiShoppingCart />
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
