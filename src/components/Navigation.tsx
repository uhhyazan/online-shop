import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Typography,
  Button,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Drawer,
  Box,
  Slide,
  useScrollTrigger,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { ProductsContext } from "../contexts/ProductsContext";

type NavProps = {
  className?: string;
};

const Navigation: React.FC<NavProps> = ({ className }) => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const { cartItems } = useContext(ProductsContext);

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: "Men's", link: "/mens" },
    { text: "Women's", link: "/womens" },
    { text: "Accessories", link: "/accessories" },
  ];

  const renderMenuItems = () => (
    <List>
      {menuItems.map((item) => (
        <ListItem
          button
          component={Link}
          to={item.link}
          key={item.text}
          onClick={() => toggleDrawer(false)}
        >
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  );

  function HideOnScroll(props: any) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 0,
    });

    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }

  return (
    <React.Fragment>
      <HideOnScroll>
        <AppBar
          position="sticky"
          className={className}
          sx={{ backgroundColor: "white", color: "inherit" }}
        >
          <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <div />
            <Box style={{ display: "flex", justifyContent: "center" }}>
              <Button component={Link} to="/">
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Saint-Carell",
                    fontSize: 36,
                    color: "black",
                  }}
                >
                  stilista
                </Typography>
              </Button>
            </Box>
            <div />
            <Link
              to="/cart"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <IconButton>
                <ShoppingCartOutlinedIcon />
                {cartItems.length > 0 && (
                  <Typography variant="subtitle1" sx={{}}>
                    {cartItems.length}
                  </Typography>
                )}
              </IconButton>
            </Link>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
      >
        <Box sx={{ width: 250, marginTop: 3 }}>
          <Button onClick={() => toggleDrawer(false)}>
            <CloseIcon />
            Close
          </Button>
          {renderMenuItems()}
          <Divider />
          <Box sx={{ padding: 2 }}>
            <Typography>Sustainability</Typography>
            <Typography>Stores</Typography>
            <Typography>Ship to: United States</Typography>
            <Typography>Can we help you?</Typography>
            <Typography>+1.555.STILISTA</Typography>
          </Box>
        </Box>
      </Drawer>
    </React.Fragment>
  );
};

export default Navigation;
