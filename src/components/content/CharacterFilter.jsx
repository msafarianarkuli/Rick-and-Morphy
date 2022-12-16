import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { statusInfo, genderInfo } from '../../core/data/data';

const CharacterFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [name, setName] = useState();
  const [status, setStatus] = useState();
  const [gender, setGender] = useState();
  const [statuses, setStatuses] = useState(statusInfo);
  const [genders, setGenders] = useState(genderInfo);

  const handleChange = (e) => {
    setName(e.target.value);
    setSearchParams({
      ...(status ? { status } : {}),
      ...(gender ? { gender } : {}),
      ...(e.target.value ? { name: e.target.value } : {}),
    });
  };

  const statusChecked = (value) => {
    setStatus(value);
    setStatuses(
      statuses.map((status) =>
        value === status.value
          ? { ...status, checked: true }
          : { ...status, checked: false }
      )
    );
    setSearchParams({
      ...(name ? { name } : {}),
      ...(gender ? { gender } : {}),
      status: value,
    });
  };

  const statusUnchecked = (value) => {
    setStatus('');
    setStatuses(
      statuses.map((status) =>
        value === status.value
          ? { ...status, checked: false }
          : status
      )
    );
    setSearchParams({
      ...(name ? { name } : {}),
      ...(gender ? { gender } : {}),
    });
  };

  const handleStatuses = (event) => {
    event.target.checked
      ? statusChecked(event.target.value)
      : statusUnchecked(event.target.value);
  };

  const genderChecked = (value) => {
    setGender(value);
    setGenders(
      genders.map((gender) =>
        value === gender.value
          ? { ...gender, checked: true }
          : { ...gender, checked: false }
      )
    );
    setSearchParams({
      ...(name ? { name } : {}),
      ...(status ? { status } : {}),
      gender: value,
    });
  };

  const genderUnchecked = (value) => {
    setGender('');
    setGenders(
      genders.map((gender) =>
        value === gender.value
          ? { ...gender, checked: false }
          : gender
      )
    );
    setSearchParams({
      ...(name ? { name } : {}),
      ...(status ? { status } : {}),
    });
  };

  const handleGenders = (event) => {
    event.target.checked
      ? genderChecked(event.target.value)
      : genderUnchecked(event.target.value);
  };

  return (
    <>
      <Box sx={{ py: 2 }}>
        <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
          Name
        </Typography>
        <TextField
          variant="outlined"
          size="small"
          onChange={handleChange}
        />
      </Box>
      <Box sx={{ py: 2 }}>
        <Typography variant="h6">Status</Typography>
        <FormGroup>
          {statuses.map((item) => (
            <FormControlLabel
              key={item.id}
              control={
                <Checkbox
                  value={item.value}
                  onChange={handleStatuses}
                />
              }
              label={item.label}
              checked={item.checked}
            />
          ))}
        </FormGroup>
      </Box>
      <Box sx={{ py: 2 }}>
        <Typography variant="h6">Gender</Typography>
        <FormGroup>
          {genders.map((item) => (
            <FormControlLabel
              key={item.id}
              control={
                <Checkbox
                  value={item.value}
                  onChange={handleGenders}
                />
              }
              label={item.label}
              checked={item.checked}
            />
          ))}
        </FormGroup>
      </Box>
    </>
  );
};

export default CharacterFilter;
