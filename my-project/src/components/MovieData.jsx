import React from "react"
import { useParams } from "react-router-dom"
import MovieDetails from "./MovieDetails"
import movieData from "./MovieData" // Import your movie data

const MoviePage = () => {
  const { id } = useParams()

  // Find the movie data for the selected movie by matching the id
  const selectedMovie = movieData.find((movie) => movie.id === parseInt(id))

  if (!selectedMovie) {
    // Handle the case where the movie with the given id is not found
    return <p>Movie not found</p>
  }

  return (
    <div>
      <MovieDetails movieDetails={selectedMovie} />
    </div>
  )
}

export default MoviePage
