import React, { useState, useEffect } from "react"
import axios from "axios"

function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`
        )

        setMovieDetails(response.data)
        setIsLoading(false)
      } catch (error) {
        console.error("Error fetching movie details:", error)
        setIsLoading(false)
      }
    }

    const movieId = 1 // Replace with the actual movie ID you want to fetch

    if (movieId) {
      fetchMovieDetails()
    }
  }, [])

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <h1>Title: {movieDetails.title}</h1>
      <p>Overview: {movieDetails.overview}</p>
      <p>Release Date: {movieDetails.release_date}</p>
      <p>Vote Average: {movieDetails.vote_average}</p>
      <p>Production Company: {movieDetails.production_companies?.[0]?.name}</p>
      {/* Add other movie details as needed */}
    </div>
  )
}

export default MovieDetails

// import React, { useState } from "react"
// import { useParams } from "react-router-dom"
// import MovieDetails from "../components/MovieDetails"
// import VideoPlayer from "../components/VideoPlayer"

// const MoviePage = () => {
//   const { id } = useParams()
//   const [isPlaying, setIsPlaying] = useState(false)

//   const handlePlayClick = () => {
//     setIsPlaying(true)
//   }

//   // Replace these placeholders with your actual movie data
//   const movieDetails = {
//     id: 1, // Movie ID
//     title: `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}`,
//     overview: "Movie Overview",
//     release_date: "2023-09-15",
//     vote_average: 8.5,
//     production_companies: [{ name: "Company Name" }],
//     poster_path: ``,
//     videoUrl: `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}`,
//   }

//   return (
//     <div>
//       {isPlaying ? (
//         <VideoPlayer videoUrl={movieDetails.videoUrl} />
//       ) : (
//         <div onClick={handlePlayClick} style={{ cursor: "pointer" }}>
//           <img
//             src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`}
//             alt={movieDetails.title}
//           />
//         </div>
//       )}
//       <MovieDetails movieDetails={movieDetails} isLoading={false} />
//     </div>
//   )
// }

// export default MoviePage

// import React, { useState } from "react"
// import { useParams } from "react-router-dom"
// import MovieDetails from "../components/MovieDetails"
// import VideoPlayer from "../components/VideoPlayer"

// const MoviePage = () => {
//   const { id } = useParams()
//   const [isPlaying, setIsPlaying] = useState(false)

//   const handlePlayClick = () => {
//     setIsPlaying(true)
//   }

//   // Replace this with the actual movie data from your API or props
//   const yourMovieDetailsData = {
//     id: 1, // Movie ID
//     title: "Movie Title",
//     overview: "Movie Overview",
//     release_date: "2023-09-15",
//     vote_average: 8.5,
//     production_companies: [{ name: "Company Name" }],
//     poster_path: "/path/to/poster.jpg",
//     videoUrl: "https://your-movie-video-url.com",
//   }

//   return (
//     <div>
//       <MovieDetails movieDetails={yourMovieDetailsData} isLoading={false} />
//       {isPlaying ? (
//         <VideoPlayer videoUrl={yourMovieDetailsData.videoUrl} />
//       ) : (
//         <div onClick={handlePlayClick} style={{ cursor: "pointer" }}>
//           <img
//             src={`https://image.tmdb.org/t/p/w300${yourMovieDetailsData.poster_path}`}
//             alt={yourMovieDetailsData.title}
//           />
//         </div>
//       )}
//     </div>
//   )
// }

// export default MoviePage
