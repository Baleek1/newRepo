import React, { useState } from 'react';
import './Home.css';
import Feed from '../../component/Feed/Feed';
import Sidebar from '../../component/sidebar/Sidebar';

const Home = ({ sidebar }) => {
  const [category, setCategory] = useState(0);

  return (
    <> 
      <Sidebar sidebar={sidebar} category={category} setCategory={setCategory} />
      <div className={`container ${!sidebar ? 'large-container' : ''}`}>

      </div>
      <Feed category={category} />
    </>
  );
};
export default Home;