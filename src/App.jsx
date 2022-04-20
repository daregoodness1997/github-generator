import { useState } from 'react';
import './App.css';
import api from './api';
import axios from 'axios';

function App() {
  const [keyword, setKeyword] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const getResponse = async keyword => {
    try {
      const options = await api.handleScreenshot(keyword);

      const response = await axios.request(options);
      setData(response);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(keyword);
  console.log('data:', data);

  const onSubmit = async e => {
    e.preventDefault();
    e.stopPropagation();
    getResponse(keyword);
  };
  return (
    <div className='App'>
      <form onSubmit={e => onSubmit(e)}>
        <input
          placeholder='Enter URL'
          onChange={e => {
            setKeyword(e.target.value);
          }}
        />
        <button type='submit'>Submit</button>
      </form>

      <div>
        {loading ? <h1>Loading...</h1> : <img src={data.data.screenshotUrl} />}
      </div>
    </div>
  );
}

export default App;
