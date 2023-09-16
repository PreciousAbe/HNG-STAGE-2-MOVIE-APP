import React, { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import axios from "axios"
import VideoPlayer from "./VideoPlayer"
import Sidebar from "./Sidebar"

const MovieDetails = () => {
  const { id } = useParams()
  const [movieDetails, setMovieDetails] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [showVideoPlayer, setShowVideoPlayer] = useState(false)
  const [showMovieDetails, setShowMovieDetails] = useState(true)

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`
        )

        setMovieDetails(response.data)
        setIsLoading(false)
      } catch (error) {
        console.error("Error fetching movie details:", error)
        setIsLoading(false)
      }
    }

    if (id) {
      fetchMovieDetails()
    }
  }, [id])

  const handleShowVideo = () => {
    setShowVideoPlayer(true)
    setShowMovieDetails(false)
  }

  const handleShowDetails = () => {
    setShowVideoPlayer(false)
    setShowMovieDetails(true)
  }

  return (
    <div className="lg:flex">
      <div className="lg:flex flex-wrap m-20">
        <div className="lg:w-fit md:w-full p-4 item-center justify-center mb-10 -mt-10 -ml-10">
          {isLoading ? (
            <p data-testid="loading-message">Loading...</p>
          ) : showVideoPlayer ? (
            <VideoPlayer
              videoUrl={movieDetails.videoUrl}
              data-testid="video-player"
            />
          ) : (
            <Link
              to={`/play-video/${id}`}
              className="text-blue-500 hover:underline text-center font-serif font-semibold text-lg"
            >
              Watch Trailer
            </Link>
          )}
        </div>
        <div className="lg:w-fit md:w-full p-4">
          <h1
            className="text-2xl font-bold mb-4 text-center font-serif text-black"
            data-testid="movie-title"
          >
            {movieDetails.title}
          </h1>
          {showMovieDetails && (
            <div>
              <p
                className="mb-2 text-center font-serif font-semibold text-lg text-slate-400"
                data-testid="movie-overview"
              >
                Overview: {movieDetails.overview}
              </p>
              <p
                className="mb-2 text-center font-serif font-semibold text-lg text-slate-400"
                data-testid="release-date"
              >
                Release Date: {movieDetails.release_date}
              </p>
              <p
                className="mb-2 text-center font-serif font-semibold text-lg text-slate-400"
                data-testid="rating"
              >
                Rating: {movieDetails.vote_average}
              </p>
              <p
                className="mb-4 text-center font-serif font-semibold text-lg text-slate-400"
                data-testid="producer"
              >
                Producer: {movieDetails.production_companies?.[0]?.name}
              </p>
            </div>
          )}
        </div>
      </div>
      <Sidebar />
    </div>
  )
}

export default MovieDetails
