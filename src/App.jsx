import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Nav from './component/Navbar/Nav'; 
import Home from './page/Home/Home';  
import Vid from './page/Video/Vid';  
import Play from './component/play/play';
import Reco from './component/Reco/Reco';

const App = () => {
  const [sidebar, setSidebar] = useState(true);

  return ( 
    <BrowserRouter> 
      <div>
        <Nav setSidebar={setSidebar} />
        <Routes>
          {/* Remove the duplicate home route */}
          <Route path="/" element={<Home sidebar={sidebar} />} />
          <Route path="/video/:categoryId/:videoId" element={<Play />} />
          < Route path='/'  element={<Reco/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
