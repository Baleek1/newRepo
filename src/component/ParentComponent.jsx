import React, { useState } from 'react';
import Play from './Play';  // Import the Play component

const ParentComponent = () => {
  // Define the videoId that you want to pass to the Play component
  const [videoId, setVideoId] = useState('dQw4w9WgXcQ');  // You can change this ID as needed

  return (
    <div>
      <h1>Video Player</h1>
      {/* Pass the videoId as a prop to the Play component */}
      <Play videoId={videoId} />

      {/* You can create buttons or inputs to change the videoId dynamically */}
      <button onClick={() => setVideoId('newVideoIdHere')}>Change Video</button>
    </div>
  );
};

export default ParentComponent;
