import axios from 'axios';

const ACCESS_KEY = "2b41fc64e677aec6b6c06f35372134d2421ed97751c525760e7a6a6e35ec0ce0";

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID ' + ACCESS_KEY
  }
});
