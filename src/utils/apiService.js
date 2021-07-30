import axios from 'axios';

const API_KEY = '9331698-e17fc555dd577ca52fdf34a8b';
const BASE_URL = 'https://pixabay.com/api/';
const ITEMS_PER_PAGE = 12;

const apiService = (searchQuery, pageNumber) => {
  return axios.get(
    `${BASE_URL}?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${pageNumber}&per_page=${ITEMS_PER_PAGE}&key=${API_KEY}`,
  );
};

export default apiService;
