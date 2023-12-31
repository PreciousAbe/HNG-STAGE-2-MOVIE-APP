import React, { useState } from "react"
import { useParams } from "react-router-dom"
import MovieDetails from "../components/MovieDetails"
import VideoPlayer from "../components/VideoPlayer"

const MoviePage = () => {
  const { id } = useParams()
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayClick = () => {
    setIsPlaying(true)
  }

  // Replace these placeholders with your actual movie data
  const movieDetails = {
    id: 1, // Movie ID
    title: "Movie Title",
    overview: "Movie Overview",
    release_date: "2023-09-15",
    vote_average: 8.5,
    production_companies: [{ name: "Company Name" }],
    poster_path: ``,
    videoUrl: `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}`,
  }

  return (
    <div>
      {isPlaying ? (
        <VideoPlayer videoUrl={movieDetails.videoUrl} />
      ) : (
        <div onClick={handlePlayClick} style={{ cursor: "pointer" }}>
          <img
            src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`}
            alt={movieDetails.title}
          />
        </div>
      )}
      <MovieDetails movieDetails={movieDetails} isLoading={false} />
    </div>
  )
}

export default MoviePage

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
