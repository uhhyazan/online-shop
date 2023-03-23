import { AppBar, Typography, Button, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';

type NavProps = {
  className?: string;
}

const Navigation: React.FC<NavProps> = ({ className }) => {
  return (
    <AppBar position="static" className={className}>
    <Toolbar>
      <Button color="inherit" component={Link} to="/">
        <Typography variant="h6">
          Bob's Boutique
        </Typography>
      </Button>
      <Button color="inherit" component={Link} to="/mens">
        Men's
      </Button>
      <Button color="inherit" component={Link} to="/womens">
        Women's
      </Button>
      <Button color="inherit" component={Link} to="/accessories">
        Accessories
      </Button>
    </Toolbar>
  </AppBar>
  );
};

export default Navigation;
