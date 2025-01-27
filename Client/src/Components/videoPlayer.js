// import { useEffect, useRef } from "react";

// const videoPlayer = (props) => {
//   const { width, height } = props;
//   const cloudinaryRef = useRef();
//   const videoRef = useRef();
//   useEffect(() => {
//     if (cloudinaryRef.current) return;
//     cloudinaryRef.current = window.cloudinary;
//     cloudinaryRef.current.videoPlayer(videoRef.current, {
//       cloud_name:
//         "Client/public/White Blue Sustainability Nonprofits & Activism YouTube Video Intro",
//     });
//   }, []);
//   return (
//     <video
//       Ref={videoRef}
//       data-cld-public-id="video/reuse"
//       width={width}
//       height={height}
//       controls
//       {...props}
//     />
//   );
// };

// export default videoPlayer;
