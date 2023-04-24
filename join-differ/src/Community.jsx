import React from "react";
import videobg from '../src/assests/video-1.mp4'
const Community =() => {
    return (
      <div className="App">
        <h1>Welcome Community Page</h1>
        <video src={videobg} autoPlay loop muted></video>
      
      </div>
    );
  };
  
  export default Community;