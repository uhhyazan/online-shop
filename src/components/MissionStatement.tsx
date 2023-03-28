import { Box, Typography } from "@mui/material";
import React from "react";

const MissionStatement = () => {
  return (
    <Box sx={{ bgcolor: '#f7f7f7', textAlign: 'center', py: 8 }}>
      <Typography variant="h4" sx={{ mb: 4, fontFamily: 'Heavitas' }}>
        Elevate your style with Stilista.
      </Typography>
      <Typography variant="body1">
        At Stilista, we believe that fashion is more than just clothing - it's
        an expression of your unique style and personality. That's why we're
        committed to providing you with the finest quality, timeless pieces that
        will help you look and feel your best every day.
      </Typography>
    </Box>
  );
};

export default MissionStatement;
