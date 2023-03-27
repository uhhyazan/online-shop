import { AppBar, Typography, Button, Toolbar, List, ListItem, ListItemText, IconButton, Drawer, Box, Slide, useScrollTrigger } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import React from 'react';

type NavProps = {
  className?: string;
}

const Navigation: React.FC<NavProps> = ({ className }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: "Men's", link: '/mens' },
    { text: "Women's", link: '/womens' },
    { text: 'Accessories', link: '/accessories' },
  ];

  const renderMenuItems = () => (
    <List>
      {menuItems.map((item) => (
        <ListItem button component={Link} to={item.link} key={item.text} onClick={() => toggleDrawer(false)}>
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
        <AppBar position="sticky" className={className} sx={{ backgroundColor: 'white', color: 'inherit' }}>
          <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <div />
            <Box style={{ display: 'flex', justifyContent: 'center' }}>
              <Button component={Link} to="/">
                <Typography variant="h6" sx={{ fontFamily: 'Saint-Carell', fontSize: 36, color: 'black' }}>stilista</Typography>
              </Button>
            </Box>
            <div />
            <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>
              <IconButton>
                <ShoppingCartOutlinedIcon />
              </IconButton>
            </Link>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Drawer anchor="left" open={drawerOpen} onClose={() => toggleDrawer(false)} >
        <Box sx={{ width: 250}}>
          {renderMenuItems()}
        </Box>
      </Drawer>
    </React.Fragment>
  );
}

export default Navigation;
