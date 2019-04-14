import React from 'react';

const VideoDetail = ({ video }) => {
  const { videoId } = video.id; // will give linting error - read it and decide for yourself
  // {videoId} = video.id // is example of destructuring
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div id="video-detail">
      {/* <iframe src={url} title="video-detail" />
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div> */}
      <div className="embed-responsive embed-responsive-16by9">
        <iframe title="video detail" className="embed-responsive-item" src={url} />
      </div>
    </div>
  );
};

export default VideoDetail;
