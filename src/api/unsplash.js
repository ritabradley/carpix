import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 871337a246070e9b6f5c531028b3599f04d683306d743b897f6a3ad2bc6f9898',
  },
});
