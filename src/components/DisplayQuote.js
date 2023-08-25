import React, { useState, useEffect } from 'react';
import '../styles/display-quote.css';

const JokeComponent = () => {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const myAPIKey = 'Ixgm2cYnlo7wGSvmiMQCVvfUJ6kVeTvgNZShaXEC';
    const apiURL = 'https://api.api-ninjas.com/v1/dadjokes?limit=1';

    const options = {
      method: 'GET',
      headers: { 'X-Api-Key': myAPIKey },
    };

    const fetchData = async () => {
      try {
        const response = await fetch(apiURL, options);
        const data = await response.json();
        setJoke(data[0].joke);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };

    fetchData(); // Call the function to fetch data when the component mounts
  }, []);
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && (
        <div>
          <p>Error:</p>
          {/* <p>{error}</p> */}
        </div>
      )}
      {joke && (
        <div id="display-joke">
          <h4>Joke of the Day:</h4>
          <p>{joke}</p>
        </div>
      )}
    </div>
  );
};

export default JokeComponent;
