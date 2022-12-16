import React, { useContext, useState } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Checkbox,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { bookmarkContext } from '../../core/context/BookmarkContext';

const InfoCard = ({ data }) => {
  const { image, name, status, id } = data;
  const { addAndRemoveToFavorites, bookmarks } =
    useContext(bookmarkContext);

  return (
    <Card
    // sx={{ minHeight: { xs: 310, md: 310 } }}
    >
      <CardMedia
        component="img"
        // height="140"
        image={image}
        alt="green iguana"
      />
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Link to={`/character/${id}`}>
            <Typography variant="h6" component="div" color="primary">
              {name.slice(0, 13)}
              {name.length >= 13 ? '...' : null}
            </Typography>
          </Link>
          <Box
            sx={{
              mt: 2,
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Typography
              variant="overline"
              display="block"
              color={
                status == 'Alive'
                  ? 'green'
                  : status == 'Dead'
                  ? 'red'
                  : 'black'
              }
            >
              {status}
            </Typography>
            <Checkbox
              icon={<FaRegBookmark />}
              checkedIcon={<FaBookmark />}
              checked={bookmarks.some(
                (bookmark) => bookmark.id === id
              )}
              onClick={() => addAndRemoveToFavorites(data)}
            />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
