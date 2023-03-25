import { Typography } from '@mui/material';
import React from 'react';

interface TitleProps {
  text: string;
}

const useStyles = {
    textAlign: 'center',
    paddingTop: 4,
    paddingBottom: 4,
}

const Title: React.FC<TitleProps> = ({ text }) => {

  return (
    <Typography variant="h4" component="h1" sx={useStyles}>
      {text}
    </Typography>
  );
};

export default Title;
