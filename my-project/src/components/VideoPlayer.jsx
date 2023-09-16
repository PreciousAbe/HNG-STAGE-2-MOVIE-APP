import React, { useState } from "react"

const VideoPlayer = ({ videoUrl, isHeader }) => {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayClick = () => {
    setIsPlaying(true)
  }

  return (
    <div className={`relative ${isHeader ? "header-video" : ""}`}>
      {!isPlaying ? (
        <div onClick={handlePlayClick} style={{ cursor: "pointer" }}>
          <img
            src="/play-button.png" // Replace with a play button image
            alt="Play Video"
          />
        </div>
      ) : null}
      {isPlaying ? (
        <div className="video-container">
          <video controls autoPlay>
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : null}
    </div>
  )
}

export default VideoPlayer

// import React, { useState } from "react"

// const VideoPlayer = ({ videoUrl }) => {
//   const [isPlaying, setIsPlaying] = useState(false)

//   const handlePlayClick = () => {
//     setIsPlaying(true)
//   }

//   return (
//     <div className="relative">
//       {!isPlaying ? (
//         <div onClick={handlePlayClick} style={{ cursor: "pointer" }}>
//           <img
//             src="/play-button.png" // Replace with a play button image
//             alt="Play Video"
//           />
//         </div>
//       ) : null}
//       {isPlaying ? (
//         <div className="video-container">
//           <video controls autoPlay>
//             <source src={videoUrl} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </div>
//       ) : null}
//     </div>
//   )
// }

// export default VideoPlayer

// // src/components/VideoPlayer.js
// import React, { useState } from "react"

// const VideoPlayer = ({ videoUrl }) => {
//   const [isPlaying, setIsPlaying] = useState(false)

//   const handlePlayClick = () => {
//     setIsPlaying(true)
//   }

//   return (
//     <div className="relative">
//       {!isPlaying ? (
//         <div onClick={handlePlayClick} style={{ cursor: "pointer" }}>
//           <img
//             src="/play-button.png" // Replace with a play button image
//             alt="Play Video"
//           />
//         </div>
//       ) : null}
//       {isPlaying ? (
//         <div className="video-container">
//           <video controls autoPlay>
//             <source src={videoUrl} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </div>
//       ) : null}
//     </div>
//   )
// }

// export default VideoPlayer

// import React, { useState } from "react"

// const VideoPlayer = ({ videoUrl }) => {
//   const [isPlaying, setIsPlaying] = useState(false)

//   const handleVideoClick = () => {
//     setIsPlaying(!isPlaying)
//   }

//   return (
//     <div className="video-player" onClick={handleVideoClick}>
//       {isPlaying ? (
//         <video controls autoPlay>
//           <source src={videoUrl} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       ) : (
//         <div className="video-thumbnail">
//           <img
//             src="/path/to/your/video/thumbnail.jpg" // Replace with the actual thumbnail image URL
//             alt="Video Thumbnail"
//           />
//           <div className="play-button">Play</div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default VideoPlayer

// import React from "react"

// const VideoPlayer = ({ videoUrl }) => {
//   return (
//     <div className="video-player">
//       <video className="w-full" controls autoPlay>
//         <source src={videoUrl} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//     </div>
//   )
// }

// export default VideoPlayer

// import React from "react"

// const VideoPlayer = ({ videoUrl }) => {
//   return (
//     <div className="video-player">
//       <video controls autoPlay>
//         <source src={videoUrl} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//     </div>
//   )
// }

// export default VideoPlayer
