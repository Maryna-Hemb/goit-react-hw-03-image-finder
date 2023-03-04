import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '32975288-caf6655f638892d6e2855db13';
const PARAM_SEARCH_API =
  'image_type=photo&orientation=horizontal&safesearch=true';

export const FeatchImages = async (nextName, page, per_page) => {
  const responce = await axios.get(
    `${BASE_URL}?key=${KEY}&q=${nextName}&${PARAM_SEARCH_API}&page=${page}&per_page=${per_page}`
  );
  console.log(responce.data);
  return responce.data;
};

// export const FeatchImages = (queryName, page) => {
//   const responce = fetch(`${BASE_URL}?key=${KEY}&q=${queryName}&${PARAM_SEARCH_API}&page=${page}`
//   );
//   console.log(responce.data.);
//   return responce.data;
// };
