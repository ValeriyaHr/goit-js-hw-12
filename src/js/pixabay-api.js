import axios from 'axios';

const API_KEY = '43833518-f0fd09dc39c385f31bc85252b';
const baseURL = 'https://pixabay.com/api/';

export async function fetchImages(searchQuery, page, perPage) {
  try {
    const response = await axios.get(baseURL, {
      params: {
        key: API_KEY,
        q: searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: page,
        per_page: perPage,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
}