import axios from "axios"

// Use the environment variable to store your API key
const API_KEY = process.env.REACT_APP_TMDB_API_KEY
const BASE_URL = "https://api.themoviedb.org/3/"

// Function to fetch top-rated movies
export const fetchTopMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}movie/top_rated`, {
      params: {
        api_key: API_KEY,
      },
    })
    return response.data.results
  } catch (error) {
    // Handle errors here
    console.error("Error fetching top movies:", error)
    throw error
  }
}

// Function to fetch movies by a query
export const fetchMoviesByQuery = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}search/movie`, {
      params: {
        api_key: API_KEY,
        query: query,
      },
    })
    return response.data.results
  } catch (error) {
    // Handle errors here
    console.error(`Error fetching movies for query "${query}":`, error)
    throw error
  }
}

// Function to fetch the top 10 movies
export async function fetchTop10Movies() {
  try {
    const response = await axios.get("YOUR_ACTUAL_API_ENDPOINT_URL_HERE") // Replace with your API endpoint
    if (response.status === 200) {
      return response.data
    } else {
      throw new Error("Failed to fetch top 10 movies")
    }
  } catch (error) {
    console.error(error)
    throw error
  }
}

const Api = {
  fetchTopMovies,
  fetchMoviesByQuery,
  fetchTop10Movies,
}
export default Api
