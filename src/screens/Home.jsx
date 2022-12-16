import { Container, Grid } from '@mui/material';

import React from 'react';
import { Outlet } from 'react-router-dom';
import CharacterFilter from '../components/content/CharacterFilter';
import CharacterList from '../components/content/CharacterList';
import CharacterMobileFilter from '../components/content/CharacterMobileFilter';
import Navbar from '../components/content/Navbar';

const Home = () => {
  return (
    <Grid container>
      <Grid
        item
        md={3}
        lg={2}
        sx={{
          boxShadow: 3,
          px: 2,
          display: { md: 'block', xs: 'none' },
          height: '100vh',
          position: 'fixed',
          bgcolor: 'white',
        }}
      >
        <CharacterFilter />
      </Grid>
      <Grid
        item
        md={3}
        lg={2}
        sx={{
          boxShadow: 3,
          px: 2,
          bgcolor: 'grey.100',
          display: { md: 'block', xs: 'none' },
        }}
      ></Grid>
      <Grid
        item
        md={9}
        lg={10}
        xs={12}
        sx={{ padding: '15px', bgcolor: 'grey.100', height: '100vh' }}
      >
        <Navbar />
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default Home;
