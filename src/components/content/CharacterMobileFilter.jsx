import React, { useState } from 'react';
import {
  Grid,
  Box,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { statusInfo, genderInfo } from '../../core/data/data';

const CharacterMobileFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [name, setName] = useState();
  const [status, setStatus] = useState('');
  const [gender, setGender] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
    setSearchParams({
      ...(status ? { status } : {}),
      ...(gender ? { gender } : {}),
      ...(e.target.value ? { name: e.target.value } : {}),
    });
  };

  const handleStatuses = (event) => {
    setStatus(event.target.value);
    setSearchParams({
      ...(name ? { name } : {}),
      ...(gender ? { gender } : {}),
      ...(event.target.value ? { status: event.target.value } : {}),
    });
  };

  const handleGenders = (event) => {
    setGender(event.target.value);
    setSearchParams({
      ...(name ? { name } : {}),
      ...(status ? { status } : {}),
      ...(event.target.value ? { gender: event.target.value } : {}),
    });
  };

  return (
    <Grid
      item
      xs={12}
      sx={{
        display: { xs: 'block', md: 'none' },
        mt: 1,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          px: 2,
          py: 2,
        }}
      >
        <TextField
          variant="outlined"
          size="small"
          label="Name"
          onChange={handleChange}
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mt: 2,
          }}
        >
          <FormControl sx={{ width: 1, mr: 1 }} size="small">
            <InputLabel id="demo-select-small">status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="status"
              value={status}
              onChange={handleStatuses}
            >
              <MenuItem value="">not defined</MenuItem>
              {statusInfo.map((status) => (
                <MenuItem key={status.id} value={status.value}>
                  {status.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ width: 1, mr: 1 }} size="small">
            <InputLabel id="demo-select-small">gender</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="gender"
              value={gender}
              onChange={handleGenders}
            >
              <MenuItem value="">not defined</MenuItem>
              {genderInfo.map((gender) => (
                <MenuItem key={gender.id} value={gender.value}>
                  {gender.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>
    </Grid>
  );
};

export default CharacterMobileFilter;
