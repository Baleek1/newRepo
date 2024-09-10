import React from 'react';
import './Vid.css'
import { useParams } from 'react-router-dom';
import Reco from '../../component/Reco/Reco';
import Play from '../../component/play/play';

const Vid = () => {
  const { categoryId, videoId } = useParams(); 

  return (
    <div className='play-container'>
      <Play videoId={videoId}/>
     {<Reco />}
    </div>
  );
};

export default Vid;
