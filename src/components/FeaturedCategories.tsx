import React from "react";
import {
  Box,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import { Link } from 'react-router-dom';

const FeaturedCategories = () => {
  return (
    <ImageList
      cols={3}
      gap={8}
      sx={{
        width: "100%",
      }}
    >
      <Link to="/mens">
        <ImageListItem>
          <Box sx={{ position: "relative" }}>
            <img
              src={"/images/mensCategory.jpg"}
              alt={"Men's Category"}
              style={{ width: "100%", height: "auto" }}
            />
            <Typography
              variant="h5"
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "black",
                fontFamily: "Heavitas"
              }}
            >
              SHOP MENS
            </Typography>
          </Box>
        </ImageListItem>
      </Link>
      <Link to="/womens">
        <ImageListItem>
          <Box sx={{ position: "relative" }}>
            <img
              src={"/images/womensCategory.jpg"}
              alt={"Women's Category"}
              style={{ width: "100%", height: "auto" }}
            />
            <Typography
              variant="h5"
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "black",
                fontFamily: "Heavitas"
              }}
            >
              SHOP WOMENS
            </Typography>
          </Box>
        </ImageListItem>
      </Link>
      <Link to="/accessories">
        <ImageListItem>
          <Box sx={{ position: "relative" }}>
            <img
              src={"/images/accessoriesCategory.jpg"}
              alt={"Accessories Category"}
              style={{ width: "100%", height: "auto" }}
            />
            <Typography
              variant="h5"
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "black",
                fontFamily: "Heavitas"
              }}
            >
              SHOP ACCESSORIES
            </Typography>
          </Box>
        </ImageListItem>
      </Link>
    </ImageList>
  );
};

export default FeaturedCategories;
