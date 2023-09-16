// import React, { useEffect, useState } from "react"
// import axios from "axios"

// function GenreIds() {
//   const [horrorGenreId, setHorrorGenreId] = useState(null)
//   const [romanceGenreId, setRomanceGenreId] = useState(null)
//   const [comedyGenreId, setComedyGenreId] = useState(null)

//   useEffect(() => {
//     async function fetchGenres() {
//       try {
//         const response = await axios.get(
//           `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`
//         )

//         // Find the genre IDs for Horror, Romance, and Comedy genres
//         const genres = response.data.genres
//         const horrorGenre = genres.find((genre) => genre.name === "Horror")
//         const romanceGenre = genres.find((genre) => genre.name === "Romance")
//         const comedyGenre = genres.find((genre) => genre.name === "Comedy")

//         if (horrorGenre) {
//           setHorrorGenreId(horrorGenre.id)
//         }

//         if (romanceGenre) {
//           setRomanceGenreId(romanceGenre.id)
//         }

//         if (comedyGenre) {
//           setComedyGenreId(comedyGenre.id)
//         }
//       } catch (error) {
//         console.error("Error fetching genres:", error)
//       }
//     }

//     fetchGenres()
//   }, [])

//   return (
//     <div>
//       <p>Horror Genre ID: {horrorGenreId}</p>
//       <p>Romance Genre ID: {romanceGenreId}</p>
//       <p>Comedy Genre ID: {comedyGenreId}</p>
//     </div>
//   )
// }

// export default GenreIds
