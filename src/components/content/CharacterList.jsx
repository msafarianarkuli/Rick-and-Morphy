import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';
import { Grid, Pagination } from '@mui/material';
import { getChars } from '../../core/services/chars';
import Card from '../common/Card';
import { Box } from '@mui/system';

const CharacterList = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [characters, setCharacters] = useState();
  const [paginationInfo, setpaginationInfo] = useState();
  const [page, setPage] = useState(1);

  let name = searchParams.get('name')?.toString();
  let status = searchParams.get('status')?.toString();
  let gender = searchParams.get('gender')?.toString();

  const { isLoading, data } = useQuery(
    ['product', page, name, status, gender],
    getChars
  );

  useEffect(() => {
    setCharacters(data?.results);
    setpaginationInfo(data?.info);
    searchParams.get('page')
      ? setPage(searchParams.get('page'))
      : setPage(1);
  }, [data]);

  const handlePageChange = (value) => {
    setSearchParams({ page: value, name: name });
    setPage(value);
  };

  return (
    <>
      {isLoading && <p>Loading</p>}
      <Grid container>
        <Grid item xs={12}>
          <Grid container spacing={2} sx={{ py: 2 }}>
            {characters?.map((character) => (
              <Grid key={character.id} item xs={6} sm={4} md={3}>
                <Card data={character} />
              </Grid>
            ))}
          </Grid>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Pagination
              sx={{ mx: 'auto' }}
              hidePrevButton
              count={paginationInfo?.pages}
              onChange={(e, value) => handlePageChange(value)}
              color="primary"
              page={Number(page)}
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default CharacterList;
