import React, { useEffect, useState } from 'react';
import '../styles/display-quote.css';

const uniqueID = 'Ixgm2cYnlo7wGSvmiMQCVvfUJ6kVeTvgNZShaXEC';

function Quote() {
  const [quoteText, setQuoteText] = useState('');
  const [authorText, setAuthor] = useState('');
  const [categoryText, setCategory] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchQuote = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
          headers: {
            'X-Api-Key': uniqueID,
          },
        });
        if (!response.ok) {
          throw new Error(
            `API request failed with status code ${response.status}.`,
          );
        }
        const data = await response.json();
        setQuoteText(data[0].quote);
        setAuthor(data[0].author);
        setCategory(data[0].category);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchQuote();
  }, []); // Empty dependency array to run only once on initial component mount

  return (
    <div id="display-quote">
      <h4>Quotes of the Day:</h4>
      {isLoading && <p className="loading">Loading Quote...</p>}
      {hasError && <p className="error">Something wrong !</p>}

      {quoteText && (
        <p className="quote">
          &quot;
          {quoteText}
          &quot;
        </p>
      )}
      <hr />
      <br />
      {authorText && (
        <p className="author-category">
          {authorText}
          ,&nbsp;
          {categoryText}
        </p>
      )}
    </div>
  );
}

export default Quote;
