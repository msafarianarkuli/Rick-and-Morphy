import axios from 'axios';

const MainURL = process.env.REACT_APP_PUBLIC_API_URL;

const getChars = async ({ queryKey }) => {
  const [_, page, name, status, gender] = queryKey;

  const params = new URLSearchParams({
    page: page,
    ...(name ? { name } : {}),
    ...(status ? { status } : {}),
    ...(gender ? { gender } : {}),
  }).toString();

  let res = await axios.get(`${MainURL}/?${params}`);
  return res.data;
};

const getSingleChars = async ({ queryKey }) => {
  const [_, characterId] = queryKey;
  let res = await axios.get(`${MainURL}/${characterId}`);
  return res.data;
};

export { getChars, getSingleChars };
