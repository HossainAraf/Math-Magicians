import React, { useState, useEffect } from 'react';
import '../styles/display-quote.css';

const QuoteComponent = () => {
  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const myAPIKey = 'Ixgm2cYnlo7wGSvmiMQCVvfUJ6kVeTvgNZShaXEC';
    const apiURL = 'https://api.api-ninjas.com/v1/quotes?';

    const options = {
      method: 'GET',
      headers: { 'X-Api-Key': myAPIKey },
    };

    const fetchData = async () => {
      try {
        const response = await fetch(apiURL, options);
        const data = await response.json();
        setQuote(data[0].quote);
        setAuthor(data[0].author);
        // console.log(data[0]);
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
      {quote && (
        <div id="display-quote">
          <h4>Quote:</h4>
          <p>{quote}</p>
          <p id="author">{author}</p>
        </div>
      )}
    </div>
  );
};

export default QuoteComponent;
