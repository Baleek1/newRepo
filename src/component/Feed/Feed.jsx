import React, { useEffect, useState } from 'react';
import './feed.css';
import { Link } from 'react-router-dom';
import { API_KEY, value_converter } from '../../data';
import moment from 'moment';

const Feed = ({ category }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const video_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
 
    await fetch(video_url).then(response=>response.json()).then(data=>setData(data.items))
      const result = await response.json();
  };
  
  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <div className="Feed">

      {data.map((item, index) => {
        const { id, snippet, statistics } = item;
        return (
          <Link to={`video/${snippet.categoryId}/${id}`} key={id} className="card">

            <img src={snippet?.thumbnails?.medium?.url || '/fallback_image.png'} alt={snippet.title} />
            <h2>{snippet.title}</h2>
            <h3>{snippet.channelTitle}</h3>

            <p>{value_converter(statistics.viewCount)} views &bull; {moment(snippet.publishedAt).fromNow()}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Feed;
