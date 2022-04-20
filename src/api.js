import axios from 'axios';

const apiKey = import.meta.env.VITE_APIKEY;

console.log(apiKey);

export default {
  handleScreenshot: async keyword => {
    try {
      const options = {
        method: 'GET',
        url: 'https://website-screenshot6.p.rapidapi.com/screenshot',
        params: {
          url: keyword,
          width: '1920',
          height: '1080',
          fullscreen: 'true',
        },
        headers: {
          'X-RapidAPI-Host': 'website-screenshot6.p.rapidapi.com',
          'X-RapidAPI-Key': apiKey,
        },
      };
      //   const response = await axios.request(options);
      //   return response;

      return options;
    } catch (err) {
      console.log(err);
    }
  },
};
