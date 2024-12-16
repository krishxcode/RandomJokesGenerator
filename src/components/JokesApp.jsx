import { useEffect, useState } from "react";
import axios from "axios";
import "./JokesApp.css"; // Import external CSS for styling

function JokesApp() {
  const [jokes, setJokes] = useState([]);
  const [singleJoke, setSingleJoke] = useState(null);

  // Fetch all jokes
  const fetchAllJokes = () => {
    setSingleJoke(null); // Clear single joke
    axios
      .get("/jokes/ten") // Replace with your backend URL for multiple jokes
      .then((response) => {
        setJokes(Array.isArray(response.data) ? response.data : []);
      })
      .catch((error) => {
        console.error("Error fetching jokes:", error);
        setJokes([]);
      });
  };

  // Fetch a random joke
  const fetchRandomJoke = () => {
    setJokes([]); // Clear all jokes
    axios
      .get("/jokes/random") // Fetch random joke from the backend
      .then((response) => {
        setSingleJoke(response.data);
      })
      .catch((error) => {
        console.error("Error fetching random joke:", error);
        setSingleJoke(null);
      });
  };

  // Fetch all jokes on initial load
  useEffect(() => {
    fetchAllJokes();
  }, []);

  return (
    <div className="jokes-container">
      <h1>Random Jokes</h1>

      {/* Button to fetch a random joke */}
      <button className="jokes-button" onClick={fetchRandomJoke}>
        Get Random Joke
      </button>
      {/* Button to fetch all jokes */}
      <button className="jokes-button" onClick={fetchAllJokes}>
        Get All Jokes
      </button>

      {/* Display single joke */}
      {singleJoke && (
        <div className="single-joke">
          <h3>{singleJoke.setup}</h3>
          <p>{singleJoke.punchline}</p>
        </div>
      )}

      {/* Display all jokes */}
      {!singleJoke && (
        <>
          <p>No. Of Jokes: {Array.isArray(jokes) ? jokes.length : 0}</p>
          {Array.isArray(jokes) && jokes.length > 0 ? (
            jokes.map((joke, index) => (
              <div key={joke.id || index} className="joke-card">
                <h3>{joke.setup}</h3>
                <p>{joke.punchline}</p>
              </div>
            ))
          ) : (
            <p>Loading jokes or no jokes available!</p>
          )}
        </>
      )}
    </div>
  );
}

export default JokesApp;
