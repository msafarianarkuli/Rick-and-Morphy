import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import SingleCard from '../components/content/SingleCard';
import { useParams } from 'react-router-dom';
import { getSingleChars } from '../core/services/chars';
import { useQuery } from 'react-query';

const SingleCharacter = () => {
  const { characterId } = useParams();
  const { isLoading, data: character } = useQuery(
    ['product', characterId],
    getSingleChars
  );
  return (
    <Grid container>
      <Grid item xs={12} sx={{ py: 2 }}>
        {isLoading && <p>Loading...</p>}
        {!isLoading && <SingleCard data={character} />}
      </Grid>
    </Grid>
  );
};

export default SingleCharacter;
