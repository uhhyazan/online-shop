import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#333333", color: "#ffffff", pt: 8, pb: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" gutterBottom>
              EXCLUSIVE SERVICES
            </Typography>
            <Typography variant="subtitle2">Stilista Services</Typography>
            <Typography variant="subtitle2">
              Stilista Osteria Chicago da Massimo Bottura
            </Typography>
            <Typography variant="subtitle2">Book An Appointment</Typography>
            <Typography variant="subtitle2">Collect In-Store</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" gutterBottom>
              NEED HELP?
            </Typography>
            <Typography variant="subtitle2">Contact Us</Typography>
            <Typography variant="subtitle2">Shipping Services</Typography>
            <Typography variant="subtitle2">Payment Options</Typography>
            <Typography variant="subtitle2">Returns &amp; Exchanges</Typography>
            <Typography variant="subtitle2">Product Care</Typography>
            <Typography variant="subtitle2">FAQs</Typography>
            <Typography variant="subtitle2">Unsubscribe</Typography>
            <Typography variant="subtitle2">Sitemap</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" gutterBottom>
              THE COMPANY
            </Typography>
            <Typography variant="subtitle2">About Stilista</Typography>
            <Typography variant="subtitle2">Code of Ethics</Typography>
            <Typography variant="subtitle2">Stilista Space</Typography>
            <Typography variant="subtitle2">Careers</Typography>
            <Typography variant="subtitle2">Legal</Typography>
            <Typography variant="subtitle2">Privacy &amp; Cookies</Typography>
            <Typography variant="subtitle2">Corporate Information</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" gutterBottom>
              FIND US ON
            </Typography>
            <Typography variant="subtitle2">Facebook</Typography>
            <Typography variant="subtitle2">Twitter</Typography>
            <Typography variant="subtitle2">Instagram</Typography>
            <Typography variant="subtitle2">YouTube</Typography>
            <Typography variant="subtitle2">Pinterest</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              SIGN UP FOR STILISTA UPDATES
            </Typography>
            <Typography variant="subtitle2">
              By entering your email address below, you consent to receiving our
              newsletter with access to our latest collections, events and
              initiatives. More details on this are provided in our Privacy
              Policy
            </Typography>
            <Box sx={{ display: "flex", marginTop: 2 }}>
              <TextField
                variant="outlined"
                size="small"
                label="Enter email address"
                fullWidth
                InputProps={{
                  sx: {
                    color: "white",
                    "&:focus": {
                      backgroundColor: "white",
                      color: "black",
                    },
                  },
                }}
                sx={{ mr: 1 }}
                InputLabelProps={{ sx: { color: "white" } }}
              />
              <Button
                variant="contained"
                color="primary"
                sx={{ color: "white", backgroundColor: "black" }}
              >
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ borderTop: "1px solid #ffffff", pt: 4, mt: 4 }}>
          <Typography variant="body2" align="center">
            Stilista ©{new Date().getFullYear()} Yazan Musleh. - All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
