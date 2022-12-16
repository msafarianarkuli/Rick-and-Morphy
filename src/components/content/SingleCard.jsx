import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

const SingleCard = ({ data }) => {
  const { name, status, species, gender, location, image } = data;
  console.log(data);
  return (
    <Card sx={{ display: 'flex' }}>
      <CardMedia
        component="img"
        sx={{ width: 300 }}
        image={image}
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            status: {status}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            species: {species}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            gender: {gender}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            location: {location.name}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default SingleCard;
